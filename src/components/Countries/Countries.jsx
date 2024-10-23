import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = () =>{
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCoountries] = useState([]);
    const [visitedFlags, setVisistedFlags] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    },[])
    
    const handleVisitedCountry = country =>{
        console.log('add this to your visited country');
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCoountries(newVisitedCountries);
    }

    const handleVisitedFlags = flag =>{
        const newVisitedFlags = [...visitedFlags, flag];
        setVisistedFlags(newVisitedFlags);
    }

    //remove item from an array in a state
    // use filter to select all the elements except the one we want to remove

    


    return(
        <div>
            <h3>countries: {countries.length}</h3>
            {/* visited countries */}
            <div>
                <h5>Visited countries: {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flag-container">
                {
                    visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
                }

            </div>
            {/* display countries */}
            <div className="country-container">
            {
                countries.map(country =><Country key={country.cca3}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
                 country={country}></Country>)
            }
            </div>
        </div>
    );
};
export default Countries;