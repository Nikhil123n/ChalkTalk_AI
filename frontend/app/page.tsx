"use client";

import LandingNavbar from '../components/LandingNavbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection'; // Wait, I didn't create this one yet! I'll substitute or create it.
import HowItWorksSection from '../components/HowItWorksSection';
import MotivationSection from '../components/MotivationSection';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 font-[family-name:var(--font-geist-sans)]">
      <LandingNavbar />
      <HeroSection />
      <MotivationSection />
      <HowItWorksSection />
      <Footer />
    </main>
  );
}
