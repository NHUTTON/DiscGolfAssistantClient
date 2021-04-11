import { ClickAwayListener } from '@material-ui/core';
import React, {Component} from 'react';
import CourseDisplay from './CourseDisplay'
import APIURL from '../../helpers/environment'

type Props ={
  sessionToken: string
}

type State = {
   results: []
}

export default class Courses extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
            this.state= {
           results: [],
            }
    } 

    fetchResults = () => {
        let url: string = `${APIURL}/course/`
        console.log(url)
  
        fetch(url, {
        }).then((res) => res.json())
        .then((data)=>{
          this.setState({
              results: data
          })
            console.log(data)
        })
    }

    componentDidMount = () =>{
        this.fetchResults();
    }

    render() {
        return(
            <div>
                <CourseDisplay fetchResults={this.fetchResults} sessionToken={this.props.sessionToken} results={this.state.results}/>
            </div>
        )
    }
} 
