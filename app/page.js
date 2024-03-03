"use client";

import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { CalendarCheck2 } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const handleEmailSubmit = () => {
    try {
      fetch(`https://formspree.io/f/mayrjzkq`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      }).then(res => {
        setEmail("");
        toast({
          title: "Thank you!",
          description: "We'll send you an email once we are live :)",
        });
      });
    } catch (error) {
      console.error(error.message);
      toast({
        title: "Uh Oh!",
        description: "Couldn't submit successfully",
      });
    }
  };
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
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="bg-indigo-500 text-white hover:bg-indigo-600 hover:text-gray-100"
                variant="outline"
              >
                Stay updated
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Enter email</DialogTitle>
                <DialogDescription>
                  Stay relevant with our product updates
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <input
                  type="email"
                  className="p-2 bg-gray-300 dark:bg-slate-900 rounded outline-none focus:outline-none"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <Button onClick={handleEmailSubmit}>Save changes</Button>
              </div>
            </DialogContent>
          </Dialog>
          <button
            onClick={() =>
              toast({
                title: "Will be available soon",
                description: "Subscribe via email to receive product updates",
              })}
            className="text-sm font-bold"
          >
            Try Demo
          </button>
        </div>
      </section>
    </main>
  );
}
