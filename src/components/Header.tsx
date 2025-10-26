import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  const menuItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'news', label: 'Новости', icon: 'Newspaper' },
    { id: 'rules', label: 'Правила', icon: 'ScrollText' },
    { id: 'donate', label: 'Донат', icon: 'Coins' },
    { id: 'forum', label: 'Форум', icon: 'MessageSquare' },
    { id: 'wiki', label: 'Вики', icon: 'BookOpen' },
    { id: 'stats', label: 'Статистика', icon: 'BarChart3' },
    { id: 'monitoring', label: 'Мониторинг', icon: 'Activity' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 border-4 border-black bg-black flex items-center justify-center">
              <Icon name="Crown" className="text-white" size={28} />
            </div>
            <div>
              <h1 className="text-3xl font-display font-black text-black tracking-tight uppercase">
                MAFIA HOUSE
              </h1>
              <p className="text-xs font-body tracking-widest uppercase">Est. 1920</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => setActiveSection(item.id)}
                className={`font-body uppercase tracking-wide transition-all border-2 ${
                  activeSection === item.id
                    ? 'bg-black text-white border-black'
                    : 'text-black border-transparent hover:border-black'
                }`}
              >
                {item.label}
              </Button>
            ))}
          </nav>

          <Button className="lg:hidden bg-black text-white hover:bg-mafia-red border-2 border-black">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
