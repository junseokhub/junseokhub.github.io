import { Box, Container, Typography, Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import "react-vertical-timeline-component/style.min.css";
import experienceData from "../data/experience.json";

function Timeline() {
  return (
    <Box id="experience" component="section" sx={{ width: "100%" }}>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          py: "5%",
          px: { xs: "5%", md: "10%" },
        }}
      >
        <Typography 
          variant="h3" 
          fontWeight="bold" 
          sx={{ mb: 6, fontSize: "2em", color: "text.primary", textAlign: "left" }}
        >
          Experience
        </Typography>

        <VerticalTimeline lineColor="#a370f7">
          {experienceData.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{ 
                background: "transparent",
                boxShadow: "none", 
                padding: 0 
              }}
              contentArrowStyle={{ borderRight: "7px solid rgba(163, 112, 247, 0.5)" }}
              date={exp.period}
              iconStyle={{ background: "#5000ca", color: "#fff" }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
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
                <h3 style={{ margin: 0, fontWeight: 'bold', color: 'inherit', fontSize: '1.6em' }}>{exp.company}</h3>
                <h4 style={{ color: '#a370f7', marginTop: '5px', fontWeight: '600' }}>{exp.position}</h4>

                <Box component="div" sx={{ mt: 2 }}>
                  {exp.descriptions.map((desc, i) => (
                    <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', mb: 0.4 }}>
                      <CheckCircleOutlineIcon 
                        sx={{ 
                          fontSize: 16, 
                          mr: 1.4, 
                          mt: '19px',
                          color: "text.disabled",
                        }} 
                      />
                      
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          fontSize: '0.9rem', 
                          lineHeight: 1.7, 
                          color: "text.secondary",
                          fontWeight: 500,
                          flex: 1,
                          wordBreak: 'keep-all'
                        }}
                      >
                        {desc}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Container>
    </Box>
  );
}

export default Timeline;