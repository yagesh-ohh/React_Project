import React from 'react'
import {Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import SectorRootBlock from './Routes/SectorBlock/SectorRootBlock'
import Consumer from './Routes/SectorBlock/Consumer';
import Energy from './Routes/SectorBlock/Energy';
import Financials from './Routes/SectorBlock/Financials';
import Healthcare from './Routes/SectorBlock/Healthcare';
import Industrials from './Routes/SectorBlock/Industrials';
import Materials from './Routes/SectorBlock/Materials';
// import Consumer from './Routes/SectorBlock/Consumer'
// import Energy from "./Routes/SectorBlock/Energy";
// import Financials from "./Routes/SectorBlock/Financials";
// import Healthcare from "./Routes/SectorBlock/Healthcare";
// import  Industrials  from "./Routes/SectorBlock/Industrials";
// import Materials from "./Routes/SectorBlock/Materials";

function Sector() {
  
    const router =  createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<SectorRootBlock />} >  
            <Route index element={<Consumer/>}/>
            <Route path='energy' element={<Energy/>}/>
            <Route path='financials' element={<Financials/>}/>
            <Route path='healthcare' element={<Healthcare/>}/>
            <Route path='industrials' element={<Industrials/>}/>
            <Route path='materials' element={<Materials/>}/>
            </Route>
        )
    )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default Sector