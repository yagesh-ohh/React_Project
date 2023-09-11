import React from 'react'
import MainRouting from './MainRouting'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <>
        <MainRouting/>
        <Outlet/>
        <div><button className="btn">View More</button></div>
    </>
  )
}
