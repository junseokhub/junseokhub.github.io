import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          {/* <img src="" alt="Avatar" /> */}
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer">
              <img 
                src="https://t1.daumcdn.net/tistory_admin/favicon/tistory_favicon_32x32.ico" 
                alt="Tistory" 
                style={{ width: '30px', height: '30px', marginTop: '2px' }} 
              />
            </a>
          </div>
          <h1>오준석</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer">
              <img 
                src="https://t1.daumcdn.net/tistory_admin/favicon/tistory_favicon_32x32.ico" 
                alt="Tistory" 
                style={{ width: '30px', height: '30px', marginTop: '2px' }} 
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;