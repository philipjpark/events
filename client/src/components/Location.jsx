import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Location = (props) => { 
    
    const [location, setLocation] = useState({id: 0, name: "", address: "", city: "", state: "", zip: "", image: ""})

    useEffect(() => {
        setLocation({id: props.id, name: props.name, address: props.address, city: props.city, zip: props.zip, image: props.image});
    }, [props]);

    return (
        <div className="card">
            <div className='top-container' style={{ backgroundImage:`url(${location.image})`}}></div>
            <div className='bottom-container'>
                <h3>{location.name}</h3>
                <p>{'Address: ' + location.pricepoint}</p>
                <p>{'City: ' + location.audience}</p>
                <p>{'State: ' + location.pricepoint}</p>
                <p>{'Zip: ' + location.pricepoint}</p>
                <Link to={'/gift/' + location.id}><a>Read More →</a></Link>
            </div>
        </div>
    )
}

export default Location