import React, { useState, useEffect } from 'react'
import LocationsAPI from '../services/LocationsAPI'
import { Link } from 'react-router-dom';
// import Location from '../components/Location'   
import './Locations.css'


const Locations = () => {

    const [locations, setLocations] = useState([])
    const [venueNames, setVenueNames] = useState({venue1: '', venue2: '', venue3: '', venue4: ''})

    useEffect(() => {
        (async () => {
          try {
            const locationsData = await LocationsAPI.getAllLocations();
            setLocations(locationsData);
    
            setVenueNames({
              venue1: locationsData[0].name,
              venue2: locationsData[1].name,
              venue3: locationsData[2].name,
              venue4: locationsData[3].name,
            });
            setListeners();
          } catch (error) {
            throw error;
          }
        })();
      }, []);

      const setListeners = () => {
        const polygons = document.querySelectorAll('polygon');
    
        polygons.forEach((element) => {
          element.addEventListener('mouseover', (event) => {
            const buttonElement = document.getElementById(`${event.target.id}button`);
            buttonElement.style.opacity = 1;
          });
    
          element.addEventListener('mouseleave', (event) => {
            const buttonElement = document.getElementById(`${event.target.id}button`);
            buttonElement.style.opacity = 0;
          });
        });
      };

    return (
        <div>
            <h4 className="banner">Find Events at the Best Venues in the Tri-State Area</h4>

        <div className="available-locations">
        <div id="venue1button" className="venue1-button-overlay">
          <Link className="link" to="/barclayscenter">
            Barclays Center
          </Link>
        </div>
  
        <div id="venue2button" className="venue2-button-overlay">
          <Link className="link" to="/madisonsquaregarden">
            Madison Square Garden
          </Link>
        </div>
  
        <div id="venue3button" className="venue3-button-overlay">
          <Link className="link" to="/metlifestadium">
            MetLife Stadium
          </Link>
        </div>
  
        <div id="venue4button" className="venue4-button-overlay">
          <Link className="link" to="/citifield">
            Citifield
          </Link>
        </div>
        {/* <div> <Location /></div> */}
      </div>
      </div>
    )
}

export default Locations