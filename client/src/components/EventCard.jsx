import React, { useState, useEffect } from 'react'
// import './EventCard.css'

const EventCard = (props) => { 
    
    const [event, setEvent] = useState({id: 0, location:"", title:"", date:"", time:"", image: ""})

    useEffect(() => {
        setEvent({id: props.id, location: props.location, title: props.title, date: props.date, time: props.time, image: props.image});
    }, [props]);

    return (
        <div>
            <article id="article" data-theme="light">
                <h4>{event.location}</h4>
                <h5>{event.title}</h5>
                <img className="img" src={event.image} alt={event.title} width="450" />
                <p>{`Date:  ${event.date}`}</p>
                <p>{`Time:  ${event.time}`}</p>
            </article>
        </div>
    )
}

export default EventCard


