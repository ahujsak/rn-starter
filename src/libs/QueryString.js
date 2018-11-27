// @flow

export const generateQueryString = (params: Object) => {
  let queryString = ''
  if (params) {
    queryString = '?'
    for (const name in params) {
      queryString += name + '=' + params[name] + '&'
    }
    queryString = queryString.substring(0, queryString.length - 1) // remove trailing '&'
  }
  return queryString
}
