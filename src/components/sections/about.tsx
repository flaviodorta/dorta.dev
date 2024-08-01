"use client";

import { TbPrompt } from "react-icons/tb";
import Tag from "../ui/tag";
import { useLayoutEffect, useRef } from "react";
import { useSidebarActive } from "@/context/sidebar-active.context";
import Divider from "../ui/divider";
import Reveal from "../ui/reveal";

const tags = [
  "JavaScript",
  "TypeScript",
  "ReactJS",
  "NextJS",
  "HTML",
  "CSS",
  "Tailwind",
  "Framer Motion",
  "Redux",
  "Zustand",
  "React Query",
  "NodeJS",
  "Express",
  "Postgres",
  "MongoDB",
  "AWS",
  "Docker",
];

const About = () => {
  const { addRefs } = useSidebarActive();

  return (
    <section
      ref={(el) => (el ? addRefs(el) : undefined)}
      id="about"
      className="container-section flex flex-col z-50"
    >
      <div className="container-heading-2">
        <Reveal>
          <h2 className="heading-size-2 w-fit">
            About<span className="text-primary">.</span>
          </h2>
        </Reveal>

        <Divider />
      </div>

      <div className="grid grid-cols-1 gap-16 md:grid-cols-[2fr_1fr]">
        <div className="flex flex-col gap-4">
          <Reveal>
            <p className="leading-8 about-first-letter">
              Hello, I&apos;m Flávio Dorta, if you haven&apos;t already gathered
              that by now. I discovered the art of programming when I started my
              Bachelor&apos;s degree in Computer Engineering at USP. Initially,
              in my career I specialized in Front-End using the React.js
              library, and later I started learning about back-end with Node.js.
            </p>
          </Reveal>

          <Reveal>
            <p className="leading-8">
              I am currently working as a Front-end developer at Banco do Brasil
              and building components for the company&apos;s applications. It
              has been a great learning experience through teamwork.
            </p>
          </Reveal>

          <Reveal>
            <p>
              In my free time, I like to study piano and physics. And on Sunday
              afternoons, it is essential to be in a place where there is
              nature.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <TbPrompt className="text-primary text-3xl" />
              <span className="text-xl font-black tracking-wide">
                Use at work
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag, idx) => (
                <Tag key={idx} title={tag} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
