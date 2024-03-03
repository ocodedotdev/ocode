"use client";

import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { CalendarCheck2 } from "lucide-react";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <section className="flex flex-col gap-5 items-center px-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center leading-10">
          Always Ahead with <span className="text-indigo-400">OCode</span>
        </h1>
        <p className="text-xs md:text-sm text-gray-700 dark:text-gray-400 text-center">
          Discover exactly the tool you need to excel in development
        </p>
        <div className="flex gap-5">
          <Button>Stay updated</Button>
          <button
            onClick={() =>
              toast.custom(t =>
                <div className="max-w-md w-full bg-white dark:bg-slate-900 text-black dark:text-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5">
                  <div className="flex-1 w-0 p-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 pt-0.5">
                        <CalendarCheck2 className="w-6" />
                      </div>
                      <div className="ml-3 flex-1 font-bold">
                        <p className="text-sm font-medium">
                          Will soon be Available
                        </p>
                        <p className="mt-1 text-sm font-light">
                          Stay updated via email!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex border-l border-gray-200">
                    <button
                      onClick={() => toast.dismiss(t.id)}
                      className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            className="text-sm font-bold"
          >
            Try Demo
          </button>
        </div>
      </section>
    </main>
  );
}
