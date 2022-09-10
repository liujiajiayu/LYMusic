import hyrequest from './index'

const getTopMV = (offset, limit = 10) => {
  return hyrequest.get('/top/mv', {
    offset,
    limit,
  })
}

//mv 视频链接
const getMVURL = id => {
  return hyrequest.get('/mv/url', {
    id,
  })
}

//mv数据
const getMVDetail = mvid => {
  return hyrequest.get('/mv/detail', {
    mvid,
  })
}

//mv相关视频数据
const getRelatedVideo = id => {
  return hyrequest.get('/related/allvideo', {
    id,
  })
}

export { getTopMV, getMVURL, getMVDetail, getRelatedVideo }
