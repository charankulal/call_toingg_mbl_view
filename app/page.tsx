"use client";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LocalVideo from "@/components/LocalVideo";
import StoreCard from "@/components/StoreCard";
import TopContent from "@/components/TopContent";
import "./globals.css";
import Card from "@/components/Card";

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
      <div className="grid grid-cols-1 md:grid-cols-3 m-40  ">
        <div className="w-full  border-r-2 border-orange-400 border-b-2 ">
          <Card
            title="UltraFast Response"
            description="Experience lightning-quick interactions with an impressive 500 ms response time, ensuring seamless conversations."
            imageUrl="/icons/i1.svg"
          />
        </div>
        <div className="w-full border-r-2 border-orange-400 border-b-2  ">
          <Card
            title="Smart Interruption Management"
            description="Our system adeptly handles interruptions, ensuring smooth, natural dialogues just like human conversations."
            imageUrl="/icons/i2.svg"
          />
        </div>
        <div className="w-full  border-orange-400 border-b-2 ">
          <Card
            title="Advanced Memory Recall"
            description="Remembering context and details from earlier in the conversation, our AI provides a personalized and coherent interaction."
            imageUrl="/icons/i3.svg"
          />
        </div>
        <div className="w-full border-r-2 border-orange-400">
          <Card
            title="Dynamic Conversational Flows"
            description="Navigate through complex conversations with ease, thanks to our AI's ability to understand and adapt to various conversational pathways."
            imageUrl="/icons/i4.svg"
          />
        </div>
        <div className="w-full border-r-2 border-orange-400   ">
          <Card
            title="Custom AI Solutions"
            description="Leverage our proprietary AI models tailored to your specific business needs for unparalleled efficiency and effectiveness."
            imageUrl="/icons/i5.png"
          />
        </div>
        <div className="w-full  border-orange-400  ">
          <Card
            title="Scalability at Your Fingertips"
            description="From one-on-one conversations to managing 10,000 concurrent calls, our platform scales effortlessly with your business."
            imageUrl="/icons/i6.png"
          />
        </div>
      </div>
    </main>
  );
}
