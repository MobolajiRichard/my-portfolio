import React from "react";
import "./experience.css";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineSeparator,
  TimelineItem,
  TimelineOppositeContent
} from "@mui/lab";
import { Typography } from "@mui/material";

function Experience() {
  return (
    <div className="experience-container">
      <header>
        <h1>Experience</h1>
      </header>
      <div className="experience">
        <Timeline>
          <TimelineItem>
            <TimelineOppositeContent sx={{display:'none'}}/>
            <TimelineSeparator>
              <TimelineDot sx={{backgroundColor:'#fc511e'}} />
              <TimelineConnector sx={{backgroundColor:'#fc511e'}}/>
            </TimelineSeparator>
            <TimelineContent>
              <Typography sx={{fontWeight:550}} >
              GEEKY EXPERTS, LAGOS STATE, NIGERIA, 2022
              </Typography>
              <Typography>
                Mid-level Front-end Developer
              </Typography>
              <ul>
                <li>Implementation of mathematical relationships generated from asset integrity theoretical concept into functional readable code.</li>
                <li>Participated in the building, development of models and evaluation concepts for cloud based asset integrity application.</li>
                <li>Collaborated with backend team on code integration.</li>
                <li>Created user friendly features for cloud software packages</li>
              </ul>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
          <TimelineOppositeContent sx={{display:'none'}}/>
            <TimelineSeparator>
              <TimelineDot sx={{backgroundColor:'#fc511e'}} />
              <TimelineConnector sx={{backgroundColor:'#fc511e'}}/>
            </TimelineSeparator>
            <TimelineContent>
              <Typography sx={{fontWeight:550}}>
                FREELANCE, 2020 - 2022
              </Typography>
              <Typography>Junior Front-end Developer</Typography>
              <ul>
                <li>Worked with teams across the globe to create a good user interface for clients</li>
                <li>Built a chrome extension for a sales team to track leads for an e-commerce websites</li>
                <li>Worked with a team of developers to refactor and update an old codebase.</li>
              </ul>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
          <TimelineOppositeContent sx={{display:'none'}}/>
            <TimelineSeparator>
              <TimelineDot sx={{backgroundColor:'#fc511e'}}/>
              <TimelineConnector sx={{backgroundColor:'#fc511e'}}/>
            </TimelineSeparator>
            <TimelineContent>
              <Typography sx={{fontWeight:550}}>NDUO EDUO HIGH SCHOOL, EKET, AKWA-IBOM, NIGERIA,  2021-2022</Typography>
              <Typography>Teacher</Typography>
              <ul>
                <li>Planned, prepared  and taught various topics for senior students</li>
                <li>Encouraged students participtions by subjecting them to more fun and eal life examples</li>
                <li>Communicated effectively with other teachers to improve the overall peformance of the students</li>
                <li>Marked, reviewed and recorded student's performance after assessments</li>
              </ul>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
}

export default Experience;
