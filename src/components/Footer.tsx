import React from "react";
import { Github, Instagram } from "lucide-react";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Footer = () => {
  const icon = [
    {
      id: 1,
      name: "Github",
      url: "https://github.com/DavincyProject",
      icon: <Github size={25} />,
    },
    {
      id: 2,
      name: "Instagram",
      url: "https://www.instagram.com/billydavincy1/",
      icon: <Instagram size={25} />,
    },
  ];

  return (
    <footer className="flex flex-col ">
      <div>
        <div className="px-16">a</div>
      </div>
      <div className="bg-cream">
        <div className="px-16 py-6 flex justify-between items-center">
          <div className="text-xs">
            &copy; 2024 Davincy Project | All rights reserved | All icons and
            logo are property of their respective owners.
          </div>
          <div className="flex gap-2">
            {icon.map((icon) => (
              <TooltipProvider key={icon.id}>
                <Tooltip>
                  <TooltipTrigger>
                    <Link
                      target="_blank"
                      href={icon.url}
                      className="hover:text-blue-400"
                    >
                      {icon.icon}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{icon.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
