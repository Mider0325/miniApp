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
      needType: 'call',
      orderShow: false,
      listShow: false,
      maxDate: 0,
      listName: '选择已购订单',
      columns: ["订单1", "订单2", "订单3"],
      orderType: "",
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
      // let today =  new Date();
      // let maxDate = (new Date()).setDate(today.getDate() + 60);
      
      // this.setData({maxDate: maxDate});
      // console.log(miniShopPlugin, 'miniShopPlugin-----');
      this.data.needType = options.type;
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
    console.log(this.data.orderType , 'orderType----+++');
    if(this.data.orderType === "") {
      Toast.fail('请选择预定方式');
    } else {
      Toast.success('恭喜预定成功');
    }
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
    let type2productId = {
      email: "49610311",
      call: "49470602",
      face: "49470999"
    }
    productId =  type2productId[this.data.needType]
    wx.navigateTo({
          url: `plugin-private://wx34345ae5855f892d/pages/productDetail/productDetail?productId=${productId}`,
    })
  },
  onSelectTime() {
     console.log(arguments, 'arguments---');
    this.setData({
      orderShow: true
    })
  },
  onTypeChange(val) {
    this.setData({
      orderType: val.detail
    })
  }
})