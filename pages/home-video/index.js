// pages/home-video/index.js
import { getTopMV } from '../../service/api_video'

Page({
  data: {
    topMVs: [],
    hasMore: true,
  },

  onLoad: async function () {
    this.getTopMVData(0)
  },

  getTopMVData: async function (offset) {
    if (!this.data.hasMore && offset !== 0) return
    const res = await getTopMV(offset)
    let newData = this.data.topMVs
    if (offset === 0) {
      newData = res.data
    } else {
      newData = [...newData, ...res.data]
    }
    this.setData({ topMVs: newData })
    this.setData({ hasMore: res.hasMore })
    if (offset === 0) {
      wx.stopPullDownRefresh()
    }
  },

  onPullDownRefresh: async function () {
    this.getTopMVData(0)
  },

  onReachBottom: async function () {
    this.getTopMVData(this.data.topMVs.length)
  },

  handleVideoClick: function (en) {
    const id = en.currentTarget.dataset.item.id
    wx.navigateTo({
      url: `/pages/detail-video/index?id=${id}`,
    })
  },
})
