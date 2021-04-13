import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import MyCourseEdit from './MyCourseEdit'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 275,
    color: 'white'
 },
});

type Props ={
  sessionToken: string
  results: any
  fetchMyCourses: () => void
}

const MyCourseDisplay = (props: Props) => {
  console.log(props)
  const classes = useStyles();
  
    return(
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1 id="myCourses">My Courses</h1>
        {props.results.map((course:any) => (
          <div>
          <Card id="cardDisplay" className={classes.root}>
      <CardActionArea>
        <br/>
      <Typography style= {{textAlign: "center", fontFamily:"rocksalt", fontSize:"20px", color: "white"}} gutterBottom variant="h5" component="h2">
          {course.course.name.replace(/_/g,' ')}
          </Typography>
          <br/>
        <CardMedia
          className={classes.media}
          image= {course.course.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography id="myInfo" variant="body2" component="p">
     Tees: {course.course.tee} | Holes: {course.course.holes} | Distance: {course.course.distance} ft.
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