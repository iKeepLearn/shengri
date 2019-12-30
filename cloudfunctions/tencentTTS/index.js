// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const tencentcloud = require("tencentcloud-sdk-nodejs");


const TtsClient = tencentcloud.tts.v20190823.Client;
const models = tencentcloud.tts.v20190823.Models;

const Credential = tencentcloud.common.Credential;
const ClientProfile = tencentcloud.common.ClientProfile;
const HttpProfile = tencentcloud.common.HttpProfile;

let cred = new Credential("AKIDMXUCi1B4jBQinxglNkwuSWecQ1M4Fu", "PVP3ZteBnCRSEo9E64pJZZOyIOYVDh");
let httpProfile = new HttpProfile();
httpProfile.endpoint = "tts.tencentcloudapi.com";
let clientProfile = new ClientProfile();
clientProfile.httpProfile = httpProfile;
let client = new TtsClient(cred, "", clientProfile);

let req = new models.TextToVoiceRequest();

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  let params = '{"Text":"你好","SessionId":" jjjjiiiiiioooooo99999","ModelType":1}'
  req.from_json_string(params);


  client.TextToVoice(req, function (errMsg, response) {

    if (errMsg) {
      console.log(errMsg);
      return;
    }

    console.log(response.to_json_string());
  });

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}