import { useState } from "react";
import { Box, Container, Typography, Button, Collapse } from "@mui/material";
import aboutData from "../data/about.json";

function About() {
  const [expanded, setExpanded] = useState(false);

  const toggleContent = () => {
    setExpanded(prev => !prev);
  };

  const bodyTextStyle = {
    color: (theme: any) => `${theme.palette.text.secondary} !important`,
    fontWeight: 500,
    lineHeight: 1.8,
    wordBreak: "keep-all" as const,
    flex: 1
  };

  const sectionTitleStyle = {
    color: "text.primary",
    fontWeight: 700,
    mt: 4,
    mb: 1
  };

  return (
    <Box 
      id="about" 
      component="section" 
      sx={{ 
        width: "100%", 
        py: "5%",
        bgcolor: "transparent" 
      }}
    >
      <Container
        disableGutters
        maxWidth={false}
        sx={{ px: { xs: "5%", md: "10%" }, textAlign: "left" }}
      >
        <Typography 
          variant="h3" 
          fontWeight="bold" 
          sx={{ mb: 4, fontSize: "2em", color: "text.primary" }}
        >
          About Me
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
          <Typography variant="body1" sx={{ ...bodyTextStyle, fontSize: "1.1rem" }}>
            안녕하세요! 두려움 없이 도전에 임하고, 절대 포기하지 않는 개발자 오준석입니다.
            저의 끈기와 열정은 제게 주어진 과제를 지속적으로 발전시키는 원동력이 되어 왔습니다. 
            제게 있어 팀원들은 함께 고민하고 문제를 해결하는 과정을 즐기고, 소통과 협력을 통해 더 나은 결과물을 창출하기 위해 항상 노력하고 있습니다. 
            이 노력들을 바탕으로 앞으로 함께 더 멋진 일을 이루어 나아가길 기대합니다!
          </Typography>
        </Box>

        <Collapse in={expanded}>
          <Box>
            {
              aboutData.map((item, idx) => (
                <Box key={idx}>
                  <Typography variant="h6" component="h3" sx={sectionTitleStyle}>
                    {item.title}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Typography variant="body1" sx={bodyTextStyle}>
                      {item.content}
                    </Typography>
                  </Box>
                </Box>
              ))
            }

            <Typography 
              variant="body1" 
              sx={{ 
                ...bodyTextStyle, 
                mt: 4, 
                fontWeight: 700, 
                color: (theme: any) => `${theme.palette.text.primary} !important` 
              }}
            >
              위의 내용을 통해, 끈기와 열정으로 성장하는 개발자로서 계속해서 발전하고자 합니다.
            </Typography>
          </Box>
        </Collapse>

        <Button
          variant="outlined"
          onClick={toggleContent}
          sx={{
            mt: 4,
            borderColor: "#a370f7",
            color: "#a370f7",
            borderRadius: "20px",
            px: 4,
            "&:hover": {
              borderColor: "#5000ca",
              bgcolor: "rgba(163, 112, 247, 0.05)",
            },
          }}
        >
          {expanded ? "Close" : "More"}
        </Button>
        
      </Container>
    </Box>
  );
}

export default About;