import React from "react";
import '../style/Footer.css' ;
const Footer = () => {
  return (
    <div className="FooterContainer w-100 d-flex">
      {" "}
      {/* footerContainer-start */}
      {/* footert-firstContainer-start */}
      <div className="footert-firstContainer">
        <div className="header d-block">
          <h4>companies :</h4>
        </div>
        <div className="leftContainer d-flex ">
          <div className="LeftfirstTop">
            <p>Austria:</p>
            <ul>
              <li>Palfinger AG</li>
              <li> Pierer Mobility AG</li>
              <li>Polytec Group</li>
              <li>Kontron AG</li>
            </ul>
            <p>Estonia:</p>
            <ul>
              <li>AS Tallink Grupp</li>
            </ul>
            <p>Finland:</p>
            <ul>
              <li>Multitude SE</li>
            </ul>
            <p>Germany:</p>
            <ul>
              <li>Aixtron SE</li>
              <li> Brain Biotech AG</li>
              <li>Carl Zeiss Meditec AG</li>
              <li>Deutz AG</li>
              <li>Edag Engineering Group AG</li>
              <li>ElringKlinger AG</li>
              <li>Encavis AG</li>
              <li>Energiekontor AG</li>
            </ul>
          </div>
          <div className="LeftfirstSecond">
            <p>Germany:</p>
            <ul>
              <li>Aixtron SE</li>
              <li> Brain Biotech AG</li>
              <li>Carl Zeiss Meditec AG</li>
              <li>Deutz AG</li>
              <li>Edag Engineering Group AG</li>
              <li>ElringKlinger AG</li>
              <li>Encavis AG</li>
              <li>Energiekontor AG</li>
            </ul>
          </div>
        </div>
      </div>
      {/* footert-firstContainer-end */}
      {/* footert-secondContainer-start */}
     <div className="right-sider">
     <div className="footert-secondContainer ">
        <div className="header d-block">
          <h4>Index :</h4>
        </div>
        <div className=" RightSideBlog d-flex ">
          <div className="RightSideFirstBlogFirstSide">
            <p>Austria:</p>
            <ul>
              <li>ATXG</li>
            </ul>
            <p>Estonia:</p>

            <ul>
              <li>AS Tallink Grupp</li>
            </ul>
            <p>Switzerland</p>
            <ul>
              <li>SPI</li>
            </ul>
            <p>USA</p>
            <ul>
              <li>Nasdaq</li>
            </ul>
          </div>
          <div className="RightSideFirstBlogSecondSide">
            <p>Germany:</p>

            <ul>
              <li>MDAX</li>
              <li> CDAX</li>
              <li> SDAX</li>
              <li>SCALE</li>
            </ul>
            <p>Poland:</p>

            <ul>
              <li>NCDIndex</li>
              <li> SWIG</li>
              <li> WIG</li>
            </ul>
          </div>
        </div>
      </div>
      {/* footert-secondContainer-end */}
      {/* footert-thirdContainer-start */}
      <div className="footert-thirdContainer">
        <div className="header d-block">
          <h4>Vertical :</h4>
        </div>

        <div className="leftSideSecondBlog">
          <p>Italy:</p>
          <ul>
            <li>Elevator Pitch</li>
            <li>Company Presentation</li>
            <li>Financial Results</li>
            <li>ESG</li>
            <li>Deep Dive</li>
          </ul>
          <p>Austria:</p>
          <ul>
            <li>Celon Pharma S.A.</li>
            <li> Genomtec S.A.</li>
            <li>MedApp S.A.</li>
            <li>Movie Games S.A.</li>
            <li>Synektik S.A.</li>
            <li>XTPL S.A.</li>
          </ul>
        </div>
      </div>
     </div>
      {/* footert-thirdContainer-end */}
      {/* footerContainer-end */}
    </div>
  );
};

export default Footer;

