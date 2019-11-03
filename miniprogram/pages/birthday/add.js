const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: "2019-10-28"

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

  addAlert(e) {
    let {
      name,
      relation
    } = e.detail.value
    let birthday = this.data.date

    let checked = this.check(name, relation, birthday)

    if (checked) {
      db.collection('birthday').add({
        data: {
          name,
          relation,
          birthday
        }
      }).then(res =>{
        if(res._id){
          wx.showToast({
            title: '添加成功',
          })
          setTimeout(()=>{
            wx.navigateTo({
              url: `/pages/me/subscribeMessage?date=${birthday}&name=${name}&relation=${relation}`,
            })
          },1600)
        }

      })
    }

  },
  selectDate(e) {
    this.setData({
      date: e.detail.value
    })
  },

  check(name, relation, birthday) {
    let checked = true
    if (!name) {
      wx.showToast({
        title: '请输入名字',
        image:'/images/alert.png'
      })
      checked = false
    }

    if (!relation) {
      wx.showToast({
        title: '请输入关系',
        image: '/images/alert.png'
      })
      checked = false
    }

    if (!birthday) {
      wx.showToast({
        title: '请选择生日',
        image: '/images/alert.png'
      })
      checked = false
    }

    return checked

  },
  onShareAppMessage: function() {

  }
})