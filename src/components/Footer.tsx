import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface FooterProps {
  setActiveSection: (section: string) => void;
}

const Footer = ({ setActiveSection }: FooterProps) => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [isPrivacyClosing, setIsPrivacyClosing] = useState(false);
  const [isTermsClosing, setIsTermsClosing] = useState(false);

  const handleClosePrivacy = () => {
    setIsPrivacyClosing(true);
    setTimeout(() => {
      setShowPrivacy(false);
      setIsPrivacyClosing(false);
    }, 300);
  };

  const handleCloseTerms = () => {
    setIsTermsClosing(true);
    setTimeout(() => {
      setShowTerms(false);
      setIsTermsClosing(false);
    }, 300);
  };

  useEffect(() => {
    if (showPrivacy || showTerms) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showPrivacy, showTerms]);

  return (
    <>
      <footer className="aged-paper border-t-8 border-mafia-sepia py-12 torn-edge-top crumpled-paper burn-mark burn-mark-bottom-left">
        <div className="container mx-auto px-4">
          <div className="border-8 border-mafia-sepia aged-paper p-8 ink-stain ink-stain-top-left">
            <div className="border-b-4 border-mafia-sepia pb-6 mb-8 text-center">
              <div className="flex items-center justify-center gap-4 mb-3">
                <div className="w-12 h-12 bg-mafia-gray border-4 border-mafia-sepia flex items-center justify-center">
                  <Icon name="Crown" className="text-mafia-cream" size={24} />
                </div>
                <h3 className="text-4xl font-headline font-black text-mafia-gray tracking-tighter uppercase">
                  МАФИЯ RDR2
                </h3>
                <div className="w-12 h-12 bg-mafia-gray border-4 border-mafia-sepia flex items-center justify-center">
                  <Icon name="Crown" className="text-mafia-cream" size={24} />
                </div>
              </div>
              <div className="font-body text-mafia-gray-light text-sm uppercase tracking-widest">
                Официальное издание • Основано в 1925
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="border-r-2 border-mafia-sepia pr-6 last:border-0">
                <h4 className="text-xl font-display font-black text-mafia-gray tracking-wider mb-4 pb-2 border-b-4 border-mafia-sepia uppercase">
                  О проекте
                </h4>
                <p className="text-sm text-mafia-gray-light font-body leading-relaxed">
                  Погрузитесь в атмосферу эпохи сухого закона. Станьте частью легендарной мафиозной истории.
                </p>
                
                <div className="mt-4 flex items-center gap-2">
                  <div className="h-1 w-8 bg-mafia-sepia"></div>
                  <div className="w-2 h-2 bg-mafia-sepia transform rotate-45"></div>
                  <div className="h-1 w-4 bg-mafia-sepia"></div>
                </div>
              </div>

              <div className="border-r-2 border-mafia-sepia pr-6 last:border-0">
                <h4 className="text-xl font-display font-black text-mafia-gray tracking-wider mb-4 pb-2 border-b-4 border-mafia-sepia uppercase">
                  Навигация
                </h4>
                <ul className="space-y-2 text-sm font-body">
                  <li className="border-b-2 border-mafia-sepia pb-2">
                    <button onClick={() => setActiveSection('home')} className="text-mafia-gray-light hover:pl-2 transition-all inline-block uppercase tracking-wider font-bold">
                      Главная
                    </button>
                  </li>
                  <li className="border-b-2 border-mafia-sepia pb-2">
                    <button onClick={() => setActiveSection('news')} className="text-mafia-gray-light hover:pl-2 transition-all inline-block uppercase tracking-wider font-bold">
                      Новости
                    </button>
                  </li>
                  <li className="border-b-2 border-mafia-sepia pb-2">
                    <button onClick={() => setActiveSection('rules')} className="text-mafia-gray-light hover:pl-2 transition-all inline-block uppercase tracking-wider font-bold">
                      Правила
                    </button>
                  </li>
                  <li className="border-b-2 border-mafia-sepia pb-2">
                    <button onClick={() => setActiveSection('wiki')} className="text-mafia-gray-light hover:pl-2 transition-all inline-block uppercase tracking-wider font-bold">
                      Вики
                    </button>
                  </li>
                </ul>
              </div>

              <div className="border-r-2 border-mafia-sepia pr-6 last:border-0">
                <h4 className="text-xl font-display font-black text-mafia-gray tracking-wider mb-4 pb-2 border-b-4 border-mafia-sepia uppercase">
                  Информация
                </h4>
                <ul className="space-y-2 text-sm font-body">
                  <li className="border-b-2 border-mafia-sepia pb-2">
                    <button onClick={() => setActiveSection('lore')} className="text-mafia-gray-light hover:pl-2 transition-all inline-block uppercase tracking-wider font-bold">
                      Лор проекта
                    </button>
                  </li>
                  <li className="border-b-2 border-mafia-sepia pb-2">
                    <button onClick={() => setActiveSection('psychotypes')} className="text-mafia-gray-light hover:pl-2 transition-all inline-block uppercase tracking-wider font-bold">
                      Психотипы
                    </button>
                  </li>
                  <li className="border-b-2 border-mafia-sepia pb-2">
                    <button onClick={() => setActiveSection('stats')} className="text-mafia-gray-light hover:pl-2 transition-all inline-block uppercase tracking-wider font-bold">
                      Статистика
                    </button>
                  </li>
                  <li className="border-b-2 border-mafia-sepia pb-2">
                    <button onClick={() => setActiveSection('donate')} className="text-mafia-gray-light hover:pl-2 transition-all inline-block uppercase tracking-wider font-bold">
                      Донат
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-display font-black text-mafia-gray tracking-wider mb-4 pb-2 border-b-4 border-mafia-sepia uppercase">
                  Сообщество
                </h4>
                
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <a 
                    href="https://discord.gg/7dxrFrKn5E"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button 
                      size="icon" 
                      className="bg-mafia-cream hover:bg-mafia-gray text-mafia-gray hover:text-mafia-cream border-4 border-mafia-sepia h-14 w-full transition-all"
                    >
                      <Icon name="MessageCircle" size={24} />
                    </Button>
                  </a>
                  <a 
                    href="https://t.me/Kripme4nik"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button 
                      size="icon" 
                      className="bg-mafia-cream hover:bg-mafia-gray text-mafia-gray hover:text-mafia-cream border-4 border-mafia-sepia h-14 w-full transition-all"
                    >
                      <Icon name="Users" size={24} />
                    </Button>
                  </a>
                </div>
                
                <p className="text-sm text-mafia-gray-light font-body leading-relaxed">
                  Присоединяйтесь к нашему сообществу
                </p>
              </div>
            </div>

            <div className="border-t-4 border-mafia-sepia pt-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                  <p className="text-xs md:text-sm text-mafia-gray font-body uppercase tracking-wider font-bold">
                    © 1925 Mafia House RDR2
                  </p>
                  <p className="text-[10px] md:text-xs text-mafia-gray-light font-body uppercase tracking-widest">
                    Все права защищены
                  </p>
                </div>
                
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-[10px] md:text-xs font-body">
                  <button 
                    onClick={() => setShowPrivacy(true)}
                    className="text-mafia-gray-light border-b-2 border-mafia-sepia hover:border-transparent transition-all uppercase tracking-wider font-bold whitespace-nowrap"
                  >
                    Политика конфиденциальности
                  </button>
                  <span className="hidden md:block w-1 h-1 bg-mafia-sepia"></span>
                  <button 
                    onClick={() => setShowTerms(true)}
                    className="text-mafia-gray-light border-b-2 border-mafia-sepia hover:border-transparent transition-all uppercase tracking-wider font-bold whitespace-nowrap"
                  >
                    Пользовательское соглашение
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <div className="inline-block border-2 md:border-4 border-mafia-sepia px-4 md:px-8 py-2 aged-paper">
              <p className="font-body text-mafia-gray text-[10px] md:text-xs uppercase tracking-widest">
                Mafia House Press • 26.10.1925 • Том I, № 1
              </p>
            </div>
          </div>
        </div>
      </footer>

      {showPrivacy && (
        <div 
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/80 transition-opacity duration-300 animate-in fade-in ${
            isPrivacyClosing ? 'opacity-0' : 'opacity-100'
          }`}
          onClick={handleClosePrivacy}
        >
          <div 
            className={`aged-paper border-4 md:border-8 border-mafia-sepia max-w-3xl max-h-[80vh] overflow-y-auto m-4 transition-all duration-300 animate-in zoom-in-95 torn-edge-top crumpled-paper burn-mark burn-mark-top-right ink-stain ink-stain-bottom-right ${
              isPrivacyClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-2 md:border-4 border-mafia-sepia m-2 p-4 md:p-8 text-mafia-gray">
              <div className="flex items-start justify-between mb-4 md:mb-6 pb-3 md:pb-4 border-b-2 md:border-b-4 border-black">
                <div className="flex-1 pr-2">
                  <h2 className="text-2xl md:text-4xl font-headline uppercase tracking-wider mb-2 leading-tight">
                    Политика конфиденциальности
                  </h2>
                  <p className="text-[10px] md:text-xs font-body uppercase tracking-widest">
                    Mafia House RDR2 • Октябрь 1925
                  </p>
                </div>
                <Button
                  onClick={handleClosePrivacy}
                  className="bg-mafia-gray text-mafia-cream hover:bg-mafia-red border-4 border-mafia-sepia"
                  size="icon"
                >
                  <Icon name="X" size={24} />
                </Button>
              </div>

              <div className="space-y-6 font-body text-sm leading-relaxed">
                <div className="border-l-4 border-mafia-sepia pl-4">
                  <h3 className="font-headline text-xl uppercase mb-2">1. Сбор информации</h3>
                  <p>
                    Мы собираем информацию, которую вы предоставляете при регистрации на сервере, включая имя персонажа, 
                    Discord ID и игровую статистику. Данные используются исключительно для обеспечения игрового процесса 
                    и улучшения качества сервера.
                  </p>
                </div>

                <div className="border-l-4 border-mafia-sepia pl-4">
                  <h3 className="font-headline text-xl uppercase mb-2">2. Использование данных</h3>
                  <p>
                    Ваши данные используются для: идентификации игрока, ведения игровой статистики, предотвращения 
                    нарушений правил, коммуникации с игроками и улучшения игрового опыта. Мы не передаем персональные 
                    данные третьим лицам без вашего согласия.
                  </p>
                </div>

                <div className="border-l-4 border-mafia-sepia pl-4">
                  <h3 className="font-headline text-xl uppercase mb-2">3. Защита данных</h3>
                  <p>
                    Мы применяем современные технологии защиты для обеспечения безопасности ваших данных. Доступ к 
                    персональной информации имеют только уполномоченные администраторы проекта.
                  </p>
                </div>

                <div className="border-l-4 border-mafia-sepia pl-4">
                  <h3 className="font-headline text-xl uppercase mb-2">4. Ваши права</h3>
                  <p>
                    Вы имеете право запросить доступ к своим данным, их исправление или удаление. Для этого обратитесь 
                    к администрации проекта через Discord. Мы обработаем ваш запрос в течение 7 рабочих дней.
                  </p>
                </div>

                <div className="border-l-4 border-mafia-sepia pl-4">
                  <h3 className="font-headline text-xl uppercase mb-2">5. Cookies и аналитика</h3>
                  <p>
                    Сайт использует cookies для улучшения пользовательского опыта. Мы можем использовать инструменты 
                    аналитики для понимания поведения пользователей и улучшения функционала проекта.
                  </p>
                </div>

                <div className="border-t-4 border-mafia-sepia pt-4 mt-6">
                  <p className="text-xs uppercase tracking-wider">
                    При возникновении вопросов обращайтесь к администрации проекта
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showTerms && (
        <div 
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/80 transition-opacity duration-300 animate-in fade-in ${
            isTermsClosing ? 'opacity-0' : 'opacity-100'
          }`}
          onClick={handleCloseTerms}
        >
          <div 
            className={`aged-paper border-4 md:border-8 border-mafia-sepia max-w-3xl max-h-[80vh] overflow-y-auto m-4 transition-all duration-300 animate-in zoom-in-95 torn-edge-bottom crumpled-paper burn-mark burn-mark-bottom-left ink-stain ink-stain-top-left ${
              isTermsClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-2 md:border-4 border-mafia-sepia m-2 p-4 md:p-8 text-mafia-gray">
              <div className="flex items-start justify-between mb-4 md:mb-6 pb-3 md:pb-4 border-b-2 md:border-b-4 border-mafia-sepia">
                <div className="flex-1 pr-2">
                  <h2 className="text-2xl md:text-4xl font-headline uppercase tracking-wider mb-2 leading-tight">
                    Пользовательское соглашение
                  </h2>
                  <p className="text-[10px] md:text-xs font-body uppercase tracking-widest">
                    Mafia House RDR2 • Версия 1.0
                  </p>
                </div>
                <Button
                  onClick={handleCloseTerms}
                  className="bg-mafia-gray text-mafia-cream hover:bg-mafia-red border-2 md:border-4 border-mafia-sepia flex-shrink-0"
                  size="icon"
                >
                  <Icon name="X" size={20} className="md:w-6 md:h-6" />
                </Button>
              </div>

              <div className="space-y-6 font-body text-sm leading-relaxed">
                <div className="border-l-4 border-mafia-sepia pl-4">
                  <h3 className="font-headline text-xl uppercase mb-2">1. Общие положения</h3>
                  <p>
                    Играя на сервере Mafia House RDR2, вы соглашаетесь соблюдать правила проекта и настоящее соглашение. 
                    Администрация оставляет за собой право изменять условия соглашения без предварительного уведомления.
                  </p>
                </div>

                <div className="border-l-4 border-mafia-sepia pl-4">
                  <h3 className="font-headline text-xl uppercase mb-2">2. Правила игры</h3>
                  <p>
                    Игроки обязаны соблюдать правила ролевой игры, уважать других участников сообщества и следовать 
                    указаниям администрации. Нарушение правил может привести к предупреждению, временной или постоянной 
                    блокировке аккаунта.
                  </p>
                </div>

                <div className="border-l-4 border-mafia-sepia pl-4">
                  <h3 className="font-headline text-xl uppercase mb-2">3. Ответственность</h3>
                  <p>
                    Администрация не несет ответственности за потерю игрового прогресса, возникшую по техническим причинам 
                    или в результате действий других игроков. Все игровые действия совершаются на ваш страх и риск.
                  </p>
                </div>

                <div className="border-l-4 border-mafia-sepia pl-4">
                  <h3 className="font-headline text-xl uppercase mb-2">4. Донат и покупки</h3>
                  <p>
                    Все пожертвования являются добровольными и не подлежат возврату. Приобретенные игровые привилегии 
                    действуют согласно их описанию. Администрация может отозвать привилегии при нарушении правил проекта.
                  </p>
                </div>

                <div className="border-l-4 border-mafia-sepia pl-4">
                  <h3 className="font-headline text-xl uppercase mb-2">5. Запрещенные действия</h3>
                  <p>
                    Запрещены: использование читов и модификаций, оскорбления игроков, обход блокировок, спам, 
                    распространение запрещенного контента, мультиаккаунтинг без согласования с администрацией.
                  </p>
                </div>

                <div className="border-l-4 border-mafia-sepia pl-4">
                  <h3 className="font-headline text-xl uppercase mb-2">6. Интеллектуальная собственность</h3>
                  <p>
                    Все материалы проекта (логотипы, тексты, графика) являются собственностью Mafia House RDR2. 
                    Использование материалов без письменного разрешения запрещено.
                  </p>
                </div>

                <div className="border-t-4 border-mafia-sepia pt-4 mt-6">
                  <p className="text-xs uppercase tracking-wider">
                    Вступая в игру, вы автоматически принимаете условия данного соглашения
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;