import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Turtle } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Turtle className="h-8 w-8 text-teal-600" />
          <span className="ml-2 text-2xl font-bold">turtil</span>
        </div>
        <nav className="flex items-center">
          <Button className="bg-teal-700 hover:bg-teal-800">
            Download Turtil App
          </Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 my-16 flex">
        <div className="w-1/2 pr-8">
          <h1 className="text-6xl font-bold leading-tight mb-4">
            A Super-app for all Student needs
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Catered to one step at a time
          </p>
          <div className="flex space-x-4">
            <Button variant="outline" className="flex items-center">
              <img
                src="/api/placeholder/20/20"
                alt="Apple logo"
                className="mr-2"
              />
              Download
            </Button>
          </div>
        </div>
        <div className="w-1/2 relative">
          <Card className="overflow-hidden">
            <img
              src="/home.png"
              alt="Turtil app demonstration"
              className="w-full h-auto"
            />
          </Card>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
