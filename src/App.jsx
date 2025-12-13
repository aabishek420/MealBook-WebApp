import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import CategoryMeal from './pages/CategoryMeal'
import Meal from './pages/Meal'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path='/category/:category' element={<CategoryMeal/>}/>
      <Route  path='/meal/:id'  element={<Meal/>} />
    </Routes>
    </>
  )
}

export default App