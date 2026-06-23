import React from 'react'
import '../css/Event.css'

const Event = ({ id, title, date, host, skillLevel, image }) => {
    return (
        <article className='event-information'>
            <img src={image} />

            <div className='event-information-overlay'>
                <div className='text'>
                    <h3>{title}</h3>
                    <p><i className="fa-regular fa-calendar fa-bounce"></i> {date?.split('T')[0]}</p>
                    <p>{host} — {skillLevel} level</p>
                </div>
            </div>
        </article>
    )
}

export default Event
