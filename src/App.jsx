import { Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBadges from "./components/TrustBadges";
import About from "./components/About";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import Opportunities from "./components/Opportunities";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

export default function App() {
  return (
    <>
      <Helmet>
        <title>Employer Staffing — Right People. Right Skills. Greater Success.</title>
        <meta
          name="description"
          content="Antixor Staffing connects talented professionals with forward-thinking companies through permanent, temporary, executive, IT, healthcare and industrial staffing solutions."
        />
      </Helmet>

      <Navbar />

      <main>
        <Hero />
        <TrustBadges />
        <About />
        <Services />
        <WhyChoose />
        <Opportunities />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
      <ScrollToTopButton />
    </>
  );
}
