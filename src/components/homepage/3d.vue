<template>
  <div class="3d">
    <div class="show"></div>
    <div class="tip"></div>
  </div>
</template>

<style>
.show {
  width: 1920px;
  height: 1080px;
  /* border: 1px solid #ccc; */
}
.show canvas {
  vertical-align: top;
}

.tip {
  width: 200px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 8px;
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>

<script>
let THREE = require("three");
window.THREE = THREE;
import "three-orbitcontrols";
import { Interaction } from "three.interaction";
THREE.Interaction = Interaction;
let { MeshLine, MeshLineMaterial } = require("three.meshline");

import Shader from "./assets/shader.js";

// let tip = document.querySelector(".tip"); //tip提示框
let width = 1920;
let height = 1080;

let scene, //场景
  camera, //摄像头
  renderer, //渲染器
  controls, //控制器(鼠标移动视角插件)
  ambientLight,
  keyLight, //周围光(底光),点光源(主光)
  axis, //辅助坐标轴
  earth; //背景地球

let ballsAndLine = new THREE.Group();

//animation函数全局变量
let step = 0; //帧函数计数器
let num = 2; //动态线渲染其实层级
let cameraTarget = new THREE.Vector3(0, 0, 0); //camera目标点
let balls = []; //球体数组
let starNames = {}; //球体hover显示的字体Mesh数组
let connectionLines = []; //球体之间线段的Line数组
let tracks = [];

//球体所在点坐标数组
let points = [
  [40, 100, 0],
  [80, 250, 0],
  [150, 140, 0],
  [120, 50, 0],
  [20, 360, 0],
  [160, 420, 0],
  [150, 450, 0],
  [165, 345, 0],
  [235, 435, 0],
  [245, 450, 0],
  [230, 220, 0],
  [250, 300, 0],
  [340, 380, 0],
  [425, 380, 0],
  [500, 445, 0],
  [485, 345, 0],
  [290, 110, 0],
  [350, 190, 0],
  [345, 105, 0],
  [405, 280, 0],
  [520, 335, 0],
  [620, 400, 0],
  [655, 485, 0],
  [660, 290, 0],
  [740, 320, 0],
  [775, 425, 0],
  [830, 305, 0],
  [725, 150, 0],
  [815, 150, 0],
  [470, 160, 0],
  [600, 160, 0],
  [500, 70, 0]
];

//哪些点之间会连成直线
let lines = [
  [0, 1],
  [1, 4],
  [1, 5],
  [5, 6],
  [0, 2],
  [0, 3],
  [2, 7],
  [7, 8],
  [8, 9],
  [2, 10],
  [10, 11],
  [11, 8],
  [11, 12],
  [12, 13],
  [13, 14],
  [13, 15],
  [2, 16],
  [10, 17],
  [17, 18],
  [17, 19],
  [19, 20],
  [20, 21],
  [21, 22],
  [20, 23],
  [23, 24],
  [24, 25],
  [24, 26],
  [23, 27],
  [27, 28],
  [17, 29],
  [29, 30],
  [29, 31],
  [19, 12]
];

//那些线同属渲染
let lineConnectionOrder = [
  [0, 4, 5],
  [1, 2, 6, 9, 16],
  [3, 7, 10, 17],
  [8, 11, 12, 19, 29, 18],
  [13, 32, 20, 30, 31],
  [14, 15, 21, 23],
  [22, 24, 27],
  [25, 26, 28]
];

function start() {
  initScene();
  initCamera();
  initRenderer();
  // initControls();
  initLight();
  // addAxis();
  initInteraction();
  initBackGround();
  addEarth();
  initDate();
  animation();
}
function initScene() {
  scene = new THREE.Scene();
}
function initCamera() {
  camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100000);
  camera.position.set(0, 0, 850);
  camera.lookAt(40, 100, 0);
}
function initRenderer() {
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    premultipliedAlpha: true
  });
  renderer.setClearColor(0x0e1e38);
  renderer.setSize(width, height);
  document.querySelector(".show").appendChild(renderer.domElement);
}
function initControls() {
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  // controls.maxDistance = 1500;
  controls.addEventListener("change", () => {
    renderer.render(scene, camera);
  });
}
function initLight() {
  ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  keyLight = new THREE.SpotLight(0xffffff);
  keyLight.position.set(2000, 2000, 4000);
  keyLight.target.position.set(0, 0, 0);
  scene.add(keyLight);
}
function addAxis() {
  axis = new THREE.AxesHelper(10000);
  scene.add(axis);
}
function initInteraction() {
  new THREE.Interaction(renderer, scene, camera);
}
function initBackGround() {
  /*背景星星*/
  const particles = 20000; //星星数量
  /*buffer做星星*/
  const bufferGeometry = new THREE.BufferGeometry();

  /*32位浮点整形数组*/
  let positions = new Float32Array(particles * 3);
  let colors = new Float32Array(particles * 3);

  let color = new THREE.Color();

  const gap = 2500; // 定义星星的最近出现位置
  for (let i = 0; i < positions.length; i += 3) {
    // positions

    /*-2gap < x < 2gap */
    let x = Math.random() * gap * 2 * (Math.random() < 0.5 ? -1 : 1);
    let y = Math.random() * gap * 2 * (Math.random() < 0.5 ? -1 : 1);
    let z = Math.random() * gap * 2 * (Math.random() < 0.5 ? -1 : 1);

    /*找出x,y,z中绝对值最大的一个数*/
    let biggest =
      Math.abs(x) > Math.abs(y)
        ? Math.abs(x) > Math.abs(z)
          ? "x"
          : "z"
        : Math.abs(y) > Math.abs(z)
        ? "y"
        : "z";

    let pos = { x, y, z };

    /*如果最大值比n要小（因为要在一个距离之外才出现星星）则赋值为n（-n）*/
    if (Math.abs(pos[biggest]) < gap)
      pos[biggest] = pos[biggest] < 0 ? -gap : gap;

    x = pos["x"];
    y = pos["y"];
    z = pos["z"];

    positions[i] = x;
    positions[i + 1] = y;
    positions[i + 2] = z;

    // colors
  }
  // colors
  for (let i = 0; i < colors.length; i += 3) {
    /*70%星星有颜色*/
    let hasColor = Math.random() > 0.3;
    let vx, vy, vz;

    if (hasColor) {
      vx = (Math.random() + 1) / 2;
      vy = (Math.random() + 1) / 2;
      vz = (Math.random() + 1) / 2;
    } else {
      vx = 1;
      vy = 1;
      vz = 1;
    }

    color.setRGB(vx, vy, vz);

    colors[i] = color.r;
    colors[i + 1] = color.g;
    colors[i + 2] = color.b;
  }

  bufferGeometry.addAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3)
  );
  bufferGeometry.addAttribute("color", new THREE.BufferAttribute(colors, 3));
  bufferGeometry.computeBoundingSphere();

  /*星星的material*/
  let material = new THREE.PointsMaterial({
    size: 15,
    vertexColors: THREE.VertexColors
  });
  let particleSystem = new THREE.Points(bufferGeometry, material);
  scene.add(particleSystem);
}
function addEarth() {
  let geometry = new THREE.SphereGeometry(800, 100, 100);
  let material = new THREE.MeshLambertMaterial();
  let loader = new THREE.TextureLoader();
  let a = require("./assets/earth2.jpg");

  loader.load(require("./assets/earth2.jpg"), map => {
    let material = new THREE.MeshLambertMaterial({ map });
    earth = new THREE.Mesh(geometry, material);
    earth.position.set(2900, 1700, -2000);
    // axis = new THREE.AxesHelper(10000);
    // earth.add(axis);

    let glow = new THREE.Mesh(
      geometry.clone().scale(1.1, 1.1, 1.1),
      new THREE.ShaderMaterial({
        transparent: true,
        uniforms: {
          coeficient: {
            type: "f",
            value: 0.0
          },
          power: {
            type: "f",
            value: 2
          },
          glowColor: {
            type: "c",
            value: new THREE.Color(0x0079c2)
          }
        },
        vertexShader: Shader.erath.vertexShader,
        fragmentShader: Shader.erath.fragmentShader
      })
    );
    earth.name = "earth";
    // earth.matrixWorldNeedsUpdate = true;
    earth.add(glow);

    let track1 = new Track({
      position: new THREE.Vector3(900, 0, 0),
      direction: new THREE.Vector3(0, 0, 1),
      speed: 0.04
    });
    tracks.push(track1);
    earth.add(track1.group);

    let track2 = new Track({
      position: new THREE.Vector3(0, 900, 0),
      direction: new THREE.Vector3(1, 0, 0),
      speed: 0.04
    });
    tracks.push(track2);
    earth.add(track2.group);

    let track3 = new Track({
      position: new THREE.Vector3(636, 636, 0),
      direction: new THREE.Vector3(-1, 1, 0).normalize(),
      speed: 0.04
    });
    tracks.push(track3);
    earth.add(track3.group);

    let track4 = new Track({
      position: new THREE.Vector3(520, 520, 520),
      direction: new THREE.Vector3(-1, 1, 0).normalize(),
      speed: 0.04
    });
    tracks.push(track4);
    earth.add(track4.group);

    let track5 = new Track({
      position: new THREE.Vector3(520, 520, 520),
      direction: new THREE.Vector3(0, 1, -1).normalize(),
      speed: 0.04
    });
    tracks.push(track5);
    earth.add(track5.group);

    let track6 = new Track({
      position: new THREE.Vector3(520, 520, 520),
      direction: new THREE.Vector3(-1, 0, 1).normalize(),
      speed: 0.04
    });
    tracks.push(track6);
    earth.add(track6.group);

    let track7 = new Track({
      position: new THREE.Vector3(520, 520, 520),
      direction: new THREE.Vector3(1, 0, 0).normalize(),
      speed: 0.04
    });
    tracks.push(track7);
    earth.add(track7.group);

    scene.add(earth);
  });
}
function initDate() {
  ballsAndLine.position.set(-200, -150, 0);
  scene.add(ballsAndLine);
  points.forEach(point => {
    point[2] = Math.random() * 100;
  });
  let showBallDefault = [0, 1, 2, 3, 4, 5, 7, 10, 16];
  for (let i = 0; i < points.length; i++) {
    let point = points[i];
    let ball = new THREE.Mesh(
      new THREE.SphereGeometry(15, 50, 50),
      new THREE.ShaderMaterial({
        uniforms: {
          colorInside: {
            value: new THREE.Color(0x0767ab)
          },
          colorOuter: {
            value: new THREE.Color(0x0767ab)
          }
        },
        vertexShader: Shader.ball.vertexShader,
        fragmentShader: Shader.ball.fragmentShader,
        transparent: true
      })
    );
    ball.position.set(point[0], point[1], point[2]);
    ball.name = "ball-" + i;
    balls.push(ball);
    //给ball添加交互事件
    ball.on("mouseover", ev => {
      let target = ev && ev.data.target;
      console.log(target.name);
      target.scale.set(1.5, 1.5, 1.5);

      let mouse = ev.data.originalEvent;
      Window.sky.tip.style.display = "block";
      Window.sky.tip.style.left = mouse.clientX + "px";
      Window.sky.tip.style.top = mouse.clientY + "px";
      Window.sky.tip.innerHTML = `<div style='color:#ffffff;padding: 5px;'>Name is :${
        ball.name
      }</div>>`;
    });
    ball.on("mouseout", ev => {
      let target = ev && ev.data.target;
      target.scale.set(1, 1, 1);
      Window.sky.tip.style.display = "none";
    });
    if (showBallDefault.includes(i)) {
      ballsAndLine.add(ball);
    }
  }

  let showLineDefault = [0, 1, 2, 4, 5, 6, 9, 16];
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    let staryPoint = balls[line[0]].position;
    let endPoint = balls[line[1]].position;
    let lineGeometry = new THREE.Geometry();
    lineGeometry.vertices = [
      staryPoint,
      showLineDefault.includes(i) ? endPoint : staryPoint
    ];
    lineGeometry.verticesCopy = [staryPoint.clone(), endPoint.clone()];
    lineGeometry.verticesNeedUpdate = true;
    let connectionLine = new THREE.Line(
      lineGeometry,
      new THREE.LineBasicMaterial({ color: 0x1ebacc })
    );
    connectionLine.name = "line-" + line[0] + "-" + line[1];
    connectionLines.push(connectionLine);
    ballsAndLine.add(connectionLine);
  }
}

function animation() {
  step++;
  requestAnimationFrame(animation);
  // controls.update();
  renderer.render(scene, camera);
  update();
}
function update() {
  //线动
  let count = 1500;
  let lines = lineConnectionOrder[num];
  if (lines) {
    if (step < count + 1) {
      lines.forEach(line => {
        connectionLine(connectionLines[line], step / count);
      });
    } else {
      step = 0;
      num++;
    }
  }

  //背景地球动
  earth && earth.rotateOnAxis(new THREE.Vector3(0, 1, 0), 0.001);

  tracks.forEach(track => {
    track.group.rotateOnAxis(track.direction, track.speed);
    let nodePosition = track.cube.position.clone();
    let nodeWorldPosition = nodePosition.applyMatrix4(track.group.matrix);
    track.g.advance(nodeWorldPosition);
  });
}
function connectionLine(connectionLine, step) {
  if (!connectionLine) {
    return;
  }
  let startPoint = connectionLine.geometry.verticesCopy[0];
  let endPoint = connectionLine.geometry.verticesCopy[1];
  let x, y, z;
  x = startPoint.x + (endPoint.x - startPoint.x) * step;
  y = startPoint.y + (endPoint.y - startPoint.y) * step;
  z = startPoint.z + (endPoint.z - startPoint.z) * step;
  connectionLine.geometry.vertices[1] = new THREE.Vector3(x, y, z);
  connectionLine.geometry.verticesNeedUpdate = true;
  if (step === 1) {
    ballsAndLine.remove(balls[connectionLine.name.split("-")[2]]);
    ballsAndLine.add(balls[connectionLine.name.split("-")[2]]);
  }

  // cameraTarget.add(new THREE.Vector3(0.1, 0.01, 0.03));
  // camera.lookAt(cameraTarget);
  // camera.position.add(new THREE.Vector3(0.1, 0.01, 0.03));
  ballsAndLine.position.add(new THREE.Vector3(-0.01, -0.001, -0.003));
}
function Track({ position, direction, speed }) {
  this.direction = direction;
  this.speed = speed;
  this.group = new THREE.Group();
  // this.group.matrixWorldNeedsUpdate = true;
  // let position  = position;
  let startColor = 0x1c5776;
  startColor = 0xfff6c2;
  let segmentsCount = 50;
  let lineGeometry = new THREE.Geometry();
  for (let i = 0; i < segmentsCount; i++) {
    lineGeometry.vertices.push(
      new THREE.Vector3(position.x, position.y, position.z)
    );
  }
  this.g = new MeshLine();
  this.g.setGeometry(lineGeometry, p => p);
  // this.g.setGeometry(lineGeometry);
  this.line = new THREE.Mesh(
    this.g.geometry,
    new MeshLineMaterial({
      color: new THREE.Color(startColor),
      lineWidth: 5
    })
  );
  earth.add(this.line);

  this.cube = new THREE.Mesh(
    new THREE.SphereGeometry(10, 50, 50),
    new THREE.MeshPhongMaterial({ color: startColor })
  );
  this.cube.position.copy(position);
  this.cube.visible = false;
  this.group.add(this.cube);
}

export default {
  mounted() {
    Window.sky = {};
    Window.sky.tip = document.querySelector(".tip"); //tip提示框
    start();
  }
};
</script>


