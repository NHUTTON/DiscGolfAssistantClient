import React from 'react';
import Navbar from './Navbar'
import {IData} from "../Components/Interfaces"

type Props = {
    updateToken: (newToken: IData) => void,
    sessionToken: string
    clearToken: () => void,
  }
  
  const Home = (props: Props) => {
  console.log(props)
      return(
        <div>
            <Navbar clearToken={props.clearToken} sessionToken={props.sessionToken} updateToken={props.updateToken}/>
        </div>
      )
    }
    
  export default Home;