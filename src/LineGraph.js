import React, { useState, useEffect} from 'react'
import { Line } from "react-chartjs-2";
import numeral from "numeral"
const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  responsive:true,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};

  const buildChartData = (data1,data2,data3, date, casesTypes) => {
    console.log("the whole datainsdo", data1, data2, data3, casesTypes);
    const chartData = [];
    let lastDataPoint;
    if (casesTypes === "cases") {
       for (let iteration = 0; iteration < data1.length; iteration++) {
         console.log(
           "the whole cases datainsdosss",
           data1[iteration],
           date[iteration]
         );
         if (lastDataPoint) {
           let newDataPoint = {
             x: date[iteration],
             y: data1[iteration] - lastDataPoint,
           };

           //console.log("the whole datainsdo", data.cases);
           chartData.push(newDataPoint);
         }
         lastDataPoint = data1[iteration];
       }
    } else if (casesTypes ==="recovered") {
       for (let iteration = 0; iteration < data2.length; iteration++) {
         console.log(
           "the whole datainsdosss",
           data2[iteration],
           date[iteration]
         );
         if (lastDataPoint) {
           let newDataPoint = {
             x: date[iteration],
             y: data2[iteration] - lastDataPoint,
           };

           //console.log("the whole datainsdo", data.cases);
           chartData.push(newDataPoint);
         }
         lastDataPoint = data2[iteration];
       }
    } else if(casesTypes ==="deaths") {
       for (let iteration = 0; iteration < data3.length; iteration++) {
         console.log(
           "the whole datainsdosss",
           data3[iteration],
           date[iteration]
         );
         if (lastDataPoint) {
           let newDataPoint = {
             x: date[iteration],
             y: data3[iteration] - lastDataPoint,
           };

           //console.log("the whole datainsdo", data.cases);
           chartData.push(newDataPoint);
         }
         lastDataPoint = data3[iteration];
       }
    }
   
    return chartData;
  };
function LineGraph({casesType, ...props}) {
    const [data, setData] = useState({});

    useEffect(()=> {
      const fetchData = async () => {
        await fetch("https://disease.sh/v3/covid-19/historical/UG,TZ,KE,RW,BI")
          .then((response) => response.json())
          .then((data) => {
            console.log("data", data);
            let allObjectData = {};
            let alldataCasesArray = [];
            let allRecoveredCasesArray = [];
            let allDeathsCasesArray = [];
            let allGeneralDates = [];

            let ugandanDataCases = [];
            let kenyanDataCases = [];
            let tanzaniaDataCases = [];
            let rwandaDataCases = [];
            let burundiDataCases = [];
            let objectCases = {};

            let ugandanDeathCases = [];
            let kenyanDeathCases = [];
            let tanzaniaDeathCases = [];
            let rwandaDeathCases = [];
            let burundiDeathCases = [];
            let objectDeaths = {};

            let ugandanRecoveredCases = [];
            let kenyanRecoveredCases = [];
            let tanzaniaRecoveredCases = [];
            let rwandaRecoveredCases = [];
            let burundiRecoveredCases = [];
            let objectRecoveredCases = {};

            function spiltData(dataToSplit, country, type) {
              console.log("the data and country", dataToSplit, country);
              //cases
              if (type === "cases") {
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
              else if (type === "deaths") {
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
              else if (type === "recovered") {
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
                spiltData(cases.timeline.cases, cases.country, "cases");
                spiltData(cases.timeline.deaths, cases.country, "deaths");
                spiltData(cases.timeline.recovered, cases.country, "recovered");
                loopedCases.push(cases);
              }
              return loopedCases;
            }
            console.log("getData()", getData(data));
            console.log("this is the expected-data", ugandanDeathCases);

            //Totals recieved
            function getTotals(
              array1,
              array2,
              array3,
              array4,
              array5,
              dates,
              type
            ) {
              let length = array1.length;

              console.log("thisis array1", array1, length);
              if (type === "cases") {
                let thedates = dates;
                for (let iteration = 0; iteration < length; iteration++) {
                  let iterations = iteration + 1;
                  let total =
                    array1[iteration] +
                    array2[iteration] +
                    array3[iteration] +
                    array4[iteration] +
                    array5[iteration];
                  alldataCasesArray.push(total);
                  Object.defineProperty(objectCases, `"${thedates[iteration]}"`, {
                    value: total,
                    writable: true
                  });

                  console.log("------", length === iterations);
                  if (length === iterations) {
                    console.log('my all data aArray', alldataCasesArray)
                    Object.defineProperty(allObjectData, "cases", {
                      value: objectCases,
                      writable: true,
                    });
                    console.log("allObjectData", allObjectData);
                  }
                }
              } else if (type === "deaths") {
                let thedates = dates;
                for (let iteration = 0; iteration < length; iteration++) {
                  let iterations = iteration + 1;
                  let total =
                    array1[iteration] +
                    array2[iteration] +
                    array3[iteration] +
                    array4[iteration] +
                    array5[iteration];

                  allDeathsCasesArray.push(total);
                  Object.defineProperty(
                    objectDeaths,
                    `${thedates[iteration]}`,
                    {
                      value: total,
                      writable: true,
                    }
                  );

                  if (length === iterations) {
                    Object.defineProperty(allObjectData, "deaths", {
                      value: objectDeaths,
                      writable: true,
                    });
                    console.log("Deaths added to overall", allObjectData);
                  }
                }
              } else if (type === "recovered") {
                let thedates = dates;
                for (let iteration = 0; iteration < length; iteration++) {
                  let iterations = iteration + 1;
                  let total =
                    array1[iteration] +
                    array2[iteration] +
                    array3[iteration] +
                    array4[iteration] +
                    array5[iteration];
                  allRecoveredCasesArray.push(total);
                  Object.defineProperty(
                    objectRecoveredCases,
                    `${thedates[iteration]}`,
                    {
                      value: total,
                      writable: true,
                    }
                  );

                  if (length === iterations) {
                    Object.defineProperty(allObjectData, "recovered", {
                      value: objectRecoveredCases,
                      writable: true,
                    });
                    console.log("recovered added to overall", allObjectData);
                  }
                }
              }
            }

            getTotals(
              ugandanDataCases,
              kenyanDataCases,
              tanzaniaDataCases,
              rwandaDataCases,
              burundiDataCases,
              allGeneralDates,
              "cases"
            );
            getTotals(
              ugandanDeathCases,
              kenyanDeathCases,
              tanzaniaDeathCases,
              rwandaDeathCases,
              burundiDeathCases,
              allGeneralDates,
              "deaths"
            );
            getTotals(
              ugandanRecoveredCases,
              kenyanRecoveredCases,
              tanzaniaRecoveredCases,
              rwandaRecoveredCases,
              burundiRecoveredCases,
              allGeneralDates,
              "recovered"
            );
              console.log('all object data', allObjectData, casesType)
            let chartData = buildChartData(alldataCasesArray,allRecoveredCasesArray, allDeathsCasesArray, allGeneralDates, casesType);
            setData(chartData);
          });
      }

        fetchData();
    }, [casesType])

   
    return (
      <div className={props.className}>
        {data?.length > 0 && (
          <Line
            data={{
              datasets: [
                {
                  backgroundColor: "rgba(204, 16, 52, 0.5)",
                  borderColor: "#CC1034",
                  data: data,
                },
              ],
            }}
            options={options}
          />
        )}
      </div>
    );
}

export default LineGraph;
