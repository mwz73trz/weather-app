const BASE_URL = 'http://localhost:8000/weather-app'

const fetchAddresses = async (filters = null) => {
  const url = filters ? `${BASE_URL}?filter={"where":${filters}}` : BASE_URL
  const response = await fetch(url)
  const data = await response.json()
  return data
}

const fetchAddressById = async (addressId) => {
  const response = await fetch(`${BASE_URL}/${addressId}`)
  const data = await response.json()
  return data
}

export {
  fetchAddresses,
  fetchAddressById,
}