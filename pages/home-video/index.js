// pages/home-video/index.js
import { getTopMV } from '../../service/api_video'

Page({
  data: {
    topMVs: [],
    hasMore: true,
  },

  onLoad() {
    const topMVdatas = async () => {
      const res = await getTopMV(0, 10)
      this.setData({ topMVs: res.data })
    }
    topMVdatas()
  },

  onReachBottom: async function () {
    if (!this.data.hasMore) return
    const res = await getTopMV(this.data.topMVs.length)
    this.setData({ topMVs: this.data.topMVs.concat(res.data) })
    this.setData({ hasMore: res.hasMore })
  },
})
