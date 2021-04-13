import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

import CourseEdit from './CourseEdit'
import MyCourseCreate from '../MyCourses/MyCourseCreate'
import {ICourse} from "../Interfaces"

type Props = {
  results: any
  sessionToken: string
  fetchResults: () => void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 700,
    },
    image: {
      width: 200,
      height: 200,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }),
);

export default function CourseDisplay(props:Props) {
  console.log(props)
  const classes = useStyles();

  return (
    <div >
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    <Grid  item xs={8}>
    {props.results.map((course: ICourse) => (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid id="courses" container spacing={4}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={course.image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={8}>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <div className="courseHeader">
                <Typography id="courseName">
                  {course.name.replace(/_/g,' ')}
                  <hr/>
                </Typography>
                <Typography id="courseLocation" variant="body2" gutterBottom>
                  {course.city}, {course.state}
                </Typography>
                <br/>
                </div>
                <Typography id="courseInfo" variant="body2" color="textSecondary">
                  Tees: {course.tee}
                </Typography>
                <Typography id="courseInfo" variant="body2" color="textSecondary">
                  Holes: {course.holes}
                </Typography>
                <Typography id="courseInfo" variant="body2" color="textSecondary">
                  Distance: {course.distance} ft.
                </Typography>
              </Grid>
              <Grid item>
                { localStorage.token == props.sessionToken ? <MyCourseCreate fetchResults={props.fetchResults}  sessionToken={props.sessionToken} results={course} /> : null}
              { localStorage.admin == "true" ? <CourseEdit fetchResults={props.fetchResults} sessionToken={props.sessionToken} results={course} /> : null}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <br />
    </div>
       ))}
       </Grid> 
    </div>
  );
}