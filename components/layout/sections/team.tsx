import { Container } from "@/components/ui/container";
import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}
interface SocialNetworkProps {
  name: string;
  url: string;
}

export const TeamSection = () => {
  const teamList: TeamProps[] = [
    {
      imageUrl: "/team/ozodbek.jpg",
      firstName: "Ozodbek",
      lastName: "K",
      positions: ["CEO", "Founder"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "/#",
        },
        {
          name: "Github",
          url: "/#",
        },
        {
          name: "X",
          url: "/#",
        },
      ],
    },
    {
      imageUrl: "/team/husan-musa.jpg",
      firstName: "Husan",
      lastName: "Musa",
      positions: ["CTO"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "/#",
        },
        {
          name: "X",
          url: "/#",
        },
      ],
    },
    {
      imageUrl: "/team/ubranch.png",
      firstName: "Ilhom",
      lastName: "Ismoilov",
      positions: ["AI Expert", "Creator of this website"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "/#",
        },
        {
          name: "Github",
          url: "/#",
        },
      ],
    },
    {
      imageUrl: "/team/muhammadumar-fozilov.png",
      firstName: "Muhammadumar",
      lastName: "F",
      positions: ["Financial Expert", "Audit"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "/#",
        },
        {
          name: "Github",
          url: "/#",
        },
        {
          name: "X",
          url: "/#",
        },
      ],
    }
  ];
  const socialIcon = (socialName: string) => {
    switch (socialName) {
      case "LinkedIn":
        return <LinkedInIcon />;
      case "Github":
        return <GithubIcon />;
      case "X":
        return <XIcon />;
    }
  };

  return (
    <Container>
      <section id="team" className="py-24 sm:py-32">
        <div className="text-center mb-12">
          <h2 className="text-lg text-primary mb-2 tracking-wider">
            Team
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold">
            Finators Team
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamList.map(
            ({ imageUrl, firstName, lastName, positions, socialNetworks }, index) => (
              <Card
                key={index}
                className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
              >
                <CardHeader className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt={`${firstName} ${lastName}`}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover saturate-0 transition-all duration-200 ease-linear group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                    />
                  </div>
                  <CardTitle className="py-4 px-6">
                    {firstName}
                    <span className="text-primary ml-2">{lastName}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  {positions.map((position, idx) => (
                    <p key={idx} className="text-muted-foreground">
                      {position}
                      {idx < positions.length - 1 && ", "}
                    </p>
                  ))}
                </CardContent>
                <CardFooter className="flex justify-start space-x-4 mt-auto pt-4">
                  {socialNetworks.map(({ name, url }, idx) => (
                    <Link
                      key={idx}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-all"
                    >
                      {socialIcon(name)}
                    </Link>
                  ))}
                </CardFooter>
              </Card>
            )
          )}
        </div>
      </section>
    </Container>
  );
};
