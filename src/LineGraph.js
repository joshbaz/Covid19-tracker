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
           // let dates = [];
            let cases = [];
            let deaths = [];
            let recovered = [];
           // let dataTotals;
            for (let iteration = 0; iteration < data.length; iteration++) {
              let totalIteration = iteration + 1;
              cases.push(data[iteration].timeline.cases);
              console.log('these are cases', cases)
              // deaths.push(data[iteration].deaths);
              // recovered.push(data[iteration].recovered);
              // console.log("dat", totalIteration === data.length);
              if (totalIteration === data.length) {
                
                // const casestotal = cases.reduce((total, currentValue) => {
                //   return total + currentValue;
                // });

                // const deathstotal = deaths.reduce((total, currentValue) => {
                //   return total + currentValue;
                // });
                // const recoveredtotal = recovered.reduce(
                //   (total, currentValue) => {
                //     console.log(total);
                //     console.log("current", currentValue);
                //     return total + currentValue;
                //   }
                // );
                // dataTotals = {
                //   cases: casestotal,
                //   recovered: recoveredtotal,
                //   deaths: deathstotal,
                // };

              }
            }
          });
    }, [])
    return (
        <div>
             <h1>This is data</h1>
        </div>
    )
}

export default LineGraph
