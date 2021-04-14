import React, {useState} from 'react'
import './App.css';
import {AppRouter} from './AppRouter'
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from './UserContext';


function MainApp() {
  const [user, setUser] = useState({});
    

  return (
      <UserContext.Provider value={{
          user,
          setUser
      }}>

          <AppRouter />

      </UserContext.Provider>
  )
}

export default MainApp;
