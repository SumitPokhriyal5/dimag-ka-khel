import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Start from '../start/index'
import Home from '../Home/index'

export default function Routers() {
  return (
  
    <Routes>
        <Route path='/' element={<Start />}/>
        <Route path='/home' element={<Home />} />
    </Routes>
  )
}
