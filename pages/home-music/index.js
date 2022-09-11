// pages/home-music/index.js
import { getBanners } from '../../service/api_music'
import queryRect from '../../untils/selector-rect'
import throttle from '../../untils/throttle'

const throttleQueryRect = throttle(queryRect, 1000)

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
      this.setData({ banners: res.banners })
    })
  },

  handleSwiper() {
    //动态获取轮播高度
    //节流
    throttleQueryRect('.swiper-image').then(res => {
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
