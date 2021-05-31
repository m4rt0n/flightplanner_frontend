import React from 'react'

const FlightTable = (props)=>(
<table>
        <thead>
            <tr>
                <th>Departure</th>
                <th>Time</th>
                <th>Arrival</th> 
                <th>Time</th>              
            </tr>
        </thead>
        <tbody>
            {props.flights.length > 0 ? (
                
                props.flights.map((flight) => (
                    <tr key={flight.id}>
                     <td>{flight.departureAirport.airportName}</td>
                        <td>{flight.departureTime}</td>
                        <td>{flight.arrivalAirport.airportName}</td>
                        <td>{flight.arrivalTime}</td>
                    </tr>
                  
                ))
                
            ) : (
                <tr>
                    <td colSpan={3}>No flights</td>
                </tr>
            )}
        </tbody>
    </table>
)

export default FlightTable;