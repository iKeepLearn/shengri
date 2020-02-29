
const db = wx.cloud.database()

async function subscribeMessage(data) {
 return await db.collection('subscribeMessage').add({
   data
 })
}
module.exports={
  subscribeMessage
}