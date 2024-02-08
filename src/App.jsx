import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCard'
import { SideBar } from './components/SideBar'
import { RightPanel } from './components/RightPanel';


function App() {
  return (
    <div className="flex">
      <SideBar />
      <RightPanel />
    </div>

  )
}

export default App
