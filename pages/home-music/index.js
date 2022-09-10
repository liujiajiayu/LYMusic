// pages/home-music/index.js
import { getBanners } from '../../service/api_music'
import queryRect from '../../untils/selector-rect'

Page({
  data: {
    banners: [],
    swiperHeight: 0,
  },

  onLoad(options) {
    this.getPageData()
  },

  getPageData() {
    getBanners().then(res => {
      console.log(res)
      this.setData({ banners: res.banners })
    })
  },

  handleSwiper() {
    //动态获取轮播高度
    queryRect('.swiper-image').then(res => {
      const rect = res[0]
      this.setData({ swiperHeight: rect.height })
    })
  },

  handleSearcClick() {
    wx.navigateTo({
      url: '../detail-search/index',
    })
  },
})
