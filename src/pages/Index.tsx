import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import NewsSection from '@/components/NewsSection';
import RulesSection from '@/components/RulesSection';
import DonateSection from '@/components/DonateSection';
import LoreSection from '@/components/LoreSection';
import WikiSection from '@/components/WikiSection';
import PsychotypesSection from '@/components/PsychotypesSection';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSectionChange = (section: string) => {
    if (section === activeSection) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setActiveSection(section);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  };

  useEffect(() => {
    const main = document.querySelector('main');
    if (main && !isTransitioning) {
      main.classList.add('page-transition');
      const timer = setTimeout(() => {
        main.classList.remove('page-transition');
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [activeSection, isTransitioning]);

  return (
    <div className="min-h-screen bg-background">
      <Header activeSection={activeSection} setActiveSection={handleSectionChange} />
      
      <main className={`${isTransitioning ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
        {activeSection === 'home' && <Hero />}
        {activeSection === 'news' && <NewsSection />}
        {activeSection === 'rules' && <RulesSection />}
        {activeSection === 'donate' && <DonateSection />}
        {activeSection === 'lore' && <LoreSection />}
        {activeSection === 'wiki' && <WikiSection />}
        {activeSection === 'psychotypes' && <PsychotypesSection />}
        {activeSection === 'stats' && <StatsSection />}
      </main>

      <Footer setActiveSection={handleSectionChange} />
    </div>
  );
};

export default Index;