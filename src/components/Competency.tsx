import { Container, Typography, Box, Paper, List, ListItem, ListItemText, ListItemIcon, Grid } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import StarsIcon from "@mui/icons-material/Stars";
import TerminalIcon from "@mui/icons-material/Terminal";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import EngineeringIcon from "@mui/icons-material/Engineering";
import competenciesData from "../data/competency.json";
import type { ReactElement } from "react";

function Competency() {
  const ICON_MAP: Record<string, ReactElement> = {
    managing: <StarsIcon sx={{ fontSize: 28 }} color="primary" />,
    legacy: <EngineeringIcon sx={{ fontSize: 28 }} color="secondary" />,
    performance: <TerminalIcon sx={{ fontSize: 28 }} color="success" />,
    infrastructure: <CloudQueueIcon sx={{ fontSize: 28 }} color="info" />,
  };

  return (
    <Box id="competency" component="section" sx={{ width: "100%", bgcolor: "transparent" }}>
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
          Competency
        </Typography>

        <Grid container spacing={4}>
          {competenciesData.map((group, index) => (
            <Grid  size={{ xs: 12, md: 6}} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4, 
                  height: "450px",
                  borderRadius: 4,
                  bgcolor: (theme) => theme.palette.mode === 'dark' ? "rgba(255, 255, 255, 0.03)" : "#fdfdfd",
                  border: "1px solid",
                  borderColor: "divider",
                  transition: "0.3s",
                  display: "flex",
                  flexDirection: "column",
                  scrollbarGutter: "stable",
                  "&:hover": { 
                    transform: "translateY(-5px)",
                    boxShadow: (theme) => theme.palette.mode === 'dark' ? "0 8px 24px rgba(0,0,0,0.5)" : 4,
                    borderColor: "#a370f7",
                    "& .scrollbar-area::-webkit-scrollbar-thumb": {
                      backgroundColor: "rgba(163, 112, 247, 0.4)", 
                    }
                  }
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 3, gap: 2 }}>
                  {ICON_MAP[group.iconKey as keyof typeof ICON_MAP]}
                  <Typography variant="h5" fontWeight="800">
                    {group.title}
                  </Typography>
                </Box>

                <Box 
                  className="scrollbar-area"
                  sx={{ 
                    flexGrow: 1, 
                    overflowY: "auto",
                    pr: 1,
                    "&::-webkit-scrollbar": { 
                      width: "5px" 
                    },
                    "&::-webkit-scrollbar-thumb": {
                      backgroundColor: "transparent", 
                      borderRadius: "10px",
                      transition: "background-color 0.3s",
                    },
                    "&::-webkit-scrollbar-track": {
                      backgroundColor: "transparent",
                    }
                  }}
                >
                  <List disablePadding>
                    {group.items.map((item, idx) => (
                      <ListItem key={idx} disableGutters sx={{ alignItems: "flex-start", py: 1 }}>
                        <ListItemIcon sx={{ minWidth: 32, mt: 0.5 }}>
                          <CheckCircleOutlineIcon sx={{ fontSize: 18, color: "text.disabled" }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                              <Typography variant="body1" sx={{ color: "text.secondary", fontWeight: 500 }}>
                                {item.content}
                              </Typography>
                              {item.duration && (
                                <Typography 
                                  sx={{ 
                                    fontSize: "0.75rem", 
                                    fontWeight: 700,
                                    color: "#a370f7", 
                                    bgcolor: (theme) => theme.palette.mode === 'dark' ? "rgba(163, 112, 247, 0.1)" : "rgba(163, 112, 247, 0.05)",
                                    px: 1, py: 0.3, borderRadius: 1
                                  }}
                                >
                                  {item.duration}
                                </Typography>
                              )}
                            </Box>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Competency;