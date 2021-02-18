import React, { useState} from 'react'
import './App.css'

import { StateProvider } from './contexts/StateContext'

import Header from './components/Header'
import Menu from './components/Menu'
import Body from './components/Body'

const App = () => {
  const [userName, setUsername] = useState('Miguel')
  const [userEmail, setUserEmail] = useState('miguel@gmail.com')

  let providerValue = {
    theme: 'light',
    user: {
      name: userName,
      email: userEmail
    }
  }

  return (
    <StateProvider value={providerValue}>
      <div className="App">
          <Header/>
          <section>
            <Menu/>
            <Body setUsername={setUsername}/>
          </section>   
        </div>
    </StateProvider>
  );
}

export default App
