import './Skills.css';

import testicon from '../../Images/testing.png'
import developicon from '../../Images/development.png'
import designicon from '../../Images/design.png'
import workicon from '../../Images/workflow.png'

const Skills = () => {
  return (
    <div className="skills-section">
      <h2 className="skills-title">Skills & Experience</h2>
      <div className="skills-container">
        <div className="skills-card">
          <h3>Development</h3>
          <div className="bottom-card">
            <img src={developicon} className="skill-icon"/>
            <h4>React, JavaScript, GraphQL, Context API, ApolloClient, REST API, WebPack, GitHub Pages</h4>
          </div>
        </div>
        <div className="skills-card">
          <h3>Workflow</h3>
          <div className="bottom-card">
            <img src={workicon} className="skill-icon"/>
            <h4>TDD, Git, NPM, GitHub Projects, OOP, Trello, Heroku, Agile</h4>
          </div>
        </div>
        <div className="skills-card">
          <h3>Testing</h3>
          <div className="bottom-card">
            <img src={testicon} className="skill-icon"/>
            <h4>Cypress, Mocha, Chai</h4>
          </div>
        </div>
        <div className="skills-card">
          <h3>Web Design</h3>
          <div className="bottom-card">
            <img src={designicon} className="skill-icon"/>
            <h4>HTML5, CSS3, SASS, ARIA, Responsive Design, Adobe Photoshop</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
