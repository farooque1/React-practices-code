import axios from "axios";
import React, { useEffect, useState } from "react";

const CountryComponent = () => {

  const [countrydata, setCountryData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const countryDetails = () => {
    axios.get(`https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-1709/data.json`)
      .then((res) => {
        console.log(res.data);
        setCountryData(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    countryDetails();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Filter country data based on the search query
    const filteredCountries = countrydata.filter((data) =>
      data.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setCountryData(filteredCountries);
  };

  return (
    <>
      <div className="container-fluid">
        <h1>Country details</h1>
        <form class="row g-3" onSubmit={handleSearch}>
          <div class="col-auto">
            <label class="visually-hidden">Search Country</label>
            <input
              type="text"
              class="form-control"
              placeholder="Search Country"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-3">
              Search
            </button>
          </div>
        </form>

        <div className="row">
          {countrydata.length === 0 ? (
            <div className="col">
              <div className="card my-2" style={{ width: "18rem" }}>
                <div class="card-body">
                  <p class="card-text">Country not found</p>
                </div>
              </div>
            </div>
          ) : (
            countrydata.map((data) => (
              <div className="col" key={data.id}>
                <div className="card my-2" style={{ width: "18rem" }}>
                  <img
                    src={data.flag}
                    class="card-img-top img-fluid"
                    alt={data.name}
                    width="100%"
                  />
                  <div class="card-body">
                    <p class="card-text">{data.name}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default CountryComponent;
