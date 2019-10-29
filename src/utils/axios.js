import axios from 'axios'
require('dotenv').config()

function createApiInstance(headers) {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      ...headers,
      'Authorization': `${localStorage.getItem('token')}`,
    }
  })
  return instance
}

function handleResponse(response) {
  if (response.data) {
    return {
      status: response.status,
      data: response.data,
      headers: response.headers
    }
  }
  return { status: response.status, headers: response.headers }
}

function catchError(error) {
  if (error.response) {
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
  put: (path, body = {}, headers = {}) => (
    createApiInstance(headers)
      .request({
        url: path,
        method: 'PUT',
        data: body,
      })
      .then(handleResponse)
      .catch(catchError)
  ),
  delete: (path, body = {}, headers = {}) => (
    createApiInstance(headers)
      .request({
        url: path,
        method: 'DELETE',
        data: body,
      })
      .then(handleResponse)
      .catch(catchError)
  )
}