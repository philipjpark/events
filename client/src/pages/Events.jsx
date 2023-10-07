import { useState, useEffect } from 'react'
import Event from '../components/Event'
import EventsAPI from '../services/EventsAPI'

const Events = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const data = await EventsAPI.getAllEvents()
                setEvents(data)
            } catch (error) {
                throw error
            }
        }) ()
    }, [])

    return (
        <main>
            {
                events && events.length > 0 ? events.map((game) => 
                    <Event key={event.id} event={event} />
                ) : <h3>{'No Event Found 😔'}</h3>
            }
        </main>
    )
}

export default Events