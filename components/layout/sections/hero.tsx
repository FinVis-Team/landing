"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { PartyPopper } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <Container>
      <div className="grid place-items-center gap-8 mx-auto py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="text-center space-y-6 sm:space-y-8">
          <Badge variant="outline" className="text-xs sm:text-sm py-1 sm:py-2">
            <span className="mr-2 text-primary">
              <PartyPopper className="size-3 sm:size-4" />
            </span>
            <span> Coming Soon! </span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-bold">
            <h1>
              It&apos;s
              <span className="bg-gradient-to-br from-blue-500 to-cyan-800 bg-clip-text text-transparent px-2">
                Financial
              </span>
              Visualization software
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-base sm:text-lg md:text-xl text-muted-foreground">
            {`FinVis is a financial visualization software that streamlines the process of generating and visualizing financial reports through automation.`}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="w-full sm:w-auto px-6 py-2 font-bold group/arrow">
              Demo
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-full sm:w-auto px-6 py-2 font-bold"
            >
              <Link
                href="https://github.com/ubranch/finators-backend"
                target="_blank"
              >
                Github repository
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative group mt-10 sm:mt-14">
          <div className="absolute top-2 sm:-top-4 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-16 sm:h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          <Image
            width={1200}
            height={1200}
            className="w-full max-w-[90vw] sm:max-w-[95vw] md:max-w-[1200px] mx-auto rounded-lg relative leading-none flex items-center border border-t-2 border-secondary border-t-primary/30"
            src={
              theme === "light"
                ? "/hero-image-light.png"
                : "/hero-image-dark.png"
            }
            alt="dashboard"
          />
          <div className="absolute bottom-0 left-0 w-full h-12 sm:h-16 md:h-20 lg:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </Container>
  );
};
