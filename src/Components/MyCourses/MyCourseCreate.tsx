import React, {useState, Component} from 'react';
import { Dialog, Box, Button } from '@material-ui/core';
import APIURL from '../../helpers/environment'

type Props = {
    results: any
    sessionToken: string
    fetchResults: () => void
}

type State = {
    review: string,
    courseId: string
    modal: boolean
}

export default class MyCourseCreate extends Component <Props, State> {
    constructor(props:Props) {
        super(props)
        this.state={
            review: "",
            courseId: "",
            modal: false
        }
    }

    handleSubmit = () => {
        fetch(`${APIURL}/mycourses/create`, {
                method: 'POST',
                body: JSON.stringify({mycourse: {
                    review: this.state.review,
                    courseId: this.props.results.id
                }}),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': this.props.sessionToken
                })
            }) .then((res) => res.json())
            .then((data) => {
                console.log(data)
                this.exitModal()
                this.props.fetchResults()
                alert("This course has been added to your list!")
            })
        }

        componentDidMount = () =>{
          
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
                      <h2>Add a Review/Comment for:</h2>
                      <form>
                        <h2 style={{color:"red", fontFamily: "rocksalt", fontSize: "18px"}}>{this.props.results.name.replace(/_/g,' ')}</h2>
                        <label>Review: </label>
                          <Box>
                        <textarea style={{minHeight: "7em", maxHeight: "7em", minWidth: "20em", maxWidth: "20em"}} name="review" onChange={this.handleInput} value={this.state.review}></textarea>
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
                <Button size="small" id= "addButton" onClick={this.myCourseHandle}>Add this course to my List!</Button>
            </div>
            )
        }
}