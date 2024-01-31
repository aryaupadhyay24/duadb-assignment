import React, { useState } from "react";
import "./form.css";
const Form = ({movie}) => {
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const[noT,setNoT]=useState(1)
  const[noA,setNoA]=useState(1)
  const[noC,setNoC]=useState(0)
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  return (

    <form onSubmit={handleSubmit} className="form-container">
      <span className="movie-name">MOVIE: {movie.show.name} (⭐{movie.show.rating.average || Math.round(movie.score * 10, 1)})</span>
      <div>
        <label for="fname">First name:</label>
        <br />
      <input type="text" id="fname" name="fname" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
        <br />
      </div>
      <div>
        <label for="lname">Last name:</label>
        <br />
        <input onChange={(e)=>setLastName(e.target.value)}  type="text" id="lname" name="lname" value={lastName} />
      </div>
      <br />
      <div className="no-of-tickets-container">
        <label for="lname">Number of Tickets</label>

        <input
          type="number"
          min={1}
          value={noT}
          onChange={(e)=>setNoT(e.target.value)} 
          className="no-tickets"
          id="lname"
          name="lname"
        />
      </div>
      <div className="no-of-tickets-container">
        <label for="lname">Number of Children</label>

        <input
          type="number"
          className="no-tickets"
          min={0}
          onChange={(e)=>setNoC(e.target.value)}
          id="lname"
          name="lname"
          value={noC}
        />
      </div>
      <div className="no-of-tickets-container">
        <label for="lname">Number of Adults</label>

        <input
          type="number"
          value={noA}
          className="no-tickets"
          onChange={(e)=>setNoA(e.target.value)}
          min={1}
          id="lname"
          name="lname"
        />
      </div>
      <br />
      <button className="view-btn">SUBMIT</button>
    </form>
  );
};

export default Form;
