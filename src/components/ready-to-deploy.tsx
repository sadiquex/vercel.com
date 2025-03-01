import { Button } from "./ui/button";

export default function ReadyToDeploy() {
  return (
    <section className="container w-full border-[0.01px] border-[#454545] px-0 text-white sm:grid sm:grid-cols-3">
      <div className="col-span-2 flex flex-col items-center gap-4 border-[0.01px] border-[#454545] p-4 py-8 sm:items-start sm:gap-8 sm:p-16">
        <h3 className="text-center text-2xl font-semibold sm:text-left">
          Ready to deploy?{" "}
          <span className="text-gray-400">
            Start building with a free account.{" "}
            <br className="hidden sm:block" /> Speak to an expert for your{" "}
            <span className="text-blue-500">Pro</span> or{" "}
            <span className="text-purple-500">Enterprise</span> needs.
          </span>
        </h3>

        <div className="flex items-center gap-4">
          <Button className="rounded-full bg-white text-black hover:bg-white">
            Start Deploying
          </Button>
          <Button className="rounded-full border bg-transparent text-white hover:bg-gray-700">
            Talk to an expert
          </Button>
        </div>
      </div>

      <div className="col-span-1 flex flex-col items-center gap-8 border-[0.01px] border-[#454545] p-4 py-8 sm:items-start sm:p-16">
        <p className="text-center sm:text-left">
          Explore Vercel Enterprise{" "}
          <span className="text-gray-400">
            with <br className="hidden sm:block" /> an interactive product tour,{" "}
            <br className="hidden sm:block" /> trial, or a personalized demo.
          </span>
        </p>

        <Button className="rounded-full border bg-transparent text-white hover:bg-gray-700">
          Explore Enterprise
        </Button>
      </div>
    </section>
  );
}
