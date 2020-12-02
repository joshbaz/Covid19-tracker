import { FormControl, Select, MenuItem, Card, CardContent } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import InfoBox from './infoBox';
import Map from "./Map";

import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('EastAfrica')

  //STATE = How to write a variable in react
  //USE effect = Runs a piece of code base on a given condititon

  useEffect(() => {
    //the code inside here will run once 
    //when the component loads and not again

    const getCountriesData = async () => {
       await fetch ('https://disease.sh/v3/covid-19/countries')
       .then((response)=> response.json())
       .then((data)=> {
         const countries = data.map((country)=> ({
           name: country.country,
           value: country.countryInfo.iso2,
         }));
         setCountries(countries);
       })
    }
    getCountriesData();
  }, [])

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;

    //console.log("This is my country Now", countryCode);
    setCountry(countryCode);
    let url 
    if (countryCode === 'EastAfrica') {
      const EastAfricanDATA = async () => {

      }
    }
    //  https://disease.sh/v3/covid-19/all
    // https://disease.sh/v3/covid-19/countries/[COUNTRY_CODE]
  }

  return (
    <div className="app">
      <div className="app__left">
        {/* Header */}
        <div className="app__header">
          <h1>COVID 19 TRACKER </h1>
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              onChange={onCountryChange}
              value={country}
            >
              {/** Loop through all the countries and show a drop down list of the options*/}
              <MenuItem value="EastAfrica">EastAfrica</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
              {/**
               <MenuItem value="WorldWide">WorldWide</MenuItem>
            <MenuItem value="WorldWide">Option 1</MenuItem>
            <MenuItem value="WorldWide">Option 2</MenuItem>
          */}
            </Select>
          </FormControl>
        </div>

        <div className="app__stats">
          <InfoBox title="Coronavirus cases" cases={500} total={2000} />

          <InfoBox title="Recovered" cases={400} total={3000} />

          <InfoBox title="Deaths" cases={400} total={1000} />
          {/* InfoBoxes */}
          {/* InfoBoxes */}
          {/* InfoBoxes */}
        </div>

        {/* Map */}
        <Map />
      </div>

      <Card className="app__right">

          <CardContent>
          <h3> Live Cases by Country</h3>
          {/* Table */}
          <h3>WorldWide new Cases</h3>
          {/* Graph */}

          </CardContent>
      </Card>
    </div>
  );
}

export default App;
