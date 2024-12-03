import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/SignUp'
import AddRestaurant from './Components/AddRestaurant'
import View from './Components/View'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/'       element={<Home/>}  />
        <Route  path='/login'   element={<Login/>}/>
        <Route  path='/signup'   element={<Signup/>}/>
        <Route  path='/addr'   element={<AddRestaurant/>}/>
        <Route  path='/view'   element={<View/>}/>     
      </Routes> 
    </div>
  )
}
export default App