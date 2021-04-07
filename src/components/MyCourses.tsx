import React, {ChangeEvent, Component, FormEvent} from 'react';
import MyCourseDisplay from './MyCourseDisplay'

type Props ={
  
}

type State = {
  
}

export default class MyCourses extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
            this.state= {
 
            }
    } 


    fetchResults = (e: any) => {
        e.preventDefault()
        const baseUrl: string = "http://localhost:4000"
        
        let url: string = `${baseUrl}/mycourses/mine`

        console.log(url)

        fetch(url)
        .then(res => res.json()) 
        .then(json => {
            console.log(json)
        })
    }

    render() {
        return(
            <div>
                {/* <MyCourseDisplay mycourses={this.courses}/> */}
            </div>
        )
    }
} 
