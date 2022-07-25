import React, { useEffect, useState } from "react";
import "./css/Style.css";
import R from "./R.png";

export default function Tempapp() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      //set the api key through sigining in open weather app
      //if u want to convert in celsius then &units=metric
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=df80d37306b81081dd6b95515d39355a`;
      const response = await fetch(url); //await means the function get the value or not
      //convert in to the json file
      const resJson = await response.json();
      //get the main element of weather api
      setCity(resJson.main);
    };

    fetchApi();
  }, [search]); //pass the 2nd parameter of fun

  return (
    <>
      <div className="box">
        <div className="inputData">
          <div className="img3">
            <img src={R} alt="this is the image" width="193" height="130" ></img>
            </div>
            <input
              type="search"
              className="inputField"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                //target the each text whatevr u write in search box it will try to find and change the value
              }}
            />

            {city ? (
              <div className="info">
                <h2 className="location">
                  <i className="fas fa-street-view"></i>
                  {search}
                </h2>
                <h1 className="temp">{city.temp}°C</h1>
                <h3 className="tempmin_max">
                  MIN:{city.temp_min}°C | MAX:{city.temp_max}°C
                </h3>
              </div>
            ) : (
              <p>not Found</p>
            )}
          </div>
        </div>

    </>
  );
}
