import React from "react";
// import brand from "../../Assets/seat-white.png";
import brand from "../Assets/seat-white.png";
import "../style/navbar.css";

const Navbar = () => {
  const toggleBar = (e) => {
    console.log(e);
    let nav_list = document.getElementsByClassName("nav_list");
    // console.log(nav_list);
    console.log(nav_list[0].children[1]);
    console.log(nav_list[0].children[1].classList.toggle("toggle"));
    // nav_list[0].children[1].classList.toggle('navToggle')
    // console.log(nav_list[0].children);
    // console.log(nav_list.children);
  };

  return (
    <div id="nav__container_blog">
      <nav className=" bg-black" style={{ height: "5rem" }}>
        <div
          className="navlist d-flex justify-content-around align-item-center pl-2 pr-2" style={{height:'100%',alignItems: 'center',padding: '1rem 0px 1rem 0px'}}>
          <label className="logo">
            <img src={brand} alt="logo" width="140px" height="auto" />
          </label>

          <ul
            className="nav_list d-flex align-items-center text-light gap-3"
            style={{listStyle: "none"}}>
            <span className="menuIcon">
              
              <i className="bi bi-menu-up" onClick={toggleBar.bind(this)}></i>
            </span>
            <div id="li_blog" className="li_blog toggle">
              <li className="list-item" id="companyHover">
                <a className="nav-link" href={"#"}>
                  Company
                </a>
              </li>
              <li className="list-item" id="SectorsHover">
                <a className="nav-link" href={"#"}>
                  Sectors
                </a>
              </li>
              <li className="list-item" id="IndexHover">
                <a className="nav-link" href={"#"}>
                  Index
                </a>
              </li>
              <li className="list-item" id="VerticalHover">
                <a className="nav-link" href={"#"}>
                  Vertical
                </a>
              </li>
              <li className="list-item" id="SpeakerHover">
                <a className="nav-link" href={"#"}>
                  Speaker
                </a>
              </li>
              <li className="list-item" id="AboutHover">
                <a className="nav-link" href={"#"}>
                  About
                </a>
              </li>
              <li className="list-item" id="BlogHover">
                <a className="nav-link" hhref={"#"}>
                  Blog
                </a>
              </li>
            </div>
          </ul>
          <span className="search_icon">
            <i className="bi bi-search"></i>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

//  const menuToggle=()=>{
//   const menubtn = document.querySelector(".menuicon")
//   const listContainer = document.querySelector('.listContainer')
//   listContainer.classList.toggle('listContainercontent')
//   console.dir(menubtn);
//   console.dir(typeof menubtn.className);
//   menubtn.addEventListener("click",(e)=>{
//     console.log(e.target.classList);
//     console.log(e.target.classList[2]);
//     console.log(e.target.classList);

//   })
// }

// menubtn.addEventListener("click",()=>{

//     listContainer.classList.toggle('listContainercontent')
// console.log(listContainer);

// })
