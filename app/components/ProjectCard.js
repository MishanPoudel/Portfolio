import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SkillItem from "./SkillItem";
import Link from "next/link";
import { skills } from "../data/data";

const ProjectCard = ({ repo }) => {
  const renderSkills = () => {
    return repo.techUsed.map((tech, index) => {
      const techSkill = skills.filter((skill) => skill.name === tech)[0];
      return React.createElement(SkillItem, {
        skillItem: techSkill,
        isTechStack: true,
        key: index,
      });
    });
  };

  return React.createElement(
    "div",
    {
      className:
        "bg-neutral-900/80 rounded-md p-4 hover:translate-x-1 hover:-translate-y-1 duration-300 text-selection",
    },
    React.createElement(
      "div",
      { className: "flex items-center justify-between" },
      React.createElement(
        Link,
        { href: repo.githubLink, target: "_blank" },
        React.createElement(FaGithub, { size: 30 })
      ),
      React.createElement(
        Link,
        { href: repo.liveURL, target: "_blank" },
        React.createElement(FaExternalLinkAlt, { size: 15 })
      )
    ),
    React.createElement("h3", { className: "font-bold mt-6" }, repo.name),
    React.createElement(
      "p",
      { className: "text-neutral-700 mt-4 text-sm" },
      repo.description
    ),
    React.createElement(
      "div",
      { className: "flex items-center mt-4 gap-2 flex-wrap" },
      renderSkills()
    )
  );
};

module.exports = ProjectCard;
