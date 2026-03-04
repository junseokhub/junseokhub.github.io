import { Box, Container, Typography, Chip, Paper, Grid } from "@mui/material";
import expertiseData from "../data/expertise.json";
interface ExpertiseItem {
  title: string;
  description: string;
  techStack: string[];
}

function Expertise() {
  return (
    <Box id="expertise" component="section" sx={{ width: "100%" }}>
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
          sx={{ mb: 8, fontSize: "2em", color: "text.primary" }}
        >
          Expertise
        </Typography>

        <Grid container spacing={{ xs: 4, md: 5 }}>
          {expertiseData.map((item: ExpertiseItem, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: 4,
                  bgcolor: (theme) => theme.palette.mode === 'dark' ? "rgba(255, 255, 255, 0.03)" : "#fdfdfd",
                  border: "1px solid",
                  borderColor: "divider",
                  display: "flex",
                  flexDirection: "column",
                  transition: "0.3s",
                  "&:hover": { 
                    transform: "translateY(-8px)", 
                    boxShadow: (theme) => theme.palette.mode === 'dark' ? "0 8px 24px rgba(0,0,0,0.5)" : 4,
                    borderColor: "#a370f7"
                  }
                }}
              >
                <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, color: "text.primary" }}>
                  {item.title}
                </Typography>
                
               <Typography
                    component="span" 
                    variant="body2" 
                    sx={{ color: "text.secondary", whiteSpace: "pre-line", display: "block" }}
                  >
                  {item.description}
                </Typography>
                
                <Box>
                  <Typography variant="caption" sx={{ display: 'block', mb: 1, color: "#a370f7", fontWeight: 'bold' }}>
                    Tech stack:
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {item.techStack.map((label, idx) => (
                      <Chip 
                        key={idx} 
                        label={label} 
                        size="small"
                        variant="outlined"
                        sx={{ 
                          color: "text.primary", 
                          borderColor: "divider",
                          fontSize: '0.75rem',
                          transition: "0.2s",
                          "&:hover": { bgcolor: "rgba(163, 112, 247, 0.1)", borderColor: "#a370f7" }
                        }} 
                      />
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

export default Expertise;