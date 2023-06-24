import React from "react";
import ProjectItem from "./ProjectItem";
import { FaAtom, FaNodeJs, FaLeaf, FaLink } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

function Project() {
  return (
    <div className="mt-10 mx-auto md:max-w-4xl max-w-md h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4 self-start border-b-4 pb-1 border-white">
        Projects
      </h1>
      <div>
        <ProjectItem
          videoSrc="/assets/ecommerce.mp4"
          imgSrc="https://i.pinimg.com/originals/8d/0a/67/8d0a678c64ba4718e01d9704126a44e5.jpg"
          title="Ecommerce Site"
          description="This project demonstrates a simple e-commerce application for an imaginary online store. I learned how to work with React Context, and this was my first full-stack project."
          technologies={[
            { icon: FaAtom, label: "React" },
            { icon: FaNodeJs, label: "Node" },
            { icon: SiExpress, label: "Express" },
            { icon: FaLeaf, label: "MongoDB" },
          ]}
          githubLink="https://github.com/LakshmiChaitanya2008/imaginary-ecommerce"
        />
        <ProjectItem
          imgSrc="https://user-images.githubusercontent.com/72391391/246660604-f1b3eebe-06b4-4aba-abec-55fe744adae9.png"
          title="HTMLArena"
          description="Simple HTML, CSS and JavaScript Editor with SCSS, LESS, and TypeScript support! External Libraries with CDN.js"
          technologies={[{ icon: FaAtom, label: "React" }]}
          siteLink="https://lakshmichaitanya2008.github.io/HTMLArena/"
          githubLink="https://github.com/LakshmiChaitanya2008/htmlarena"
        />
        <ProjectItem
          imgSrc="/assets/ud-coupon.png"
          title="Udemy Coupon Scraper"
          description="A Node.js CLI that scrapes various websites to gather free coupon codes for Udemy courses with the Puppeteer library."
          technologies={[{ icon: FaNodeJs, label: "Node" }]}
          siteLink="https://www.npmjs.com/package/ud-coupon"
          githubLink="https://github.com/LakshmiChaitanya2008/udemy-coupon-scraper"
        />
      </div>
    </div>
  );
}

export default Project;
