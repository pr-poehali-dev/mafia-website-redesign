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
    <header className="fixed top-0 left-0 right-0 z-50 bg-mafia-black/90 backdrop-blur-md border-b border-mafia-red">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-mafia-red blur-xl opacity-50"></div>
              <div className="relative w-12 h-12 bg-gradient-to-br from-mafia-red to-mafia-red-dark flex items-center justify-center">
                <Icon name="Crown" className="text-white" size={24} />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-display font-bold text-white tracking-widest">
                MAFIA HOUSE
              </h1>
              <p className="text-xs text-mafia-cream/60 font-medium tracking-wider">1920 ROLEPLAY</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-2">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                onClick={() => setActiveSection(item.id)}
                className={`relative font-medium tracking-wide transition-all ${
                  activeSection === item.id
                    ? 'bg-mafia-red text-white hover:bg-mafia-red/90 shadow-lg shadow-mafia-red/50'
                    : 'text-mafia-cream/70 hover:text-white hover:bg-mafia-gray'
                }`}
              >
                <Icon name={item.icon as any} size={16} className="mr-2" />
                {item.label}
              </Button>
            ))}
          </nav>

          <Button className="lg:hidden bg-mafia-red text-white hover:bg-mafia-red/90">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;