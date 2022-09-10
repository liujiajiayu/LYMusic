// pages/detail-video/index.js
import { getMVURL, getMVDetail, getRelatedVideo } from '../../service/api_video'

Page({
  data: {
    mvURLInfo: {},
    mvDetail: {},
    relatedVideos: [],
  },

  onLoad(options) {
    const id = options.id
    this.getPageData(id)
  },

  getPageData(id) {
    getMVURL(id).then(res => {
      this.setData({ mvURLInfo: res.data })
    })

    getMVDetail(id).then(res => {
      this.setData({ mvDetail: res.data })
    })

    getRelatedVideo(id).then(res => {
      console.log(res.data)
      this.setData({ relatedVideos: res.data })
    })
  },
})
