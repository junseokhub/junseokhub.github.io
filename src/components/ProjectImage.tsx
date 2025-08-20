import { useProjectGetImage } from "../hooks/useProjectGetImages"; 
import type { ProjectImageProps } from "./types/projectType";

export const ProjectImage = ({ imageName, hasMd, onClick }: ProjectImageProps) => {
  const imageUrl = useProjectGetImage(imageName);

  return (
    <div className="project-image-wrapper">
      <img
        src={imageUrl}
        alt="thumbnail"
        className={hasMd ? "zoom" : ""}
        onClick={onClick}
        style={{
          cursor: hasMd ? "pointer" : "default",
          borderRadius: "10px",
        }}
      />
    </div>
  );
};
