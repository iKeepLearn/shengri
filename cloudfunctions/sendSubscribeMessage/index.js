// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'nuanxin'
})
const db = cloud.database()
const log = cloud.logger()

const formatTime = date => {
  date = new Date(date)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return [year, month, day].map(formatNumber).join('-')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 云函数入口函数
exports.main = async(event, context) => {
  const wxContext = cloud.getWXContext()
  const _openid = wxContext.OPENID || 'oJaEA5VkDz8VjJ3tV4l9bG6d2PNI'

  const {data} = await db.collection('subscribeMessage').where({_openid}).get()

  log.info({data})


  try {
    const result = await cloud.openapi.subscribeMessage.send(
        {
        touser:_openid,
        page: '/pages/index/index',
        data: {
          name1: {
            value: data[0].name
          },
          date2: {
            value: formatTime(data[0].date)
          },
          thing3: {
            value: `你的${data[0].relation}${data[0].name}今天生日，记得送上祝福`
          }},
        template_id: 'CBHxOn84phOip4DWha3paQGLIVaL_wUk0bXmV-zBJgU'
      }

    )

    return {
      result
    }
  } catch (err) {
    log.error({err})
    return {
      err,
      data
    }
  }
}