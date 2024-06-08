"use client";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TopContent from "@/components/TopContent";


export default function Home() {
  return (
    <main >
      <TopContent />
      <Header />
      <Hero/>
      <Features/>
    </main>
  );
}
