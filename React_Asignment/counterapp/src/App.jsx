import { useState } from 'react';
import './App.css';


function FlightTicket({ data }) {
  return (
    <div className='FlightInfo'>
      <h2>Flight Ticket</h2>
      <hr />
      <h3><strong>Airline:</strong> {data.name}</h3>
      <p><strong>Code:</strong> {data.code }</p>
      <p><strong>Source:</strong> {data.Scity}</p>
      <p><strong>Destination:</strong> {data.Dcity}</p>
      <p><strong>Seats:</strong> {data.seats}</p>
      <h3 className="price">Price: ₹{data.Price}</h3>
    </div>
  );
}

function App() {
 
  const [flightData, setFlightData] = useState({
    name: '',
    code: '',
    seats: '',
    Scity: '',
    Dcity: '',
    Price: ''
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFlightData({ ...flightData, [name]: value });
  };

  return (
    <>
    <div className="container">
      <div className="form-box">
        <h1>Flight Entry</h1>
        <div className="input-group">
          <input type="text" name="name" placeholder="Airline Name" onChange={handleChange} />
          <input type="text" name="code" placeholder="Flight Code" onChange={handleChange} />
          <input type="number" name="seats" placeholder="Number of Seats" onChange={handleChange} />
          <input type="text" name="Scity" placeholder="Source City" onChange={handleChange} />
          <input type="text" name="Dcity" placeholder="Destination City" onChange={handleChange} />
          <input type="number" name="Price" placeholder="Ticket Price" onChange={handleChange} />
        </div>
      </div>

     
      <FlightTicket data={flightData} />
    </div>
   
    </>
  );
}

export default App;