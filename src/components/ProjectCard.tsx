import { FunctionComponent } from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  github: string;
  url: string | null;
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  title,
  image,
  github,
  url,
}) => {
  return (
    <div className="project-card">
      <img src={image} width="300" />
      <h3>
        {title}{" "}
        <a href={github} target="_blank">
          <i className="fab fa-github"></i>
        </a>{" "}
        {url ? (
          <a href={url!} target="_blank">
            <i className="fas fa-link"></i>
          </a>
        ) : (
          ""
        )}
      </h3>
    </div>
  );
};

export default ProjectCard;
