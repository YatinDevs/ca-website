import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import SectorsSection from "./SectorsSection";
import LeadershipSection from "./LeadershipSection";
import BlogSection from "./BlogSection";
import CTASection from "./CTASection";

function Home() {
  return (
    <div className="mt-40">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SectorsSection />
      <LeadershipSection />
      <BlogSection />
      <CTASection />
    </div>
  );
}

export default Home;
