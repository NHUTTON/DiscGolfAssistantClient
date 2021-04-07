import { ClickAwayListener } from '@material-ui/core';
import React, {ChangeEvent, Component, FormEvent} from 'react';
import CourseDisplay from './CourseDisplay'

type Props ={
  
}

type State = {
   results: []
}

export default class Courses extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
            this.state= {
           results: []
            }
    } 

    fetchResults = (e: any) => {
        const baseUrl: string = "http://localhost:4000"
        let url: string = `${baseUrl}/course/`
        console.log(url)

        fetch(url, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
            })
        }).then((res) => res.json())
        .then((data)=>{
            console.log(data)
            this.setState({
                results: data
            })
        })
    }

    render() {
        return(
            <div>
                {this.fetchResults}
                <CourseDisplay results={this.state.results}/>
            </div>
        )
    }
} 
