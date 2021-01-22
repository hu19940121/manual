export default {
  pages: [
    'pages/index/index',
    'pages/bookCenter/index',
    'pages/bookCatalogue/index',
    'pages/bookDetail/index',
    'pages/login/index',
    'pages/mine/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    position: 'bottom',
    color: '#cdcdcd',
    selectedColor: '#2c2c2c',
    list: [
      {
        pagePath:'pages/index/index',
        text: '我的手册',
        iconPath:'images/my-shouce-unselected.png',
        selectedIconPath:'images/my-shouce-selected.png'
      },
      {
        pagePath:'pages/bookCenter/index',
        text: '手册中心',
        iconPath:'images/shouce-center-unselected.png',
        selectedIconPath:'images/shouce-center-selected.png'
      },
      {
        pagePath:'pages/mine/index',
        text: '我的账号',
        iconPath:'images/mine-unselected.png',

        selectedIconPath:'images/mine-selected.png'
      }
    ]
  }
}
