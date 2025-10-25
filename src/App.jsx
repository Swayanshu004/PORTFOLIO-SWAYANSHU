import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Project from './pages/Project'
import Contact from './pages/Contact'
import HeroNav from './components/HeroNav'
import FullNav from './components/FullNav'
import Skill from './pages/Skill'
import Education from './pages/Education'

function App() {

  return (
    <>
      <HeroNav />
      <FullNav />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/skill' element={<Skill/>}/>
        <Route path='/education' element={<Education/>}/>
      </Routes>
    </>
  )
}

export default App
