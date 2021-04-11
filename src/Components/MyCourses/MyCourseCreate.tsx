import React, {useState, Component} from 'react';
import { Dialog, Box } from '@material-ui/core';

type Props = {
    results: any
    sessionToken: string
    fetchResults: any
}

type State = {
    review: string,
    image: string,
    name: string, 
    city: string, 
    state: string, 
    holes: string, 
    distance: number, 
    tee: string,
    courseId: string
    modal: boolean
}

export default class MyCourseCreate extends Component <Props, State> {
    constructor(props:Props) {
        super(props)
        this.state={
            review: "",
            image: this.props.results.image,
            name: this.props.results.name, 
            city: this.props.results.city, 
            state: this.props.results.state, 
            holes: this.props.results.holes, 
            distance: this.props.results.distance, 
            tee: this.props.results.tee,
            courseId: this.props.results.id,
            modal: false
        }
    }

    handleSubmit = () => {
        fetch('http://localhost:4000/mycourses/create', {
                method: 'POST',
                body: JSON.stringify({mycourse: {
                    review: this.state.review,
                    image: this.state.image,
                    name: this.state.name, 
                    city: this.state.city, 
                    state: this.state.state, 
                    holes: this.state.holes, 
                    distance: this.state.distance, 
                    tee: this.state.tee,
                    courseId: this.props.results.id
                }}),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': this.props.sessionToken
                })
            }) .then((res) => res.json())
            .then((data) => {
                console.log(data)
                this.props.fetchResults()
                this.exitModal()
            })
        }

        componentDidMount = () =>{
          console.log(this.props.results.id)
        }
        
    handleInput = (e:any) => {
        this.setState({
          ...this.state,
          [e.target.name]: e.target.value
        })
      };

      myCourseHandle = () => {
        this.setState({
            modal: true,
            courseId: this.props.results.id
          })
          console.log(this.props.results.id)
    }

    exitModal = () => {
        this.setState({
            modal: false,
        })
    }

        render(){
            return(
                <div>
                <div>
                  <Dialog open={this.state.modal}>
                    <div  id="courseDialog">
                      <h2>Add a Review/Comment:</h2>
                      <form>
                        <label>Review: </label>
                          <Box>
                        <textarea style={{height: "7em", width: "20em"}} name="review" onChange={this.handleInput} value={this.state.review}></textarea>
                        <input defaultValue={this.props.results.name.replace(/_/g,' ')} ></input>
                        </Box>
                        </form>
                        <Box display="flex" mt={2} ml={15}>
                          <Box ml={1} p={1}>
                        <button onClick={this.handleSubmit}>Submit</button>
                        </Box>
                        <Box ml={1} p={1}>
                        <button onClick={this.exitModal}>Close</button>
                        </Box>
                      </Box>
                    </div> 
                  </Dialog>
                </div>
                <button id= "addButton" onClick={this.myCourseHandle}>Add this course to my List!</button>
            </div>
            )
        }
}