import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import '../css/LocationEvents.css'
import LocationsAPI from '../services/LocationsAPI.jsx'
import EventsAPI from '../services/EventsAPI.jsx'

const LocationEvents = ({index}) => {
    const [location, setLocation] = useState([])
    const [events, setEvents] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            const locationData = await LocationsAPI.getLocationById(index)
            setLocation(locationData[0])

        
            const allEvents = await EventsAPI.getAllEvents()
            const locationEvents = allEvents.filter(event => event.location_id ===index)
            setEvents(locationEvents)
            
        }
        fetchData()
    },[index])

    

    return (
        <div className='location-events'>
            <header>
                <div className='location-info'>
                    <h2>{location.name}</h2>
                    <p>{location.neighborhood}</p>
                    <p>{location.description}</p>
                </div>
            </header>

            <main>
                {
                    events && events.length > 0 ? events.map((event, index) =>
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.title}
                            date={event.date}
                            host={event.host}
                            skillLevel={event.skill_level}
                            image={event.imageurl}
                        />
                    ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
                }
            </main>
        </div>
    )
}

export default LocationEvents