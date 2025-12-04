import GitHubIcon from "@mui/icons-material/GitHub";
import "../assets/styles/Footer.scss"

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/junseokhub" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        {/* <a href="https://junseokoo.tistory.com" target="_blank" rel="noreferrer">
          <img 
            src="https://t1.daumcdn.net/tistory_admin/favicon/tistory_favicon_32x32.ico" 
            alt="Tistory" 
            style={{ width: "28px", height: "28px", marginTop: "2px" }} 
          />
        </a> */}
      </div>
      <p>Junseok Oh</p>
    </footer>
  );
}

export default Footer;