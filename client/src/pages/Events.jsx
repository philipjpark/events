import React, {useState, useEffect} from 'react';
// import { useParams } from 'react-router-dom'
import EventCard from "../components/EventCard"

const Events = (props) => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        setEvents(props.data)
    }, [props])
    
    return (
        <div className="Events">
            <main>
            {
                events && events.length > 0 ?
                events.map((event, index) => 
                    
                   <EventCard
                         key={event.id} 
                         id={event.id} 
                         image={event.image} 
                         location={event.location}
                         title={event.title} 
                         date={event.date} 
                         time={event.time}  />
                ) : <h3 className="noResults">{'No Events Yet 😞'}</h3>
            }
            </main>
        </div>  
    )
}

export default Events
