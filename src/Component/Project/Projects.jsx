import React from "react";
import "./project.css";
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Grid
} from "@mui/material";
import { projects } from "./Projectlist";

function Project({theme, darkmode}) {
  return (
    <div className="project">
      <header className={`header ${theme === 'red' ? 'red': theme === 'blue' ? 'blue': theme === 'green' ? 'green':theme === 'pink' ? 'pink':''}`}>
        <h1>Project</h1>
      </header>
      <Grid container spacing={2}>
      {projects.map((project) => (
          <Grid item xs={12} sm={4} key={project.title}>
            <Card sx={{ maxWidth: 345 , height:'25em', backgroundColor: darkmode ? '#2e2a2a' : 'white', color:'white'}}>
              <CardMedia
                component="img"
                alt="image"
                height="140"
                image={project.image}
                loading ='lazy'
              />
              <CardContent >
                <Typography sx={{fontFamily:'cursive', color: theme === 'red' ? '#ec1839': theme === 'blue' ? '#1854b4': theme === 'green' ? '#37b182':theme === 'pink' ? '#f021b2':'#fc511e' }} gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography sx={{marginBottom:'1em', color: darkmode ? 'white' : 'black'}}  variant="body2" >
                  {project.description}
                </Typography>
                <Typography sx={{color: darkmode ? 'white' : 'black', fontSize:'0.7rem', fontWeight:'900'}}>
                  {project.skills}
                </Typography>
              </CardContent>
              <CardActions >
                <a className={`visit-link ${theme === 'red' ? 'red': theme === 'blue' ? 'blue': theme === 'green' ? 'green':theme === 'pink' ? 'pink':''}`} href={project.url} rel="noreferrer" target='_blank' >Visit</a>
              </CardActions>
            </Card>
          </Grid>
      ))}
      </Grid>
    </div>
  );
}

export default Project;
