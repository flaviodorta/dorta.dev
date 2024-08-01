const Tag = ({ title }: { title: string }) => {
  return (
    <span className="text-white px-3 py-1 h-fit text-center w-fit text-base tracking-wider rounded-full bg-[#151515]">
      {title}
    </span>
  );
};

export default Tag;
