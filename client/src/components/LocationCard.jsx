import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './LocationCard.css'

const LocationCard = (props) => { 
    
    const [location, setLocation] = useState({id: 0, name: "", address: "", city: "", state: "", zip: "", image: ""})

    useEffect(() => {
        setLocation({id: props.id, name: props.name, address: props.address, city: props.city, state: props.state, zip: props.zip, image: props.image});
    }, [props]);

    return (
        <div>
            <article id="article" data-theme="light">
                <h3>{location.name}</h3>
                <img className="img" src={location.image} alt={location.name} width="500" />
                <p>{`Address:  ${location.address} ${location.city}, ${location.state} ${location.zip}`}</p>
                <Link to={`/locations/${location.name.toLowerCase().replace(' ', '')}`}>Events →</Link>
            </article>
        </div>
    )
}

export default LocationCard


