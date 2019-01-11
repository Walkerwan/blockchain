export default {
    erath: {
        vertexShader: `
            varying vec3	vVertexWorldPosition;
            varying vec3	vVertexNormal;
            varying vec4	vFragColor;
            void main(){
                vVertexNormal	= normalize(normalMatrix * normal);
                vVertexWorldPosition	= (modelMatrix * vec4(position, 1.0)).xyz;
                gl_Position	= projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform vec3	glowColor;
            uniform float	coeficient;
            uniform float	power;
            varying vec3	vVertexNormal;
            varying vec3	vVertexWorldPosition;
            varying vec4	vFragColor;
            void main(){
                vec3 worldVertexToCamera= cameraPosition - vVertexWorldPosition;
                vec3 viewCameraToVertex	= (viewMatrix * vec4(worldVertexToCamera, 0.0)).xyz;
                viewCameraToVertex	= normalize(viewCameraToVertex);
                float intensity		= coeficient + dot(vVertexNormal, viewCameraToVertex);
                if(intensity > 0.45){ intensity = 0.0;}
                gl_FragColor		= vec4(glowColor, intensity);
            }
        `
    },
    ball: {
        vertexShader: `
            varying vec3 vNormal;
            varying vec3 vVertexWorldPosition;
            void main(){
                vNormal = normalize(normalMatrix * normal);//法向量从世界坐标转换到视图坐标并归一化通过varying从定点着色器传入片元着色器
                vVertexWorldPosition = (modelMatrix * vec4(position,0.0)).xyz;//将定点模型坐标系坐标转换成世界坐标系
                gl_Position	= projectionMatrix * modelViewMatrix * vec4(position, 1.0);//模型坐标系坐标position通过矩阵转换为视口坐标系坐标
            }
        `,
        fragmentShader: `
            uniform vec3 colorInside;
            uniform vec3 colorOuter;
            varying vec3 vNormal;
            varying vec3 vVertexWorldPosition;
            void main(){
                vec3 worldVertexToCamera = cameraPosition - vVertexWorldPosition;//获取顶点到相机的矢量的世界坐标
                vec3 viewVertexToCamera = (viewMatrix * vec4(worldVertexToCamera,0.0)).xyz;//世界坐标转换为视图坐标系坐标
                viewVertexToCamera = normalize(viewVertexToCamera);//向量归一化
                float intensity = pow(dot(vNormal,viewVertexToCamera),2.0);//点乘2个长度为1的矢量 计算夹角的cos值   a·b = |a||b|cosθ
                //float intensity = dot(vNormal,viewVertexToCamera);//点乘2个长度为1的矢量 计算夹角的cos值   a·b = |a||b|cosθ
                float threshold = 0.6;
                if(intensity>threshold){
                    vec3 colorMax = vec3(1.0,1.0,1.0);
                    vec3 color = colorInside + (colorMax - colorInside)/(1.0 - threshold)*(intensity - threshold);
                    gl_FragColor = vec4(color, intensity/(1.0 - threshold));//赋值颜色
                }
                else{
                    gl_FragColor = vec4(colorOuter, intensity);//赋值颜色
                }
            }
        `,
    }
}