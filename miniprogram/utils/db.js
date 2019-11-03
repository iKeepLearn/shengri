// async function subscribeMessage(data){
//  return await wx.cloud.callFunction({
//    name:'subscribeMessage',
//    data:data
//  })
// }
const db = wx.cloud.database()

async function subscribeMessage(data) {
 return await db.collection('subscribeMessage').add({
   data
 })
}
module.exports={
  subscribeMessage
}