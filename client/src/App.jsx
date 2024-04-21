import { useState } from 'react'
 import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './pages/Signup'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './pages/Login'
import HomePage from './pages/HomePage'
import HeroPage from './pages/HeroPage'
function App() {
 

  return (
    <>
     
      <Routes>
        <Route  index element={<HomePage/>}/>
        <Route path='/heropage' element={<HeroPage/>}/>
        <Route  path='/register' element={<Signup/>}/>
        <Route  path='/login' element={<Login/>}/>

      </Routes>
      
    
    </>
  )
}
 
export default App
