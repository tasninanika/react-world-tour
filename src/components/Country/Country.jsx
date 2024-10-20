import { useState } from 'react';
import './Country.css';
const Country = ({country}) => {
    console.log(country);
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited);
    }

    return (
        <div className='country'>
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={handleVisited}>{visited? 'Visited' : 'Going'}</button>
            {visited && 'I have visited this country.'}
        </div>
    );
};

export default Country;