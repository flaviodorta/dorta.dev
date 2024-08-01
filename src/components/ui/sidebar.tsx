"use client";

import { useSidebarActive } from "@/context/sidebar-active.context";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = ["about", "projects", "experience", "contact"];

const scroll = [1000, 1800, 3360, 3800];

const Sidebar = () => {
  const { selected, setSelected } = useSidebarActive();

  return (
    <motion.div
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black z-10"
    >
      <aside className="pt-4 font-thin z-10 sticky top-0 h-screen right-0 bottom-0 w-[60px]">
        <div className="w-12 h-12 mx-auto flex-center rounded-md bg-black-mate">
          <span className="font-neue-grotesk text-3xl font-bold">
            <span className="text-white">d</span>
            <span className="text-primary">.</span>
          </span>
        </div>
        <nav className="flex text-lg flex-col  mt-10">
          {navItems.map((item, idx) => (
            <motion.a
              initial={{ x: -70 }}
              animate={{ x: 0 }}
              transition={{
                duration: 0.5,
                delay: (idx + 1) * 0.15,
              }}
              key={idx}
              className={cn([
                "sidebar-links",
                selected === item ? "sidebar-links-active" : "",
              ])}
              id={item}
              onClick={() => {
                setSelected(item);
                window.scrollTo({
                  behavior: "smooth",
                  top: scroll[idx],
                });
              }}
            >
              {item}
            </motion.a>
          ))}
        </nav>
      </aside>
    </motion.div>
  );
};

export default Sidebar;
