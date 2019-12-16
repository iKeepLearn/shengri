var openai = requirePlugin("openai");
App({
  onLaunch: function(e) {
    console.log("app",e)

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
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