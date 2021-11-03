import './Skills.css';

import shareicon from '../../Images/share-icon.png'

const Skills = () => {
  return (
    <div className="skills-section">
      <h2 className="skills-title">Skills & Experience</h2>
      <div className="skills-container">
        <div className="skills-card">
          <h3>Development</h3>
          <div className="bottom-card">
            <img src={shareicon} className="skill-icon"/>
            <h4>React, JavaScript, GraphQL, Context API, ApolloClient, REST API, WebPack</h4>
          </div>
        </div>
        <div className="skills-card">
          <h3>Workflow</h3>
          <div className="bottom-card">
            <img src={shareicon} className="skill-icon"/>
            <h4>TDD, Git, NPM, GitHub, OOP, Trello, Heroku, Agile</h4>
          </div>
        </div>
        <div className="skills-card">
          <h3>Testing</h3>
          <div className="bottom-card">
            <img src={shareicon} className="skill-icon"/>
            <h4>Cypress, Mocha, Chai</h4>
          </div>
        </div>
        <div className="skills-card">
          <h3>Web Design</h3>
          <div className="bottom-card">
            <img src={shareicon} className="skill-icon"/>
            <h4>HTML5, CSS3, SASS, ARIA, Responsive Design, Adobe Photoshop</h4>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
