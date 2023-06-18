import React from "react";
// import heroImg from "../public/img/undraw_dev_focus.svg"
import heroImg from "../img/undraw_dev_focus.svg";
import Blog from "./Blog";
// import PhoneIcon from '@mui/icons-material/Phone';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Contact from "./Contact";
import Skill from "./Skill";

const Home = () => {
  return (
    <>
      {/* hero section */}
      <div className="container">
        <div className="row">
          <div className="col-50">
            <div className="row">
              <p className="hero-text center">
                <span>H!</span> I am Ami Frontend developer
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                  quos voluptatem similique? Assumenda, iusto. Quia dignissimos
                  asperiores harum modi officiis
                </p>
              </p>
            </div>
            <div className="row">
              <button className="btn-black center">Download Resume</button>
            </div>
          </div>
          <div className="col-50">
            <div className="row mt-20">
              <img src={heroImg} className="heroimg" alt="logo" />
            </div>
          </div>
        </div>
      </div>
      {/* End hero section */}

      {/* skill section */}
      <span id="skill">
        <Skill></Skill>
      </span>
      {/* End skill section */}

      {/* Footer Contact Section */}
      <span id="contact">
        <Contact></Contact>
      </span>
      {/* End footer contact section */}
    </>
  );
};

export default Home;
