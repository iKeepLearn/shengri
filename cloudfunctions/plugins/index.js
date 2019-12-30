// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const log = cloud.logger()

// 云函数入口函数
exports.main = async(event, context) => {
  const wxContext = cloud.getWXContext()
  log.info({
    event
  })
  
  const method = event.method

  if (method === 'unbind') {

    let appid = event.appid

    return  await cloud.openapi.pluginManager.unbindPlugin({
      action: 'unbind',
      pluginAppid: appid
    })

  }


  if (method ==='apply'){
    let {appid,reason} = event
    return await cloud.openapi.pluginManager.applyPlugin({
      action: 'apply',
      reason,
      pluginAppid: appid
    })
  }



  const result = await cloud.openapi.pluginManager.getPluginList({
    action: 'list'
  })

  return {
    result
  }
}