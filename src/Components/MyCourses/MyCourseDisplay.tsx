import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import MyCourseEdit from './MyCourseEdit'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

type Props ={
  sessionToken: string
  results: []
  fetchMyCourses: any
}

const MyCourseDisplay = (props: Props) => {
  console.log(props)
  const classes = useStyles();
  
    return(
      <div>
        <h1 id="myCourses">My Courses</h1>
        {props.results.map((course:any) => (
        <div>
          <Card className={classes.root}>
      <CardActionArea>
      <Typography style= {{textAlign: "center", fontFamily:"rocksalt", fontSize:"20px"}} gutterBottom variant="h5" component="h2">
          {course.name.replace(/_/g,' ')}
          </Typography>
        <CardMedia
          className={classes.media}
          image= {course.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="body2" component="p">
     Tees: {course.tee} | Holes: {course.holes} | Distance: {course.distance} ft.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <MyCourseEdit fetchMyCourses={props.fetchMyCourses} sessionToken={props.sessionToken} results={course}/>
      </CardActions>
      </Card>
      <br/>
      </div>
      ))} 
      </div>
    );
  }
  
export default MyCourseDisplay;