import { FunctionComponent } from "react";

interface SkillsMobileProps {}

const SkillsMobile: FunctionComponent<SkillsMobileProps> = () => {
  return (
    <div className="mobileSkills">
      <h1>What I do?</h1>
      <h1>Frontend</h1>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>React.js</li>
      </ul>
      <h1>Backend</h1>
      <ul>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>Firebase</li>
      </ul>
      <h1>Other</h1>
      <ul>
        <li>Java</li>
        <li>VSCode</li>
        <li>Vercel</li>
        <li>Github && Git</li>
      </ul>
    </div>
  );
};

export default SkillsMobile;
