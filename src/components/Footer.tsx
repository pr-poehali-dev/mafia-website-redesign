import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-white border-t-8 border-black py-12">
      <div className="container mx-auto px-4">
        {/* Main footer content - newspaper columns */}
        <div className="border-8 border-black bg-white p-8">
          {/* Top decorative header */}
          <div className="border-b-4 border-black pb-6 mb-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="w-12 h-12 bg-black border-4 border-black flex items-center justify-center">
                <Icon name="Crown" className="text-white" size={24} />
              </div>
              <h3 className="text-4xl font-headline font-black text-black tracking-tighter uppercase">
                MAFIA RDR2
              </h3>
              <div className="w-12 h-12 bg-black border-4 border-black flex items-center justify-center">
                <Icon name="Crown" className="text-white" size={24} />
              </div>
            </div>
            <div className="font-body text-black text-sm uppercase tracking-widest">
              Официальное издание • Est. 1925
            </div>
          </div>

          {/* Four column layout - newspaper style */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Column 1 - About */}
            <div className="border-r-2 border-black pr-6 last:border-0">
              <h4 className="text-xl font-display font-black text-black tracking-wider mb-4 pb-2 border-b-4 border-black uppercase">
                О проекте
              </h4>
              <p className="text-sm text-black font-body leading-relaxed">
                Погрузитесь в атмосферу эпохи сухого закона. Станьте частью легендарной мафиозной истории.
              </p>
              
              {/* Decorative element */}
              <div className="mt-4 flex items-center gap-2">
                <div className="h-1 w-8 bg-black"></div>
                <div className="w-2 h-2 bg-black transform rotate-45"></div>
                <div className="h-1 w-4 bg-black"></div>
              </div>
            </div>

            {/* Column 2 - Navigation */}
            <div className="border-r-2 border-black pr-6 last:border-0">
              <h4 className="text-xl font-display font-black text-black tracking-wider mb-4 pb-2 border-b-4 border-black uppercase">
                Навигация
              </h4>
              <ul className="space-y-2 text-sm font-body">
                <li className="border-b-2 border-black pb-2">
                  <a href="#" className="text-black hover:pl-2 transition-all inline-block uppercase tracking-wider font-bold">
                    Главная
                  </a>
                </li>
                <li className="border-b-2 border-black pb-2">
                  <a href="#" className="text-black hover:pl-2 transition-all inline-block uppercase tracking-wider font-bold">
                    Правила
                  </a>
                </li>
                <li className="border-b-2 border-black pb-2">
                  <a href="#" className="text-black hover:pl-2 transition-all inline-block uppercase tracking-wider font-bold">
                    Форум
                  </a>
                </li>
                <li className="border-b-2 border-black pb-2">
                  <a href="#" className="text-black hover:pl-2 transition-all inline-block uppercase tracking-wider font-bold">
                    Вики
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Information */}
            <div className="border-r-2 border-black pr-6 last:border-0">
              <h4 className="text-xl font-display font-black text-black tracking-wider mb-4 pb-2 border-b-4 border-black uppercase">
                Информация
              </h4>
              <ul className="space-y-2 text-sm font-body">
                <li className="border-b-2 border-black pb-2">
                  <a href="#" className="text-black hover:pl-2 transition-all inline-block uppercase tracking-wider font-bold">
                    О проекте
                  </a>
                </li>
                <li className="border-b-2 border-black pb-2">
                  <a href="#" className="text-black hover:pl-2 transition-all inline-block uppercase tracking-wider font-bold">
                    Команда
                  </a>
                </li>
                <li className="border-b-2 border-black pb-2">
                  <a href="#" className="text-black hover:pl-2 transition-all inline-block uppercase tracking-wider font-bold">
                    Поддержка
                  </a>
                </li>
                <li className="border-b-2 border-black pb-2">
                  <a href="#" className="text-black hover:pl-2 transition-all inline-block uppercase tracking-wider font-bold">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 - Community */}
            <div>
              <h4 className="text-xl font-display font-black text-black tracking-wider mb-4 pb-2 border-b-4 border-black uppercase">
                Сообщество
              </h4>
              
              {/* Social buttons - vintage style */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                <Button 
                  size="icon" 
                  className="bg-white hover:bg-black text-black hover:text-white border-4 border-black h-14 w-full transition-all"
                >
                  <Icon name="MessageCircle" size={24} />
                </Button>
                <Button 
                  size="icon" 
                  className="bg-white hover:bg-black text-black hover:text-white border-4 border-black h-14 w-full transition-all"
                >
                  <Icon name="Users" size={24} />
                </Button>
                <Button 
                  size="icon" 
                  className="bg-white hover:bg-black text-black hover:text-white border-4 border-black h-14 w-full transition-all"
                >
                  <Icon name="Youtube" size={24} />
                </Button>
              </div>
              
              <p className="text-sm text-black font-body leading-relaxed">
                Присоединяйтесь к нашему сообществу
              </p>
            </div>
          </div>

          {/* Bottom section - legal */}
          <div className="border-t-4 border-black pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-sm text-black font-body uppercase tracking-wider font-bold">
                  © 1925 Mafia House RDR2
                </p>
                <p className="text-xs text-black font-body uppercase tracking-widest">
                  Все права защищены
                </p>
              </div>
              
              {/* Legal links */}
              <div className="flex items-center gap-6 text-xs font-body">
                <a href="#" className="text-black border-b-2 border-black hover:border-transparent transition-all uppercase tracking-wider font-bold">
                  Политика конфиденциальности
                </a>
                <span className="w-1 h-1 bg-black"></span>
                <a href="#" className="text-black border-b-2 border-black hover:border-transparent transition-all uppercase tracking-wider font-bold">
                  Пользовательское соглашение
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative border */}
        <div className="mt-6 text-center">
          <div className="inline-block border-4 border-black px-8 py-2 bg-white">
            <p className="font-body text-black text-xs uppercase tracking-widest">
              Напечатано в типографии Mafia House Press • 26 октября 1925
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
