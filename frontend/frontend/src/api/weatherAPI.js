const BASE_URL = "http://localhost:8000/"

const getTokenInit = (token) => {
  return {
    headers: {
      'Content-Type': 'application/json',
      "authorization": `JWT ${token}`
    }
  }
}

const tryCatchFetch = async (url, init) => {
  try {
    let response = await fetch(url, init)
    if (response.ok) {
      console.log("status", response.status)
      if (response.status !== 204) { // 204 doesn't have a message body
        let data = await response.json()
        return data
      }else {
        return { "success": true }
      }
    }
  }
  catch (error) {
    console.error(":ERR:", error)
    return null
  }
}

const doLogin = async (credentials) => {
  let url = `${BASE_URL}login/`
  let init = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  }
  return await tryCatchFetch(url, init)
}

const getAddressLists = async (token) => {
  let url = `${BASE_URL}api/address-lists/`
  return await tryCatchFetch(url, getTokenInit(token))
}

const getAddressListById = async (addressListId, token) => {
  let url = `${BASE_URL}api/task-lists/${addressListId}/`
  return await tryCatchFetch(url, getTokenInit(token))
}

const getAddressById = async (addressId, token) => {
  let url = `${BASE_URL}api/addresses/${addressId}/`
  return await tryCatchFetch(url, getTokenInit(token))
}

const createAddressList = async (newAddressListParams, token) => {
  let url = `${BASE_URL}api/address-lists/`
  let init = getTokenInit(token)
  init["method"] = "POST"
  init["body"] = JSON.stringify(newAddressListParams)
  return await tryCatchFetch(url, init)
}

const deleteAddressList = async (addressListId, token) => {
  let url = `${BASE_URL}api/address-lists/${addressListId}/`
  let init = getTokenInit(token)
  init["method"] = "DELETE"
  return await tryCatchFetch(url, init)
}

const createAddress = async (newAddressParams, token) => {
  let url = `${BASE_URL}api/addresses/`
  let init = getTokenInit(token)
  init["method"] = "POST"
  init["body"] = JSON.stringify(newAddressParams)
  return await tryCatchFetch(url, init)
}

const updateAddress = async (addressId, updatedAddressParams, token) => {
  let url = `${BASE_URL}api/addresses/${addressId}/`
  let init = getTokenInit(token)
  init["method"] = "PUT"
  init["body"] = JSON.stringify(updatedAddressParams)
  return await tryCatchFetch(url, init)
}

const deleteAddress = async (addressId, token) => {
  let url = `${BASE_URL}api/addresses/${addressId}/`
  let init = getTokenInit(token)
  init["method"] = "DELETE"
  return await tryCatchFetch(url, init)
}

const myExport = {
  doLogin,
  getAddressLists,
  getAddressListById,
  getAddressById,
  createAddressList,
  deleteAddressList,
  createAddress,
  updateAddress,
  deleteAddress
}

export default myExport;