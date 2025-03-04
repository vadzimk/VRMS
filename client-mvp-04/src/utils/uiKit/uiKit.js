import React, { useState } from 'react';
import './uiKit.scss';
import Button from '../../components/common/button/button';
import confirmIcon from '../../assets/images/icons/confirm.svg';
import projectIcon from '../../assets/images/icons/311.png';
import gitHubIcon from '../../assets/images/icons/github.png';
import RedirectLink from '../../components/common/link/link';
import Input from '../../components/common/input/input';
import InputSkills from '../../components/common/inputSkills/inputSkills';
import ErrorMessage from '../../components/common/errorMessage/errorMessage';
import ProgressBar from '../../components/common/progressBar/progressBar';
import Checkbox from '../../components/common/checkbox/checkbox';
import searchIcon from '../../assets/images/icons/searchIcon.svg';
import Dropdown from '../../components/common/dropdown/dropdown';


//for the dropdown section (demo purpose)
const data = {
  timezones: [
    'HST | Hawaii Standard Time',
    'AKST | Alaska Standard Time',
    'PST | Pacific Standard Time',
    'MST | Mountain Standard Time',
    'CST | Central Standard Time',
    'EST | Eastern Standard Time',
  ],
};

//for the current skills input component (demo purpose)
const skills = {
   currentSkills: ["JavaScript", "TypeScript", "React", "Angular", "Java", "Node.js"]
 }

/***** DEV-UI-KIT FOR DEVELOPMENT ONLY *****/
/*UI KIT helps devs determine, which UI elements will be used throughout
the application. UI elements created based on finalized v0.4 Style Guide.*/

const DevUiKit = () => {
  //for the dropdown section (demo purpose)
  // eslint-disable-next-line
  const [timezone, setTimezone] = useState('');

  // for the current skills input component (demo purpose)
  const [skillsInputed, setSkillsInputed] = useState([]);

  return (
    <div className="kit-container custom-scroll-bar">
      <div className="kit-title">VRMS DEV UI-KIT</div>

      {/*** HEADERS ***/}
      <div className="header-container">
        <h1 className="kit-sec-title">*** HEADERS ***</h1>
        <h1>VRMS h1</h1>
        <p className="dev-comment">h1 Header: 30px, bold; Main Page Header</p>
        <h2>VRMS h2</h2>
        <p className="dev-comment">
          h2 Header: 24px, semi-bold; Home Section Header
        </p>
        <h2 className="bold">VRMS h2</h2>
        <p className="dev-comment">
          h2 Header: 24px, bold; Project Section Header / Onboarding Screens
        </p>
        <h3>VRMS h3</h3>
        <p className="dev-comment">
          h3 Header: 18px, bold; Profile section header
        </p>
        <h3 className="regular">VRMS h3</h3>
        <p className="dev-comment">h3 Header: 18px, regular</p>
        <h4>VRMS h4</h4>
        <p className="dev-comment">h4 Header: 15px, bold</p>
        <h5>VRMS h5</h5>
        <p className="dev-comment">h5 Header: 14px, semi-bold</p>
      </div>

      {/*** TEXT / LINKS ***/}
      <div className="link-container">
        <h1 className="kit-sec-title">*** TEXT / LINKS ***</h1>
        <p>Text content</p>
        <p className="dev-comment">Main text: 'Open Sans', 14px, regular</p>

        <p className="italic">Text content</p>
        <p className="dev-comment">Main text: 'Open Sans', 14px, italic</p>

        <a key="default-link" href="/">
          Link to click here
        </a>
        <p className="dev-comment">Default Link: 14px, semi-bold</p>

        <a key="create-link" className="redirect-link accent-link" href="/">
          CREATE ACCOUNT
        </a>
        <p className="dev-comment">
          Accent Link: 13px, bold, $accent-royal-blue-color
        </p>

        <a key="tooltip-link" className="redirect-link tooltip-link" href="/">
          More details here
        </a>
        <p className="dev-comment">
          Tooltip Link: 10px, bold, $link-accent-color
        </p>

        <a className="join-link" href="/">
          Join new project <span className="join-plus">+</span>
        </a>
        <p className="dev-comment">Join Link: 24px, bold</p>

        <div className="project-link">
          <img
            src={projectIcon}
            className="project-link-icon"
            alt="project-link"
          />
          <span className="project-link-name">311 Data Project</span>
        </div>
        <p className="dev-comment">Project Link: 24px, semi-bold</p>

        <ErrorMessage content="*Please enter a valid email address" />
        <p className="dev-comment">
          Error Message: italic, semi-bold; components/common/errorMessage
        </p>
      </div>

      {/*** BUTTONS ***/}
      <div className="button-container">
        <h1 className="kit-sec-title">*** BUTTONS ***</h1>
        <Button content="Sign In" />
        <p className="dev-comment">Primary default button, use without class</p>
        <Button content="Sign In" className="btn-accent" />
        <p className="dev-comment">Accent button, use with class .btn-accent</p>
        <Button content="Sign In" className="btn-square" />
        <p className="dev-comment">Square button, use with class .btn-square</p>
        <button className="btn-confirm">
          <img src={confirmIcon} className="btn-icon" alt="confirm" />
          Confirm
        </button>
        <p className="dev-comment">
          Confirm button, use with class .btn-confirm
        </p>
      </div>

      {/*** TOOLTIP ***/}
      <div className="tooltip-container">
        <h1 className="kit-sec-title">*** TOOLTIP ***</h1>
        <div className="tooltip">
          <span className="tooltip-icon">i</span>
          <div data-testid="tooltip" className="tooltip-content">
            Used for streamlining onboarding to new projects, find helpful
            meeting details, track your contributions, and maintain a profile of
            your skills and professional development.
            <RedirectLink
              linkKey="footer-page"
              path="page"
              className="tooltip-link"
              content=" More details here."
            />
          </div>
        </div>
        <p className="dev-comment">Tooltip, works on hover</p>
      </div>

      {/*** INPUTS ***/}
      <div className="inputs-container">
        <h1 className="kit-sec-title">*** INPUTS ***</h1>

        <Input placeholder="Enter your email" type="email" />
        <p className="dev-comment">Default Input, components/common/input</p>

        <div className="text-field-icon-container">
          <img src={gitHubIcon} className="text-field-icon" alt="gitHub" />
          <input
            type="text"
            name="text-icon-field"
            placeholder="GitHub user name (not email)"
          />
        </div>
        <p className="dev-comment">Input with icon</p>

        <div className="checkbox-container">
          <Checkbox content="Checkbox Text" />
          <Checkbox content="Checkbox Text" />
        </div>
        <p className="dev-comment">Custom Checkbox</p>

        <div>
          <label
            htmlFor="big-button-option-1"
            className="radio-button-container"
          >
            <input
              type="radio"
              name="big-radio-button"
              id="big-button-option-1"
              className="actual-radio-button"
            />
            <span className="custom-radio-button" />
            Option 1
          </label>
        </div>
        <div>
          <label
            htmlFor="big-button-option-2"
            className="radio-button-container"
          >
            <input
              type="radio"
              name="big-radio-button"
              id="big-button-option-2"
              className="actual-radio-button"
            />
            <span className="custom-radio-button" />
            Option 2
          </label>
        </div>
        <p className="dev-comment">Input with radio button bigger size</p>
        <div>
          <label
            htmlFor="small-button-option-1"
            className="radio-button-container"
          >
            <input
              type="radio"
              name="small-radio-button"
              id="small-button-option-1"
              className="actual-radio-button"
            />
            <span className="custom-small-radio-button" />
            Option 1
          </label>
        </div>
        <div>
          <label
            htmlFor="small-button-option-2"
            className="radio-button-container"
          >
            <input
              type="radio"
              name="small-radio-button"
              id="small-button-option-2"
              className="actual-radio-button"
            />
            <span className="custom-small-radio-button" />
            Option 2
          </label>
        </div>
        <p className="dev-comment">Input with radio button smaller size</p>

        <div className="text-field-rounded-icon-container">
          <input
            type="text"
            name="text-icon-field"
            placeholder="Search Reports"
          />
          <img src={searchIcon} className="text-field-icon" alt="search" />
        </div>
        <p className="dev-comment">Rounded input with icon</p>
      </div>
      
      {/*** Current Skills Input ***/}
      <InputSkills options={skills.currentSkills} skills={skillsInputed} setSkills={setSkillsInputed} />
      <p className={'dev-comment'}>Current Skills Input</p>
      {/*** PROGRESS BAR ***/}
      <div className="progress-container">
        <h1 className="kit-sec-title">*** PROGRESS BAR ***</h1>
        <ProgressBar total={6} active={3} />
      </div>

      {/*** DROPDOWN ***/}
      <div className="dropdown-container">
        <h1 className="kit-sec-title">*** DROPDOWN ***</h1>
        <Dropdown data={data} setSelectedOption={setTimezone} />
      </div>
    </div>
  );
};

export default DevUiKit;
