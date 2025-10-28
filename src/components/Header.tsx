import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5E6D0] border-t-8 border-b-4 border-black shadow-2xl">
      <div className="container mx-auto px-4">
        <div className="border-b-2 border-black py-2">
          <div className="flex items-center justify-between text-xs uppercase tracking-wider">
            <div className="font-body">Сервер Мафия • Издание 1920-х</div>
            <div className="font-body">Выпуск № 1927 • Октябрь 1925</div>
          </div>
        </div>
        
        <div className="text-center py-6 border-b-4 border-black">
          <div className="flex items-center justify-center gap-4 mb-4">
            <img 
              src="https://mh-rp.com/uploads/125-image222.png" 
              alt="Mafia House RDR2"
              className="h-24 md:h-32 object-contain drop-shadow-2xl"
            />
            <div>
              <h1 className="text-5xl md:text-6xl font-headline text-black leading-none uppercase tracking-wider" style={{fontFamily: 'UnifrakturMaguntia, serif'}}>
                Mafia House
              </h1>
              <div className="text-2xl md:text-3xl font-headline uppercase tracking-widest mt-1 text-[#8B0000]">
                RDR2 Roleplay
              </div>
            </div>
          </div>
          <p className="text-xs font-headline tracking-[0.3em] uppercase border-t-2 border-b-2 border-black py-1 inline-block px-8">
            Нью-Остин • Эпоха мафии • 1919
          </p>
        </div>

        <nav className="hidden lg:flex items-center justify-center gap-0 border-b-2 border-black">
          {menuItems.map((item, index) => (
            <div key={item.id} className="flex items-center">
              <Button
                variant="ghost"
                onClick={() => setActiveSection(item.id)}
                className={`font-headline uppercase tracking-wider text-sm px-6 py-3 rounded-none border-0 ${
                  activeSection === item.id
                    ? 'bg-black text-white'
                    : 'text-black hover:bg-black/10'
                }`}
              >
                {item.label}
              </Button>
              {index < menuItems.length - 1 && (
                <div className="w-px h-6 bg-black"></div>
              )}
            </div>
          ))}
        </nav>

        <Button className="lg:hidden absolute top-4 right-4 bg-black text-white hover:bg-black/80 border-2 border-black">
          <Icon name="Menu" size={24} />
        </Button>
      </div>
    </header>
  );
};

export default Header;