export default function (seletor) {
  return new Promise(resolve => {
    const query = wx.createSelectorQuery()
    query.select(seletor).boundingClientRect()
    query.exec(res => {
      resolve(res)
    })
  })
}
