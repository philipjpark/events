import React from 'react'
import { useRoutes, Link } from 'react-router-dom'
import Locations from './pages/Locations'
import LocationEvents from './pages/LocationEvents'
import Events from './pages/Events'
import './App.css'

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Locations />
    },
    {
      path: '/madisonsquaregarden',
      element: <LocationEvents index={1} />
    },
    {
      path: '/barclayscenter',
      element: <LocationEvents index={2} />
    },
    {
      path: '/citifield',
      element: <LocationEvents index={3} />
    },
    {
      path: '/metlifestadium',
      element: <LocationEvents index={4} />
    },
    {
      path: '/events',
      element: <Events />
    }
  ])

  return (
    <div className='app'>

    <header className="header">
      <div className="logo">🚀 A Community Space for Events</div>
      <div className="nav">
      <nav className="customNav">
        <ul>
          <li><a href="/" role="button" className="btn">All Events</a></li>
          {/* <li><a href="/new" role="button" className="btn">Add an Event/a></li> */}
        </ul>
      </nav>
      </div>
    </header>
      <main>
        {element}
      </main>
    </div>
  )
}

export default App