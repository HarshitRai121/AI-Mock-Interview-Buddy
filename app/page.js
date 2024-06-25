import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./landingPage/_components/Header";
import Hero from "./landingPage/_components/Hero";
import Section1 from "./landingPage/_components/Section1";

export default function Home() {
  return (
    
    <div>
      <Header/>
      <Hero/>
      
      <Section1/>
    </div>
  );
}
