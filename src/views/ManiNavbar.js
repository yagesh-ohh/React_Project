import React from 'react'
// import brand from "../../Assets/seat-white.png";
import brand from "../Assets/seat-white.png";
// import '../style/MainNaver.css'
import '../style/ManiNavbar.css';

const MainNavbar = () => {


 const menuToggle=()=>{
  const menubtn = document.querySelector(".menuicon")
  const listContainer = document.querySelector('.listContainer')
  listContainer.classList.toggle('listContainercontent')
  console.dir(menubtn);
  console.dir(typeof menubtn.className);
  menubtn.addEventListener("click",(e)=>{
    console.log(e.target.classList);
    console.log(e.target.classList[2]);
    console.log(e.target.classList);

  })
}


// menubtn.addEventListener("click",()=>{
    
//     listContainer.classList.toggle('listContainercontent')
// console.log(listContainer);


// })
  return (
    <nav>

  
    <div className="navlist">
    <label className="logo">
        <img src={brand} alt="logo" width="140px" height="auto" />
    </label>
   
        <ul className="listContainer">
           {/* <!-- ----    COMPANY _- START      ---- --> */}

           <div class="companyContainer">
            <li id="companyHover"><a class="ancher" href={'#'}>Company</a><span class="dropDown position" >&#8964;</span></li>
          {/* <div class="innercompanyContainer">

            <div class="hoverCompany">
              <div class="companyUpper">
                <div className='austia'>
                 <h2>Austia</h2>
                 <ul>
                     <li>Palingar AG</li>
                     <li>Pierer Mobility AG</li>
                     <li>Polytec Group</li>
                     <li>Kontron AG</li>
                   </ul>
                </div>
                <div class="companyUpper_secondDiv germany">
                 <h2>Germany</h2>
 
                 <ul class="scroolingList">
                         
                       <li>Aixtron SE</li>
                       <li>Brain Biotech AG</li>
                       <li>Carl Zeiss Meditec AG</li>
                       <li>Deutz AG</li>
                       <li>Edag Engineering Group AG</li>
                       <li>ElringKlinger AG</li>
                       <li>Encavis AG</li>
                       <li>Energiekontor AG</li>
                       <li>Hypoport SE</li>
                       <li>Jost Werke SE</li>
                       <li>Knaus Tabbert AG</li>
                       <li>LEG Immobilien SE</li>
                       <li>Media and Games Invest SE</li>
                       <li>Mister Spex SE</li>
                       <li>Mountain Alliance AG</li>
                       <li>Mutares SE</li>
                       <li>Mutares SE</li>
                       <li>Nemetschek SE</li>
                       <li>Rational AG</li>
                       <li>Schaltbau Holding AG</li>
                       <li>SFC Energy AG</li>
                       <li>Sixt SE</li>
                       <li>Talanx AG</li>
                       <li>Varta AG</li>
                       <li>voxeljet AG</li>
                       <li>Wacker Chemie AG</li>
                       <li>Zeal Network SE</li>
                     </ul>
                </div>
               <div className='poland'>
                 <ul>
                     <h2 class="forAlignh2">Poland</h2>
     
                       <li>Celon Pharma S.A.</li>
                       <li>Genomtec S.A.</li>
                       <li>MedApp S.A.</li>
                       <li>Movie Games S.A.</li>
                       <li>PSynetktik S.A.</li>
                       <li>XTPL S.A.</li>
                     </ul>
               </div>
                <div className='estonia'>
                <ul>
                 <h2 class="forAlignh2">Estonia</h2>
 
                   <li>AS Tallink Grupp</li>
                
                 </ul>
                </div>
               </div>
               <div class="companyLower">
                   <ul>
                 <h2 class="forAlignh2">Italy</h2>
 
                       <li>Seco SpA</li>
                      
                     </ul>
                      <ul>
                 <h2 class="forAlignh2">Finland</h2>
 
                       <li>Multitude SE</li>
                     
                     </ul>
               </div>
            </div>
          </div> */}
           </div>
           {/* <!-- ----    COMPANY _- END      ---- --> */}
           <li id="SectorsHover"><a class="ancher" href={'#'}>Sectors</a><span class="dropDown">⌄</span></li>
            <li id="IndexHover"><a class="ancher" href={'#'}>Index</a><span class="dropDown">⌄</span></li>
            <li id="VerticalHover"><a class="ancher" href={'#'}>Vertical</a><span class="dropDown">⌄</span></li>
            <li id="SpeakerHover"><a class="ancher" href={'#'}>Speaker</a><span class="dropDown">⌄</span></li>
            <li id="AboutHover"><a class="ancher" href={'#'}>About</a><span class="dropDown">⌄</span></li>
            <li id="BlogHover"><a class="ancher" href={'#'}>Blog</a><span class="dropDown">⌄</span></li>
        </ul>
        <div>
            <input type="checkbox" id="check" />
            <label for="check" className="iconblock">
                <i className="bi bi-list menuicon " onClick={menuToggle} ></i>
                <i className="bi bi-x-circle x_symbole" onClick={menuToggle} ></i>

            </label>
            <i className="bi bi-search-heart-fill search"></i>
        </div>
    </div>
   </nav>
  )
}

export default MainNavbar   