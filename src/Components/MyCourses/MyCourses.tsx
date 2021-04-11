import React, {ChangeEvent, Component, FormEvent} from 'react';
import MyCourseDisplay from './MyCourseDisplay'
import APIURL from '../../helpers/environment'

type Props ={
sessionToken: string
}

type State = {
results: []
}

export default class MyCourses extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
            this.state= {
                results: [],
            }
    } 
        
        fetchMyCourses = () => {
            fetch(`${APIURL}/mycourses/mine`, {
                method: "GET",
                headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": this.props.sessionToken
            })
        }).then((res) => res.json())
        .then((data)=>{
            this.setState({
                results: data
            })
            console.log(data)
        })
    }

    componentDidMount = () =>{
        this.fetchMyCourses();
    }


    render() {
        return(
            <div>
             <MyCourseDisplay sessionToken={this.props.sessionToken} results={this.state.results} fetchMyCourses={this.fetchMyCourses}/> 
            </div>
        )
    }
} 
