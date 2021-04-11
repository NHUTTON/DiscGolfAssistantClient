import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router,} from 'react-router-dom';


import Home from './site/Home'
import Auth from './Components/Auth/Auth'

const App: React.FunctionComponent = () => {
  const [sessionToken, setSessionToken] = useState('');
  const [results, setResults] = useState([])
  const [role, setRole] = useState('')

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
      return (sessionToken === localStorage.getItem('token') && localStorage.getItem('token') != undefined ? <Home sessionToken={sessionToken} clearToken={clearToken} updateToken={updateToken}/> : <Auth sessionToken={sessionToken} updateToken={updateToken}/>)
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
