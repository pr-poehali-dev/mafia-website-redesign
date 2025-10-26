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
    <header className="fixed top-0 left-0 right-0 z-50 bg-vintage-brown/95 backdrop-blur-sm border-b-2 border-vintage-gold">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-vintage-gold rounded-full flex items-center justify-center">
              <Icon name="Crown" className="text-vintage-brown" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-display font-bold text-vintage-gold tracking-wider">
                MAFIA RDR2
              </h1>
              <p className="text-xs text-vintage-sepia/80 font-body">Prohibition Era Roleplay</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center gap-2 ${
                  activeSection === item.id
                    ? 'bg-vintage-gold text-vintage-brown hover:bg-vintage-gold/90'
                    : 'text-vintage-sepia hover:text-vintage-gold hover:bg-vintage-brown/50'
                }`}
              >
                <Icon name={item.icon as any} size={16} />
                <span className="font-body text-sm">{item.label}</span>
              </Button>
            ))}
          </nav>

          <Button className="lg:hidden bg-vintage-gold text-vintage-brown hover:bg-vintage-gold/90">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
