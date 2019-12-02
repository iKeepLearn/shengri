// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async(event, context) => {
  const wxContext = cloud.getWXContext()
  const url = event.url
  const ssl = require('get-ssl-certificate')

  const result = await ssl.get(url)
  let {
    valid_from,
    valid_to
  } = result

  return {
    event,
    valid_from,
    valid_to
  }
}