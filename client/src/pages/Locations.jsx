import React, { useState, useEffect } from 'react'
import LocationCard from '../components/LocationCard'

const Locations = (props) => {

    const [locations, setLocations] = useState([])

    useEffect(() => {
        setLocations(props.data)
    }, [props])
    
    return (
        <div className="Locations">
          {/* <h5 className="banner">Find Events at the Best Venues in the Tri-State Area</h5> */}
            <main>
            {
                locations && locations.length > 0 ?
                locations.map((location, index) => 
                    
                   <LocationCard 
                         key={location.id} 
                         id={location.id} 
                         image={location.image} 
                         name={location.name} 
                         address={location.address} 
                         city={location.city} 
                         state={location.state}
                         zip={location.zip} />
                ) : <h3 className="noResults">{'No Locations Yet 😞'}</h3>
            }
            </main>
        </div>  
    )
}

export default Locations
