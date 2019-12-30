var openai = requirePlugin("openai");
App({
  onLaunch: function(e) {


    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'nuanxin',
        traceUser: true,
      })
    }
    openai.init({
      appid: "YRYczaHK52m1HO1izWgV3fGkdZ98rL", //小程序示例账户，仅供学习和参考
      openid: "", //用户的openid，非必填，建议传递该参数
      textToSpeech: false,
      guideCardHeight: 20,
      operateCardHeight: 145,
      success: () => {}, //非必填
      fail: error => {} //非必填
    });
    this.globalData = {}
  }
})