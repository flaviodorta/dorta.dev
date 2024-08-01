import { cn } from "@/lib/utils";

const Divider = ({ className }: { className?: string }) => {
  return (
    <div className={cn(["flex items-center flex-1", className])}>
      <span className="divider" />
    </div>
  );
};

export default Divider;
