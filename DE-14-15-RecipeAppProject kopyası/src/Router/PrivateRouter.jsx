import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


const PrivateRouter = () => {
  return (
    JSON.parse(sessionStorage.getItem("kullanici")) === "osman") ? <Outlet/>: <Navigate to="/"/>
  
}

export default PrivateRouter