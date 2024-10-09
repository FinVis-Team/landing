"use client";
import { Github, Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { ToggleTheme } from "./toogle-theme";
import { Container } from "../ui/container";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
  { href: "#pricing", label: "Pricing" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="fixed top-5 left-0 right-0 z-50">
      <Container>
        <div className="shadow-inner bg-opacity-15 border border-secondary rounded-2xl flex justify-between items-center p-2 bg-card backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <Link href="/" className="font-bold text-lg flex items-center">
            <Image
              src="/favicon.png"
              alt="Finators Logo"
              width={32}
              height={32}
              className="mr-2 rounded-lg"
            />
            Finators
          </Link>
          {/* Mobile menu */}
          <div className="flex items-center lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Menu
                  onClick={() => setIsOpen(!isOpen)}
                  className="cursor-pointer lg:hidden"
                />
              </SheetTrigger>
              <SheetContent
                side="left"
                className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
              >
                <div>
                  <SheetHeader className="mb-4 ml-4">
                    <SheetTitle className="flex items-center">
                      <Link href="/" className="flex items-center">
                        <Image
                          src="/favicon.png"
                          alt="Finators Logo"
                          width={36}
                          height={36}
                          className="mr-2 rounded-lg"
                        />
                        Finators
                      </Link>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-2">
                    {routeList.map(({ href, label }) => (
                      <Button
                        key={href}
                        onClick={() => setIsOpen(false)}
                        asChild
                        variant="ghost"
                        className="justify-start text-base"
                      >
                        <Link href={href}>{label}</Link>
                      </Button>
                    ))}
                  </div>
                </div>
                <SheetFooter className="flex-col sm:flex-col justify-start items-start">
                  <Separator className="mb-2" />
                  <ToggleTheme />
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
          {/* Desktop menu */}
          <NavigationMenu className="hidden lg:block mx-auto">
            <NavigationMenuList className="flex space-x-10">
              {routeList.map(({ href, label }) => (
                <NavigationMenuItem key={href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={href}
                      className="text-base px-2 py-1 transition-all duration-200 hover:text-primary relative after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-center"
                    >
                      {label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden lg:flex">
            <ToggleTheme />
            <Button asChild size="sm" variant="ghost" aria-label="View on GitHub">
              <Link
                aria-label="View on GitHub"
                href="https://github.com/ubranch/finators-backend"
                target="_blank"
              >
                <Github className="size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
