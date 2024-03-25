import React from "react";
import ProjectCard from "../components/ProjectCard";
import Heading from "../components/Heading";
import { githubRepos } from "../data/data";

const Projects = () => {
  return (
    <div>
      <Heading heading="Portfolio Gallery" />
      <div className="grid sm:grid-cols-2 gap-2">
        {githubRepos.map((repo, index) => (
          <ProjectCard key={index} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
