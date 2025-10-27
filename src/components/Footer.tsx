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
      <footer className="bg-white border-t-8 border-black py-12">
        <div className="container mx-auto px-4">
          <div className="border-8 border-black bg-white p-8">
            <div className="border-b-4 border-black pb-6 mb-8 text-center">
              <div className="flex items-center justify-center gap-4 mb-3">
                <div className="w-12 h-12 bg-black border-4 border-black flex items-center justify-center">
                  <Icon name="Crown" className="text-white" size={24} />
                </div>
                <h3 className="text-4xl font-headline font-black text-black tracking-tighter uppercase">
                  МАФИЯ RDR2
                </h3>
                <div className="w-12 h-12 bg-black border-4 border-black flex items-center justify-center">
                  <Icon name="Crown" className="text-white" size={24} />
                </div>
              </div>
              <div className="font-body text-black text-sm uppercase tracking-widest">
                Официальное издание • Основано в 1925
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="border-r-2 border-black pr-6 last:border-0">
                <h4 className="text-xl font-display font-black text-black tracking-wider mb-4 pb-2 border-b-4 border-black uppercase">
                  О проекте
                </h4>
                <p className="text-sm text-black font-body leading-relaxed">
                  Погрузитесь в атмосферу эпохи сухого закона. Станьте частью легендарной мафиозной истории.
                </p>
                
                <div className="mt-4 flex items-center gap-2">
                  <div className="h-1 w-8 bg-black"></div>
                  <div className="w-2 h-2 bg-black transform rotate-45"></div>
                  <div className="h-1 w-4 bg-black"></div>
                </div>
              </div>

              <div className="border-r-2 border-black pr-6 last:border-0">
                <h4 className="text-xl font-display font-black text-black tracking-wider mb-4 pb-2 border-b-4 border-black uppercase">
                  Навигация
                </h4>
                <ul className="space-y-2 text-sm font-body">
                  <li className="border-b-2 border-black pb-2">
                    <button onClick={() => setActiveSection('home')} className="text-black hover:pl-2 transition-all inline-block uppercase tracking-wider font-bold">
                      Главная
                    </button>
                  </li>
                  <li className="border-b-2 border-black pb-2">
                    <button onClick={() => setActiveSection('news')} className="text-black hover:pl-2 transition-all inline-block uppercase tracking-wider font-bold">
                      Новости
                    </button>
                  </li>
                  <li className="border-b-2 border-black pb-2">
                    <button onClick={() => setActiveSection('rules')} className="text-black hover:pl-2 transition-all inline-block uppercase tracking-wider font-bold">
                      Правила
                    </button>
                  </li>
                  <li className="border-b-2 border-black pb-2">
                    <button onClick={() => setActiveSection('wiki')} className="text-black hover:pl-2 transition-all inline-block uppercase tracking-wider font-bold">
                      Вики
                    </button>
                  </li>
                </ul>
              </div>

              <div className="border-r-2 border-black pr-6 last:border-0">
                <h4 className="text-xl font-display font-black text-black tracking-wider mb-4 pb-2 border-b-4 border-black uppercase">
                  Информация
                </h4>
                <ul className="space-y-2 text-sm font-body">
                  <li className="border-b-2 border-black pb-2">
                    <button onClick={() => setActiveSection('lore')} className="text-black hover:pl-2 transition-all inline-block uppercase tracking-wider font-bold">
                      Лор проекта
                    </button>
                  </li>
                  <li className="border-b-2 border-black pb-2">
                    <button onClick={() => setActiveSection('psychotypes')} className="text-black hover:pl-2 transition-all inline-block uppercase tracking-wider font-bold">
                      Психотипы
                    </button>
                  </li>
                  <li className="border-b-2 border-black pb-2">
                    <button onClick={() => setActiveSection('stats')} className="text-black hover:pl-2 transition-all inline-block uppercase tracking-wider font-bold">
                      Статистика
                    </button>
                  </li>
                  <li className="border-b-2 border-black pb-2">
                    <button onClick={() => setActiveSection('donate')} className="text-black hover:pl-2 transition-all inline-block uppercase tracking-wider font-bold">
                      Донат
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-display font-black text-black tracking-wider mb-4 pb-2 border-b-4 border-black uppercase">
                  Сообщество
                </h4>
                
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

            <div className="border-t-4 border-black pt-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                  <p className="text-sm text-black font-body uppercase tracking-wider font-bold">
                    © 1925 Mafia House RDR2
                  </p>
                  <p className="text-xs text-black font-body uppercase tracking-widest">
                    Все права защищены
                  </p>
                </div>
                
                <div className="flex items-center gap-6 text-xs font-body">
                  <button 
                    onClick={() => setShowPrivacy(true)}
                    className="text-black border-b-2 border-black hover:border-transparent transition-all uppercase tracking-wider font-bold"
                  >
                    Политика конфиденциальности
                  </button>
                  <span className="w-1 h-1 bg-black"></span>
                  <button 
                    onClick={() => setShowTerms(true)}
                    className="text-black border-b-2 border-black hover:border-transparent transition-all uppercase tracking-wider font-bold"
                  >
                    Пользовательское соглашение
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <div className="inline-block border-4 border-black px-8 py-2 bg-white">
              <p className="font-body text-black text-xs uppercase tracking-widest">
                Напечатано в типографии Mafia House Press • 26 октября 1925 • Том I, № 1
              </p>
            </div>
          </div>
        </div>
      </footer>

      {showPrivacy && (
        <div 
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/80 transition-opacity duration-300 ${
            isPrivacyClosing ? 'opacity-0' : 'opacity-100'
          }`}
          onClick={handleClosePrivacy}
        >
          <div 
            className={`bg-white border-8 border-black max-w-3xl max-h-[80vh] overflow-y-auto m-4 transition-all duration-300 ${
              isPrivacyClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-4 border-black m-2 p-8">
              <div className="flex items-start justify-between mb-6 pb-4 border-b-4 border-black">
                <div>
                  <h2 className="text-4xl font-headline uppercase tracking-wider mb-2">
                    Политика конфиденциальности
                  </h2>
                  <p className="text-xs font-body uppercase tracking-widest">
                    Mafia House RDR2 • Действует с октября 1925
                  </p>
                </div>
                <Button
                  onClick={handleClosePrivacy}
                  className="bg-black text-white hover:bg-black/80 border-4 border-black"
                  size="icon"
                >
                  <Icon name="X" size={24} />
                </Button>
              </div>

              <div className="space-y-6 font-body text-sm leading-relaxed">
                <div className="border-l-4 border-black pl-4">
                  <h3 className="font-headline text-xl uppercase mb-2">1. Сбор информации</h3>
                  <p>
                    Мы собираем информацию, которую вы предоставляете при регистрации на сервере, включая имя персонажа, 
                    Discord ID и игровую статистику. Данные используются исключительно для обеспечения игрового процесса 
                    и улучшения качества сервера.
                  </p>
                </div>

                <div className="border-l-4 border-black pl-4">
                  <h3 className="font-headline text-xl uppercase mb-2">2. Использование данных</h3>
                  <p>
                    Ваши данные используются для: идентификации игрока, ведения игровой статистики, предотвращения 
                    нарушений правил, коммуникации с игроками и улучшения игрового опыта. Мы не передаем персональные 
                    данные третьим лицам без вашего согласия.
                  </p>
                </div>

                <div className="border-l-4 border-black pl-4">
                  <h3 className="font-headline text-xl uppercase mb-2">3. Защита данных</h3>
                  <p>
                    Мы применяем современные технологии защиты для обеспечения безопасности ваших данных. Доступ к 
                    персональной информации имеют только уполномоченные администраторы проекта.
                  </p>
                </div>

                <div className="border-l-4 border-black pl-4">
                  <h3 className="font-headline text-xl uppercase mb-2">4. Ваши права</h3>
                  <p>
                    Вы имеете право запросить доступ к своим данным, их исправление или удаление. Для этого обратитесь 
                    к администрации проекта через Discord. Мы обработаем ваш запрос в течение 7 рабочих дней.
                  </p>
                </div>

                <div className="border-l-4 border-black pl-4">
                  <h3 className="font-headline text-xl uppercase mb-2">5. Cookies и аналитика</h3>
                  <p>
                    Сайт использует cookies для улучшения пользовательского опыта. Мы можем использовать инструменты 
                    аналитики для понимания поведения пользователей и улучшения функционала проекта.
                  </p>
                </div>

                <div className="border-t-4 border-black pt-4 mt-6">
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
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/80 transition-opacity duration-300 ${
            isTermsClosing ? 'opacity-0' : 'opacity-100'
          }`}
          onClick={handleCloseTerms}
        >
          <div 
            className={`bg-white border-8 border-black max-w-3xl max-h-[80vh] overflow-y-auto m-4 transition-all duration-300 ${
              isTermsClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-4 border-black m-2 p-8">
              <div className="flex items-start justify-between mb-6 pb-4 border-b-4 border-black">
                <div>
                  <h2 className="text-4xl font-headline uppercase tracking-wider mb-2">
                    Пользовательское соглашение
                  </h2>
                  <p className="text-xs font-body uppercase tracking-widest">
                    Mafia House RDR2 • Версия 1.0
                  </p>
                </div>
                <Button
                  onClick={handleCloseTerms}
                  className="bg-black text-white hover:bg-black/80 border-4 border-black"
                  size="icon"
                >
                  <Icon name="X" size={24} />
                </Button>
              </div>

              <div className="space-y-6 font-body text-sm leading-relaxed">
                <div className="border-l-4 border-black pl-4">
                  <h3 className="font-headline text-xl uppercase mb-2">1. Общие положения</h3>
                  <p>
                    Играя на сервере Mafia House RDR2, вы соглашаетесь соблюдать правила проекта и настоящее соглашение. 
                    Администрация оставляет за собой право изменять условия соглашения без предварительного уведомления.
                  </p>
                </div>

                <div className="border-l-4 border-black pl-4">
                  <h3 className="font-headline text-xl uppercase mb-2">2. Правила игры</h3>
                  <p>
                    Игроки обязаны соблюдать правила ролевой игры, уважать других участников сообщества и следовать 
                    указаниям администрации. Нарушение правил может привести к предупреждению, временной или постоянной 
                    блокировке аккаунта.
                  </p>
                </div>

                <div className="border-l-4 border-black pl-4">
                  <h3 className="font-headline text-xl uppercase mb-2">3. Ответственность</h3>
                  <p>
                    Администрация не несет ответственности за потерю игрового прогресса, возникшую по техническим причинам 
                    или в результате действий других игроков. Все игровые действия совершаются на ваш страх и риск.
                  </p>
                </div>

                <div className="border-l-4 border-black pl-4">
                  <h3 className="font-headline text-xl uppercase mb-2">4. Донат и покупки</h3>
                  <p>
                    Все пожертвования являются добровольными и не подлежат возврату. Приобретенные игровые привилегии 
                    действуют согласно их описанию. Администрация может отозвать привилегии при нарушении правил проекта.
                  </p>
                </div>

                <div className="border-l-4 border-black pl-4">
                  <h3 className="font-headline text-xl uppercase mb-2">5. Запрещенные действия</h3>
                  <p>
                    Запрещены: использование читов и модификаций, оскорбления игроков, обход блокировок, спам, 
                    распространение запрещенного контента, мультиаккаунтинг без согласования с администрацией.
                  </p>
                </div>

                <div className="border-l-4 border-black pl-4">
                  <h3 className="font-headline text-xl uppercase mb-2">6. Интеллектуальная собственность</h3>
                  <p>
                    Все материалы проекта (логотипы, тексты, графика) являются собственностью Mafia House RDR2. 
                    Использование материалов без письменного разрешения запрещено.
                  </p>
                </div>

                <div className="border-t-4 border-black pt-4 mt-6">
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