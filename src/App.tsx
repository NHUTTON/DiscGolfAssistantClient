import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router,} from 'react-router-dom';
import {IData} from './Components/Interfaces'

import Home from './site/Home'
import Auth from './Components/Auth/Auth'

const App: React.FunctionComponent = () => {
  const [sessionToken, setSessionToken] = useState('');


    const updateToken = (newToken: IData) => {
      console.log(newToken)
      localStorage.setItem('admin', newToken.user.admin);
      localStorage.setItem('token', newToken.sessionToken);
      setSessionToken(newToken.sessionToken)
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
