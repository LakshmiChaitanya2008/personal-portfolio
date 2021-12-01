import { FunctionComponent } from "react";

interface SkillsProps {}

const Skills: FunctionComponent<SkillsProps> = () => {
  return (
    <div className="what-i-use">
      <h1>What I use?</h1>
      <table style={{ border: "1px solid white" }}>
        <tr>
          <th>Frontend</th>
          <th>Backend</th>
          <th>Other</th>
        </tr>
        <tr>
          <td>HTML</td>
          <td>Node.js</td>
          <td>Java</td>
        </tr>
        <tr>
          <td>CSS</td>
          <td>Express.js</td>
          <td>VScode</td>
        </tr>
        <tr>
          <td>JavaScript</td>
          <td>MongoDB</td>
          <td>Git && Github</td>
        </tr>
        <tr>
          <td>Typescript</td>
          <td>Firebase</td>
          <td>Vercel</td>
        </tr>
        <tr>
          <td>React.js</td>
        </tr>
      </table>
      <p className="open-frameworks">
        * Open to Learn more frontend technologies
      </p>
    </div>
  );
};

export default Skills;
