import { ProjectImage } from "./ProjectImage";
import "../assets/styles/Project.scss";
import type { ProjectCardProps } from "./types/projectType";

export const ProjectCard = ({ project, openModal }: ProjectCardProps) => {
  return (
    <div className="project">
      <ProjectImage 
        imageName={project.img}
        hasMd={project.hasMd || false}
        onClick={(e) => {
          e.stopPropagation(); 
          if (project.hasMd) {
            openModal(project);
          }
        }}
      />
      
      {project.link ? (
        <a 
          href={project.link} 
          target="_blank" 
          rel="noreferrer"
          onMouseEnter={(e) => e.currentTarget.style.textDecoration = "underline"}
          onMouseLeave={(e) => e.currentTarget.style.textDecoration = "none"}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <h2 style={{ margin: 0, padding: 0 }}>{project.title}</h2>
        </a>
      ) : (
        <h2 
          style={{ 
            cursor: "default", 
            textDecoration: "none", 
            color: "inherit",
            pointerEvents: "none", 
          }}
        >
          {project.title}
        </h2>
      )}
      <p className="project-since-info" style={{ fontSize: "15px"}}>{project.since}</p>
      <p className="project-description">{project.desc}</p>
    </div>
  );
};
