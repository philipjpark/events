import React, { useState, useEffect } from 'react';
import { useRoutes, Link } from 'react-router-dom'
import Locations from './pages/Locations'
import Events from './pages/Events'
import LocationEvents from './components/LocationEvents';
// import PageNotFound from './pages/PageNotFound'
import './App.css'


const App = () => {

  // State to store data for Locations and Events
  const [locations, setLocations] = useState([]);
  const [events, setEvents] = useState([]);


  // Fetch data for Locations
  useEffect(() => {
    const fetchLocations = async () => {
      const response = await fetch('http://localhost:3001/locations')
      const data = await response.json()
      setLocations(data)
    }
    fetchLocations()
  }, []);

  // Fetch data for Events
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:3001/events');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  let element = useRoutes([
    {
      path: '/',
      element: <Locations data={locations} />
    },
    {
      path: '/madisonsquaregarden',
      element: <LocationEvents location="Madison Square Garden" data={events} />
    },
    {
      path: '/barclayscenter',
      element: <LocationEvents location="Barclays Center" data={events} />
    },
    {
    path: '/citifield', 
    element: <LocationEvents location="Citifield" data={events}/>
    },
    {
     path: '/metlifestadium',
     element: <LocationEvents location="Metlife Stadium" data={events}/>
    },
    {
    path: '/events',
    element: <Events data={events} />
    }
  ]);
  
  return (
    <div className='app'>
    <header className="header">
      <div className="logo">🚀 A Community Space for Events</div>
      <nav className="customNav">
        <ul>
        <li><a href="/" role="button" className="btn">Home</a></li>
        <li><a href="/events" role="button" className="btn">All Events</a></li>
          {/* <li><a href="/new" role="button" className="btn">Add an Event/a></li> */}
        </ul>
      </nav>
      {/* </div> */}
    </header>
    <main>
      {element}
    </main>
    </div>
  )
}

export default App
