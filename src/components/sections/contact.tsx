"use client";

import { useSidebarActive } from "@/context/sidebar-active.context";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import Reveal from "../ui/reveal";

const Contact = () => {
  const { addRefs } = useSidebarActive();

  return (
    <section
      ref={(el) => (el ? addRefs(el) : undefined)}
      id="contact"
      className="container-section flex flex-col gap-4 text-center"
    >
      <Reveal className="text-center w-full">
        <h2 className="heading-size">
          Contact<span className="text-primary">.</span>
        </h2>
      </Reveal>

      <Reveal className="text-center w-full">
        <p>
          Shoot me an email if you want to connect! You can also find me on{" "}
          <a
            href="#linkedin"
            className="text-primary cursor-pointer hover:underline"
          >
            Linkedin
          </a>{" "}
          if that&apos;s more your speed.
        </p>
      </Reveal>

      <div className="flex text-center flex-col items-center gap-4 font-medium justify-center transition-all duration-100 text-white">
        <Reveal className="text-center">
          <span className="flex text-2xl items-center gap-2 hover:text-primary/80 hover:cursor-pointer">
            <FaEnvelope />
            dorta.dev@gmail.com
          </span>
        </Reveal>

        <Reveal className="text-center">
          <span className="flex text-2xl items-center gap-2 hover:text-primary/80 hover:cursor-pointer">
            <FaWhatsapp />
            +55 (11) 97689-8505
          </span>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
