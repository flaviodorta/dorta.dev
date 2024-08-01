import ReactDOM from "react-dom";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import ModalProps from "@/interfaces/modal.type";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import Tag from "./tag";
import Divider from "./divider";

const Modal = ({
  isOpen,
  projectLink,
  setIsOpen,
  imgSrc,
  description,
  title,
  githubLink,
  techTags,
}: ModalProps) => {
  const body = document.querySelector("body");

  if (isOpen) {
    body!.style.overflowY = "hidden";
  } else {
    body!.style.overflowY = "scroll";
  }

  const content = (
    <div
      onClick={() => setIsOpen(false)}
      className="fixed overflow-y-scroll backdrop-blur-sm cursor-pointer bg-black/30 flex justify-center top-0 left-0 right-0 bottom-0 z-[100000] w-screen h-screen"
    >
      <button className="text-white bg-none border-none text-2xl absolute top-5 right-5 cursor-pointer">
        <MdClose />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className="cursor-auto relative overflow-hidden top-[10%] w-full max-w-[700px] h-fit bg-black-mate shadow-lg rounded-2xl"
      >
        <Image
          width={1000}
          height={300}
          layout="responsive"
          src="/example-project.jpg"
          alt="project"
        />
        <div className="p-7 flex flex-col gap-8">
          <div className="flex gap-4 justify-between items-center">
            <h3 className="text-white text-3xl font-bold">Project Title</h3>

            <Divider />
            <div className="flex gap-4">
              <FaGithub className="icon-project-card" />
              <LuExternalLink className="icon-project-card" />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {["React", "TypeScript", "AWS"].map((tag, idx) => (
              <Tag key={idx} title={tag} />
            ))}
          </div>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </motion.div>
    </div>
  );

  if (!isOpen) return <></>;

  // @ts-ignore
  return ReactDOM.createPortal(content, document.getElementById("root"));
};

export default Modal;
