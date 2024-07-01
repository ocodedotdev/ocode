"use client"

import { MoonStar, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import styles from "./nav.module.css"

const components = [
  {
    title: "Fast CDN",
    href: "#",
    description:
      "Accelerate your website's performance with our lightning-fast Content Delivery Network (CDN) technology.",
  },
  {
    title: "Auto Workflow",
    href: "#",
    description:
      "Automate your development workflow and streamline repetitive tasks, saving you time and effort.",
  },
  {
    title: "Error Tracking",
    href: "#",
    description:
      "Identify and resolve bugs quickly with our comprehensive error tracking system, ensuring a seamless user experience.",
  },
  {
    title: "Code Optimization",
    href: "#",
    description: "Optimize your codebase for maximum efficiency and performance.",
  },
];



const Navbar = () => {
  const { setTheme, theme } = useTheme()
  return (
    <nav className="flex w-full justify-between border-b items-center px-5 py-2 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
      <p className={styles.glitch}>
        <span aria-hidden="true">OCode</span>
        OCode
        <span aria-hidden="true">OCode</span>
      </p>
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      {/* <Icons.logo className="h-6 w-6" /> */}
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Our goal
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        We bring a revolution to the world of developers with the all new OCode
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/#" title="Introduction">
                  Why OCode and how it can be useful in...
                </ListItem>
                <ListItem href="/#" title="Pricing">
                  OCode has free tier as well as pricing models...
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Features</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Link href="https://x.com/ocodedev"
      name="Check our Progress!"
      className="border p-2 border-gray-700 rounded hover:bg-zinc-900 transition-all duration-200 x-btn"
      // onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
        >
        {/* {console.log('theme', theme)}
        {theme == "dark" ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <MoonStar className="absolute h-[1.2rem] w-[1.2rem]" />}
        <span className="sr-only">Toggle theme</span> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={18}
          height={18}
          viewBox="0 0 24 24"
          xmlSpace="preserve"
        >
          <path
            fill="#fff"
            d="M14.095 10.316 22.286 1h-1.94L13.23 9.088 7.551 1H1l8.59 12.231L1 23h1.94l7.51-8.543 6 8.543H23zm-2.658 3.022-.872-1.218L3.64 2.432h2.98l5.59 7.821.869 1.219 7.265 10.166h-2.982z"
          />
        </svg>
      </Link>
    </nav>
  )
}

export default Navbar

const ListItem = (({ className, title, children, ...props }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          // ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"