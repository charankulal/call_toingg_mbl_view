"use client";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LocalVideo from "@/components/LocalVideo";
import StoreCard from "@/components/StoreCard";
import TopContent from "@/components/TopContent";
import "./globals.css";

export default function Home() {
  return (
    <main>
      <TopContent />
      <Header />
      <Hero />
      <Features />

      <div className="flex flex-col md:flex-row bg-gradient-to-r from-orange-100 to-orange-200 py-8 rounded-xl shadow-lg mx-4 sm:mx-8 mb-10 mt-5">
  {/* LocalVideo on the top */}
  <div className="w-full md:w-1/2">
    <LocalVideo />
  </div>

  {/* StoreCard below LocalVideo */}
  <div className="w-full md:w-1/2 mt-5 md:mt-0">
    <StoreCard />
  </div>
</div>

    </main>
  );
}
