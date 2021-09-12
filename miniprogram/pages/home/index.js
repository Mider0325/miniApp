//index.js
const app = getApp()
const { envList } = require('../../envList.js')

Page({
  data: {
    showUploadTip: false,
    // socail:[],
    socail: [{
      imgSrc: '/images/weixin-logo.png',
      id: '梓轩心理咨询'
    }, {
      imgSrc: '/images/titok-logo.png',
      id: '梓轩心理咨询'
    }, {
      imgSrc: '/images/red-logo.png',
      id: '梓轩心理咨询'
    }],
    orderTypes: [{
      type: 'call',
      imgSrc: '/images/call.png',
      buttonText: '视频/语音咨询'
    },
    {
      type: 'face',
      imgSrc: '/images/face.png',
      buttonText: '面对面咨询'
    },
    {
      type: 'email',
      imgSrc: '/images/email.png',
      buttonText: '邮件咨询'
    }],
  },
  
  onClickPowerInfo(e) {
    const index = e.currentTarget.dataset.index
    if(index === 0) {
      this.toOrder();
    } else if(index === 2) {
      this.toShop();
    }
  },
  
  toOrder() {
    // 跳转到商品页
    wx.navigateTo({
      url:'plugin-private://wx34345ae5855f892d/pages/orderList/orderList',
    })
  },
  toShop() {
    // 跳转到商品页
    wx.navigateTo({
      url:'plugin-private://wx34345ae5855f892d/pages/shoppingCart/shoppingCart',
    })
  },
  onToOrder(event) {
    console.log(event, 'event----');
    let type =  event.currentTarget.dataset.type || 'call'
    wx.navigateTo({
      url: '/pages/order/index?type=' + type,
    })
  }
})
