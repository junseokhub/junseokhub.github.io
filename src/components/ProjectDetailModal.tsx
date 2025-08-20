import { Modal, Box, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import type { ProjectDetailModalProps } from "./types/projectType"; 

export const ProjectDetailModal = (props: ProjectDetailModalProps) => { 
  const { open, onClose, selectedProject, markdownContent, loading, error } = props;

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        className="modal-content-box"
        sx={{
          bgcolor: "background.paper",
          color: "text.primary",
        }}
      >
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        
        {selectedProject && (
          <>
            {loading && <Typography className="modal-status-text" sx={{ color: "text.primary" }}>Loading...</Typography>}
            {error && <Typography className="modal-status-text error" sx={{ color: "error.main" }}>{error}</Typography>}
            {!loading && !error && markdownContent && (
              <ReactMarkdown >{markdownContent}</ReactMarkdown>
            )}
          </>
        )}
      </Box>
    </Modal>
  );
};