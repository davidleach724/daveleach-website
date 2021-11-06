import './ProjectCard.css'

const ProjectCard = ({ project }) => {

  return (
    <div className="project-card">
      <img className="project-image" src={
          process.env.PUBLIC_URL +
          "/projectimages/" +
          project.image
        }
        />
        <div className="project-layer">
          <h3>{project.name}</h3>
          <h5>{project.summary}</h5>
        </div>
    </div>
  )
}

export default ProjectCard