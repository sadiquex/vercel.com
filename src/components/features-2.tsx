import { Backpack, LoaderCircle } from "lucide-react";

export default function SecondFeatures() {
  return (
    <div className="container grid border-[0.01px] border-[#454545] p-0 sm:grid-cols-2">
      {/* left side */}
      <div className="flex flex-col gap-8 border-[0.01px] border-[#454545] p-8">
        <div className="space-y-4">
          <p className="flex items-center gap-2 text-gray-600">
            <LoaderCircle size={24} />
            Instant Rollbacks
          </p>

          <h3 className="text-2xl font-semibold">
            Go ahead, deploy on Friday.{" "}
            <span className="text-gray-600">
              Instantly rollback to a working deployment.
            </span>
          </h3>
        </div>
        {/* image */}
        <div className="h-[333px] w-[443px]">
          <img
            src="/features/instant-rollbacks.png"
            alt="Instant rollbacks"
            className="h-full w-full"
          />
        </div>
      </div>
      {/* right side */}
      <div className="flex flex-col gap-8 border-[0.01px] border-[#454545] p-8">
        <div className="space-y-4">
          <p className="flex items-center gap-2 text-gray-600">
            <Backpack size={24} />
            Conformance
          </p>

          <div>
            <h3 className="text-2xl font-semibold">
              Move fast, don{"'"}t break things.{" "}
              <span className="text-gray-600">
                Keep <br /> quality high while maintaining velocity with
                Enterprise Monorepos.
              </span>
            </h3>
          </div>
        </div>
        {/* image */}
        <div className="h-[333px] w-[443px] bg-red-200">
          <img
            src="/features/conformance.png"
            alt="Conformance"
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
