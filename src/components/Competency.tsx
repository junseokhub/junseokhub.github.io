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
    managing: <StarsIcon color="primary" />,
    legacy: <EngineeringIcon color="secondary" />,
    performance: <TerminalIcon color="success" />,
    infrastructure: <CloudQueueIcon color="info" />,
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
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
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
                <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 1.5 }}>
                  {ICON_MAP[group.iconKey as keyof typeof ICON_MAP]}
                  <Typography variant="h5" fontWeight="700" >
                    {group.title}
                  </Typography>
                </Box>
                


               <List disablePadding>
                {group.items.map((item, idx) => (
                  <ListItem key={idx} disableGutters sx={{ alignItems: "flex-start", py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 32, mt: 0.5 }}>
                      <CheckCircleOutlineIcon sx={{ fontSize: 16, color: "text.disabled" }} />
                    </ListItemIcon>
                    
                    <ListItemText 
                      primary={
                        <Box component="span" sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1 }}>
                          <Typography 
                            component="span" 
                            variant="body2" 
                            sx={{ color: "text.secondary", whiteSpace: "pre-line" }}
                          >
                            {item.content}
                          </Typography>
                          
                          {item.duration && (
                            <Typography 
                              component="span" 
                              sx={{ 
                                fontSize: "0.75rem", 
                                color: "#a370f7", 
                                bgcolor: (theme) => theme.palette.mode === 'dark' ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
                                px: 0.8,
                                py: 0.2,
                                borderRadius: 3
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
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Competency;