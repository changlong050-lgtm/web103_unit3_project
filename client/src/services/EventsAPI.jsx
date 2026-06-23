const getAllEvents = async()=>{
    const response = await fetch('api/events')
    return await response.json()
}

const getEventById = async(id)=>{
    const response = await fetch(`api/events/${id}`)
    return await response.json()
}

export default {getAllEvents, getEventById}