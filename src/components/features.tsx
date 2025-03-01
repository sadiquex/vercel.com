import { MessageCircle, Terminal } from "lucide-react";

export default function Features() {
  return (
    <div className="container grid border-[0.01px] border-[#454545] p-0 sm:grid-cols-2">
      {/* left side */}
      <div className="flex flex-col gap-8 border-[0.01px] border-[#454545] p-8">
        <div className="space-y-4">
          <p className="flex items-center gap-2 text-gray-600">
            <Terminal size={24} />
            Git-connected Deploys
          </p>

          <h3 className="text-2xl font-semibold">
            From localhost to htttps, in seconds.
            <br />
            <span className="text-gray-600">Deploy from Git or your CLI.</span>
          </h3>
        </div>
        {/* image */}
        <div className="h-[333px] w-[443px]">
          <img
            src="/features/terminal.png"
            alt="Terminal"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      {/* right side */}
      <div className="flex flex-col gap-8 border-[0.01px] border-[#454545] p-8">
        <div className="space-y-4">
          <p className="flex items-center gap-2 text-gray-600">
            <MessageCircle size={24} />
            Collaborative pre-production
          </p>

          <div>
            <h3 className="text-2xl font-semibold">
              Every deploy is remarkable.{" "}
              <span className="text-gray-600">
                Chat with your team on real, production-grade UI, not just
                designs.
              </span>
            </h3>
          </div>
        </div>
        {/* image */}
        <div className="h-[301px] w-[443px]">
          <img
            src="/features/chat.png"
            alt="Terminal"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
