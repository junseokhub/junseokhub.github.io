import { useRef } from "react";
import "../assets/styles/Contact.scss";
import { Box, Button, CircularProgress, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Backdrop from "@mui/material/Backdrop"; 

import Alert from "@mui/material/Alert"; 
import Snackbar from "@mui/material/Snackbar";

import { useContactForm } from "../hooks/useContactForm";

function Contact() {
  const {
    name, setName, nameError,
    email, setEmail, emailError,
    message, setMessage, messageError,
    handleSubmit,
    loading,
    alertOpen, alertSeverity, alertMessage, handleAlertClose
  } = useContactForm();

  const form = useRef<HTMLFormElement>(null);

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          {/* <p>Got a project waiting to be realized? Let"s collaborate and make it happen!</p> */}
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={handleSubmit} 
          >
            <div className="form-flex">
              <TextField
                required
                id="outlined-required-name" 
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={setName}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="outlined-required-email" 
                label="Email"
                placeholder="How can I reach you?"
                value={email}
                onChange={setEmail}
                error={emailError}
                helperText={emailError ? "Please check your email" : ""}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static" 
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={setMessage}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <Button 
              type="submit" 
              variant="contained" 
              endIcon={<SendIcon />} 
              disabled={loading}
            >
              Send
            </Button>
          </Box>
        </div>
      </div>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading} 
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleAlertClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleAlertClose} severity={alertSeverity} sx={{ width: "100%" }}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Contact;