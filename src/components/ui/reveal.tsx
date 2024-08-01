"use client";

import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  width?: "fit-content" | "w-full";
  className?: string;
};

const Reveal = ({ children, width = "fit-content", className }: Props) => {
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const ref = useRef<HTMLDivElement>(null!);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible").then(() => {
        slideControls.start({
          opacity: 0,
        });
      });
      mainControls.start("visible");
    } else {
      slideControls.start("hidden");
      mainControls.start("hidden");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div
      ref={ref}
      className={cn(["relative overflow-hidden w-fit", width, className])}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>

      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute   h-full top-0 left-0 right-0  bg-primary z-[1000]"
      />
    </div>
  );
};

export default Reveal;
