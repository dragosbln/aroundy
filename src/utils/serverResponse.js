import types from './responseTypes'

/**
 * creates a succesfull response object
 */
const success = (data) => ({
    type: types.SUCCESS,
    data
  })
  
  /**
   * creates a failure response object
   */
  const unauthorized = () => ({
    type: types.UNAUTHORIZED
  })
  
  const timeout = () => ({
    type: types.TIMEOUT
  })
  
  const nonexistent = () => ({
    type: types.NONEXISTENT
  })

  export default {
    success,
    unauthorized,
    timeout,
    nonexistent
  };
  