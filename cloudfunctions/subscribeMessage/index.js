// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()

// 云函数入口函数
exports.main = async(event, context) => {
  const wxContext = cloud.getWXContext()
  const _openid = wxContext.OPENID
  const date = new Date(event.date)

  const result = await db.collection('subscribeMessage').add({
    data: {
      _openid,
      date,
      sended: 0
    }
  })

  return {
    event,
    result
  }
}