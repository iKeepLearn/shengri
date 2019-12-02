// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async(event, context) => {
  const wxContext = cloud.getWXContext()
  const content = event.content

  let checked
  try {
    checked = await cloud.openapi.security.msgSecCheck({
      content
    })
  } catch (error) {
    checked = error
  }

  return {
    event,
    checked
  }
}