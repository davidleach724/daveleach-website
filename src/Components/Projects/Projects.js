import ProjectCard from '../ProjectCard/ProjectCard';
import { projectdata } from './projectdata';
import './Projects.css';

const Projects = () => {
  const projectCards = projectdata.map((project) => {
    return <ProjectCard project={project} key={project.id} />;
  });

  return (
    <div className="projects-container">
      <h2 className="skills-title">Projects</h2>
      <div className="project-card-container">{projectCards}</div>
    </div>
  );
};

export default Projects;
