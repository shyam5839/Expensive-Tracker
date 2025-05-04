import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './../pages/Home.jsx';
import AddExpense from '../pages/Form/AddExpense.jsx';


const Routers = () => {
  return (



<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/home' element={<Home/>} />
  <Route path='/form/create' element={<AddExpense/>} />
</Routes>
  )
}

export default Routers