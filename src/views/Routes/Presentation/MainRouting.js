import React from "react";
import tvPic from "../../../Assets/presentation_video_pic/tv_svg.svg";
import "../../../style/Presentation.css";
import { NavLink } from "react-router-dom";




const MainRouting = ()=>{
  return (
    <div className="mainClicks" style={{width:'80%'}}>
      <div className="hedaer_div">
        <img src={tvPic} alt='"TV_Icon' />
        <h2>Presentation</h2>
      </div>

      <div id="nav_block">
        <NavLink to='/' className='navLink'>Financial Results</NavLink>
        <NavLink to="elevator" className='navLink' >Elevator Pitch</NavLink>
        <NavLink to="companyPresentation" className='navLink'>Company Presentation</NavLink>
        <NavLink to="deepDive" className='navLink'>Deep-Dive</NavLink>
        <NavLink to="esg" className='navLink'>ESG</NavLink>
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
  );
}

export default MainRouting;
