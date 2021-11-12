import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import LandingPage from "../pages/LandingPage"

export const ROUTE_LINKS = {
  Landing: "/"
  // LandingReq: "/:action"
}

const Web3Routes = () => {
  return (
    <Routes>
      <Route 
        path={ROUTE_LINKS.Landing}
        element={<LandingPage/>}
      />
      <Route 
        path="*"
        element={<Navigate
          to={ROUTE_LINKS.Landing}
        />}
      />     
      {/* <Route 
        path={ROUTE_LINKS.LandingReq}
      >
        <LandingPage />
      </Route> */}
    </Routes>
  )
}

export default Web3Routes
