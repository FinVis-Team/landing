import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, LayoutGrid, Store, MessageSquareShare } from "lucide-react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
  icon: React.ElementType;
}

const plans: PlanProps[] = [
  {
    title: "Software",
    popular: 0,
    price: 49,
    description: "Automated Financial Reporting",
    buttonText: "Get Started",
    benefitList: [
      "Automated financial reporting",
      "Real-time data visualization",
      "Basic analytics",
    ],
    icon: LayoutGrid,
  },
  {
    title: "Financial consulting",
    popular: 1,
    price: 299,
    description: "Financial Health Checkup, KPIs and more + software package included at a lower price than purchasing separately",
    buttonText: "Get Started",
    benefitList: [
      "All Software features",
      "Financial health checkup",
      "KPI analysis",
      "Customized financial strategies",
    ],
    icon: Store,
  },
  {
    title: "Ongoing Consulting",
    popular: 0,
    price: 499,
    description: "Starting at $499/month - Monthly consultation with financial experts, personalized strategies, and optimization of financial processes",
    buttonText: "Contact Us",
    benefitList: [
      "All Financial consulting features",
      "Monthly expert consultations",
      "Personalized financial strategies",
      "Process optimization",
    ],
    icon: MessageSquareShare,
  },
];

export const PricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-12">
        Our services
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList, icon: Icon }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan?.YES
                  ? "border-[1.5px] border-primary"
                  : ""
              }
            >
              <CardHeader className="text-center">
                <div className="rounded-full bg-primary/10 p-4 inline-flex items-center justify-center w-24 h-24 mx-auto mb-4">
                  <Icon size={48} className="text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{title}</CardTitle>
                <CardDescription className="h-20 flex items-center justify-center">
                  {description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-primary">${price}</span>
                </div>
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <div key={benefit} className="flex items-center">
                      <Check className="text-primary mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  variant={popular === PopularPlan?.YES ? "default" : "outline"}
                  className="w-full"
                >
                  {buttonText}
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
