import React from 'react'
import '../style/ProfileContainer.css';
import man1 from "../Assets/profile_pics/man1.png";

const ProfileContainer = () => {
  return (
    <div className="sliderContainer">
    {/* <!-- carouselExampleAutoplaying --> */}

    {/* <!-- sliderContainer --> */}
 <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel"  data-mdb-interval="false">

   <div className="carousel-inner">
       {/* <!-- carousel-inner --> */}


     {/* <!-- carousel-item -->  <!-- item Number -- 1  -->    */}
        
     <div className="carousel-item active">
       <div className="inner">
         <div className="img_container">
           <div className="circle"></div>
           <img src={man1} className="" alt="..."/>
         </div>
         <div className="content">
           <div className="content-top">
            <h2>Michael Gierse</h2>
            <p>
             Portfolio Manager
             <br/>
           Union Investment
           </p>
           </div>
           <div className="content-bottom">
            <p>... a great platform for both listed companies and investors because it
              <br/>
               provides an easy value-added solution to corporate access
            
               </p>
           </div>
          </div>
       </div>
     </div>

     {/* <!-- carousel-item -->   <!-- item Number -- 1  -- end  -->  */}
       {/* <!-- carousel-item -->  <!-- item Number -- 2  -->    */}
        
       <div className="carousel-item " data-mdb-interval="2000">
         <div className="inner">
           <div className="img_container">
             <div className="circle"></div>
             <img src={man1} className="" alt="..."/>
           </div>
           <div className="content">
            <div className="content-top">
             <h2>per Johansson</h2>
             <p>
             Portfolio Manager, Founder
             <br/>
             Boden Capital (perviously Bodenhoim Capital)
           </p>
            </div>
            <div className="content-bottom">
             <p>
               ...delighted to be working with them and strongly encourage companies
               <br/>
                to use seat11a's techinology to help us all devloper this magnigicent project
             
                </p>
            </div>
           </div>
         </div>
       </div>
 
       {/* <!-- carousel-item -->   <!-- item Number -- 2  -- end  -->  */}
         {/* <!-- carousel-item -->  <!-- item Number -- 3  -->    */}
       
         <div className="carousel-item " >
           <div className="inner">
             <div className="img_container">
               <div className="circle"></div>
               <img src={man1} className="" alt="..."/>
             </div>
             <div className="content">
               <div className="content-top">
                <h2>Dr. Hendrik Leber</h2>
                <p>
                Executive Partner, Portfolio Mangement
                 <br/>
                 ACATIS Investment
               </p>
               </div>
               <div className="content-bottom">
                <p>
                 ...seat11a is an immensely useful platform for
                  <br />
                  both investors and stock-listed companies
                   </p>
               </div>
              </div>
           </div>
         </div>

     {/* <!-- carousel-item -->   <!-- item Number -- 3  -- end  -->  */}





   </div> 
   {/* <!-- carousel-inner --> */}

   {/* <!-- carouselExampleAutoplaying --> */}

 </div>  

 {/* <!-- button Container--> */}

 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
   <span className="carousel-control-prev-icon" aria-hidden="true"></span>
   <span className="visually-hidden">Previous</span>
 </button>
 <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
   <span className="carousel-control-next-icon" aria-hidden="true"></span>
   <span className="visually-hidden">Next</span>
 </button>
 {/* <!-- button Container  end  --> */}


 </div>
  )
}

export default ProfileContainer