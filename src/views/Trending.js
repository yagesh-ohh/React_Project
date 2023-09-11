import React from "react";
import "../style/Trending.css";
import trend1 from "../Assets/Trending_img/trend1.jpg";
import trend2 from "../Assets/Trending_img/trend2.jpg";
import trend3 from "../Assets/Trending_img/trend3.png";
import videoIcon from "../Assets/Trending_img/video_Icon.svg";

const Trending = () => {
  return (
    <div className="trendingContainer w-100">
      <div className="tranding_header">
        <img src={videoIcon} alt="Trend_pic" />
        <h1>Trendings</h1>
      </div>

      <div className='imgcontainer d-flex text-align-center '>
     
     <img src='https://seat11a.com/wp-content/uploads/2022/06/ElringKlinger-AG-Elevator-Pitch-2022-Revolutionizing-the-Automotive-Industry-with-IR.jpg'alt="Trendin_img" />
 </div>


      <div className="financialResults">
        <div className="card col-xl-3 col-lg-3 col-md-6 col-sm-8 col-10">
          <div className="card-body">
            <ul >
              <img src={trend1} className="card-img-top" alt="..." />
              <p className="card-text">
                Carl Zeiss Meditec AG Elevator Pitch 2023 | Embracing the Future
              </p>
              <ul className="insideUl">
                <li>MedTech</li>
                <li>RCDAX Healthcare</li>
                <li>Carl Zeiss Meditec AG</li>
              </ul>
            </ul>
          </div>
        </div>
        <div className="card col-xl-3 col-lg-3 col-md-6 col-sm-8 col-10">
          <div className="card-body">
            <ul >
              <img src={trend2} className="card-img-top" alt="..." />
              <p className="card-text">
                Carl Zeiss Meditec AG Elevator Pitch 2023 | Embracing the Future
              </p>
              <ul className="insideUl">
                <li>MedTech</li>
                <li>RCDAX Healthcare</li>
                <li>Carl Zeiss Meditec AG</li>
              </ul>
            </ul>
          </div>
        </div>
        <div className="card col-xl-3 col-lg-3 col-md-6 col-sm-8 col-10">
          <div className="card-body">
            <ul >
              <img src={trend3} className="card-img-top" alt="..." />
              <p className="card-text">
                Carl Zeiss Meditec AG Elevator Pitch 2023 | Embracing the Future
              </p>
              <ul className="insideUl">
                <li>MedTech</li>
                <li>RCDAX Healthcare</li>
                <li>Carl Zeiss Meditec AG</li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
