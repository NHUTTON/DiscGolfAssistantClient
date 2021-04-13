import React from 'react';
import {MenuItem, Box, Button, Menu} from '@material-ui/core';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom'

import CourseCreate from '../Components/Courses/CourseCreate'
import MyCourses from '../Components/MyCourses/MyCourses'
import Courses from '../Components/Courses/Courses'
import {IData} from "../Components/Interfaces"
import { NonNullChain } from 'typescript';

type Props = {
  updateToken: (newToken: IData) => void,
  clearToken: () => void,
  sessionToken: string
}
  
type State = {
  courseCreateModal: boolean
  anchorEl: null
}

  class Navbar extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props);
      this.state = {
        courseCreateModal: false,
        anchorEl: null,
      };
      console.log(props)
    }

    courseCreateHandle = () => {
      this.setState({
        courseCreateModal: true,
      });
    };

    exitCourseModal = () => {
      this.setState({
        courseCreateModal: false,
      });
    };

    handleClick = (event: any) => {
      this.setState({
        anchorEl: event,
      });
    };

    handleClose = () => {
      this.setState({
        anchorEl: null,
      });
    };

    createCourse = () => {
      this.courseCreateHandle();
      this.handleClose();
    };

    render() {
      return (
        <div>
          <div>
            <div className="headerCont">
              <img
                src="https://i.imgur.com/0jje6Qx.png"
                alt="no image"
                width={70}
                height={70}
              />
              <br />
              <h2 className="appName">Disc Golf Assistant</h2>
              <Box style={{ marginLeft: "900px", marginTop: "20px" }}>
                <Box>
                  <Button
                    id="menuButton"
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={this.handleClick}
                  >
                    Open Menu
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    anchorEl={this.state.anchorEl}
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.handleClose}
                  >
                    {localStorage.admin === "true" ?
                    <MenuItem onClick={this.createCourse}>
                      Create a Course
                    </MenuItem>: null}
                    <MenuItem onClick={this.handleClose}><Link to="/home">Home</Link></MenuItem>
                    <MenuItem onClick={this.handleClose}>
                      <Link to="/mycourses">My Courses</Link>
                    </MenuItem>
                  </Menu>
                </Box>
                <Box>
                  <button
                    className="authButtons"
                    onClick={this.props.clearToken}
                  >
                    Logout
                  </button>
                </Box>
              </Box>
              {this.state.courseCreateModal ? 
                <CourseCreate
                  sessionToken={this.props.sessionToken}
                  updateToken={this.props.updateToken}
                  exitModal={this.exitCourseModal}
                  courseCreateModal={this.state.courseCreateModal}
                />
               : null}
            </div>
            <Switch>
            <Route exact path="/home"><Courses sessionToken={this.props.sessionToken} /></Route>
              <Route exact path="/mycourses">
                <MyCourses sessionToken={this.props.sessionToken} />
              </Route>
            </Switch>
          </div>
        </div>
      );
    }
  } 

export default Navbar;
    