export type ProjectType = {
  id: number;
  title: string;
  img: string;
  desc: string;
  link: string; 
  since: string;
  hasMd?: boolean;
};



export interface ProjectDetailModalProps {
  open: boolean;
  onClose: () => void;
  selectedProject: ProjectType | null;
  markdownContent: string;
  loading: boolean;
  error: string;
}

export interface ProjectCardProps {
  project: ProjectType;
  openModal: (project: ProjectType) => Promise<void>;
}

export interface ProjectImageProps {
  imageName: string;
  hasMd: boolean;
  onClick: (e: React.MouseEvent) => void;
}

export interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href?: string;
  }
