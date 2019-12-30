// pages/cloudbase/plugin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pluginApplyState: ["申请中", "申请通过", "已拒绝", "已超时"],
    pluginID: ["wx8c631f7e9f2465e1", "wx069ba97219f66d99"]


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  async getPluginList() {
    let result = await this.callFunciton('plugins')
    let pluginList = result.result.pluginList
    this.setData({
      pluginList
    })
  },

  async unbindPlugin(e) {
    let appid = e.currentTarget.dataset.id
    let data = {
      method: "unbind",
      appid
    }
    let result = await this.callFunciton('plugins', data)
    if (result.errCode === 0) {
      wx.showToast({
        title: '删除成功',
      })
    }
  },

  async applyPlugin(e) {

    console.log(e)
    let {appid ,reason}= e.detail.value
    let data = {
      method: "apply",
      appid,
      reason
    }
    let result = await this.callFunciton('plugins', data)

    console.log(result)
    // if (result.errCode === 0) {
    //   wx.showToast({
    //     title: '删除成功',
    //   })
    // }
  },



  async callFunciton(name, data) {
    let {
      result
    } = await wx.cloud.callFunction({
      name,
      data,
    })

    return result
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

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