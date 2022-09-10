//vercel部署
// const baseUrl = 'http://123.207.32.32:9001'
//本地环境
const baseUrl = 'http://localhost:3000'

class HYRequest {
  request(url, method, params) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: baseUrl + url,
        method: method,
        data: params,
        success(res) {
          resolve(res.data)
        },
        fail(err) {
          reject(err)
        },
      })
    })
  }

  get(url, params) {
    return this.request(url, 'GET', params)
  }

  post(url, data) {
    return this.request(url, 'POST', data)
  }
}

const hyrequest = new HYRequest()

export default hyrequest
