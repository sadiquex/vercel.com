import { useState, useEffect } from "react";
import {
  ProductsHoverCard,
  ResourcesHoverCard,
  SolutionsHoverCard,
} from "./hover-cards";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import MobileNav from "./mobile-nav";

export default function Navbar() {
  const [hasBorder, setHasBorder] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasBorder(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed left-0 top-0 z-50 flex h-16 w-full items-center justify-between bg-black px-6 py-6 text-white transition-all sm:px-16 ${
          hasBorder
            ? "border-b-[0.01px] border-[#454545]"
            : "border-b border-transparent"
        }`}
      >
        {/* Logo */}
        <ul className="flex items-center gap-3">
          <div className="flex items-center pr-8">
            <img
              src="/vercel-icon-light.svg"
              className="h-8 w-8"
              alt="Vercel"
            />
            <p className="text-2xl font-semibold">Vercel</p>
          </div>

          {/* Desktop Links */}
          <div className="hidden sm:block">
            <ProductsHoverCard />
            <SolutionsHoverCard />
            <ResourcesHoverCard />
            <Button variant={"link"} className="text-gray-400">
              Enterprise
            </Button>
            <Button variant={"link"} className="text-gray-400">
              Docs
            </Button>
            <Button variant={"link"} className="text-gray-400">
              Pricing
            </Button>
          </div>
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="block cursor-pointer rounded-full border-[0.01px] border-[#454545] p-2 sm:hidden"
          onClick={() => setIsMobileNavOpen(true)}
        >
          <Menu size={18} />
        </div>

        {/* Desktop Right Buttons */}
        <ul className="hidden items-center gap-4 sm:flex">
          <Button className="border-[0.01px] border-[#454545] bg-[#1f1f1f] hover:bg-[#1f1f1f] hover:text-white">
            Log in
          </Button>
          <Button
            className="border-[0.01px] border-[#454545] bg-[#1f1f1f] hover:bg-[#1f1f1f] hover:text-white"
            variant={"outline"}
          >
            Contact
          </Button>
          <Button className="bg-white text-black hover:bg-white">
            Sign Up
          </Button>
        </ul>
      </div>

      {/* mobile nav */}
      {isMobileNavOpen && (
        <MobileNav onClose={() => setIsMobileNavOpen(false)} />
      )}
    </>
  );
}
