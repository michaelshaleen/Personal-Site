import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import React from 'react';
import Button from '../Button/Button';



function Footer() {

  const gitHub = () => {
    window.open("https://github.com/michaelshaleen")
  }

  const linkedIn = () => {
    window.open("https://www.linkedin.com/in/michael-s-57a181188/")
  }
  return (<>
  <div className="footer">

      <div className="hero-container">
      {/* <video src="/nature.mp4" autoPlay loop muted style={{width:"100%"}}/> */}
      <div className="motto">
        The finish line is halfway
      </div>
      <div className="hero-btns">
            <a href="#"
              onClick={gitHub}>
              <GitHubIcon />
            </a>
        <Button 
          className="btn" 
          buttonStyle="btn--outline"
          buttonSize="btn--large" >
            Connect
        </Button>
            <a href="#"
              onClick={linkedIn}>
              <LinkedInIcon />
            </a>
      </div>
    </div>
            </div>
</>  )
}

export default Footer;
