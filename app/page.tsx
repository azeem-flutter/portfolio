import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsStrip from '@/components/StatsStrip';
import About from '@/components/About';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <StatsStrip />
      <About />
      <TechStack />
      <Projects />
      <Footer />
    </main>
  );
}
