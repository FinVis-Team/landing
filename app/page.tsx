import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
// import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
// import { ServicesSection } from "@/components/layout/sections/services";
import { TeamSection } from "@/components/layout/sections/team";

export const metadata = {
  title: "FinVis",
  description: "Intuitive Visualization of Financial Reports",
  openGraph: {
    type: "website",
    url: "https://finvis-landing.vercel.app",
    title: "FinVis",
    description: "Financial Visualization Software",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "FinVis",
      },
    ],
  }
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <FeaturesSection />
      {/* <ServicesSection /> */}
      <TeamSection />
      <PricingSection />
      <ContactSection />
      {/* <FAQSection /> */}
      <FooterSection />
    </>
  );
}
