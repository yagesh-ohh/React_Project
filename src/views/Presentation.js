import React from 'react'
import {Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import '../style/Presentation.css'
import RootLayout from './Routes/Presentation/RootLayout';
import Financial from "./Routes/Presentation/Financial";
import Elevator from "./Routes/Presentation/Elevator";
// import PresentationRoutes from './Routes/Presentation/PresentationRoutes';
// import presentationData from "./Routes/PresentationData/presentationData";
import presentationData from "../Local_Json/Presentation.json";
import Company_Presentation from './Routes/Presentation/Company_Presentation';
import DeepDive from './Routes/Presentation/DeepDive';
import ESG from './Routes/Presentation/ESG';



function Presentation() {

  const router =  createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout/>} >  
           <Route index element={<Financial data={presentationData}/>}  />
            <Route path='elevator' element={<Elevator/>}   />
            <Route path='companyPresentation' element={<Company_Presentation/>}   />
            <Route path='deepDive' element={<DeepDive/>}   />
            <Route path='esg' element={<ESG/>}   />
        </Route>
    )
)
 
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default Presentation;