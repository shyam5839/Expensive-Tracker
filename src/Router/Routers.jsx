import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './../pages/Home.jsx';
import Form from '../pages/Form/Form.jsx';


const Routers = () => {
  return (



<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/home' element={<Home/>} />
  <Route path='/form/create' element={<Form/>} />
</Routes>
  )
}

export default Routers
