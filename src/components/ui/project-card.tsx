import Image from "next/image";
import { FaGithub, FaLongArrowAltRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { LuExternalLink } from "react-icons/lu";
import { motion } from "framer-motion";
import Reveal from "./reveal";
import { useState } from "react";
import Modal from "./modal";
import ProjectCardProps from "@/interfaces/project-card.types";

const ProjectCard = ({
  title,
  description,
  imgSrc,
  githubLink,
  projectLink,
  techTags,
  modalProps,
}: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="flex flex-col gap-6 w-[500px]">
        <Reveal width="w-full">
          <div className="group aspect-video flex flex-center bg-black w-full h-[350px] rounded-lg overflow-hidden">
            {/* <motion.div> */}
            <Image
              width={400}
              height={250}
              src="/example-project.jpg"
              alt="project"
              className="relative top-[24%] group-hover:rotate-6 group-hover:-translate-y-4 transition-transform duration-100 rounded-lg"
            />
            {/* </motion.div> */}
          </div>
        </Reveal>

        <Reveal width="w-full">
          <div className="flex gap-4 items-center">
            <h3 className="font-bold text-2xl whitespace-nowrap">Lilo Chat</h3>
            <div className="divider" />
            <div className="flex gap-4">
              <FaGithub className="icon-project-card" />
              <LuExternalLink className="icon-project-card" />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div>
            <p>
              A real-time application to share YouTube videos while chatting
              with other strangers.
              <span className="inline-block">
                <span
                  onClick={() => setIsOpen(true)}
                  className="group ml-2 text-base text-primary hover:underline cursor-pointer flex items-center gap-1"
                >
                  Learn more{" "}
                  <IoIosArrowForward className="text-sm group-hover:translate-x-1 transition-transform duration-100" />
                </span>
              </span>
            </p>
          </div>
        </Reveal>
      </section>

      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        description={<></>}
        githubLink=""
        projectLink=""
        imgSrc=""
        techTags={[]}
        title=""
      />
    </>
  );
};

export default ProjectCard;
