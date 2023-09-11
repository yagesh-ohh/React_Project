import React from 'react'
import blog1 from "../Assets/Blog_pic/blog1.jpg";
import blog2 from "../Assets/Blog_pic/blog2.jpg";
import blog3 from "../Assets/Blog_pic/blog3.jpg";
import "../style/Blog.css";


const Blog = () => {
  return (
    <div className='blogContainer'>
    <h2>Blog</h2>
    <div className='cardContainer d-flex justify-content-center flex-wrap' style={{gap:"10px"}} >
     <div className="card col-xl-3 col-lg-3 col-md-6 col-sm-8 col-10">
    <img src={blog1} className="card-img-top blog_card" alt="..."/>
    <div className="card-body ">
      <h3 className="card-text ">Unraveling the PEG Ratio: A Key Tool in the Investor’s Arsenal.</h3>
      <ul>
        <li>Sanjay Oberoi</li>
        <li>June 11, 2023</li>
        
      </ul>
      <div className='card-text-details' style={{color: 'black'}}>
        <p style={{color: 'black'}}>The Price Earnings to Growth (PEG) ratio has emerged as a crucial tool for investors seeking to dissect a stock’s value relative to its earnings growth. A staggering 76% of financial experts regularly utilize the PEG ratio in their stock assessments (FactSet data), underscoring the importance of mastering this nuanced metric for insightful investment decisions.</p>
      </div>
    </div>
  </div>

  <div className="card col-xl-3 col-lg-3 col-md-6 col-sm-8 col-10">
    <img src={blog2} className="card-img-top blog_card" alt="..."/>
    <div className="card-body">
      <h3 className="card-text">A Fascinating Journey into Life in London Post Brexit!.</h3>
      <ul>
        <li>Yusuf Bilgic</li>
        <li>May 28, 2023</li>
        
      </ul>
      <div className='card-text-details' style={{color: 'black'}}>
        <p style={{color: 'black'}}>Sometimes you might think the “political” clock is ticking “faster” in England. Hardly anyone talks more about Nigel Farage, Teresa May or Boris Johnson. These politicians are worked off almost on an assembly line. </p>
      </div>
    </div>
  </div>

   
  <div className="card col-xl-3 col-lg-3 col-md-6 col-sm-8 col-10">
    <img src={blog3} className="card-img-top blog_card" alt="..."/>
    <div className="card-body ">
      <h3 className="card-text ">Unraveling the PEG Ratio: A Key Tool in the Investor’s Arsenal.</h3>
      <ul>
        <li>Sanjay Oberoi</li>
        <li>June 11, 2023</li>
        
      </ul>
      <div className='card-text-details' style={{color: 'black'}}>
        <p style={{color: 'black'}}>The Price Earnings to Growth (PEG) ratio has emerged as a crucial tool for investors seeking to dissect a stock’s value relative to its earnings growth. A staggering 76% of financial experts regularly utilize the PEG ratio in their stock assessments (FactSet data), underscoring the importance of mastering this nuanced metric for insightful investment decisions.</p>
      </div>
    </div>
  </div>
  </div>
   </div>
  )
}

export default Blog