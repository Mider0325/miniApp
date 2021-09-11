//index.js
const app = getApp()
const { envList } = require('../../envList.js')

Page({
  data: {
    showUploadTip: false,
    powerList: [{
      title: '2021-09-1',
      id: ' 订单号: 20210909001',
    }, {
      title: '2021-09-1',
      id: ' 订单号: 20210909001',
    },{
      title: '2021-09-1',
      id: ' 订单号: 20210909001',
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
  }
})
