import React, {useState} from 'react';
import Auth from './auth/Auth'
import MyCourses from './components/MyCourses'
import Course from './components/Course'

import './App.css';

const App: React.FunctionComponent = () => {
  const [sessionToken, setSessionToken] = useState('');
 
    const updateToken = (newToken: any) => {
      localStorage.setItem('token', newToken);
      setSessionToken(newToken)
      console.log(sessionToken)
    }

    const clearToken = () => {
      localStorage.clear();
      setSessionToken('')
    }

    const protectedViews = () => {
      return(sessionToken === localStorage.getItem('token') && localStorage.getItem('token') != undefined  ? <MyCourses /> : <Course/>)
    }
    
  return (
    <div className="App">
      <div>
        <Auth updateToken={updateToken}/>
        {protectedViews()}
      </div>
    </div>
  );
}

export default App;
