import axios from 'axios'

function createApiInstance(headers) {
  return axios.create({
    baseURL: 'http://localhost:3000/api/',
    headers
  })
}

function handleResponse(response) {
  if(response.data) {
    return {
      status: response.status,
      data: response.data,
      headers: response.headers
    }
  }
  return { status: response.status, headers: response.headers }
}

function catchError(error) {
  if(error.response) {
    return {
      status: error.response.status,
      data: error.response.data,
      headers: error.response.headers
    }
  } else if (error.request) {
    throw new Error(error.request)
  } else {
    throw new Error(error.message)
  }
}

export default {
  get: (path, headers = {}) => (
    createApiInstance(headers)
      .get(path)
      .then(handleResponse)
      .catch(catchError)
  ),
  post: (path, body = {}, headers = {}) => (
    createApiInstance(headers)
      .request({
        url: path,
        method: 'POST',
        headers,
        data: body
      })
      .then(handleResponse)
      .catch(catchError)
  ),
  put: (path, body = {}) => (
    createApiInstance()
      .request({
        url: path,
        method: 'PUT',
        data: body,
      })
      .then(handleResponse)
      .catch(catchError)
  ),
  delete: (path, body = {}) => (
    createApiInstance()
      .request({
        url: path,
        method: 'DELETE',
        data: body,
      })
      .then(handleResponse)
      .catch(catchError)
  )
}