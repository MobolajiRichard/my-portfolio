import React from "react";
import "./skills.css";
import { currentSkills, learning } from "./skillist";
import { Grid, Card, CardMedia} from "@mui/material";

function Skills({theme, darkmode}) {
  return (
    <div className="skills">
      <header className={`header  ${theme === 'red' ? 'red': theme === 'blue' ? 'blue': theme === 'green' ? 'green':theme === 'pink' ? 'pink':''}`}>
        <h1>Skills</h1>
      </header>
      <Grid container spacing={2}>
        {currentSkills.map((cur) => (
          <Grid key={cur.title} item xs={6} sm={3}>
            <Card sx={{backgroundColor: darkmode ? '#696666' : 'white', padding:'2%'}}>
              <CardMedia
                sx={{objectFit: 'contain'}}
                component="img"
                alt="image"
                height="100px"
                image={cur.image}
                loading = 'lazy'
              />
              {/* <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {cur.title}
                </Typography>
              </CardContent> */}
            </Card>
          </Grid>
        ))}
      </Grid>
      <h3>In Progress</h3>
      <Grid container spacing={2}>
      {learning.map((cur) => (
          <Grid key={cur.title} item xs={6} sm={4}>
            <Card  sx={{backgroundColor: darkmode ? '#696666' : 'white', padding:'2%'}}>
              <CardMedia
                sx={{objectFit: 'contain'}}
                component="img"
                alt="image"
                height="100px"
                image={cur.image}
              />
              {/* <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {cur.title}
                </Typography>
              </CardContent> */}
            </Card>
          </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default Skills;
