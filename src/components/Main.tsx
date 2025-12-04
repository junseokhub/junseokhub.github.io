import GitHubIcon from "@mui/icons-material/GitHub";
import "../assets/styles/Main.scss";

function Main() {

  return (
    <div id="main">
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          {/* <img src="" alt="Avatar" /> */}
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/junseokhub" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            {/* <a href="https://junseokoo.tistory.com/" target="_blank" rel="noreferrer">
              <img 
                src="https://t1.daumcdn.net/tistory_admin/favicon/tistory_favicon_32x32.ico" 
                alt="Tistory" 
              />
            </a> */}
          </div>
          <h1>오준석</h1>
          <p>Backend Developer</p>
          <br></br>
          <p style={{ fontSize: "20px" }}>
            Phone: 
            <a href="tel:010-6657-2531" style={{ color: "inherit", textDecoration: "none" }}>
              010-6657-2531
            </a>
          </p>

          <p style={{ fontSize: "20px" }}>
            Email: 
            <a href="mailto:work.ditto909@passmail.net" style={{ color: "inherit", textDecoration: "none" }}>
              work.ditto909@passmail.net
            </a>
          </p>

          <div className="mobile_social_icons">
            <a href="https://github.com/junseokhub" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            {/* <a href="https://junseokoo.tistory.com/" target="_blank" rel="noreferrer">
              <img 
                src="https://t1.daumcdn.net/tistory_admin/favicon/tistory_favicon_32x32.ico" 
                alt="Tistory" 
              />
            </a> */}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Main;