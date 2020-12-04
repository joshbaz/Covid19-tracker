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
            let TotalDataCases = [];
            let objectCases = []

            let ugandanDeathCases = []
            let kenyanDeathCases = [];
            let tanzaniaDeathCases = [];
            let rwandaDeathCases = [];
            let burundiDeathCases = [];
            let TotalDeathCases = [];

             let ugandanRecoveredCases = [];
             let kenyanRecoveredCases = [];
             let tanzaniaRecoveredCases = [];
             let rwandaRecoveredCases = [];
             let burundiRecoveredCases = [];
             let TotalRecoveredCases = [];

            function spiltData(dataToSplit, country, type){
              console.log('the data and country', dataToSplit, country);
              //cases
              if (type === 'cases') {
                if (allGeneralDates.length === 0) {
                  let propertyDate = Object.keys(dataToSplit);
                  function getDataValues() {
                    let dataValues = [];
                    for (const date of propertyDate) {
                      dataValues.push(dataToSplit[date]);
                    }
                    return dataValues;
                  }
                  allGeneralDates.push(...propertyDate);
                  if (country === "Uganda") {
                    let ugandaResults = getDataValues();
                    ugandanDataCases.push(...ugandaResults);
                  } else if (country === "Kenya") {
                    let kenyaResults = getDataValues();
                    kenyanDataCases.push(...kenyaResults);
                  } else if (country === "Tanzania") {
                    let TanzaniaResults = getDataValues();
                    tanzaniaDataCases.push(...TanzaniaResults);
                  } else if (country === "Rwanda") {
                    let rwandaResults = getDataValues();
                    rwandaDataCases.push(...rwandaResults);
                  } else if (country === "Burundi") {
                    let burundiResults = getDataValues();
                    burundiDataCases.push(...burundiResults);
                  }
                } else {
                  function getDataValues() {
                    let propertyDate = Object.keys(dataToSplit);
                    let dataValues = [];
                    for (const date of propertyDate) {
                      dataValues.push(dataToSplit[date]);
                    }
                    return dataValues;
                  }

                  if (country === "Uganda") {
                    let ugandaResults = getDataValues();
                    ugandanDataCases.push(...ugandaResults);
                  } else if (country === "Kenya") {
                    let kenyaResults = getDataValues();
                    kenyanDataCases.push(...kenyaResults);
                  } else if (country === "Tanzania") {
                    let TanzaniaResults = getDataValues();
                    tanzaniaDataCases.push(...TanzaniaResults);
                  } else if (country === "Rwanda") {
                    let rwandaResults = getDataValues();
                    rwandaDataCases.push(...rwandaResults);
                  } else if (country === "Burundi") {
                    let burundiResults = getDataValues();
                    burundiDataCases.push(...burundiResults);
                  }
                }
              } 
              //deaths
              else if (type === 'deaths') {
                if (allGeneralDates.length === 0) {
                  let propertyDate = Object.keys(dataToSplit);
                  function getDataValues() {
                    let dataValues = [];
                    for (const date of propertyDate) {
                      dataValues.push(dataToSplit[date]);
                    }
                    return dataValues;
                  }
                  allGeneralDates.push(...propertyDate);
                  if (country === "Uganda") {
                    let ugandaResults = getDataValues();
                    ugandanDeathCases.push(...ugandaResults);
                  } else if (country === "Kenya") {
                    let kenyaResults = getDataValues();
                    kenyanDeathCases.push(...kenyaResults);
                  } else if (country === "Tanzania") {
                    let TanzaniaResults = getDataValues();
                    tanzaniaDeathCases.push(...TanzaniaResults);
                  } else if (country === "Rwanda") {
                    let rwandaResults = getDataValues();
                    rwandaDeathCases.push(...rwandaResults);
                  } else if (country === "Burundi") {
                    let burundiResults = getDataValues();
                    burundiDeathCases.push(...burundiResults);
                  }
                } else {
                  function getDataValues() {
                    let propertyDate = Object.keys(dataToSplit);
                    let dataValues = [];
                    for (const date of propertyDate) {
                      dataValues.push(dataToSplit[date]);
                    }
                    return dataValues;
                  }

                  if (country === "Uganda") {
                    let ugandaResults = getDataValues();
                    ugandanDeathCases.push(...ugandaResults);
                  } else if (country === "Kenya") {
                    let kenyaResults = getDataValues();
                    kenyanDeathCases.push(...kenyaResults);
                  } else if (country === "Tanzania") {
                    let TanzaniaResults = getDataValues();
                    tanzaniaDeathCases.push(...TanzaniaResults);
                  } else if (country === "Rwanda") {
                    let rwandaResults = getDataValues();
                    rwandaDeathCases.push(...rwandaResults);
                  } else if (country === "Burundi") {
                    let burundiResults = getDataValues();
                    burundiDeathCases.push(...burundiResults);
                  }
                }
              }
              //recovered
              else if (type === 'recovered') {
                if (allGeneralDates.length === 0) {
                  let propertyDate = Object.keys(dataToSplit);
                  function getDataValues() {
                    let dataValues = [];
                    for (const date of propertyDate) {
                      dataValues.push(dataToSplit[date]);
                    }
                    return dataValues;
                  }
                  allGeneralDates.push(...propertyDate);
                  if (country === "Uganda") {
                    let ugandaResults = getDataValues();
                    ugandanRecoveredCases.push(...ugandaResults);
                  } else if (country === "Kenya") {
                    let kenyaResults = getDataValues();
                    kenyanRecoveredCases.push(...kenyaResults);
                  } else if (country === "Tanzania") {
                    let TanzaniaResults = getDataValues();
                    tanzaniaRecoveredCases.push(...TanzaniaResults);
                  } else if (country === "Rwanda") {
                    let rwandaResults = getDataValues();
                    rwandaRecoveredCases.push(...rwandaResults);
                  } else if (country === "Burundi") {
                    let burundiResults = getDataValues();
                    burundiRecoveredCases.push(...burundiResults);
                  }
                } else {
                  function getDataValues() {
                    let propertyDate = Object.keys(dataToSplit);
                    let dataValues = [];
                    for (const date of propertyDate) {
                      dataValues.push(dataToSplit[date]);
                    }
                    return dataValues;
                  }

                  if (country === "Uganda") {
                    let ugandaResults = getDataValues();
                    ugandanRecoveredCases.push(...ugandaResults);
                  } else if (country === "Kenya") {
                    let kenyaResults = getDataValues();
                    kenyanRecoveredCases.push(...kenyaResults);
                  } else if (country === "Tanzania") {
                    let TanzaniaResults = getDataValues();
                    tanzaniaRecoveredCases.push(...TanzaniaResults);
                  } else if (country === "Rwanda") {
                    let rwandaResults = getDataValues();
                    rwandaRecoveredCases.push(...rwandaResults);
                  } else if (country === "Burundi") {
                    let burundiResults = getDataValues();
                    burundiRecoveredCases.push(...burundiResults);
                  }
                }
              }
              
            }

           function getData(arraydata) {
              const loopedCases = [];
              for (const cases of arraydata) {
                console.log(cases.timeline.cases);
                console.log(cases.country);
                spiltData(cases.timeline.cases, cases.country, 'cases');
                spiltData(cases.timeline.deaths, cases.country, "deaths");
                spiltData(cases.timeline.recovered, cases.country, "recovered");
                loopedCases.push(cases)
              }
              return loopedCases;
           }
           console.log("getData()", getData(data));
           console.log('this is the expected-data',ugandanDeathCases)
           
           //Totals recieved
           function getTotals(array1, array2, array3, array4, array5, dates, type) {
            let length = array1.length;
           
            console.log('thisis array1', array1, length)
            if (type === 'cases') {
              let alldat = dates;
              for (let iteration = 0; iteration < length; iteration++) {
                let iterations = iteration + 1;
                let total =
                  array1[iteration] +
                  array2[iteration] +
                  array3[iteration] +
                  array4[iteration] +
                  array5[iteration];
                  
                let objecttrial = {};
                Object.defineProperty(objecttrial, `${alldat[iteration]}`, {
                  value: total,
                });
                objectCases.push(objecttrial)
                console.log("this is the outcome :", objecttrial);
                  
                  TotalDataCases.push( total);

                  if (iterations === length) {
  
                    console.log(objectCases)
                       console.log('the reduce and object.assign', objectCases.reduce((initialStart, nextObject)=> {
                         return console.log('result', initialStart, 'current', nextObject)
                       }, {}))
                    
                  }
                
              }
            } else if (type === 'deaths') {
              for (let iteration = 0; iteration < length; iteration++) {
                let iterations = iteration + 1;
                let total =
                  array1[iteration] +
                  array2[iteration] +
                  array3[iteration] +
                  array4[iteration] +
                  array5[iteration];

                TotalDeathCases.push(total);
              }
            } else if (type === 'recovered') {
              for (let iteration = 0; iteration < length; iteration++) {
                let iterations = iteration + 1;
                let total =
                  array1[iteration] +
                  array2[iteration] +
                  array3[iteration] +
                  array4[iteration] +
                  array5[iteration];

                TotalRecoveredCases.push(total);
              }
            }
           }
           console.log('these are total cases', ugandanDataCases)
           getTotals(
             ugandanDataCases,
             kenyanDataCases,
             tanzaniaDataCases,
             rwandaDataCases,
             burundiDataCases,
             allGeneralDates,
             'cases'
           );

          //  function combineData() {
          //    if (type === "cases") {
          //    } else if (type === "deaths") {
          //    } else if (type === "recovered") {
          //    }
          //  }


          });
    }, [])
    return (
        <div>
             <h1>This is data</h1>
        </div>
    )
}

export default LineGraph
