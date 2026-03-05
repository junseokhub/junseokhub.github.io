import React, { useState } from "react";
import { 
  Container, Typography, Box, Paper, Grid, Link, Pagination, 
  Tooltip
} from "@mui/material";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import LaunchIcon from "@mui/icons-material/Launch";
import projectData from "../data/project.json";

interface ProjectItem {
  name: string;
  role: string; 
  duration: string;
  content: string;
  link?: string;
}

function Project() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const pageCount = Math.ceil(projectData.length / itemsPerPage);

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    document.getElementById("project")?.scrollIntoView({ behavior: "smooth" });
  };

  const displayedProjects = projectData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Box id="project" component="section" sx={{ width: "100%", bgcolor: "transparent" }}>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          py: "5%",
          px: { xs: "5%", md: "10%" },
          textAlign: "left",
        }}
      >
        <Typography 
          variant="h3" 
          fontWeight="bold" 
          sx={{ mb: 6, fontSize: "2em" }}
        >
          Projects
        </Typography>

        <Grid container spacing={4} alignItems="stretch">
          {displayedProjects.map((item: ProjectItem, index) => (
             <Grid size={{ xs: 12, md: 4 }} key={index} sx={{ display: 'flex' }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  width: "100%",
                  height: "100%",
                  minHeight: "240px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between", 
                  borderRadius: 4,
                  bgcolor: (theme) => theme.palette.mode === 'dark' ? "rgba(255, 255, 255, 0.03)" : "#fdfdfd",
                  border: "1px solid",
                  borderColor: "divider",
                  transition: "0.3s",
                  "&:hover": { 
                    transform: "translateY(-8px)", 
                    boxShadow: (theme) => theme.palette.mode === 'dark' ? "0 8px 24px rgba(0,0,0,0.5)" : 4,
                    borderColor: "#a370f7"
                  }
                }}
              >
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      mb: 1
                    }}
                  >
                    <Box sx={{ display: "flex", gap: 1.5 }}>
                      <FolderOpenIcon sx={{ color: "#a370f7", mt: "4px" }} />
                      <Typography variant="h6" fontWeight="bold">
                        {item.name}
                      </Typography>
                    </Box>
                    {item.link && (
                      <Link
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: "text.disabled",
                          "&:hover": { color: "#a370f7" }
                        }}
                      >
                        <LaunchIcon sx={{ fontSize: 20 }} />
                      </Link>
                    )}
                  </Box>

                  <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", fontWeight: 600 }}
                      >
                        {item.role}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: "#a370f7" }}
                      >
                        {item.duration}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.7,
                        whiteSpace: "pre-line",
                        wordBreak: "break-word",
                        overflowWrap: "break-word"
                      }}
                    >
                      {item.content}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {pageCount > 1 && (
          <Box sx={{ mt: 8, display: 'flex', justifyContent: 'center' }}>
            <Pagination 
              count={pageCount} 
              page={page} 
              onChange={handleChange} 
              color="secondary"
              sx={{
                '& .MuiPaginationItem-root': {
                  color: 'text.secondary',
                  '&.Mui-selected': {
                    bgcolor: '#a370f7',
                    color: '#fff',
                    '&:hover': {
                      bgcolor: '#8b56e0',
                    }
                  }
                }
              }}
            />
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default Project;