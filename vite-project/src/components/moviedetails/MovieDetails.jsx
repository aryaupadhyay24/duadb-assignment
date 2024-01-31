import React, { useState } from "react";
import "./moviedetails.css";
import {  NavLink } from "react-router-dom";
import Modal from "../../Modal.js";
import Form from "../../pages/form/Form.jsx";


const MovieDetails = ({ data }) => {
  const [openForm,setOpenForm]=useState(false)

  return (
    <div className="container">
      <div className="moviedetails">
        <img src={data.show.image.original} alt="" />
        <div className="movie-info">
          <h1 className="head-info">
            <div>{data.show.name}</div>
            <div>
              ⭐ {data.show.rating.average || Math.round(data.score * 10, 1)}
            </div>
          </h1>
          <div> Language: {data.show.language} </div>
          <div>
            {" "}
            Genre :{" "}
            {data.show.genres.map((i) => {
              return i + " ";
            })}{" "}
          </div>
          <div>Summary-</div>
          <div dangerouslySetInnerHTML={{__html:data.show.summary}}></div>

          <p>Status:{data.show.status}</p>
          <p>Premiered:{data.show.premiered}</p>

          {}
          <div className="btn-conatiner">
        <NavLink to='/'><button className="view-btn" >Back</button></NavLink>
      <button className="view-btn" onClick={()=>{setOpenForm(true)}}>Book Ticket🎫</button>
        {openForm?  <Modal onClose={()=>{setOpenForm(false)}}><Form movie={data}/></Modal>:""}
      </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default MovieDetails;
