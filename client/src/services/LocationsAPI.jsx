

const getAllLocations = async () => {
    const response = await fetch(`api/locations`)
    return await response.json()
}

const getLocationById = async (id) => {
    const response = await fetch(`api/location/${id}`)
    return await response.json()
}

export default { getAllLocations, getLocationById }
