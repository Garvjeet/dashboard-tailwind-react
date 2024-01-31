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
      {/* <RevenueCard
        title="Title"
        orderCount="4"
        count={4}
        amount={45988}
      /> */}
      {/* <div className='bg-red-500 col-span-3 md:col-span-1 text-left sm:text-right'>hi1</div>
      <div className='bg-yellow-500 col-span-3 md:col-span-1'>hi2</div>
      <div className='bg-green-500 col-span-3 md:col-span-1'>hi3</div> */}
      {/* <RevenueCard></RevenueCard> */}
      <SideBar />
      <RightPanel />
    </div>

  )
}

export default App
