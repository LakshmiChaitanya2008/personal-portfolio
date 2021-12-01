import { FunctionComponent } from "react";
import ProjectCard from "./ProjectCard";

interface ProjectProps {}

const Project: FunctionComponent<ProjectProps> = () => {
  return (
    <div className="projects">
      <h1>What I do?</h1>

      <div className="project-cards">
        <ProjectCard
          github="https://github.com/LakshmiChaitanya2008/Javascript-Projects"
          image="https://phrase.com/blog/wp-content/uploads/2016/09/javascript-localization.png"
          title="Javascript Projects"
          url={null}
        />

        <ProjectCard
          github="https://github.com/LakshmiChaitanya2008/html-sandbox"
          image="../images/html-sandbox.png"
          title="HTML Sandbox"
          url="https://htmlsandbox.netlify.app/"
        />

        <ProjectCard
          github="https://github.com/LakshmiChaitanya2008/code-with-chaitanya"
          image="../images/blog.png"
          title="Personal Blog"
          url="https://code-with-chaitanya.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Project;
