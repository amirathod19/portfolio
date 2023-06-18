import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Contact = () => {
    return (
        <>
        {/* footer Contact section */}
       <div className="container bg-black txtc-white">
        {/* <div className="row"> */}
          <div className=" txt-aling-center p-20">
          <span className="icone-custom"><PhoneIcon></PhoneIcon> <span className="pt-10">+91 9737635519</span></span>
          <span className="icone-custom"><GitHubIcon ></GitHubIcon></span>
          <span className="icone-custom"><LinkedInIcon></LinkedInIcon></span>
          </div>
          
        {/* </div> */}
      </div>
      {/* end footer contact */}
        </>
    );
};

export default Contact;