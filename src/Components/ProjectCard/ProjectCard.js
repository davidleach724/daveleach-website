import './ProjectCard.css'

const ProjectCard = ({ project }) => {

  return (
    <div className="project-card">
      <img className="project-image" alt="project screenshot" src={
          process.env.PUBLIC_URL +
          "/projectimages/" +
          project.image
        }
        />
        <div className="project-layer">
          <h3>{project.name}</h3>
          <p className='project-text'>{project.summary}</p>
          <p className='project-text'>Tech Used: {project.tech}</p>
          <p className='project-text'>Accomplisments: {project.accomplishments}</p>
          <a href={project.repoLink}>Repo Link</a>
          {project.deployedLink !== '' && <a href={project.deployedLink}>Deployed App</a>}
        </div>
    </div>
  )
}

export default ProjectCard