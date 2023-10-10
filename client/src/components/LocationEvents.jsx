import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const LocationEvents = ({ data }) => {
    const { locationName } = useParams(); // Get the location name from the URL

    // Filter events based on the selected locationName
    const locationEvents = data.filter(event => event.location === locationName);
    // console.log('data prop:', data);
    // console.log('locationName:', locationName);
    // console.log(events)

    useEffect(() => {
      // Construct the URL for fetching events by location
      const apiUrl = `http://localhost:3001/events/location/${encodeURIComponent(locationName)}`;
    
  
      // Fetch data from the server using the constructed URL
      fetch(apiUrl)
        .then((response) => response.json())
        .then((eventsData) => {
          // Handle the fetched data (eventsData) as needed
          console.log(eventsData);
        })
        .catch((error) => {
          console.error('Error fetching events:', error);
        });
    }, [locationName]);

    return (
        <div>
            <h2>Events at {locationName}</h2>
            <ul>
                {locationEvents.map(event => (
                    <li key={event.id}>
                        <h3>{event.title}</h3>
                        <p>Date: {event.date}</p>
                        <p>Time: {event.time}</p>
                        <img src={event.image} alt={event.title} 
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LocationEvents;

