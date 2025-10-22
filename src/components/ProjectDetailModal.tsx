import React from "react";
import { Modal, Box } from "@mui/material";
import ReactMarkdown from "react-markdown";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import type { MouseEvent } from "react";
import type { CustomLinkProps, ProjectDetailModalProps } from "./types/projectType";
import { useMarkdownNavigation } from "../hooks/useMarkdownNavigationProps";

export const ProjectDetailModal = (props: ProjectDetailModalProps) => {
   const { open, onClose, selectedProject, markdownContent, loading, error } = props;

  const {
    displayedMarkdown,
    loadingMd,
    errorMd,
    historyStack,
    handleLinkClick,
    handleBackClick,
  } = useMarkdownNavigation({ initialMarkdown: markdownContent, open });

  const CustomLink = ({ href, children, ...rest }: CustomLinkProps) => {
    const isInternal = href?.startsWith("./");

    const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
      if (isInternal && href) {
        e.preventDefault();
        handleLinkClick(href);
      }
    };

    return (
      <a
        href={href}
        onClick={onClick}
        {...rest}
        style={{ cursor: isInternal ? "pointer" : undefined, ...rest.style }}
      >
        {children}
      </a>
    );
  };

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
          position: "relative",
          p: 3,
        }}
      >
        {historyStack.length > 0 && (
          <IconButton
            aria-label="back"
            onClick={handleBackClick}
            sx={{ position: "absolute", left: 8, top: 8, color: (theme) => theme.palette.grey[500], zIndex: 1 }}
          >
            <ArrowBackIcon />
          </IconButton>
        )}

        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8, color: (theme) => theme.palette.grey[500], zIndex: 1 }}
        >
          <CloseIcon />
        </IconButton>

        {selectedProject && (
          <>
            {(loading || loadingMd) && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "100px",
                  p: 2,
                }}
              >
                <CircularProgress />
              </Box>
            )}

            {(error || errorMd) && (
              <Alert severity="error" sx={{ my: 2 }}>
                {error || errorMd}
              </Alert>
            )}

            {!loading && !error && !loadingMd && !errorMd && displayedMarkdown && (
              <ReactMarkdown components={{ a: CustomLink }}>{displayedMarkdown}</ReactMarkdown>
            )}
            {!loading && !error && !loadingMd && !errorMd && !displayedMarkdown && (
              <Alert severity="info" sx={{ my: 2 }}>
                표시할 내용이 없습니다. 😢
              </Alert>
            )}
          </>
        )}
      </Box>
    </Modal>
  );
};