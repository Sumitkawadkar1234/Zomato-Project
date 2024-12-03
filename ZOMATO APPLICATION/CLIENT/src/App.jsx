import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/SignUp'
import AddRestaurant from './Components/AddRestaurant'
import View from './Components/View'
import ViewFood from './Components/ViewFood'
import ViewCart from './Components/ViewCart'
 import Addproduct from './Components/Addproduct'
import Success from './Components/Success'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/'           element={<Home/>}  />
        <Route  path='/login'    element={<Login/>}/>
        <Route  path='/signup'   element={<Signup/>}/>
        <Route path='/AddRestaurant' element={<AddRestaurant/>}/>
        <Route  path='/View'     element={<View/>}/>     
        {/* <Route path='/Success'  element={<Success/>}/> */}
        <Route  path='/sucess'   element={<Success/>}/>
        <Route  path='/View/:restroId/product'  element={<ViewFood/>}/> 
         <Route  path='/ViewCart/:restroId'   element={<ViewCart/>}/>
        <Route path='/View/:restroId/Addproduct' element={<Addproduct/>}/>
      </Routes> 
    </div>
  )
}
export default App