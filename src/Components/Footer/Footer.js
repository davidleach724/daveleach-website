import github from '../../Images/github.svg';
import resume from '../../Images/LeachResume.pdf';
import linkedin from '../../Images/linkedin-logo.svg';
import resumeLogo from '../../Images/resume-download.png';
import email from '../../Images/email-open.svg';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-copy"></div>
      <div className="footer-links">
        <a href="https://github.com/davidleach724">
          <img className="footer-icon" src={github} alt="github logo" />
        </a>
        <a href="https://www.linkedin.com/in/davidleach724/">
          <img className="footer-icon" src={linkedin} alt="linkedIn logo" />
        </a>
        <a href={'mailto:davidleach724@gmail.com'}>
          <img className="footer-icon" src={email} alt="email logo" />
        </a>
        <a href={resume}>
          <img className="footer-icon" src={resumeLogo} alt="resume logo" />
        </a>
      </div>
      <div className="footer-copy">
        <h4>© Dave Leach 2022</h4>
      </div>
    </div>
  );
};

export default Footer;
