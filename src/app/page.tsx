import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import ServiceArea from "@/components/ServiceArea";
import ClientTypes from "@/components/ClientTypes";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <Services />
      <ClientTypes />
      <WhyUs />
      <Process />
      <ServiceArea />
      <Testimonials />
      <Contact />
      <CTASection />
    </main>
  );
}
