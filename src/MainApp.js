import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import TablesChairs from './Components/Manage/TablesChairs'
import Customer from './Pages/Customer/Customer'

const MainApp = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Customer/>}/>
      <Route path="/dashboard" element={<Dashboard/>}  />
      <Route path="/manage" element={<TablesChairs/>}  />
      </Routes>
    </>
  )
}

export default MainApp