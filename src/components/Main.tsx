import GitHubIcon from "@mui/icons-material/GitHub";
import "../assets/styles/Main.scss";
import { Button, Dialog, DialogActions, DialogTitle, type Theme } from "@mui/material";
import { useState } from "react";

function Main() {
  const [open, setOpen] = useState(false);

  const buttonSX = (theme: Theme) => ({
    borderRadius: "20px",
    border: "1px solid #c9a0f7",
    bgcolor: "transparent",
    color: theme.palette.mode === "dark" ? "#d0b7ff" : "#a370f7",
    transition: "all 0.2s ease",
    "&:hover": {
      bgcolor: "rgba(163, 112, 247, 0.25)",
      color: theme.palette.mode === "dark" ? "#f0e6ff" : "#5000ca",
      borderColor: "#5000ca",
    },
  });

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/portfolio.pdf";
    link.download = "오준석(포트폴리오).pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setOpen(false);
  };

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
          <p>BackEnd Developer</p>
          <br></br>
          <p style={{ fontSize: "20px" }}>
            Phone: {" "}
            <a href="tel:010-6657-2531" style={{ color: "inherit", textDecoration: "none" }}>
              010-6657-2531
            </a>
          </p>

          <p style={{ fontSize: "20px" }}>
            Email: {" "}
            <a href="mailto:work.ditto909@passmail.net" style={{ color: "inherit", textDecoration: "none" }}>
              work.ditto909@passmail.net
            </a>
          </p>
          
          <Button
            component="a"
            onClick={() => setOpen(true)}
            variant="outlined"
            sx={{
              mt: 2,
              borderRadius: "20px",
              px: 4,
              borderColor: "#a370f7",
              color: "#a370f7",
              "&:hover": {
                borderColor: "#5000ca",
                bgcolor: "rgba(163, 112, 247, 0.05)",
              },
              }}
            >
            Portfolio PDF Download
          </Button>
          
         <Dialog
          open={open}
          onClose={() => setOpen(false)}
          slotProps={{
            paper: {
              sx: {
                borderRadius: "20px",
                border: (theme) =>
                  theme.palette.mode === "dark"
                    ? "1px solid rgba(255,255,255,0.12)"
                    : "1px solid rgba(0,0,0,0.12)",
                bgcolor: (theme) =>
                  theme.palette.mode === "dark"
                    ? "black"
                    : "#ffffff",
                color: (theme) =>
                  theme.palette.mode === "dark"
                    ? "#ffffff"
                    : "#555555",
              },
            },
          }}
        >
          <DialogTitle
            sx={{
              fontSize: "1.1rem",
              fontWeight: 600,
              textAlign: "center",
              color: (theme) =>
                theme.palette.mode === "dark" ? "#ffffff" : "#555555",
            }}
          >
            포트폴리오를 다운로드 하시겠습니까?
          </DialogTitle>

          <DialogActions
            sx={{
              justifyContent: "center",
              pb: 2,
              gap: 2,
            }}
          >
            <Button
              onClick={() => setOpen(false)}
              sx={buttonSX}
            >
              아니오
            </Button>

            <Button
              onClick={handleDownload}
              sx={buttonSX}
            >
              예
            </Button>
          </DialogActions>
        </Dialog>

          <div className="mobile_social_icons">
            <a href="https://github.com/junseokhub" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default Main;