import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Blocks",
    title: "Seamless Integration",
    description:
      "FinVis excels in handling complex integration challenges, ensuring smooth data flow from various sources into a unified platform.",
  },
  {
    icon: "Sparkles",
    title: "Intuitive User Experience",
    description:
      "Our user-friendly interface sets us apart, making financial data visualization accessible to users of all skill levels.",
  },
  {
    icon: "LineChart",
    title: "Advanced Automated Reporting",
    description:
      "FinVis offers comprehensive automated reports with deeper insights and customization options compared to competitors.",
  },
  {
    icon: "Palette",
    title: "Unparalleled Customization",
    description:
      "Unlike others, we provide extensive customization capabilities, allowing users to tailor visualizations to their specific needs.",
  },
  {
    icon: "Shield",
    title: "Enhanced Data Security",
    description:
      "We prioritize data protection with advanced security measures, ensuring your financial information remains confidential and secure.",
  },
  {
    icon: "Zap",
    title: "Real-Time Analytics",
    description:
      "FinVis delivers instant insights with real-time data processing, enabling quick decision-making in fast-paced financial environments.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        How We Stand Out
      </h2>

      <h3 className="md:w-3/4 mx-auto text-xl text-center text-muted-foreground mb-12">
        At FinVis, we&apos;ve reimagined financial data visualization. Our unique features
        address complex challenges, providing you with a powerful, user-friendly platform
        that outperforms the competition in key areas.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featureList.map(({ icon, title, description }) => (
          <Card key={title} className="bg-card hover:bg-accent transition-colors duration-300">
            <CardHeader className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Icon
                  color="hsl(var(--primary))"
                  name={icon as keyof typeof icons}
                  size={28}
                  className="text-primary"
                />
              </div>
              <CardTitle className="text-xl mb-2">{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-center">
              {description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
