import "@fortawesome/free-regular-svg-icons"
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
    "Java",
    "Spring",
    "TypeScript",
    "Nest.js",
    "JavaScript",
    "Express.js",
];

const labelsSecond = [
    "Kubernetes",
    "Docker",
    "Jenkins",
    "Tekton",
    "Argocd",
    "AWS",
    "Linux",
    "Git",
];

const labelsThird = [
    "MySQL",
    "Oracle",
    "Redis",
    "MongoDB",
    "Milvus",
    "Pincone"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <h3>Backend Development</h3>
                    <p>Spring과 Nest.js를 활용하여 다양한 애플리케이션을 설계하고 구축한 경험이 있습니다.또한 Next.js와 React.js로 구성되어있는 실제 운영 환경에서 웹 애플리케이션을 유지보수한 경험도 보유하고 있습니다.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className="chip" label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <h3>Infra</h3>
                    <p>AWS, Ubuntu, Kubernetes를 이용한 인프라 구축 및 관리 경험을 보유하고 있습니다.이를 통해 컨테이너화된 환경에서의 효율적인 관리와 CI/CD 파이프라인을 최적화 및 모니터링 시스템 구축 경험이 있습니다.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className="chip" label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <h3>Database</h3>
                    <p>MySQL, MongoDB, Redis를 Kubernetes Operator를 활용해 구축한 경험이 있습니다.Kubernetes 환경 내에서 데이터베이스의 배포, 스케일링, 백업 및 복원 등을 자동화하고, 운영 효율성을 극대화하는 구조를 설계했습니다.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className="chip" label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;