'use client';

import { useSidebarActive } from '@/context/sidebar-active.context';
import ProjectCard from '../ui/project-card';
import { useLayoutEffect, useRef } from 'react';
import Divider from '../ui/divider';
import Reveal from '../ui/reveal';
import { projectsContent } from '@/constants/content';
import { profileEnd } from 'console';

const Projects = () => {
  const { addRefs } = useSidebarActive();

  return (
    <div
      ref={(el) => (el ? addRefs(el) : undefined)}
      id='projects'
      className='container-section flex-1 flex flex-col items-center z-50'
    >
      <div className='container-heading-2'>
        <Divider />

        <Reveal>
          <h2 className='heading-size-2'>
            Projects<span className='text-primary'>.</span>
          </h2>
        </Reveal>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {projectsContent.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            description={<p>{project.description}</p>}
            githubLink={project.githubLink}
            projectLink={project.projectLink}
            imgSrc={project.imgSrc}
            techTags={project.techTags}
          />
        ))}
        {/* <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard /> */}
      </div>
    </div>
  );
};

export default Projects;
