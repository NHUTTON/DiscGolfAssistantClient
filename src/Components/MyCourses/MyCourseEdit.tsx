import { Dialog, Box, Button } from '@material-ui/core';
import React, {Component} from 'react';
import APIURL from '../../helpers/environment'

type Props = {
    results: any
    sessionToken: string
    fetchMyCourses: any
}

type State = {
review: string
}

class MyCourseEdit extends Component <Props, State> {
    constructor (props: Props) {
        super(props)
        this.state ={
            review: this.props.results.review
        }
    };

    myCourseUpdate=(e: any) => {
        fetch(`${APIURL}/mycourses/change/${this.props.results.id}`, {
            method: 'PUT',
            body: JSON.stringify({mycourse: {
             review: this.state.review
            }}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        }).then((res) => {
            console.log(res);
            alert("Course updated!")
        })
    } 

    myCourseDelete = () => {
        fetch(`${APIURL}/mycourses/delete/${this.props.results.id}`, {
        method: 'DELETE',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.props.sessionToken
        })
    }).then(res => {
        console.log(res)
        this.props.fetchMyCourses();
        alert("Course removed from you list!")
    })
}

componentDidUpdate(prevState: any ) {
    if (prevState.results.review !== this.props.results.review){
        this.setState({
            review: this.props.results.review
        })
    }
   }

handleInput = (e:any) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  };

    render() {
        return(
            <div>
                  <textarea style={{minWidth: "323px", minHeight: "100px", maxWidth:"323px"}} onChange={this.handleInput} name="review" value={this.state.review}></textarea>
                  <Box>
                <Button id="editMyCourseButton" size="small" onClick={this.myCourseUpdate}> Update Comment</Button>
                <Button id="deleteMyCourseButton" size="small" onClick={this.myCourseDelete}>Remove Course</Button>
                  </Box>
            </div>
        )
    }
}
    export default MyCourseEdit;