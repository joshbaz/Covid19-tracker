import React from 'react'
import './InfoBox.css';
import { Card, CardContent, Typography } from "@material-ui/core";
// we are passing in the props inside of the function body
function infoBox({  active, title, cases, total, ...props}) {
    return (
      <Card 
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"}`}>
        <CardContent>
          {/** Title */}
          <Typography className="infoBox__title" color="textSecondary">
            {title}
          </Typography>
          {/** Number of Cases */}
          <h2 className="infoBox__cases">{cases}</h2>

          {/** Total */}
          <Typography className="infoBox__total" >
            Total : {total} 
          </Typography>
        </CardContent>
      </Card>
    );
}

export default infoBox
