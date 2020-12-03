import { FormControl, Select, MenuItem, Card, CardContent } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import InfoBox from './infoBox';
import Map from "./Map";
import Table from "./Table"
import { sortData } from "./util";
import LineGraph from "./LineGraph"
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('EastAfrica');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([])

  //STATE = How to write a variable in react
  //USE effect = Runs a piece of code base on a given condititon

  useEffect(()=> {
    fetch("https://disease.sh/v3/covid-19/countries/UG,KE,TZ,RW,BI")
    .then(response => response.json())
    .then(data=> {
      let todayCases = [];
      let todayRecovered = [];
      let todayDeaths = [];
      let cases = [];
      let deaths = [];
      let recovered = [];
      let dataTotals;
      for (let iteration = 0; iteration < data.length; iteration++) {
        let totalIteration = iteration + 1;
        todayCases.push(data[iteration].todayCases);
        todayRecovered.push(data[iteration].todayRecovered);
        todayDeaths.push(data[iteration].todayDeaths);
        cases.push(data[iteration].cases);
        deaths.push(data[iteration].deaths);
        recovered.push(data[iteration].recovered);
        console.log('dat', totalIteration === data.length);
        if (totalIteration === data.length) {
          const casesToday = todayCases.reduce((total, currentValue) => {
            return total + currentValue;
          });

          const casesRecovered = todayRecovered.reduce(
            (total, currentValue) => {
              return total + currentValue;
            }
          );

          const casesDeaths = todayDeaths.reduce((total, currentValue) => {
            return total + currentValue;
          });

          const casestotal = cases.reduce((total, currentValue) => {
            return total + currentValue;
          });

          const deathstotal = deaths.reduce((total, currentValue) => {
            return total + currentValue;
          });
          const recoveredtotal = recovered.reduce((total, currentValue) => {
            console.log(total);
            console.log("current", currentValue);
            return total + currentValue;
          });
           dataTotals = {
            cases: casestotal,
            recovered: recoveredtotal,
            deaths: deathstotal,
            todayCases: casesToday,
            todayDeaths: casesDeaths,
            todayRecovered: casesRecovered,
          };

          
          setCountryInfo(dataTotals);
        } 
      }

     // setCountryInfo(dataTotals)
    })
  }, [])

  useEffect(() => {
    //the code inside here will run once 
    //when the component loads and not again

    const getCountriesData = async () => {
       await fetch ('https://disease.sh/v3/covid-19/countries/UG,KE,TZ,RW,BI')
       .then((response)=> response.json())
       .then((data)=> {
         const countries = data.map((country)=> ({
           name: country.country,
           value: country.countryInfo.iso2,
         }));

         const sortedData = sortData(data)
         setTableData(sortedData)
         setCountries(countries);
       })
    }
    getCountriesData();
  }, [])

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;

    console.log("This is my country Now", countryCode);
    setCountry(countryCode);
   const url =
     countryCode === "EastAfrica"
       ? "https://disease.sh/v3/covid-19/countries/UG,KE,TZ,RW,BI"
       : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch (url)
    .then(response=> response.json())
    .then(data => {
      if (data.length > 0 && data.length !== undefined) {
         let todayCases = [];
         let todayRecovered = [];
         let todayDeaths = []
        let cases = [];
        let deaths = [];
        let recovered = [];
         for (let iteration = 0; iteration < data.length; iteration++) {
           let totalIteration = iteration + 1;
           todayCases.push(data[iteration].todayCases);
          todayRecovered.push(data[iteration].todayRecovered);
           todayDeaths.push(data[iteration].todayDeaths);
           cases.push(data[iteration].cases);
           deaths.push(data[iteration].deaths);
           recovered.push(data[iteration].recovered);

          if (totalIteration === data.length) {
            const casesToday = todayCases.reduce((total, currentValue)=> {
              console.log(total);
              console.log('current', currentValue)
              return total + currentValue
            })

            const casesRecovered = todayRecovered.reduce(
              (total, currentValue) => {
                console.log(total);
                console.log("current", currentValue);
                return total + currentValue;
              }
            );

            const casesDeaths = todayDeaths.reduce((total, currentValue) => {
              console.log(total);
              console.log("current", currentValue);
              return total + currentValue;
            });

            const casestotal = cases.reduce((total, currentValue) => {
              console.log(total);
              console.log("current cases", currentValue);
              return total + currentValue;
            });

            const deathstotal = deaths.reduce((total, currentValue) => {
              console.log(total);
              console.log("current", currentValue);
              return total + currentValue;
            });
             const recoveredtotal = recovered.reduce((total, currentValue) => {
               console.log(total);
               console.log("current", currentValue);
               return total + currentValue;
             });
             let dataTotals = {
               cases: casestotal,
               recovered: recoveredtotal,
               deaths: deathstotal,
               todayCases: casesToday,
               todayDeaths: casesDeaths,
               todayRecovered: casesRecovered,
             };

            setCountry(countryCode);
            setCountryInfo(dataTotals);
             
          }
         }
      } else {
        console.log('this is data else where', data);
        setCountry(countryCode);
        setCountryInfo(data)
      }
     
    })
    // if (countryCode === 'EastAfrica') {
    //   // const EastAfricanData = async (coun1, coun2, coun3, coun4) => {
    //   //   await fetch(
    //   //     `https://disease.sh/v3/covid-19/countries/${coun1},${coun2},${coun3},${coun4}`
    //   //   )
    //   //     .then((response) => response.json())
    //   //     .then((data) => {
    //   //       console.log("all the data taking part", data);
    //   //     });
    //   // };
    //   //  EastAfricanData('UG', 'TZ', 'RW', 'BI' );

      
      
    // }
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
          <InfoBox
            title="Coronavirus cases"
            cases={countryInfo.todayCases}
            total={countryInfo.cases}
          />

          <InfoBox
            title="Recovered"
            cases={countryInfo.todayRecovered}
            total={countryInfo.recovered}
          />

          <InfoBox
            title="Deaths"
            cases={countryInfo.todayDeaths}
            total={countryInfo.deaths} 
          />
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
          <Table countries={tableData} />
          {/* Table */}
          <h3>EastAfrica new Cases</h3>
          <LineGraph />
          {/* Graph */}
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
