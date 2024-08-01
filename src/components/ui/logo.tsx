import { cn } from "@/lib/utils";

const Logo = () => {
  return (
    <h1
      className={
        "z-[2000] uppercase tracking-wide flex items-center font-black text-2xl sm:text-4xl"
      }
    >
      <span className="text-primary text-3xl sm:text-5xl">{"{"}</span>dorta
      <span className="text-primary">{"."}</span>dev
      <span className="text-primary text-3xl sm:text-5xl">{"}"}</span>
    </h1>
  );
};

export default Logo;
