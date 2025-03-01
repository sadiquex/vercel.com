import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="container mt-8 flex h-[618px] flex-col items-center justify-center gap-8 border-[0.01px] border-[#454545] bg-black px-0 text-white">
      <h2 className="pt-12 text-center text-2xl font-semibold sm:text-5xl">
        Your complete <br className="sm:hidden" /> platform for the web.
      </h2>

      <p className="w-[70%] text-center text-[#a1a1a1] sm:w-auto sm:text-[20px]">
        Vercel provides the developer tools and cloud infrastructure{" "}
        <br className="hidden sm:block" /> to build, scale, and secure a faster,
        more personalized web.
      </p>

      <div className="flex items-center gap-4 sm:hidden">
        <Button className="rounded-full bg-white px-6 py-6 text-black hover:bg-gray-200">
          <img src="/vercel-icon-dark.svg" className="h-4 w-4" />
          <p className="block sm:hidden">Deploy</p>
          <p className="hidden sm:block">Start Deploying</p>
        </Button>
        <Button className="rounded-full border bg-black px-8 py-6">
          Get a Demo
        </Button>
      </div>

      <div className="relative flex h-full w-full flex-col items-center justify-end gap-7 pb-8">
        {/* bg gradiane */}
        <div className="hero-bg absolute inset-0"></div>

        {/* grid overlay */}
        <div className="hero-grid pointer-events-none absolute inset-0"></div>

        <div className="z-50 hidden items-center gap-4 sm:flex">
          <Button className="rounded-full bg-white px-6 py-6 text-black hover:bg-gray-200">
            <img src="/vercel-icon-dark.svg" className="h-4 w-4" />
            <p className="block sm:hidden">Deploy</p>
            <p className="hidden sm:block">Start Deploying</p>
          </Button>
          <Button className="rounded-full border bg-black px-8 py-6">
            Get a Demo
          </Button>
        </div>
        <img
          src="/vercel-icon-light.svg"
          className="z-10 h-[208px] w-[178px]"
        />
      </div>
    </div>
  );
}
