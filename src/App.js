import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Navbar from "./views/Navbar";
import VideoContent from "./views/Video_content";
import DiscoverInves from "./views/Discover_inves";
import LogoSlider from "./views/LogoSlider";

import Presentation from "./views/Presentation";
import Sector from "./views/Sector";
import Trending from "./views/Trending";
import ProfileContainer from "./views/ProfileContainer";
import Blog from "./views/Blog";
import Footer from "./views/Footer";
import MainNavbar from "./views/ManiNavbar";
// import presentationData from "./views/Routes/PresentationData";

function App() {

  return (
    <div id="container">
      {/* <Navbar /> */}
      <MainNavbar/>
      <div id="body_Component">
        <VideoContent />
        <DiscoverInves />
        <LogoSlider />
        {/* <RouterProvider router={router}/> */}
        <Presentation />
        <Sector/>
        <Trending/>
        <ProfileContainer/>
        <Blog/>
       <div className="footer">
       <Footer/>
       </div>
         
      </div>
    </div>
  );
}

export default App;
