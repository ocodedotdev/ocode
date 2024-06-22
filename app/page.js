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
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { CalendarCheck2 } from "lucide-react";
import { MultiStepLoader as Loader } from "@/components/ui/multi-level";
import { loadingStates } from "@/statics/config/loadingstates";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { BentoLanding } from "@/modules/sections/BentoLanding";

export default function Home() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(()=>{
    if(inView){
      console.log('hitting')
      setLoading(true)
    }
  }, [inView])

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
    <main className="flex justify-center items-center flex-col">
      <section className="flex justify-center flex-col gap-5 items-center px-10 h-[70vh]">
        <h1 className="text-5xl md:text-5xl font-bold text-center leading-10">
          Ship with <span className="text-indigo-400">AI Developers</span>
        </h1>
        <p className="text-xs md:text-sm text-gray-700 dark:text-gray-400 text-center">
          Our AI systems code, test, and deploy so you can focus on what matters.
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
      <section className="h-auto pb-32" >
      <div className="grid gap-6 md:grid-cols-2 p-4 md:p-6">
        <Card className="flex flex-col min-w-[350px]">
          <CardHeader className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* <img src="/placeholder.svg" alt="person" width={48} height={48} className="rounded-full" /> */}
              <div className="text-center">
                <h3 className="font-medium">Your Developer</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">5+ Years of Experience</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Salary</h4>
                {/* <p className="text-sm text-gray-500 dark:text-gray-400">Income, Savings, Investments</p> */}
              </div>
              <div className="font-medium">$50,000/year</div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Availability</h4>
                {/* <p className="text-sm text-gray-500 dark:text-gray-400">Humanly</p> */}
              </div>
              <div className="font-medium">40 hrs/week</div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Efficiency</h4>
                {/* <p className="text-sm text-gray-500 dark:text-gray-400">Productivity, Task Completion</p> */}
              </div>
              <div className="font-medium">65%</div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Roles</h4>
              </div>
              <div className="font-medium">Developer</div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Monitoring</h4>
              </div>
              <div className="font-medium">Manual updates</div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Communication</h4>
              </div>
              <div className="font-medium">Emails, Calls</div>
            </div>
          </CardContent>
        </Card>
        <Card className="flex flex-col min-w-[350px] relative">
          <div className="ribbon bg-green-600 text-white w-fit px-2 py-1 absolute rounded-md -right-2 top-4 text-xs">
            Preferred
          </div>
          <CardHeader className="flex items-center justify-between">
            <div className="flex items-center">
              {/* <img src="/placeholder.svg" alt="Person B" width={48} height={48} className="rounded-full" /> */}
              <div className="text-center">
                <h3 className="font-medium">OCode AI</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Trained on 40m+ Lines of Code</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Cost</h4>
                {/* <p className="text-sm text-gray-500 dark:text-gray-400">Income, Savings, Investments</p> */}
              </div>
              <div className="font-medium">$480/year</div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Availability</h4>
                {/* <p className="text-sm text-gray-500 dark:text-gray-400">Work Hours, Leisure Time</p> */}
              </div>
              <div className="font-medium">24*7</div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Efficiency</h4>
                {/* <p className="text-sm text-gray-500 dark:text-gray-400">Productivity, Task Completion</p> */}
              </div>
              <div className="font-medium">92%</div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Roles</h4>
              </div>
              <div className="font-medium">Dev, QA, DevOps</div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Monitoring</h4>
              </div>
              <div className="font-medium">Code streaming</div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Communication</h4>
              </div>
              <div className="font-medium">Chat</div>
            </div>
          </CardContent>
        </Card>
      </div>
      </section>
      <section className="section_3 flex flex-col justify-center items-center md:flex-row w-full gap-2 md:gap-0 px-8 min-h-[80vh]" ref={ref}>
        <div className="min-w-[350px] h-[300px] px-4">
          <Loader loadingStates={loadingStates} loading={loading} duration={2000} />
        </div>
        <div>
          <h3 className="text-2xl md:text-5xl font-semibold">It Does Everything</h3>
          <h3 className="text-3xl font-semibold text-indigo-100">Just mention it</h3>
          <p className="text-sm text-gray-300 pt-3">From gathering requirements, to getting tasks done</p>
        </div>
      </section>
      {/* <section className="section_4 w-full md:w-8/12 px-8 min-h-[80vh]">
          <BentoLanding />
      </section> */}
    </main>
  );
}


