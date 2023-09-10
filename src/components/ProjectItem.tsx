import React from "react";

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
          className="flex items-center gap-1 p-1 px-2 mr-2 mb-3 md:mb-0 rounded-lg border-white border-2"
        >
          <Icon />
          {label}
        </p>
      ))}
    </div>
  );

  return (
    <div className="md:flex  gap-4 bg-[#1c1917] border-white border rounded-xl p-3 mb-5 md:max-w-full max-w-md">
      {videoSrc ? (
        <video
          autoPlay
          loop
          src={videoSrc}
          controls
          className="md:w-1/2"
        ></video>
      ) : (
        <img src={imgSrc} className="md:w-1/2 md:h-fit" alt={title} />
      )}
      <div className="flex justify-between flex-col md:w-1/2">
        <h1 className="text-2xl md:mt-0 mt-4">{title}</h1>
        <p className="mb-3">
          <span className="font-semibold block my-2">Description:</span>
          {description}
        </p>
        <TechnologyIcons />
        <div className="flex gap-x-3 text-sm ml-1">
          {siteLink && (
            <a
              className="mt-3 text-blue-500 flex items-center gap-2 my-2"
              href={siteLink}
            >
              Site
            </a>
          )}
          {githubLink && (
            <a
              className="mt-3 text-blue-500 flex items-center gap-2 my-2"
              href={githubLink}
            >
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
