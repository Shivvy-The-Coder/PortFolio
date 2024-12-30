import React from 'react'
import Navbar from './Components/NavBar/Navbar';
import FirstPage from './Components/FirstPage/FirstPage';
import Objective from './Components/Objective/Objective';


const App = () => {
  return (
    <>
    <Navbar/>
    <FirstPage isonline={true}/>
    <Objective/>
    </>
  )
}

export default App;