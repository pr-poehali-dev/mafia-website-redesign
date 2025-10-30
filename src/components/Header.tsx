import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Главная' },
    { id: 'news', label: 'Новости' },
    { id: 'rules', label: 'Правила' },
    { id: 'donate', label: 'Донат' },
    { id: 'lore', label: 'Лор' },
    { id: 'wiki', label: 'Вики' },
    { id: 'psychotypes', label: 'Психотипы' },
    { id: 'stats', label: 'Статистика' },
  ];

  const handleMenuClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 aged-paper torn-edge-bottom border-t-4 md:border-t-8 border-b-4 border-mafia-gray-light shadow-2xl crumpled-paper burn-mark burn-mark-top-right">
      <div className="container mx-auto px-4">
        <div className="border-b-2 border-mafia-sepia py-2 hidden md:block">
          <div className="flex items-center justify-between text-xs uppercase tracking-wider text-mafia-gray-light">
            <div className="font-body">Сервер Мафия • Издание 1920-х</div>
            <div className="font-body">Выпуск № 1927 • Октябрь 1925</div>
          </div>
        </div>
        
        <div className="relative text-center py-4 md:py-6 border-b-4 border-mafia-sepia">
          <div className="flex items-center justify-center gap-2 md:gap-6 mb-2 md:mb-3 pr-12 lg:pr-0">
            <img 
              src="https://mh-rp.com/uploads/125-image222.png" 
              alt="Mafia House RDR2"
              className="h-10 md:h-20 lg:h-24 object-contain drop-shadow-2xl old-photo"
            />
            <h1 className="text-2xl md:text-6xl lg:text-7xl font-display font-black text-mafia-gray leading-none">
              Мафия Таймс
            </h1>
          </div>
          <p className="text-[9px] md:text-sm font-headline tracking-[0.2em] md:tracking-[0.3em] uppercase border-t-2 border-b-2 border-mafia-sepia py-1 inline-block px-3 md:px-8 text-mafia-gray-light">
            Всё о нашей семье
          </p>

          <Button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden absolute top-2 right-2 bg-mafia-gray text-mafia-cream hover:bg-mafia-gray-light border-2 border-mafia-sepia z-10"
            size="icon"
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={20} />
          </Button>
        </div>

        <nav className="hidden lg:flex items-center justify-center gap-0 border-b-2 border-mafia-sepia">
          {menuItems.map((item, index) => (
            <div key={item.id} className="flex items-center">
              <Button
                variant="ghost"
                onClick={() => setActiveSection(item.id)}
                className={`font-headline uppercase tracking-wider text-sm px-6 py-3 rounded-none border-0 ${
                  activeSection === item.id
                    ? 'bg-mafia-gray text-mafia-cream'
                    : 'text-mafia-gray-light hover:bg-mafia-cream-dark/30'
                }`}
              >
                {item.label}
              </Button>
              {index < menuItems.length - 1 && (
                <div className="w-px h-6 bg-mafia-sepia"></div>
              )}
            </div>
          ))}
        </nav>

        {mobileMenuOpen && (
          <nav className="lg:hidden border-b-4 border-mafia-sepia bg-mafia-cream/95 backdrop-blur">
            <div className="py-2">
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => handleMenuClick(item.id)}
                  className={`w-full font-headline uppercase tracking-wider text-base py-4 rounded-none border-b-2 border-mafia-sepia/20 ${
                    activeSection === item.id
                      ? 'bg-mafia-gray text-mafia-cream'
                      : 'text-mafia-gray-light hover:bg-mafia-cream-dark/30'
                  }`}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;