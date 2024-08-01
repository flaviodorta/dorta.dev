"use client";

import { experienceCardsContents } from "@/constants/content";
import Divider from "../ui/divider";
import ExperienceCard from "../ui/experience-card";
import { useLayoutEffect, useRef } from "react";
import { useSidebarActive } from "@/context/sidebar-active.context";
import Reveal from "../ui/reveal";

const Experience = () => {
  const { addRefs } = useSidebarActive();

  return (
    <section
      ref={(el) => (el ? addRefs(el) : undefined)}
      id="experience"
      className="flex flex-col container-section"
    >
      <div className="container-heading-2">
        <Reveal>
          <h2 className="heading-size-2">
            Experience<span className="text-primary">.</span>
          </h2>
        </Reveal>
        <Divider />
      </div>

      <ul className="flex flex-col gap-8">
        {experienceCardsContents.map((content, idx) => (
          <ExperienceCard
            key={idx}
            title={content.title}
            state={content.state}
            description={content.description}
            period={content.period}
            office={content.office}
            tags={content.tags}
          />
        ))}
      </ul>
    </section>
  );
};

export default Experience;
