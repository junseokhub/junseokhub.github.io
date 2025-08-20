import { useState } from "react";
import "../assets/styles/About.scss";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse"; 
import Typography from "@mui/material/Typography";


function About() {
  const [expanded, setExpanded] = useState(false);

  const toggleContent = () => {
    setExpanded(prev => !prev);
  };

  return (
    <div id="about" className="about-container"> 
        <div className="about-wrapper">
          <h1>About Me</h1> 
          
          <Typography variant="body1" component="p">
            안녕하세요! 두려움 없이 도전에 임하고, 절대 포기하지 않는 개발자 오준석입니다.
            저의 끈기와 열정은 제게 주어진 과제를 지속적으로 발전시키는 원동력이 되어 왔습니다. 
            제게 있어 팀원들은 함께 고민하고 문제를 해결하는 과정을 즐기고, 소통과 협력을 통해 더 나은 결과물을 창출하기 위해 항상 노력하고 있습니다. 
            이 노력들을 바탕으로 앞으로 함께 더 멋진 일을 이루어 나아가길 기대합니다!
          </Typography>
                   
          <Collapse in={expanded}>
            <div> 
                <br /><br />
                <Typography variant="h6" component="h3">끈기와 성실로 성장하는 개발자</Typography>
                <Typography variant="body1" component="p">
                  끈기와 열정을 바탕으로 개발자로서 끊임없이 발전해오고 있습니다. 
                  대전에서 서울로의 출퇴근 도전을 통해, 왕복 기차 시간 동안 강제로 공부시간을 투자하여 개발에 대한 열정을 지속했습니다. 
                  이러한 끈기는 주변의 우려와 예상을 뛰어넘을 수 있도록 도왔습니다. 결과적으로, 혼자서도 백엔드 개발을 이끌어낼 수 있는 능력을 키웠습니다.
                </Typography>
                <br />
                <Typography variant="h6" component="h3">문서화 전문가</Typography>
                <Typography variant="body1" component="p">
                  프로젝트와 지식을 체계적으로 관리하기 위해 문서화를 핵심 가치로 삼고 있습니다. 
                  JIRA 티켓 관리부터 README, 테이블 명세, 에러 코드 정의까지 세심한 내용들을 기록하여 팀 전체가 프로젝트를 이해하고 협업하기 쉽도록 만들었습니다. 
                  이를 통해 프로젝트의 투명성과 지식의 공유를 촉진하고, 효율적인 업무 수행을 이끌어내고 있습니다.
                </Typography>
                <br />
                <Typography variant="h6" component="h3">우수한 커뮤니케이션 능력</Typography>
                <Typography variant="body1" component="p">
                  업무 관련 의견 충돌을 최소화하고 팀원들 간의 조화를 이끌기 위해 노력했습니다. 
                  상황에 맞게 팀원들의 의견을 최대한 수용하고, 기술적인 내용을 비전문인 동료들에게도 명확하게 전달하기 위해 간결하면서도 적절한 예시를 활용하여 의견을 공유하고 팀 전체가 이해할 수 있도록 노력했습니다. 
                  이러한 노력 덕분에 약 3년간 조직 내에서의 트러블이 발생하지 않았습니다.
                </Typography>
                <br />
                <Typography variant="h6" component="h3">공부 방식의 철학</Typography>
                <Typography variant="body1" component="p">
                  끊임없이 고민하고 질문하는 습관을 가지고 있습니다. 
                  새로운 것을 배울 때마다 그것을 기록하고, 같은 질문을 반복하지 않도록 노력합니다. 
                  이를 통해 지식의 영구 저장고를 만들고자 합니다. 
                  또한, 새로운 기술을 습득하고 프로젝트에 적용하는 데 있어 항상 기본을 중시합니다. 
                  이는 제가 지식을 습득하는 데 있어서 튼튼한 기초를 갖추기 위함입니다.
                </Typography>
                <br />
                <Typography variant="h6" component="h3">끊임없는 열정과 도전 정신</Typography>
                <Typography variant="body1" component="p">
                  집에서도 우분투 서버를 구축하고 VPN을 통해 작업할 수 있는 환경을 구축했습니다. 
                  또한, 개인 프로젝트 또한 CI/CD를 활용하여 개발 환경을 지속적으로 개선하고 있습니다. 
                  이러한 노력은 제가 다양한 기술에 얕은 지식을 가지고 있을지라도, 
                  더 큰 목표를 향한 밑거름으로 삼아 다양한 경험을 쌓고자 하는 의지에서 비롯됩니다. 
                  끈기와 열정을 바탕으로 어떤 일이라도 해결할 수 있으며, 이를 통해 더 나은 결과물을 창출하고 기술적으로 더욱 성장하고 싶습니다.
                </Typography>
                <br />
                <Typography variant="body1" component="p">
                  위의 내용을 통해, 끈기와 열정으로 성장하는 개발자로서 계속해서 발전하고자 합니다.
                </Typography>
            </div>
          </Collapse>
        <Button
            variant="contained"
            size="medium"
            onClick={toggleContent}
            sx={{
              marginTop: "10px",
              bgcolor: "background.paper",
              color: "text.primary",
              "&:hover": {
                bgcolor: "background.default",
              },
            }}
          >
            {expanded ? "간단히 보기" : "자세히 보기"}
          </Button>
        </div>
    </div>
  );
}

export default About;