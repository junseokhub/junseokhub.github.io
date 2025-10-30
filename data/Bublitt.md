### 🔍 **프로젝트 개요**

OpenAI & RAG 기반 LLM 챗봇 API와 사용자 발화에 대한 주제 추천 기능을 결합한 AI 챗봇 플랫폼

---

### ⚙️ 사용 기술 스택
**BackEnd** : SpringBoot, Nest.js, TypeORM, JPA, Flask(DBSCAN 용)

**Database** : MySQL, Milvus, Redis, MongoDB

**Infra** : Kubernetes, BuildKit, ArgoCD, Jenkins, AWS(VPC, Bastion Host, EC2, LoadBalancer), Nginx, Grafana, Prometheus

---

### ✅ **주요 성과 및 기술**

- **자연어 처리 및 벡터화 기반 주제 추천 시스템 개발**  
  - OpenAI Embedding + Milvus/Pinecone 벡터 DB를 활용한 **실시간 유사도 검색 및 주제 추천**  
  - **DBSCAN 클러스터링 기반 Fallback 추천 로직** 적용으로 챗봇 응답 신뢰도 **20% 향상**

- **비정형 데이터 처리 및 RAG 아키텍처 구현**  
  - 웹 크롤링 데이터를 **PDF 변환 후 임베딩 벡터 DB 저장**  
  - **RAG 아키텍처 기반 문맥 질의응답(QA) 시스템** 구축

- **플랫폼 및 아키텍처 고도화**  
  -  기존 **NestJS(TypeORM)->Spring Boot(JPA)** 마이그레이션으로 기관 및 기업 환경에 적합한 보안성, 성능, 트랜잭션 안정성 확보  
  - **AWS VPC + Bastion 환경 구성**을 통한 인프라 보안 강화

- **운영 자동화 및 모니터링 체계 확립**  
  - **Jenkins CI/CD → ArgoCD + Helm 기반 GitOps 전환**으로 배포 효율성 및 운영 안정성 향상  
  - **Kubernetes, Docker, Prometheus, Grafana**를 활용한 컨테이너 오케스트레이션 및 실시간 모니터링 구축

- **데이터 품질 및 테스트 자동화**  
  - 사용자 발화와 벡터 데이터의 매칭 정확도를 검증하는 **테스트 모듈 개발 및 자동화 파이프라인 구성**

---

### 📂 **URL/PDF 문서 관리 및 연동**

- URL 및 PDF 문서 메타데이터 수집 및 저장.
- 프로젝트별 문서 조회, 제목별 그룹핑 기능 구현.
- 중복 체크 및 제목 일괄 수정 지원.
- **임베딩 파이프라인과 연계 → 대화 맥락에 실시간 반영**

---

### ⚠️ **기술 도전 및 한계**

- DBSCAN 자동 파라미터 튜닝 시 `eps` 산정 지점 불명확. → **일관성 부족**.
- 로그 기반 `min_samples` 산정법이 밀도 변화에 미흡.
    
    → **노이즈 과다 / 군집 병합 문제 / 결과 불안정**.
    

---

### 🛠️ **대안 및 향후 방향**

- **HDBSCAN** 도입 검토. → `eps` 설정 부담 해소.
- **UMAP** 적용 고려. → 고차원 임베딩 구조를 효과적으로 표현.
- 클러스터링 자동화 **신뢰도 향상 + 운영 효율성 극대화**.

---

### 🔁 **CI/CD 구조 개선 핵심**

- Jenkins는 **CI(빌드 및 이미지 푸시)** 전담.
- **ArgoCD Image Updater**로 이미지 버전 자동 감지 → Git 매니페스트 업데이트.
    
    ArgoCD는 이를 기반으로 **CD(배포 및 상태 모니터링)** 전담.
    
    → GitOps 방식 자동화로 **배포 실패율 30% 감소**.
    
- **Kubernetes Secret** 활용 → 민감 정보 보안 강화.
- 명확한 역할 분리 및 롤백 가능한 구조 → 유지보수 용이성 향상.
- 환경변수를 kubernetes secret을 사용해 docker이미지 빌드 시점이 아닌 런타임 시점에 주입으로 변경.
- CI/CD 개선하면서 서버 자체를 Kubernetes환경으로 변경.

---

### 🧩 **마무리**

> Bublitt 프로젝트를 통해 임베딩 기반 군집화 자동화의 한계를 체감했고,
> 거리 함수, 차원 축소, 파라미터 간 상호작용에 대한 **깊은 기술적 인사이트**를 확보.
> 
> 다양한 비정형 데이터를 실시간 대화에 반영하는 시스템을 완성하며,
> **실무 활용성과 확장성**을 모두 갖춘 AI 챗봇 플랫폼을 구축.
>