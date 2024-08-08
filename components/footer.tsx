"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Link, Turtle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const router = useRouter();
  return (
    <footer className="bg-[#023C40] text-slate-50 p-8">
      <div className="container mx-auto">
        <div className="flex items-center mb-6">
          <Turtle className="mr-2" size={24} />
          <h2 className="text-2xl font-bold">turtil</h2>
        </div>

        <div className="flex flex-row gap-8">
          <Button
            variant="link"
            onClick={() => router.push("/terms")}
            className="text-slate-50 p-0 h-auto"
          >
            Terms of service
          </Button>

          <Button
            variant="link"
            onClick={() => router.push("/privacy")}
            className="text-slate-50 p-0 h-auto"
          >
            Privacy policy
          </Button>
        </div>

        <Separator className="my-4 bg-white" />

        <div className="pt-4">
          <p className="text-sm text-slate-400">
            &copy;2024 Turtil. All rights reserved
          </p>
        </div>
      </div>
      <div className=" text-white text-[200px] font-bold opacity-10 -mb-8 flex justify-end">
        turtil
      </div>
    </footer>
  );
};

export default Footer;
