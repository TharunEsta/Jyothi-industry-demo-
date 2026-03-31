import React from "react";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { InquirySection } from "./sections/InquirySection";
import { IntroSection } from "./sections/IntroSection";
import { IndustriesSection } from "./sections/IndustriesSection";
import { CapabilitiesSection } from "./sections/CapabilitiesSection";
import { TrustSection } from "./sections/TrustSection";

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <HeroSection />
      <main>
        <IntroSection />
        <CapabilitiesSection />
        <TrustSection />
        <IndustriesSection />
        <InquirySection />
      </main>
      <FooterSection />
    </div>
  );
}
