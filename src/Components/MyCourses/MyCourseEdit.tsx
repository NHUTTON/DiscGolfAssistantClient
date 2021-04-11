import { Dialog, Box, Button } from '@material-ui/core';
import React, {Component} from 'react';


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
        fetch(`http://localhost:4000/mycourses/change/${this.props.results.id}`, {
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
            this.props.fetchMyCourses();
        })
    } 

    myCourseDelete = () => {
        fetch(`http://localhost:4000/mycourses/delete/${this.props.results.id}`, {
        method: 'DELETE',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.props.sessionToken
        })
    }).then(res => {
        console.log(res)
        this.props.fetchMyCourses();
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
                  <textarea onChange={this.handleInput} name="review" value={this.state.review}></textarea>
                  <Box>
                <Button size="small" color="primary" onClick={this.myCourseUpdate}> Update Comment</Button>
                <Button size="small" color="primary" onClick={this.myCourseDelete}>Remove this Course</Button>
                  </Box>
            </div>
        )
    }
}
    export default MyCourseEdit;