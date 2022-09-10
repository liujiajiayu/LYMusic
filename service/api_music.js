import hyrequest from './index'

const getBanners = () => {
  return hyrequest.get('/banner', {
    type: 2,
  })
}

export { getBanners }
