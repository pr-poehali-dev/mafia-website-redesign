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
    { id: 'forum', label: 'Форум' },
    { id: 'wiki', label: 'Вики' },
    { id: 'stats', label: 'Статистика' },
    { id: 'monitoring', label: 'Мониторинг' },
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
          <div className="flex items-center justify-center gap-6 mb-4">
            <img 
              src="https://mh-rp.com/uploads/125-image222.png" 
              alt="Логотип Мафия Хаус"
              className="h-20 md:h-24 object-contain"
            />
            <h1 className="text-6xl md:text-7xl font-display font-black text-black leading-none">
              Мафия Таймс
            </h1>
          </div>
          <p className="text-sm font-headline tracking-[0.3em] uppercase border-t-2 border-b-2 border-black py-1 inline-block px-8">
            Всё о нашей семье
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