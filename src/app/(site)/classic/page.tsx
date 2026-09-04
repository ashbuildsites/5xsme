import { Hero } from "@/components/sections/Hero";
import { PainPoints } from "@/components/sections/PainPoints";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Process } from "@/components/sections/Process";
import { Comparison } from "@/components/sections/Comparison";
import { TrustSection } from "@/components/sections/TrustSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <PainPoints />
      <ClientsSection />
      <ServicesGrid />
      <Process />
      <Comparison />
      <TrustSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
