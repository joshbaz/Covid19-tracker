import React, { useState, useEffect} from 'react'
import { Line } from "react-chartjs-2";
function LineGraph() {
    const [data, setData] = useState({});

    useEffect(()=> {
        fetch("https://disease.sh/v3/covid-19/historical/UG,TZ,KE,RW,BI")
          .then((response) => 
            response.json()
          )
          .then((data) => {
            console.log('data',data);
            let allGeneralDates = [];
            let ugandanDataCases= [];
            let kenyanDataCases = [];
            let tanzaniaDataCases = [];
            let rwandaDataCases = [];
            let burundiDataCases = [];

            function spiltData(dataToSplit, country){
              console.log('the data and country', dataToSplit, country);
              
              if(allGeneralDates.length === 0) {
                  let propertyDate = Object.keys(dataToSplit);
                  function getDataValues() {
                    let dataValues = []
                    for (const date of propertyDate) {
                      console.log("these are spilt dataes", date);
                      console.log("these are the numbers", dataToSplit[date]);
                      dataValues.push(dataToSplit[date]);
                    }
                    return dataValues;
                  }
                  allGeneralDates.push(...propertyDate);
                  if (country === 'Uganda'){
                   let ugandaResults = getDataValues();
                   ugandanDataCases.push(ugandaResults);
                   console.log(" ugandanDataCases", ugandanDataCases);
                  } else if (country === 'Kenya') {
                    let kenyaResults = getDataValues();
                    kenyanDataCases.push(kenyaResults);
                  } else if (country === 'Tanzania') {
                     let TanzaniaResults = getDataValues();
                    tanzaniaDataCases.push(TanzaniaResults);
                  } else if (country === "Rwanda") {
                    let rwandaResults = getDataValues();
                   rwandaDataCases.push(rwandaResults);
                  } else if (country === "Burundi") {
                    let burundiResults = getDataValues();
                     burundiDataCases.push(burundiResults);
                  }
                } else {
                  function getDataValues() {
                   let  propertyDate = Object.keys(dataToSplit);
                    let dataValues = [];
                    for (const date of propertyDate) {
                      console.log("these are spilt dataes", date);
                      console.log("these are the numbers", dataToSplit[date]);
                      dataValues.push(dataToSplit[date]);
                    }
                    return dataValues;
                  }
                  
                  if (country === "Uganda") {
                    let ugandaResults = getDataValues();
                    ugandanDataCases.push(ugandaResults);
                    console.log(" ugandanDataCases", ugandanDataCases);
                  } else if (country === "Kenya") {
                    let kenyaResults = getDataValues();
                    kenyanDataCases.push(kenyaResults);
                    console.log(" ukenyanDataCases", kenyanDataCases);
                  } else if (country === "Tanzania") {
                    let TanzaniaResults = getDataValues();
                    tanzaniaDataCases.push(TanzaniaResults);
                    console.log(" tanzaniaDataCases", tanzaniaDataCases);
                  } else if (country === "Rwanda") {
                    let rwandaResults = getDataValues();
                    rwandaDataCases.push(rwandaResults);
                    console.log("  rwandaDataCases", rwandaDataCases);
                  } else if (country === "Burundi") {
                    let burundiResults = getDataValues();
                    burundiDataCases.push(burundiResults);
                    console.log("  burundiDataCases", burundiDataCases);
                  }
                }
              
            }

           function getData(arraydata) {
              const loopedCases = [];
            

              for (const cases of arraydata) {
                console.log(cases.timeline.cases);
                console.log(cases.country);
                spiltData(cases.timeline.cases, cases.country)
                loopedCases.push(cases)
              }
              return loopedCases;
           }

           console.log('getData()', getData(data));
          });
    }, [])
    return (
        <div>
             <h1>This is data</h1>
        </div>
    )
}

export default LineGraph
