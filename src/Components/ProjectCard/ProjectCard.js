import './ProjectCard.css'

const ProjectCard = ({ project }) => {

  return (
    <div className="project- project-card">
      <h3>{project.name}</h3>
    </div>
  )
}

export default ProjectCard