import hyrequest from './index'

const getTopMV =(offset,limit = 10) => {
  return hyrequest.get("/top/mv",{
    offset,
    limit
  })
}

export { getTopMV }