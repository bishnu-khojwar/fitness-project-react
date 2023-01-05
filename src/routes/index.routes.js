import React from 'react'
import ExerciseDetail from '../pages/exercisedetail/ExerciseDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'

const Routing = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routing