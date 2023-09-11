// import "./css_floders/VideoContainer.css";
import '../style/VideoContainer.css'
import tapImg from "../Assets/Video_Content/tap_pic.png";
import vid1 from "../Assets/Video_Content/vid_1.jpg";

function Video_content() {
  return (
    <div className="video_Container">
    <div id="backTap">
     <img src={tapImg} />
     <div id="carouselExampleFade" className="carousel slide carousel fade">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={vid1} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={vid1} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={vid1} className="d-block w-100" alt="..."/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
       
    </div>
   </div>
  );
}

export default Video_content;