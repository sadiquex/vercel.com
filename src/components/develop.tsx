import { GitBranch, Globe, Terminal } from "lucide-react";

export default function DevelopSection() {
  return (
    <div className="container flex flex-col items-center justify-center border-[0.01px] border-[#454545] py-24 text-white">
      <h2 className="flex items-center justify-center gap-2 text-xl font-semibold sm:text-3xl">
        Develop with your favorite tools
        <Terminal size={24} className="block sm:hidden" />
        <Terminal size={36} className="hidden sm:block" />
      </h2>

      <h2 className="flex items-center gap-2 text-center text-xl font-semibold sm:text-3xl">
        Launch globally, instantly{" "}
        <Globe size={24} className="hidden sm:block" />
        Keep pushing
        <GitBranch size={24} className="hidden sm:block" />
      </h2>
    </div>
  );
}
