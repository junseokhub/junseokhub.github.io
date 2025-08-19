import React, { useEffect, useState } from 'react';
import { Modal, Box, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';

import { fetchMarkdownContent } from '../utils/fetchMarkdown';

import projectData from '../project.json';

import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';

import '../assets/styles/Project.scss';
import '../assets/styles/Modal.scss';

type ProjectType = {
  id: number;
  title: string;
  img: string;
  desc: string;
  link: string;
};

const imageMap: Record<string, string> = {
  mock08: mock08,
  mock09: mock09,
  mock10: mock10,
};

export default function Project() {

    useEffect(() => {
  fetchMarkdownContent("portfolio").then((data) => {
    console.log("받아온 데이터:", data); // 여기 찍어보면 진짜 index.html인지 확인 가능
    setMarkdownContent(data);
  });
}, []);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [markdownContent, setMarkdownContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const openModal = async (project: ProjectType): Promise<void> => {
    setSelectedProject(project);
    setLoading(true);
    setError('');

    try {
      const content = await fetchMarkdownContent(project.title);
      setMarkdownContent(content);
    } catch (err) {
      console.error("Failed to load markdown:", err);
      setError('마크다운 내용을 불러오는 데 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const closeModal = (): void => {
    setSelectedProject(null);
    setMarkdownContent('');
    setError('');
  };

  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projectData.map((project) => (
          <div
            className="project"
            key={project.id}
            onClick={() => openModal(project)}
            style={{ cursor: 'pointer' }}
          >
            <img
              src={imageMap[project.img]}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
            <a href={project.link} target="_blank" rel="noreferrer">
                <h2>{project.title}</h2>
            </a>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>

      <Modal
        open={selectedProject !== null}
        onClose={closeModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          className="modal-content-box"
          sx={{
            bgcolor: 'background.paper',
            color: 'text.primary',
          }}
        >
          {selectedProject && (
            <>
              <Typography
                id="modal-title"
                variant="h6"
                component="h2"
                gutterBottom
                className="modal-title"
                sx={{ color: 'text.primary' }}
              >
                {selectedProject.title}
              </Typography>

              {loading && <Typography className="modal-status-text" sx={{ color: 'text.primary' }}>Loading...</Typography>}
              {error && <Typography className="modal-status-text error" sx={{ color: 'error.main' }}>{error}</Typography>}
              {!loading && !error && markdownContent && (
                <ReactMarkdown >{markdownContent}</ReactMarkdown>
              )}
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}