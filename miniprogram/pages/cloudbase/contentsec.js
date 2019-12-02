// pages/cloudbase/contentsec.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  checkSec(e) {
    let {
      content
    } = e.detail.value
    console.log(e, content)
    wx.cloud.callFunction({
      name: "checkContentSec",
      data: {
        content
      }
    }).then(res => {
      let {errCode} = res.result.checked
      let checkedResult = "合格"
      if (errCode === 87014){
        checkedResult = "输入信息包含违规内容"
      }

      this.setData({
        checkedResult
      })
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})