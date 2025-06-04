import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import DonarCTA from "@/components/DonarCTA";
import StatsSection from "@/components/StatsSection";
import QuienesSomosCTA from "@/components/QuienesSomosCTA";

export default function Home() {
  return (
    <main>
      <div className="">
        <Hero />
        <StatsSection />
        <QuienesSomosCTA />
        <VideoSection />
        <DonarCTA />
      </div>
    </main>
  );
}
