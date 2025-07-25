import Abount from "@/components/about";
import Academics from "@/components/academic";
import Contact from "@/components/contact";
import HeroSection from "@/components/hero-section";
import Skills from "@/components/skills";
import Work from "@/components/work";

export default function Home() {
  return (
   <>
   <HeroSection />
   <Abount />
   <Skills />
   <Work />
   <Academics />
   <Contact />
   </>
  );
}
