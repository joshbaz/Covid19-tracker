import React from 'react'
import { Card, CardContent, Typography } from "@material-ui/core";
// we are passing in the props inside of the function body
function infoBox({ title, cases, total}) {
    return (
      <Card className="InfoBox">
        <CardContent>
          {/** Title */}
          <Typography className="infoBox__title" color="textSecondary">
            {title}
          </Typography>
          {/** Number of Cases */}
          <h2 className="infoBox__cases">{cases}</h2>

          {/** Total */}
          <Typography className="infoBox__total" color="textSecondary">
            {total}
          </Typography>
        </CardContent>
      </Card>
    );
}

export default infoBox
