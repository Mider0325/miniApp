//index.js
const app = getApp()
const { envList } = require('../../envList.js')

Page({
  data: {
    showUploadTip: false,
    powerList: [{
      title: '购买订单',
      tip: '包含购买的预约产品, 实物商品',
      showItem: false,
    }, {
      title: '预约列表',
      tip: '已预约的订单数据', 
    },
    {
      title: '我的购物车',
      tip: '加购的预约商品 和 实体商品', 
    },
    {
      title: '联系客服',
      tip: '工作时间：9:00 ~ 19:00', 
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
