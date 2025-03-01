import { Laptop, Moon, Sun, X } from "lucide-react";
import { Button } from "./ui/button";

export default function MobileNav({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black px-4 pt-2 text-white">
      <div className="flex w-full items-center justify-between py-4">
        <div className="flex items-center">
          <img src="/vercel-icon-light.svg" className="h-8 w-8" alt="Vercel" />
          <p className="text-2xl font-semibold">Vercel</p>
        </div>

        <button
          className="block cursor-pointer rounded-full border-[0.01px] border-[#454545] p-2 sm:hidden"
          onClick={onClose}
        >
          <X size={24} />
        </button>
      </div>

      <div className="flex w-full flex-col gap-4 py-4">
        <Button className="bg-white text-black hover:bg-white">Sign up</Button>
        <Button className="border-[0.01px] border-[#454545] bg-[#1f1f1f] hover:bg-[#1f1f1f] hover:text-white">
          Log in
        </Button>
      </div>

      <div className="space-y-9">
        <MobileNavAccordion />

        <p>Docs</p>
        <p>Pricing</p>
        <p>Contact</p>
      </div>

      <div className="mt-8 flex justify-between border-b-[0.01px] border-t-[0.01px] border-[#454545] py-8">
        <p>Theme</p>

        <div className="flex items-center gap-1 rounded-full border p-2">
          <Laptop size={14} />
          <Sun size={14} className="text-gray-400" />
          <Moon size={14} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function MobileNavAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger>Products</AccordionTrigger>
        <AccordionContent>Nav menu items</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-none">
        <AccordionTrigger>Solutions</AccordionTrigger>
        <AccordionContent>solution here</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border-none">
        <AccordionTrigger>Resources</AccordionTrigger>
        <AccordionContent>resoueces here</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
