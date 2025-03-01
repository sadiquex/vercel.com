import { Building, ShieldCheck } from "lucide-react";

export default function ScaleSection() {
  return (
    <section className="container border-[0.01px] border-[#454545] py-16 text-white">
      <div className="flex flex-wrap items-center justify-center gap-2 font-semibold sm:text-3xl">
        Scale your
        <span className="flex items-center gap-1 rounded-full border-[0.01px] border-[#454545] px-4 py-2 text-sm font-medium">
          <Building />
          Enterprise
        </span>
        without compromising
        <span className="flex items-center gap-1 rounded-full border-[0.01px] border-[#454545] px-4 py-2 text-sm font-medium">
          <ShieldCheck />
          Security
        </span>
      </div>
    </section>
  );
}
