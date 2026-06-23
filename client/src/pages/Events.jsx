import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import EventsAPI from '../services/EventsAPI'
import LocationsAPI from '../services/LocationsAPI'
import '../css/LocationEvents.css'
const Events = () => {
    const [events, setEvents] = useState([])
    const [locations, setLocations] = useState([])
    const [selectedLocation, setSelectedLocation] = useState('all')

    useEffect(() => {
        const fetchData = async () => {
            const allEvents = await EventsAPI.getAllEvents()
            setEvents(allEvents)

            const allLocations = await LocationsAPI.getAllLocations()
            setLocations(allLocations)
        }
        fetchData()
    }, [])

    const filteredEvents = selectedLocation === 'all'
        ? events
        : events.filter(event => event.location_id === parseInt(selectedLocation))

    return (
        <div>
            

            <select value={selectedLocation} onChange={e => setSelectedLocation(e.target.value)} className='select-option'>
                <option value='all'>All Locations</option>
                {locations.map(location => (
                    <option key={location.id} value={location.id}>{location.name}</option>
                ))}
            </select>

            <div className='location-events'>
                <main>
                    {filteredEvents.length > 0
                    ? filteredEvents.map(event => (
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.title}
                            date={event.date}
                            host={event.host}
                            skillLevel={event.skill_level}
                            image={event.imageurl}
                        />
                    ))
                    : <p>No events found.</p>
                }
                </main>

            </div>
        </div>
    )
}

export default Events
