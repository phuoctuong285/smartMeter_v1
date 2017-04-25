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

export const loadReports = (isLoading) => ({
    type:appConstant.LOAD_REPORTS,
    isLoading:isLoading
})
export const loadReportsSuccess = (data) => ({
    type:appConstant.LOAD_REPORTS_SUCCESS,
    data:data
})

export const loadReportsError = (error) => ({
    type:appConstant.LOAD_REPORTS_ERROR,
    data:error
})
