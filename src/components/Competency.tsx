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

        <Grid container spacing={4} alignItems="stretch">
          {competenciesData.map((group, index) => (
            <Grid 
              size={{ xs: 12, md: 6 }}
              key={index}
              sx={{ display: "flex" }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4, 
                  width: "100%",
                  height: "100%",
                  borderRadius: 4,
                  bgcolor: (theme) => theme.palette.mode === 'dark' ? "rgba(255, 255, 255, 0.03)" : "#fdfdfd",
                  border: "1px solid",
                  borderColor: "divider",
                  transition: "0.3s",
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": { 
                    transform: "translateY(-5px)",
                    boxShadow: (theme) => theme.palette.mode === 'dark' ? "0 8px 24px rgba(0,0,0,0.5)" : 4,
                    borderColor: "#a370f7",
                  }
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 3, gap: 2 }}>
                  {ICON_MAP[group.iconKey as keyof typeof ICON_MAP]}
                  <Typography variant="h5" fontWeight="800">
                    {group.title}
                  </Typography>
                </Box>
                
                <List disablePadding>
                  {group.items.map((item, idx) => (
                    <ListItem key={idx} disableGutters sx={{ alignItems: "flex-start", py: 0.7 }}>
                      <ListItemIcon sx={{ minWidth: 32, mt: 0.7 }}>
                        <CheckCircleOutlineIcon sx={{ fontSize: 18, color: "text.disabled" }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={
                          <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                            <Typography variant="body1" sx={{ color: "text.secondary", whiteSpace: "pre-line" }}>
                              {item.content}
                            </Typography>
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