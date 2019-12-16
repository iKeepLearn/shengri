const db = wx.cloud.database()
const dbutil = require('../../utils/db.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(e) {
    this.setData(e)

  },

  sendSubscribeMessage() {
    wx.cloud.callFunction({
      name: "sendSubscribeMessage"
    }).then(res => {
      console.log(res)
    })
  },


 subscribeMessage() {

    let data = {
      "date": new Date(this.data.date),
      "name": this.data.name,
      "relation": this.data.relation,
      "sended": 0
    }

    wx.requestSubscribeMessage({
      tmplIds: ['CBHxOn84phOip4DWha3paQGLIVaL_wUk0bXmV-zBJgU'],
      success(res) {
        console.log(res)
        if (res['CBHxOn84phOip4DWha3paQGLIVaL_wUk0bXmV-zBJgU'] == 'accept') {
          db.collection("subscribeMessage").add({
            data
          })
        }
      },
      // complete() {
      //   wx.reLaunch({
      //     url: '/pages/index/index',
      //   })
      // }
    })
  },


  back() {
    wx.reLaunch({
      url: '/pages/index/index',
    })
  }
})