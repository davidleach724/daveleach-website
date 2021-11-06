import './ProjectCard.css'

const ProjectCard = ({ project }) => {

  return (
    <div className="project-card">
      <h3>{project.name}</h3>
      <img className="project-image" src={
          process.env.PUBLIC_URL +
          "/projectimages/" +
          project.image
        }
        />
    </div>
  )
}

export default ProjectCard