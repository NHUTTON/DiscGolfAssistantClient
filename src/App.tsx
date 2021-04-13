import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router,} from 'react-router-dom';
import {IData} from './Components/Interfaces'

import Home from './site/Home'
import Auth from './Components/Auth/Auth'

const App: React.FunctionComponent = () => {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(String(localStorage.getItem('token')));
    }
  }, [])

    const updateToken = (newToken: IData) => {
      console.log(newToken)
      if (newToken.message === "Username or password is incorrect.") {
        alert('Username or password is incorrect.');
      } else if (newToken.message === "Failed to login user.") {
        alert('Failed to login user.');
      } else if(newToken.message === "Username already exists."){
        alert("Username already exists")
      } else {
        localStorage.setItem('admin', newToken.user.admin);
        localStorage.setItem('token', newToken.sessionToken);
        setSessionToken(newToken.sessionToken)
        }
      } 

    const clearToken = () => {
      localStorage.clear();
      setSessionToken('')
    }

    const protectedViews = () => {
      return (sessionToken === localStorage.getItem('token') && localStorage.getItem('token') != undefined ? <Home sessionToken={sessionToken} clearToken={clearToken} updateToken={updateToken}/> : <Auth sessionToken={sessionToken} updateToken={updateToken} clearToken={clearToken}/>)
    }

  return (
    <div className="App">
      <div>
        <Router>
        {protectedViews()}
        </Router>
      </div>
    </div>
  );
}

export default App;
