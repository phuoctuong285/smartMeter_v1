import appConstant from '../constants/appConstant.js'

export const requestStaff = (isLoading) => {
  return {
  type:appConstant.REQUEST_LOAD_STAFF,
  isLoading:isLoading
  }
}

export const loadStaffSuccess = (data) => {
  return {
    type:appConstant.LOAD_STAFF_SUCCESS,
    data:data
  }
}

export const loadStaffError = (error) => {
  return {
      type:appConstant.LOAD_STAFF_ERROR,
      data:error
  }
}
