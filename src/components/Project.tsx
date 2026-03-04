import { Container, Typography, Box, Paper, List, ListItem, ListItemText, Grid, Link } from "@mui/material";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import LaunchIcon from "@mui/icons-material/Launch";
import projectData from "../data/project.json";

interface ProjectItem {
  name: string;
  duration: string;
  content: string;
  link?: string;
}

function Project() {
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
          {projectData.map((item: ProjectItem, index) => (
           <Grid size={{ md: 4 }} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  width: "100%",
                  borderRadius: 4,
                  bgcolor: (theme) => theme.palette.mode === 'dark' ? "rgba(255, 255, 255, 0.03)" : "#fdfdfd",
                  border: "1px solid",
                  borderColor: "divider",
                  transition: "0.3s",
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": { 
                    transform: "translateY(-8px)", 
                    boxShadow: (theme) => theme.palette.mode === 'dark' ? "0 8px 24px rgba(0,0,0,0.5)" : 4,
                    borderColor: "#a370f7"
                  }
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <FolderOpenIcon sx={{ color: "#a370f7" }} />
                    <Typography variant="h5" fontWeight="700">
                      {item.name}
                    </Typography>
                  </Box>
                  
                  {item.link && (
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: "text.disabled", "&:hover": { color: "#a370f7" } }}
                    >
                      <LaunchIcon sx={{ fontSize: 20 }} />
                    </Link>
                  )}
                </Box>

                <List disablePadding sx={{ flexGrow: 1 }}>
                  <ListItem disableGutters sx={{ alignItems: "flex-start", py: 0.5 }}>
                    <ListItemText 
                      primary={
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                          <Typography 
                            variant="caption"
                            sx={{ 
                              alignSelf: 'flex-start',
                              color: "#a370f7", 
                              bgcolor: (theme) => theme.palette.mode === 'dark' ? "rgba(163, 112, 247, 0.1)" : "rgba(163, 112, 247, 0.05)",
                              px: 1,
                              py: 0.2,
                              borderRadius: 3
                            }}
                          >
                            {item.duration}
                          </Typography>
                          
                          <Typography 
                            variant="body2" 
                            sx={{ color: "text.secondary", whiteSpace: "pre-line", lineHeight: 1.7 }}
                          >
                            {item.content}
                          </Typography>
                        </Box>
                      }
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Project;