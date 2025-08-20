import { useState, useMemo, type ChangeEvent } from "react";
import { fetchMarkdownContent } from "../utils/fetchMarkdown";
import projectData from "../project.json"; 
import MuiPagination from "@mui/material/Pagination"; 
import Stack from "@mui/material/Stack";
import "../assets/styles/Project.scss";
import "../assets/styles/Modal.scss";

import { ProjectCard } from "./ProjectCard";
import { ProjectDetailModal } from "./ProjectDetailModal";
import type { ProjectType } from "./types/projectType";

export default function Project() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const [currentPage, setCurrentPage] = useState<number>(1);
  const projectsPerPage = 6; 

  const sortedProjects = useMemo(() => {
    return projectData.slice().sort((a, b) => b.id - a.id);
  }, [projectData]);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = sortedProjects.slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(sortedProjects.length / projectsPerPage);

  const handlePageChange = (_event: ChangeEvent<unknown>, value: number) => { 
    setCurrentPage(value);
    // window.scrollTo(0, 0); 
  };


  const openModal = async (project: ProjectType): Promise<void> => {
    setSelectedProject(project);
    setLoading(true);
    setError("");

    try {
      const content = await fetchMarkdownContent(project.title);
      setMarkdownContent(content);
    } catch (err) {
      console.error("Failed to load markdown:", err);
      setError("마크다운 내용을 불러오는 데 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const closeModal = (): void => {
    setSelectedProject(null);
    setMarkdownContent("");
    setError("");
  };

  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        {currentProjects.map((project) => (
            <ProjectCard 
              key={project.id}
              project={project}
              openModal={openModal}
            />
          ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center"}}>
        <Stack spacing={2} sx={{ mt: 4}}>
          <MuiPagination 
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            siblingCount={1}
            boundaryCount={1} 
            showFirstButton
            showLastButton
          />
        </Stack>

        <ProjectDetailModal
          open={selectedProject !== null}
          onClose={closeModal}
          selectedProject={selectedProject}
          markdownContent={markdownContent}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
}
