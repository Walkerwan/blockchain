export const homepageList = [{
    name: '公司介绍',
    iconUrl: 'introduction.png',
    url: '/project/introduction',
    active: true,
  },
  {
    name: 'ZCBaaS',
    iconUrl: 'ZCBaas.png',
    url: '/project/zcbass',
    listName: [{
        name: 'ZCBaaS',
        iconUrl: 'introduction.png',
        url: '/project/zcbass',
        active: true,
      },
      {
        name: '架构介绍',
        iconUrl: 'architecture-introduction.png',
        url: '/project/zcbass',
        active: false,
      },
      {
        name: '白皮书',
        iconUrl: 'white-book.png',
        url: '/project/cloudchain',
        active: false,
      },
      {
        name: '应用场景',
        iconUrl: 'apply-scene.png',
        url: '/project/origin',
        active: false,
      },
      {
        name: '返回首页',
        init: true,
        iconUrl: 'homepage.png',
        url: '/project/homepage',
        active: false,
      }
    ],
    active: false,
  },
  {
    name: '云链【ZC-OS】',
    iconUrl: 'block-chain.png',
    url: '/project/cloudchain',
    active: false,
  },
  {
    name: '溯源【ZC-SY】',
    iconUrl: 'origin.png',
    url: '/project/origin',
    active: false,
  },
  {
    name: '积分【ZC-IN】',
    iconUrl: 'account.png',
    url: '/project/account',
    active: false,
  }
]
