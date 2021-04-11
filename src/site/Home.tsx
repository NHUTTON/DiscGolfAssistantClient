import React from 'react';
import Navbar from './Navbar'
import Courses from '../Components/Courses/Courses'

type Props = {
    updateToken: any
    sessionToken: string
    clearToken: any
  }
  
  const Home = (props: Props) => {
  
      return(
        <div>
            {/* My course Display */}
            <Navbar clearToken={props.clearToken} sessionToken={props.sessionToken} updateToken={props.updateToken}/>
            <Courses sessionToken={props.sessionToken} />
        </div>
      )
    }
    
  export default Home;