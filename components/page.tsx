// app/page.tsx — Crystal Gem Archives home page
// styles live in app/globals.css — no styled-jsx anywhere
import type { Metadata } from "next";

import Navbar            from "@/components/Navbar";
import HeroSection       from "@/components/HeroSection";
import FeaturesStrip     from "@/components/FeaturesStrip";
import CharactersSection from "@/components/CharactersSection";
import PowersSection     from "@/components/PowersSection";
import FusionsSection    from "@/components/FusionsSection";
import EpisodesSection   from "@/components/EpisodesSection";
import SectionDivider    from "@/components/SectionDivider";
import { CtaBand, Footer } from "@/components/CtaBandFooter";

export const metadata: Metadata = {
  title: "Crystal Gem Archives — Steven Universe Guide",
  description:
    "Your complete fan guide to Steven Universe: characters, gem powers, fusions, and episodes.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />

        <FeaturesStrip />
        <SectionDivider />

        <CharactersSection />
        <SectionDivider />

        <PowersSection />
        <SectionDivider />

        <FusionsSection />
        <SectionDivider />

        <EpisodesSection />
      </main>

      <CtaBand />
      <Footer />
    </>
  );
}
