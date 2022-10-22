import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import TablesChairs from './Components/Manage/TablesChairs'
import Login from './Pages/Auth/Login'
import Customer from './Pages/Customer/Customer'

const MainApp = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Customer/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}  />
      <Route path="/dashboard/manage" element={<TablesChairs/>}  />
      </Routes>
    </>
  )
}

export default MainApp