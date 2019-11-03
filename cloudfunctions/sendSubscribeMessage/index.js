// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:'nuanxin'
})
db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const _openid = wxContext.OPENID ||'oJaEA5VkDz8VjJ3tV4l9bG6d2PNI'

  const dbResult = await db.collection('subscribeMessage').where({_openid}).get()
  const {data} =dbResult

  try {
    const result = await cloud.openapi.subscribeMessage.send(
    //   {
    //   touser:_openid,
    //   page: '/pages/index/index',
    //   data: {
    //     name1: {
    //       value: data.name
    //     },
    //     date2: {
    //       value: data.date
    //     },
    //     thing3: {
    //       value: `你的${data.relation}${data.name}今天生日，记得送上祝福`
    //     }},
    //   template_id: 'CBHxOn84phOip4DWha3paQGLIVaL_wUk0bXmV-zBJgU'
    // }

      {
        "touser": _openid,
        "template_id": "CBHxOn84phOip4DWha3paQGLIVaL_wUk0bXmV-zBJgU",
        "page": "/pages/index/index",
        "data": {
          "name1": {
            "value": "李浩"
          },
          "date2": {
            "value": "2018-11-11"
          },
          "thing3": {
            "value": "你的好友李浩今天生日，记得送上祝福"
          }
        }
      }
    )
    console.log(result)
    return {result, data}
  } catch (err) {
    console.log(err)
    return {err,data}
  }
}