import React ,{useState} from 'react'
import "../../../style/Presentation.css";
// import presentationData from "../../../Local_Json/Presentation.json";
import presentationData from "../../../Local_Json/Sectors.json";

const Healthcare = () => {
    const [presData] = useState(presentationData);
    return (
      // <div className="row">
         <div className="container financialResults d-flex flex-wrap">
  
  
          {
            presData.map((data,index)=>{
             return(
              
              <div className="card col-xl-3 col-lg-3 col-md-6 col-sm-10 col-10">
              <div className="card-body">
              
                  <ul key={index}>
                       <img src={data.image} className="card-img-top" alt="..." />
                       <p className="card-text">{data.presentationDetails}</p>
                        <ul className="insideUl">
   
                        <li>{data.presentationTap.tap1}</li>
                       <li>{data.presentationTap.tap2}</li>
                       <li>{data.presentationTap.tap3}</li>
                       </ul>
                      </ul>
                      </div>
                      </div>
             )
            })
          }
         
      </div>
      // </div>
    );
}
export default Healthcare