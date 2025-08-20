### 🔍 **프로젝트 개요**

OpenAI 기반 LLM 챗봇 API와 사용자 발화에 대한 주제 추천 기능을 결합한 AI 챗봇 플랫폼

---

### ⚙️ 사용 기술 스택
**BackEnd** : SpringBoot, Nest.js, TypeORM, JPA, Flask(DBSCAN 용)

**Database** : MySQL, Milvus, Redis, MongoDB

**Infra** : Kubernetes, BuildKit, ArgoCD, Jenkins, AWS(VPC, Bastion Host, EC2, LoadBalancer), Nginx, Grafana, Prometheus

---

### ✅ **주요 성과 및 기술**

- NestJS → Spring Boot 전환으로 **보안성과 성능 향상**
- Milvus, Pinecone 벡터 DB 연동 → **실시간 임베딩 및 유사도 검색**
- URL/PDF 문서 → 임베딩 → 주제 추천까지 **비정형 데이터 관리 체계 자동화**
- Redis 캐시 활용 → **임베딩 재계산 비용 35% 절감**, OpenAI API 비용 절감
- AWS VPC 및 Bastion 환경 구성
- **DBSCAN 기반 Fallback 주체 추천 시스템** 도입
- **Jenkins CI/CD → ArgoCD + Helm 기반 GitOps로 전환**, 운영 효율성 및 보안성 강화
- Kubernetes 환경 도입

---

### 📂 **URL/PDF 문서 관리 및 연동**

- URL 및 PDF 문서 메타데이터 수집 및 저장
- 프로젝트별 문서 조회, 제목별 그룹핑 기능 구현
- 중복 체크 및 제목 일괄 수정 지원
- **임베딩 파이프라인과 연계 → 대화 맥락에 실시간 반영**

---

### ⚠️ **기술 도전 및 한계**

- DBSCAN 자동 파라미터 튜닝 시 `eps` 산정 지점 불명확 → **일관성 부족**
- 로그 기반 `min_samples` 산정법이 밀도 변화에 미흡
    
    → **노이즈 과다 / 군집 병합 문제 / 결과 불안정**
    

---

### 🛠️ **대안 및 향후 방향**

- **HDBSCAN** 도입 검토 → `eps` 설정 부담 해소
- **UMAP** 적용 고려 → 고차원 임베딩 구조를 효과적으로 표현
- 클러스터링 자동화 **신뢰도 향상 + 운영 효율성 극대화**

---

### 🔁 **CI/CD 구조 개선 핵심**

- Jenkins는 **CI(빌드 및 이미지 푸시)** 전담
- **ArgoCD Image Updater**로 이미지 버전 자동 감지 → Git 매니페스트 업데이트
    
    ArgoCD는 이를 기반으로 **CD(배포 및 상태 모니터링)** 전담
    
    → GitOps 방식 자동화로 **배포 실패율 30% 감소**
    
- **Kubernetes Secret** 활용 → 민감 정보 보안 강화
- 명확한 역할 분리 및 롤백 가능한 구조 → 유지보수 용이성 향상
- 환경변수를 kubernetes secret을 사용해 docker이미지 빌드 시점이 아닌 런타임 시점에 주입으로 변경
- CI/CD 개선하면서 서버 자체를 Kubernetes환경으로 변경

---

### 🧩 **마무리**

> Bublitt 프로젝트를 통해 임베딩 기반 군집화 자동화의 한계를 체감했고,
> 
> 
> 거리 함수, 차원 축소, 파라미터 간 상호작용에 대한 **깊은 기술적 인사이트**를 확보했습니다.
> 
> 다양한 비정형 데이터를 실시간 대화에 반영하는 시스템을 완성하며,
> 
> **실무 활용성과 확장성**을 모두 갖춘 AI 챗봇 플랫폼을 구축했습니다.
>