import React, { useState, useEffect } from 'react';
import SearchCompanyForm from './forms/SearchCompanyForm';
import CompanyService from './services/CompanyService';

const Flights = () => {

  const [flights, setFlights] = useState([]);
  const [searchTerm, setSearchTerm] = useState(useState(""));

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    findFlightsByCompanyName(searchTerm);
  }, []);




  const findFlightsByCompanyName = (searchTerm) => {
    CompanyService.findFlightsByCompanyName(searchTerm)
      .then(response => {
        setFlights(response.data);
        console.log(response.data);
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
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button onClick={() => findFlightsByCompanyName(searchTerm)}>Search</button>
        </form >
      </div>

      <div>
        <ul>

        {flights.map(flight => (
          <li key={flight.id}>
            {flight.id}</li>
           
        ))}

        </ul>
      </div>
    </div>
  );

}

export default Flights;