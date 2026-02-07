import CTA from "../../components/CTA";
import CaseStudies from "../../components/CaseStudies";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import MobileNavbar from "../../components/MobileNavbar";
import Navbar from "../../components/Navbar";
import Process from "../../components/Process";
import ServicesShowcase from "../../components/ServicesShowcase";

export default function Home() {
  return (
    <>
      <MobileNavbar />
      <Navbar />
      <Hero />
      <ServicesShowcase />
      <CaseStudies />
      <Process />
      <CTA />
      <Footer />
    </>
  );
}
