import {
  Github,
  Laptop,
  Linkedin,
  Moon,
  Sun,
  Twitter,
  Youtube,
} from "lucide-react";
import { Button } from "./ui/button";

const products = [
  "AI",
  "Enterprise",
  "Fluid Compute",
  "Next.js",
  "Observability",
  "Previews",
  "Rendering",
  "Security",
  "Turbo",
  "v0",
];

const resources = [
  "Community",
  "Docs",
  "Guides",
  "Help",
  "Integrations",
  "Pricing",
  "Resources",
  "Solution Partners",
  "Templates",
];

const companyData = [
  "About",
  "Blog",
  "Careers",
  "Changelogs",
  "Contact Us",
  "Customers",
  "Partners",
  "Privacy Policy",
  "Legal",
];

const socialMedia = [
  {
    icon: <Github size={20} />,
    name: "Github",
  },
  {
    icon: <Linkedin size={20} />,
    name: "Linkedin",
  },
  {
    icon: <Twitter size={20} />,
    name: "Twitter",
  },
  {
    icon: <Youtube size={20} />,
    name: "Youtube",
  },
];

export default function Footer() {
  return (
    <div className="container py-12 sm:px-0">
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-5">
        <ul className="space-y-4">
          <p className="font-semibold">Products</p>

          <ul className="space-y-2">
            {products.map((product, i) => (
              <li
                key={i}
                className="cursor-pointer text-gray-500 hover:underline"
              >
                {product}
              </li>
            ))}
          </ul>
        </ul>

        <ul className="space-y-4">
          <p className="font-semibold">Resources</p>

          <ul className="space-y-2">
            {resources.map((resource, i) => (
              <li
                key={i}
                className="cursor-pointer text-gray-500 hover:underline"
              >
                {resource}
              </li>
            ))}
          </ul>
        </ul>

        <ul className="space-y-4">
          <p className="font-semibold">Company</p>

          <ul className="space-y-2">
            {companyData.map((item, i) => (
              <li
                key={i}
                className="cursor-pointer text-gray-500 hover:underline"
              >
                {item}
              </li>
            ))}
          </ul>
        </ul>

        <ul className="space-y-4">
          <p className="font-semibold">Social</p>

          <ul className="space-y-2">
            {socialMedia.map((item, i) => (
              <li
                key={i}
                className="flex cursor-pointer items-center gap-1 text-gray-500 hover:underline"
              >
                {item.icon}
                <p>{item.name}</p>
              </li>
            ))}
          </ul>
        </ul>

        <img
          src="/vercel-icon-light.svg"
          alt="Vercel"
          className="hidden h-8 w-8 sm:block"
        />
      </div>

      <div className="mt-8 flex items-center justify-between">
        <Button variant={"link"} className="px-0 text-blue-600">
          All systems normal
        </Button>

        <div className="flex items-center gap-1 rounded-full border p-2">
          <Laptop size={14} />
          <Sun size={14} className="text-gray-400" />
          <Moon size={14} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
}
