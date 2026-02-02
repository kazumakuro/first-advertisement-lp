import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { Problems } from "@/components/sections/Problems";
import { Solution } from "@/components/sections/Solution";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "はじめての広告出稿 | First Advertisement",
  description:
    "広告がわからないあなたの、はじめの一歩。1万円から、プロの広告を。ハンドメイド作家、イラストレーター、教室運営者向けの簡単広告サービス。",
};

export default function EasyPublishPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problems />
        <Solution />
        <HowItWorks />
        <Features />
        <TargetAudience />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
