import React, { Component, useState, useEffect } from 'react';
import FlightTable from './tables/FlightTable';
import CompanyService from './services/CompanyService';

const CustomFlights = () => {

  const initialFormState = { departure: '', arrival: '' }
  const [flights, setFlights] = useState([]);
  const [searchFlight, setSearchFlight] = useState("");


  const handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    setSearchFlight({ ...searchFlight, [name]: value });
  };

  


  const findFlightsByParams = (searchFlight) => {

    console.log(searchFlight.departure + " " + searchFlight.arrival);
    CompanyService.getflightsbyairports(searchFlight.departure, searchFlight.arrival)
      .then(response => {
        setFlights(response.data);
        console.log("response: "+response);
      })
      .catch(e => {
        console.log(e);
      });
      
  };


  return (
    <div>

      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            if (!searchFlight.departure || !searchFlight.arrival) return
            setSearchFlight(initialFormState)
          }}
        >
          <label>Departure</label>
          <input
            type="text"
            name="departure"
            value={searchFlight.departure}
            onChange={handleInputChange}
          />
          <label>Arrival</label>
          <input
            type="text"
            name="arrival"
            value={searchFlight.arrival}
            onChange={handleInputChange}
          />
          <button onClick={() => findFlightsByParams(searchFlight)}>Search</button>
        </form>
      </div>
      <div>
        <FlightTable flights={flights} />
      </div>
    </div>
  );

}

export default CustomFlights;