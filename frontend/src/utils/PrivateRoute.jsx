import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
const PrivateRoute = () => {
    // console.log("getting into private routes");
    const user = true;
    return user ? <Outlet/> : <Navigate to="/login"/>
}

export default PrivateRoute;
