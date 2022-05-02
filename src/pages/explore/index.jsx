import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/";
import Explore from "./explore.module.css";
import axios from "axios";
import { NavLink } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import details from "./details";

export default function Index() {
  const axios = require('axios').default;
  const [data, setData] = React.useState([])
  useEffect(() => {
    // axios
    //   .get("http://travellersmn.herokuapp.com/places")
    //   .then((res) => {
    //     console.log(res.data);
    //     setData(res.data)
    //   })
    var res = require('./data.json');
    setData(res);
    // console.log(data);
  }
  )

  const [search, setNewSearch] = useState("");

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };

  const foundTravel = !search
    ? data
    : data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
      );


  return (
    <div className={Explore.main}>
      <Navbar />

      <div className={Explore.weather}>
        <h1 id={Explore.temp}>-3°C</h1>
        <h1 id={Explore.title}>Ulaanbaatar</h1>

        <input type="text" placeholder="Search" id={Explore.searchBar}
        value={search} onChange={handleSearchChange} />
      </div>
      {/* <TravelList res={{response}} /> */}
      <div className={Explore.container}>
        <h1 className="text-center white-text">Travel List</h1>
        <hr />
        <div className={Explore.gallery}>

          {foundTravel && foundTravel.length > 0 ? (
            foundTravel.map((item) => (
              <Link to={`/explore/details/val=${item.name}`} state={{ val: item.name }}>
                <div key={item.name} className="view overlay hm-black-light gallery-item">
                  <img src={item.photo} alt="Placeholder Image" className="img-fluid" href="" />

                  <div className="mask flex-center">
                    <h4 className="white-text">{item.name}</h4>

                  </div>
                  <p className="white-text desc">{item.description}</p>

                </div>
              </Link>
            ))
          ) : (
            <h4 className="white-text flex-center">No travels found!</h4>
          )}

        </div>
      </div>
    </div>
  );
}