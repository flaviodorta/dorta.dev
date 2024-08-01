"use client";

import { useSidebarActive } from "@/context/sidebar-active.context";
import ProjectCard from "../ui/project-card";
import { useLayoutEffect, useRef } from "react";
import Divider from "../ui/divider";
import Reveal from "../ui/reveal";

const Projects = () => {
  const { addRefs } = useSidebarActive();

  return (
    <div
      ref={(el) => (el ? addRefs(el) : undefined)}
      id="projects"
      className="container-section flex flex-col items-center z-50"
    >
      <div className="container-heading-2">
        <Divider />

        <Reveal>
          <h2 className="heading-size-2">
            Projects<span className="text-primary">.</span>
          </h2>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
