import React, { useState, useEffect } from 'react';
import FlightTable from './tables/FlightTable';
import CompanyService from './services/CompanyService';

const Flights = () => {

  const [flights, setFlights] = useState([]);
  const [searchCompany, setsearchCompany] = useState("");

  const handleInputChange = event => {
    setsearchCompany(event.target.value);
  };

  useEffect(() => {
    findFlightsByCompanyName(searchCompany);
  }, []);

  const findFlightsByCompanyName = (searchCompany) => {
    CompanyService.getFlightsByCompanyName(searchCompany)
      .then(response => {
        setFlights(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      <div>
        <h2>Flights</h2>
        <form
          onSubmit={(event) => {
            event.preventDefault()
          }}
        >
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={searchCompany}
            onChange={handleInputChange}
          />
          <button onClick={() => findFlightsByCompanyName(searchCompany)}>Search</button>
        </form >
      </div>
      <div>
        <FlightTable flights={flights} />
      </div>
    </div>
  );
}

export default Flights;