// pages/order/index.js
// import Toast from '../../miniprogram_npm/@vant/weapp/dist/toast/toast';
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
const miniShopPlugin = requirePlugin('mini-shop-plugin');


Page({

  /**
   * 页面的初始数据
   */
  data: {
      date: "",
      startDate:"",
      endDate: "",
      show: true,
      orderShow: false,
      listShow: false,
      maxDate: 0,
      listName: '兑换已购订单',
      columns: ["订单1", "订单2", "订单3"],
      formatter(day) {
        const month = day.date.getMonth() + 1;
        const date = day.date.getDate();
        if(Math.random() * 10 > 3) {
          day.bottomInfo = '已满';
          day.type = 'disabled';
        } else {
          day.bottomInfo = '可预约';
        }
        return day;
      }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      let today =  new Date();
      let maxDate = (new Date()).setDate(today.getDate() + 60);
      
      this.setData({maxDate: maxDate});
      console.log(miniShopPlugin, 'miniShopPlugin-----');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onConfirm: function() {
    this.setData({
      orderShow: true
    })
    console.log('xxxxx');
  },
  onOrderConfirm: function() {
    Toast.success('恭喜预定成功');
  },
  showPopup: function() {
    this.setData({
      listShow: true,
      orderShow: false,
    })
  },
  onListConfirm: function(item) {
    console.log(item, 'list');
      this.setData({
        listName: item.detail.value,
        listShow: false,
        orderShow: true
      });
  },
  goBuy() {
    // 跳转到商品页
    let productId="47189388";
    wx.navigateTo({
          url: `plugin-private://wx34345ae5855f892d/pages/productDetail/productDetail?productId=${productId}`,
    })
  }
})