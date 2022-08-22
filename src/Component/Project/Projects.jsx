import React from "react";
import "./project.css";
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography,
  Grid
} from "@mui/material";
import { projects } from "./Projectlist";

function Project() {
  return (
    <div className="project">
      <header>
        <h1>Project</h1>
      </header>
      <Grid container spacing={2}>
      {projects.map((project) => (
          <Grid item xs={12} sm={4}>
            <Card sx={{ maxWidth: 345 , height:'25em'}}>
              <CardMedia
                component="img"
                alt="image"
                height="140"
                image={project.image}
              />
              <CardContent>
                <Typography sx={{color:"#fc511e"}} gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography sx={{marginBottom:'1em'}} variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
                <Typography>
                  {project.skills}
                </Typography>
              </CardContent>
              <CardActions>
                <Button>Visit</Button>
              </CardActions>
            </Card>
          </Grid>
      ))}
      </Grid>
    </div>
  );
}

export default Project;
