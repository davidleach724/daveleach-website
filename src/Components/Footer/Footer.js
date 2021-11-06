import github from '../../Images/github.svg'
import resume from '../../Images/LeachResume.pdf'
import linkedin from '../../Images/linkedin-logo.svg'
import resumeLogo from '../../Images/resume-download.png'
import email from '../../Images/email-open.svg'
import './Footer.css'

const Footer = () => {

  return (
    <div className="footer-container">
      <div className="footer-copy"></div>
      <div className="footer-links">
        <a href="https://github.com/davidleach724" alt="github logo">
          <img className="footer-icon" src={github}/>
        </a>
        <a href="https://www.linkedin.com/in/davidleach724/" alt="linkedIn logo">
          <img className="footer-icon" src={linkedin}/>
        </a>
        <a href={"mailto:" + "davidleach724@gmail.com"} alt="email logo">
          <img className="footer-icon" src={email}/>
        </a>
        <a href={resume} alt="resume logo">
          <img className="footer-icon" src={resumeLogo}/>
        </a>
      </div>
      <div className="footer-copy">
        <h4>© Dave Leach 2021</h4>
      </div>
    </div>
  )
}

export default Footer