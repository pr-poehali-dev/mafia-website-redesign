import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import NewsSection from '@/components/NewsSection';
import RulesSection from '@/components/RulesSection';
import DonateSection from '@/components/DonateSection';
import ForumSection from '@/components/ForumSection';
import WikiSection from '@/components/WikiSection';
import StatsSection from '@/components/StatsSection';
import MonitoringSection from '@/components/MonitoringSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-background">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        {activeSection === 'home' && <Hero />}
        {activeSection === 'news' && <NewsSection />}
        {activeSection === 'rules' && <RulesSection />}
        {activeSection === 'donate' && <DonateSection />}
        {activeSection === 'forum' && <ForumSection />}
        {activeSection === 'wiki' && <WikiSection />}
        {activeSection === 'stats' && <StatsSection />}
        {activeSection === 'monitoring' && <MonitoringSection />}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
