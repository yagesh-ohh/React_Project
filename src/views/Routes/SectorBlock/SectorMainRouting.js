import React from 'react'
import tvPic from "../../../Assets/presentation_video_pic/tv_svg.svg";
import "../../../style/Sectors.css";
import { NavLink } from "react-router-dom";
const SectorMainRouting = () => {
  return (
    <div className="mainClicks" style={{width:'80%'}}>
      <div className="hedaer_div">
        <img src={tvPic} alt='"TV_Icon' />
        <h2>Sectors</h2>
      </div>

      <div id="nav_block">
        <NavLink to='/' className='navLink'>Financial Results</NavLink>
        <NavLink to="energy" className='navLink' >Energy</NavLink>
        <NavLink to="financials" className='navLink'>Financials</NavLink>
        <NavLink to="healthcare" className='navLink'>Healthcare</NavLink>
        <NavLink to="industrials" className='navLink'>Industrials</NavLink>
        <NavLink to="materials" className='navLink'>Materials</NavLink>
        {/*  <NavLink>ESG</NavLink> */}
      </div>

      <div className="content_tab">
        <p>
          Dive into our in-depth Financial Results Presentations to explore a
          company's financial performance, including key metrics like revenue,
          profit, and ROI. Gain valuable insights into a firm's economic outlook
          and strategic plans, helping you make well-informed investment
          decisions.
        </p>
      </div>
    </div>
  )
}

export default SectorMainRouting