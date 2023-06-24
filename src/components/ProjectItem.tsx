import React from "react";
import { FaLink } from "react-icons/fa";

interface Technology {
  icon: React.ElementType;
  label: string;
}

interface ProjectItemProps {
  videoSrc?: string;
  imgSrc?: string;
  title: string;
  description: string;
  technologies: Technology[];
  siteLink?: string;
  githubLink?: string;
}

function ProjectItem({
  videoSrc,
  imgSrc,
  title,
  description,
  technologies,
  siteLink,
  githubLink,
}: ProjectItemProps) {
  const TechnologyIcons = () => (
    <div className="flex flex-wrap">
      {technologies.map(({ icon: Icon, label }) => (
        <p
          key={label}
          className="flex items-center gap-1 p-1 px-2 mr-2 mb-3 md:mb-0 rounded-lg bg-blue-500"
        >
          <Icon />
          {label}
        </p>
      ))}
    </div>
  );

  return (
    <div className="md:flex  gap-4 bg-gray-100 project-item bg-opacity-80 p-3 mb-5 md:max-w-full max-w-md">
      {videoSrc ? (
        <video
          autoPlay
          loop
          src={videoSrc}
          controls
          className="md:w-96"
        ></video>
      ) : (
        <img src={imgSrc} className="md:w-96 md:h-44" alt={title} />
      )}
      <div className="flex justify-between flex-col">
        <h1 className="text-2xl md:mt-0 mt-4">{title}</h1>
        <p className="mb-3">
          <span className="font-semibold block my-2">Description:</span>
          {description}
        </p>
        <TechnologyIcons />
        <div className="flex gap-3">
          {siteLink && (
            <a
              className="mt-3 text-blue-500 flex items-center gap-2 my-2"
              href={siteLink}
            >
              <FaLink /> Site
            </a>
          )}
          {githubLink && (
            <a
              className="mt-3 text-blue-500 flex items-center gap-2 my-2"
              href={githubLink}
            >
              <FaLink /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
