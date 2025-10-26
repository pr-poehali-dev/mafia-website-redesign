import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-vintage-brown/95 border-t-2 border-vintage-gold py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-vintage-gold rounded-full flex items-center justify-center">
                <Icon name="Crown" className="text-vintage-brown" size={20} />
              </div>
              <h3 className="text-xl font-display font-bold text-vintage-gold">MAFIA RDR2</h3>
            </div>
            <p className="text-sm text-vintage-sepia font-body leading-relaxed">
              Погрузитесь в атмосферу эпохи сухого закона. Станьте частью легендарной мафиозной истории.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-display font-bold text-vintage-gold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm font-body">
              <li>
                <a href="#" className="text-vintage-sepia hover:text-vintage-gold transition-colors">
                  Главная
                </a>
              </li>
              <li>
                <a href="#" className="text-vintage-sepia hover:text-vintage-gold transition-colors">
                  Правила
                </a>
              </li>
              <li>
                <a href="#" className="text-vintage-sepia hover:text-vintage-gold transition-colors">
                  Форум
                </a>
              </li>
              <li>
                <a href="#" className="text-vintage-sepia hover:text-vintage-gold transition-colors">
                  Вики
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display font-bold text-vintage-gold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm font-body">
              <li>
                <a href="#" className="text-vintage-sepia hover:text-vintage-gold transition-colors">
                  О проекте
                </a>
              </li>
              <li>
                <a href="#" className="text-vintage-sepia hover:text-vintage-gold transition-colors">
                  Команда
                </a>
              </li>
              <li>
                <a href="#" className="text-vintage-sepia hover:text-vintage-gold transition-colors">
                  Поддержка
                </a>
              </li>
              <li>
                <a href="#" className="text-vintage-sepia hover:text-vintage-gold transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display font-bold text-vintage-gold mb-4">Сообщество</h4>
            <div className="flex gap-3 mb-4">
              <Button 
                size="icon" 
                className="bg-vintage-gold/20 hover:bg-vintage-gold text-vintage-gold hover:text-vintage-brown border border-vintage-gold/30"
              >
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button 
                size="icon" 
                className="bg-vintage-gold/20 hover:bg-vintage-gold text-vintage-gold hover:text-vintage-brown border border-vintage-gold/30"
              >
                <Icon name="Users" size={20} />
              </Button>
              <Button 
                size="icon" 
                className="bg-vintage-gold/20 hover:bg-vintage-gold text-vintage-gold hover:text-vintage-brown border border-vintage-gold/30"
              >
                <Icon name="Youtube" size={20} />
              </Button>
            </div>
            <p className="text-sm text-vintage-sepia font-body">
              Присоединяйтесь к нашему сообществу в социальных сетях
            </p>
          </div>
        </div>

        <div className="border-t border-vintage-gold/30 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-vintage-sepia font-body">
              © 2025 Mafia House RDR2. Все права защищены.
            </p>
            <div className="flex items-center gap-6 text-sm font-body">
              <a href="#" className="text-vintage-sepia hover:text-vintage-gold transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-vintage-sepia hover:text-vintage-gold transition-colors">
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
