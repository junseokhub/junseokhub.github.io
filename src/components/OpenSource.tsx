import { Container, Typography, Box, Paper, Grid } from "@mui/material";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import opensourceData from "../data/opensource.json";

interface OpenSourceItem {
  title: string;
  description: string[]; 
  tags: string[];
  link?: string;
}

function OpenSource() {
  const handleCardClick = (link?: string) => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Box id="opensource" component="section" sx={{ width: "100%" }}>
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
          sx={{ mb: 6, fontSize: "2em", color: "text.primary" }}
        >
          OpenSource
        </Typography>

        <Grid container spacing={{ xs: 4, md: 5 }}>
          {opensourceData.map((item: OpenSourceItem, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Paper
                elevation={0}
                onClick={() => handleCardClick(item.link)}
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: 4,
                  bgcolor: (theme) => theme.palette.mode === "dark"
                    ? "rgba(255, 255, 255, 0.03)"
                    : "rgba(0, 0, 0, 0.03)",
                  border: (theme) => `1px solid ${
                    theme.palette.mode === "dark" 
                      ? "rgba(255, 255, 255, 0.1)" 
                      : "rgba(0, 0, 0, 0.1)"
                  }`,
                  display: "flex",
                  flexDirection: "column",
                  transition: "0.3s",
                  cursor: item.link ? "pointer" : "default",
                  "&:hover": { 
                    transform: item.link ? "translateY(-8px)" : "none", 
                    boxShadow: (theme) => theme.palette.mode === 'dark' ? "0 8px 24px rgba(0,0,0,0.5)" : 4,
                    borderColor: item.link ? "#a370f7" : "divider"
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <IntegrationInstructionsIcon color="primary" sx={{ fontSize: 32, mr: 1.5 }} />
                  <Typography variant="h5" fontWeight="bold" sx={{ color: "text.primary" }}>
                    {item.title}
                  </Typography>
                </Box>

                <Box sx={{ flexGrow: 1, mb: 3 }}>
                  {item.description.map((desc, i) => (
                    <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                      <CheckCircleOutlineIcon 
                        sx={{ 
                          fontSize: 16, 
                          mr: 1.2, 
                          mt: '4px', 
                          color: "text.disabled" 
                        }} 
                      />
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          lineHeight: 1.7,
                          color: 'text.secondary', 
                          fontWeight: 500,
                          flex: 1,
                          wordBreak: "keep-all"
                        }}
                      >
                        {desc}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                
                <Box sx={{ mt: 'auto' }}>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {item.tags.map((tag, idx) => (
                      <Typography key={idx} variant="caption" sx={{ color: "#a370f7", fontWeight: 'bold' }}>
                        {tag}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default OpenSource;