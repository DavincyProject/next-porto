"use client";

import React, { useState } from "react";
import { Github, Instagram } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

const Footer = () => {
  const [email, setEmail] = useState<string>("");

  const sendEmailConnect = (e: any) => {
    e.preventDefault();
    setEmail(email);
  };

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
      <div className="bg-[#F6F5F5]">
        <div className="px-16 py-2 flex justify-between items-start">
          <div className="flex items-center gap-2 font-semibold">
            <Image
              className="rounded-full shadow-md border"
              src={"/logo.png"}
              alt="logo"
              width={50}
              height={50}
            />
            Davincy Project
          </div>
          <div>
            <h1 className="font-semibold">About</h1>
            <ul>
              <li>testing 1</li>
              <li>testing 2</li>
              <li>testing 3</li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold">Let&apos;s Connect</h1>
            <form onClick={sendEmailConnect}>
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button type="submit">Send</Button>
              </div>
            </form>
          </div>
        </div>
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
