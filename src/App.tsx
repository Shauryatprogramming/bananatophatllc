import Background from './components/Background';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatStrip from './components/StatStrip';
import PillarsSection from './components/PillarsSection';
import ApproachSection from './components/ApproachSection';
import FoundersSection from './components/FoundersSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen text-white relative">
      <Background />
      <Navbar />
      <main>
        <HeroSection />
        <StatStrip />
        <PillarsSection />
        <ApproachSection />
        <FoundersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
