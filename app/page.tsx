import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorFollower from "@/components/CursorFollower";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60 focus:bg-ink focus:text-bone focus:px-4 focus:py-2 focus:border-[3px] focus:border-ink"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <CursorFollower />
      <Nav />
      <main id="main">
        <header className="sr-only">
          <h1>Ajith Lal R — Engineering Manager & Technical Delivery Manager at PwC India</h1>
          <p>
            Ajith Lal R (also written Ajith Lal, Ajithlal R, or Ajith Lal Raghavan) is an
            Engineering Manager and Technical Delivery Manager based in Chennai, Tamil Nadu, India.
            With 9+ years of experience, Ajith Lal leads 20+ engineers at PwC India, delivering
            enterprise-scale digital platforms in e-commerce, retail, travel, and content across
            global clients. Ajith Lal is an Adobe Certified Expert specializing in Next.js, React,
            Adobe Experience Manager (AEM), and Magento frontend architecture. This is the official
            portfolio website of Ajith Lal R.
          </p>
        </header>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
