import { ChevronDown, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function ProductsHoverCard() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild className="rounded-full text-gray-400">
        <Button variant="link">
          Products <ChevronDown />{" "}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-[760px] border border-gray-600 bg-black text-white">
        {/* 3 columns */}
        <div className="grid grid-cols-3 gap-6">
          {/* first section */}
          <div className="flex flex-col gap-4">
            <p className="text-gray-600">DX Platform</p>

            {[1, 2].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="rounded-md border p-1">
                  <Settings size={18} />
                </div>
                <div className="text-sm">
                  <p>Fluid compute</p>
                  <p className="whitespace-nowrap text-gray-600">
                    Servers, in serverless form
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* second column */}
          <div className="flex flex-col gap-4">
            <p className="text-gray-600">Managed Infrastructure</p>

            {[1, 2, 3, 4].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="rounded-md border p-1">
                  <Settings size={18} />
                </div>
                <div className="text-sm">
                  <p>Fluid compute</p>
                  <p className="whitespace-nowrap text-gray-600">
                    Servers, in serverless form
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* third section */}
          <div className="flex flex-col gap-4">
            <p className="text-gray-600">DX Platform</p>

            {[1, 2, 3].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="rounded-md border p-1">
                  <Settings size={18} />
                </div>
                <div className="text-sm">
                  <p>Fluid compute</p>
                  <p className="whitespace-nowrap text-gray-600">
                    Servers, in serverless form
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export function SolutionsHoverCard() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild className="rounded-full text-gray-400">
        <Button variant="link">
          Solutions <ChevronDown />{" "}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-[760px] border border-gray-600 bg-black text-white">
        {/* 3 columns */}
        <div className="grid grid-cols-3 gap-6">
          {/* first section */}
          <div className="flex flex-col gap-4">
            <p className="text-gray-600">Use cases</p>

            {[1, 2, 3, 4, 5].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="rounded-md border p-1">
                  <Settings size={18} />
                </div>
                <div className="text-sm">
                  <p>Fluid compute</p>
                  <p className="whitespace-nowrap text-gray-600">
                    Servers, in serverless form
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* second column */}
          <div className="flex flex-col gap-4">
            <p className="text-gray-600">Users</p>

            {[1, 2].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="rounded-md border p-1">
                  <Settings size={18} />
                </div>
                <div className="text-sm">
                  <p>Fluid compute</p>
                  <p className="whitespace-nowrap text-gray-600">
                    Servers, in serverless form
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export function ResourcesHoverCard() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild className="rounded-full text-gray-400">
        <Button variant="link">
          Resources <ChevronDown />{" "}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-[760px] border border-gray-600 bg-black text-white">
        {/* 3 columns */}
        <div className="grid grid-cols-3 gap-6">
          {/* first section */}
          <div className="flex flex-col gap-4">
            <p className="text-gray-600">Tools</p>

            {[1, 2, 3, 4, 5].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="rounded-md border p-1">
                  <Settings size={18} />
                </div>
                <div className="text-sm">
                  <p>Fluid compute</p>
                  <p className="whitespace-nowrap text-gray-600">
                    Servers, in serverless form
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* second column */}
          <div className="flex flex-col gap-4">
            <p className="text-gray-600">Company</p>

            {[1, 2, 3, 4].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="rounded-md border p-1">
                  <Settings size={18} />
                </div>
                <div className="text-sm">
                  <p>Fluid compute</p>
                  <p className="whitespace-nowrap text-gray-600">
                    Servers, in serverless form
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
