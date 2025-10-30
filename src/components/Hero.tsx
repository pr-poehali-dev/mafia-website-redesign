import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen pt-[180px] md:pt-[280px] pb-8 md:pb-16 newspaper-texture"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="border-4 md:border-8 border-mafia-sepia aged-paper mb-8 shadow-2xl transform hover:scale-[1.01] transition-transform duration-300 torn-edge-top crumpled-paper burn-mark burn-mark-top-right ink-stain ink-stain-bottom-right">
            <div className="border-b-4 md:border-b-8 border-mafia-sepia p-4 md:p-6 bg-mafia-gray text-mafia-cream text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-headline font-black leading-tight uppercase tracking-tight relative z-10">
                МАФИЯ ХАУС
              </h2>
              <div className="text-lg md:text-2xl font-headline mt-2 text-mafia-red uppercase">
                Империя начинается здесь
              </div>
              <div className="text-[10px] md:text-xs font-body mt-3 uppercase tracking-widest text-mafia-cream">
                🔥 Эксклюзивный игровой опыт • Вступай в семью прямо сейчас 🔥
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-0">
              <div className="lg:col-span-2 p-4 md:p-8 lg:border-r-8 border-mafia-sepia aged-paper">
                <div className="md:columns-2 gap-8 text-justify font-body text-sm md:text-base leading-relaxed mb-6 text-mafia-gray">
                  <div className="relative">
                    <span className="float-left text-8xl font-gothic leading-none mr-3 mt-2 text-mafia-red">В</span>
                    <p className="mb-4">
                      эпоху сухого закона, когда виски ценится на вес золота, а честь семьи дороже жизни, открывается уникальная возможность стать частью легендарной организации.
                    </p>
                  </div>
                  <p className="mb-4">
                    <strong className="text-mafia-red">Мафия Хаус</strong> — это не просто сервер, это целый мир, где каждое решение имеет последствия, каждый союз может быть предательством, а каждая сделка заключается рукопожатием и взглядом в глаза.
                  </p>
                  <p className="mb-4">
                    Более <strong>250 игроков</strong> уже присоединились к семьям, контролирующим районы города. Подпольные казино, нелегальная торговля, разборки с конкурентами — всё это ждёт тех, кто готов рискнуть.
                  </p>
                  <p className="mb-4">
                    Создавай свою репутацию, заводи союзников, веди бизнес и защищай территорию семьи. Здесь каждый день — новая глава в истории преступного мира 1920-х годов.
                  </p>
                </div>

                <div className="border-4 md:border-8 border-mafia-red bg-mafia-red p-3 md:p-4 text-mafia-cream text-center vintage-stamp relative mb-6">
                  <div className="absolute -top-2 -right-2 w-10 h-10 md:w-12 md:h-12 border-2 md:border-4 border-mafia-cream bg-mafia-gray rounded-full flex items-center justify-center">
                    <Icon name="Skull" size={20} className="text-mafia-cream md:w-6 md:h-6" />
                  </div>
                  <div className="text-lg md:text-2xl font-headline uppercase mb-2">⚠ Внимание! ⚠</div>
                  <div className="text-[10px] md:text-xs uppercase tracking-widest border-t-2 border-b-2 border-mafia-cream py-2">
                    Предательство карается смертью • Честь превыше всего
                  </div>
                </div>

                <div className="border-4 md:border-8 border-mafia-sepia aged-paper p-4 md:p-5 mb-6 shadow-xl">
                  <div className="text-center border-b-4 border-mafia-sepia pb-3 mb-4">
                    <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] mb-1 font-bold">★ Эксклюзивная статистика ★</div>
                    <div className="text-xl md:text-2xl font-headline uppercase text-mafia-gray">Империя в цифрах</div>
                  </div>
                  <div className="space-y-3">
                    <div className="border-4 border-mafia-sepia aged-paper p-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-mafia-gray flex items-center justify-center">
                          <Icon name="DollarSign" size={20} className="text-mafia-cream" />
                        </div>
                        <div className="text-left">
                          <div className="text-2xl font-headline text-mafia-red">$500K+</div>
                          <div className="text-[10px] uppercase tracking-wider font-bold text-mafia-gray">В обороте ежедневно</div>
                        </div>
                      </div>
                    </div>
                    <div className="border-4 border-mafia-sepia aged-paper p-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-mafia-gray flex items-center justify-center">
                          <Icon name="Users" size={20} className="text-mafia-cream" />
                        </div>
                        <div className="text-left">
                          <div className="text-2xl font-headline text-mafia-red">12</div>
                          <div className="text-[10px] uppercase tracking-wider font-bold text-mafia-gray">Активных семей</div>
                        </div>
                      </div>
                    </div>
                    <div className="border-4 border-mafia-sepia aged-paper p-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-mafia-gray flex items-center justify-center">
                          <Icon name="Swords" size={20} className="text-mafia-cream" />
                        </div>
                        <div className="text-left">
                          <div className="text-2xl font-headline text-mafia-red">150+</div>
                          <div className="text-[10px] uppercase tracking-wider font-bold text-mafia-gray">Разборок в месяц</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 md:p-6 space-y-4 aged-paper">
                <div className="border-4 border-mafia-sepia photo-border transform -rotate-2 hover:rotate-0 transition-transform">
                  <img 
                    src="https://mh-rp.com/uploads/guide/98-media2.webp" 
                    alt="Члены организации"
                    className="w-full aspect-square object-cover old-photo"
                  />
                  <div className="aged-paper border-t-4 border-mafia-sepia p-2">
                    <div className="text-xs font-headline text-center uppercase text-mafia-gray">
                      Рис. 1 — Основатели, 1925
                    </div>
                  </div>
                </div>

                <div className="border-4 border-mafia-sepia bg-mafia-gray text-mafia-red p-6 text-center shadow-xl">
                  <Icon name="Users" size={48} className="mx-auto mb-2" />
                  <div className="text-5xl font-headline mb-1">250+</div>
                  <div className="text-xs uppercase tracking-widest text-mafia-cream">Активных членов семьи</div>
                </div>

                <div className="border-4 border-mafia-sepia aged-paper p-4">
                  <div className="text-center font-headline uppercase text-sm mb-3 border-b-2 border-mafia-sepia pb-2 text-mafia-gray">
                    📰 Экстренный выпуск
                  </div>
                  <div className="text-xs font-body text-center leading-relaxed italic text-mafia-gray-light">
                    "Переменная облачность с высокой вероятностью разборок. Температура: жарко. Атмосфера: крайне напряжённая. Рекомендуется держать оружие наготове."
                  </div>
                  <div className="text-[10px] text-center mt-2 border-t border-mafia-sepia pt-1 text-mafia-gray-light">
                    — Метеобюро, 26 октября 1925
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8">
            <div className="border-8 border-mafia-sepia aged-paper shadow-xl transform hover:-translate-y-2 transition-all torn-edge-bottom crumpled-paper burn-mark burn-mark-bottom-left ink-stain ink-stain-top-left">
              <div className="border-b-4 border-mafia-sepia p-4 bg-mafia-gray text-mafia-red text-center">
                <Icon name="Camera" size={32} className="mx-auto mb-2" />
                <h3 className="text-xl font-headline uppercase">
                  Жизнь семей
                </h3>
              </div>
              <div className="p-5 space-y-3 text-mafia-gray">
                <div className="border-4 border-mafia-sepia photo-border">
                  <img 
                    src="https://mh-rp.com/uploads/guide/88-media.webp" 
                    alt="Момент из жизни семьи"
                    className="w-full aspect-video object-cover old-photo"
                  />
                  <div className="aged-paper border-t-4 border-mafia-sepia p-2">
                    <div className="text-[10px] font-headline text-center uppercase text-mafia-gray">
                      Рис. 2 — Встреча боссов, 1925
                    </div>
                  </div>
                </div>
                <div className="border-4 border-mafia-sepia photo-border">
                  <img 
                    src="https://mh-rp.com/uploads/guide/91-5467567.png" 
                    alt="Семейный бизнес"
                    className="w-full aspect-video object-cover old-photo"
                  />
                  <div className="aged-paper border-t-4 border-mafia-sepia p-2">
                    <div className="text-[10px] font-headline text-center uppercase text-mafia-gray">
                      Рис. 3 — Контроль территории
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-8 border-mafia-sepia aged-paper shadow-xl transform hover:-translate-y-2 transition-all torn-edge-bottom crumpled-paper burn-mark burn-mark-bottom-left ink-stain ink-stain-top-left">
              <div className="border-b-4 border-mafia-sepia p-4 bg-mafia-gray text-mafia-red text-center">
                <Icon name="Newspaper" size={32} className="mx-auto mb-2" />
                <h3 className="text-xl font-headline uppercase">
                  Из архивов
                </h3>
              </div>
              <div className="p-5 space-y-3 text-mafia-gray">
                <div className="border-4 border-mafia-sepia photo-border">
                  <img 
                    src="https://mh-rp.com/uploads/guide/96-media4.webp" 
                    alt="Исторический момент"
                    className="w-full aspect-video object-cover old-photo"
                  />
                  <div className="aged-paper border-t-4 border-mafia-sepia p-2">
                    <div className="text-[10px] font-headline text-center uppercase text-mafia-gray">
                      Рис. 6 — Сбор семьи
                    </div>
                  </div>
                </div>
                <div className="border-4 border-mafia-sepia photo-border">
                  <img 
                    src="https://mh-rp.com/uploads/guide/97-media1.webp" 
                    alt="Важный момент"
                    className="w-full aspect-video object-cover old-photo"
                  />
                  <div className="aged-paper border-t-4 border-mafia-sepia p-2">
                    <div className="text-[10px] font-headline text-center uppercase text-mafia-gray">
                      Рис. 7 — Деловая встреча
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-8 border-mafia-sepia aged-paper shadow-xl transform hover:-translate-y-2 transition-all torn-edge-bottom crumpled-paper burn-mark burn-mark-bottom-left ink-stain ink-stain-top-left">
              <div className="border-b-4 border-mafia-sepia p-4 bg-mafia-red text-mafia-cream text-center">
                <Icon name="Image" size={32} className="mx-auto mb-2" />
                <h3 className="text-xl font-headline uppercase">
                  Хроника событий
                </h3>
              </div>
              <div className="p-5 space-y-3 text-mafia-gray">
                <div className="border-4 border-mafia-sepia photo-border">
                  <img 
                    src="https://mh-rp.com/uploads/guide/92-1111.webp" 
                    alt="Событие на сервере"
                    className="w-full aspect-video object-cover old-photo"
                  />
                  <div className="aged-paper border-t-4 border-mafia-sepia p-2">
                    <div className="text-[10px] font-headline text-center uppercase text-mafia-gray">
                      Рис. 4 — Подпольное дело
                    </div>
                  </div>
                </div>
                <div className="border-4 border-mafia-sepia photo-border">
                  <img 
                    src="https://mh-rp.com/uploads/guide/95-56.webp" 
                    alt="Городская жизнь"
                    className="w-full aspect-video object-cover old-photo"
                  />
                  <div className="aged-paper border-t-4 border-mafia-sepia p-2">
                    <div className="text-[10px] font-headline text-center uppercase text-mafia-gray">
                      Рис. 5 — Улицы города
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-8 border-mafia-sepia aged-paper shadow-2xl mb-8 torn-edge-top crumpled-paper burn-mark burn-mark-top-right">
            <div className="border-b-6 border-mafia-sepia p-5 bg-mafia-gray text-mafia-cream text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-mafia-gold to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-mafia-gold to-transparent"></div>
              <Icon name="FileText" size={40} className="mx-auto mb-3 text-mafia-red" />
              <h2 className="text-4xl font-headline uppercase tracking-wider text-mafia-red">
                О проекте
              </h2>
              <div className="text-xs uppercase tracking-widest mt-2 text-mafia-cream">
                История начинается здесь
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-0">
              <div className="lg:col-span-2 p-8 border-r-6 border-mafia-sepia aged-paper">
                <div className="mb-6 border-l-4 border-mafia-red pl-4 aged-paper p-4">
                  <p className="font-body text-sm italic leading-relaxed text-justify text-mafia-gray">
                    «Меланхолия, эта страшная болезнь, избрала вас своей жертвой. Помимо газеты и собственных мыслей, ничто другое вас уже не интересовало. Любовь перестала быть источником радости. Девизом как будто стали слова: живи и мирись с жалким прозябанием».
                  </p>
                </div>

                <div className="columns-2 gap-6 text-justify font-body text-sm leading-relaxed text-mafia-gray">
                  <p className="mb-3">
                    <strong className="text-mafia-red">Первый русскоязычный массовый ролевой сервер</strong> в Red Dead Redemption 2 на платформе RedM, где не требуется квента, а большинство рудиментарных правил перенесены на рельсы игровых механик.
                  </p>
                  <p className="mb-3">
                    Запустившись в <strong>конце 2021 года</strong>, «Меланхолия» дала старт массовому русскоязычному сегменту RedM. Для того, чтобы вы могли окунуться во вселенную сервера, мы подготавливаем подробные текста, охватывающие как культурные аспекты, так и технические.
                  </p>
                  <p className="mb-3">
                    <strong className="text-mafia-red">MH1919</strong> — это атмосферный RP-проект на базе RedM, вдохновлённый эстетикой Mafia и нуарной Америки 40–50-х годов.
                  </p>
                  <p className="mb-3">
                    Уникальные персонажи, живая экономика, криминальные разборки и детализированный город создают глубокий мир, где каждая твоя реплика и поступок могут изменить ход истории.
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-4 aged-paper">
                <div className="border-4 border-mafia-sepia aged-paper p-4 text-center shadow-lg">
                  <Icon name="Calendar" size={32} className="mx-auto mb-2 text-mafia-red" />
                  <div className="text-3xl font-headline mb-1 text-mafia-gray">2021</div>
                  <div className="text-xs uppercase tracking-wider font-bold border-t-2 border-mafia-sepia pt-2 mt-2 text-mafia-gray">
                    Год основания
                  </div>
                </div>

                <div className="border-4 border-mafia-sepia bg-mafia-gray text-mafia-red p-5 text-center shadow-xl">
                  <Icon name="Award" size={40} className="mx-auto mb-2" />
                  <div className="text-xs uppercase tracking-widest text-mafia-cream mb-2">Достижение</div>
                  <div className="text-base font-headline leading-tight text-mafia-cream">
                    Первый массовый RU сервер RedM
                  </div>
                </div>

                <div className="border-4 border-mafia-sepia aged-paper p-4">
                  <div className="text-center font-headline uppercase text-xs mb-3 border-b-2 border-mafia-sepia pb-2 text-mafia-gray">
                    📍 Где узнать больше
                  </div>
                  <div className="text-xs font-body text-center leading-relaxed text-mafia-gray">
                    Прочесть подробные материалы об истории и механиках можно в нашем официальном Discord-сервере
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-8 border-mafia-sepia aged-paper shadow-2xl mb-8 torn-edge-bottom crumpled-paper burn-mark burn-mark-bottom-left">
            <div className="border-b-6 border-mafia-sepia p-5 bg-mafia-red text-mafia-cream text-center">
              <Icon name="Gamepad2" size={40} className="mx-auto mb-3" />
              <h2 className="text-4xl font-headline uppercase tracking-wider">
                Как начать играть?
              </h2>
              <div className="text-xs uppercase tracking-widest mt-2 border-t-2 border-b-2 border-mafia-cream py-2 inline-block px-8 mt-3">
                Три простых шага до старта
              </div>
            </div>

            <div className="p-8 aged-paper">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border-6 border-mafia-sepia aged-paper shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all">
                  <div className="border-b-4 border-mafia-sepia p-5 aged-paper text-center relative">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-mafia-red border-4 border-mafia-sepia flex items-center justify-center shadow-xl">
                      <span className="text-2xl font-headline text-mafia-cream font-black">1</span>
                    </div>
                    <Icon name="ShoppingCart" size={40} className="mx-auto mb-3 mt-4 text-mafia-red" />
                    <h3 className="text-lg font-headline uppercase text-mafia-gray">Купи RDR2</h3>
                  </div>
                  <div className="p-5">
                    <p className="font-body text-sm leading-relaxed text-justify text-mafia-gray-light">
                      Чтобы начать, тебе нужен <strong>Red Dead Redemption 2</strong>. Купи игру в Steam или в магазине Rockstar Games — это твой билет в мир мафии.
                    </p>
                  </div>
                </div>

                <div className="border-6 border-mafia-sepia aged-paper shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all">
                  <div className="border-b-4 border-mafia-sepia p-5 aged-paper text-center relative">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-mafia-red border-4 border-mafia-sepia flex items-center justify-center shadow-xl">
                      <span className="text-2xl font-headline text-mafia-cream font-black">2</span>
                    </div>
                    <Icon name="Download" size={40} className="mx-auto mb-3 mt-4 text-mafia-red" />
                    <h3 className="text-lg font-headline uppercase text-mafia-gray">Скачай RedM</h3>
                  </div>
                  <div className="p-5">
                    <p className="font-body text-sm leading-relaxed text-justify mb-4 text-mafia-gray-light">
                      Установи <strong>RedM</strong> по ссылке, чтобы получить доступ к мультиплееру. Это платформа, через которую ты подключишься к нашему серверу.
                    </p>
                    <a 
                      href="https://redm.net/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block border-4 border-mafia-sepia bg-mafia-gold hover:bg-mafia-gold/90 p-3 text-center transition-all transform hover:scale-105 shadow-lg"
                    >
                      <Icon name="Download" size={24} className="mx-auto mb-1 text-mafia-gray" />
                      <div className="text-base font-headline uppercase text-mafia-gray">Скачать RedM</div>
                    </a>
                  </div>
                </div>

                <div className="border-6 border-mafia-sepia aged-paper shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all">
                  <div className="border-b-4 border-mafia-sepia p-5 aged-paper text-center relative">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-mafia-red border-4 border-mafia-sepia flex items-center justify-center shadow-xl">
                      <span className="text-2xl font-headline text-mafia-cream font-black">3</span>
                    </div>
                    <Icon name="LogIn" size={40} className="mx-auto mb-3 mt-4 text-mafia-red" />
                    <h3 className="text-lg font-headline uppercase text-mafia-gray">Заходи на сервер</h3>
                  </div>
                  <div className="p-5">
                    <p className="font-body text-sm leading-relaxed text-justify mb-4 text-mafia-gray-light">
                      Открой лаунчер RedM, найди наш проект по названию, зайди на сервер — и наслаждайся атмосферой и глубоким ролевым взаимодействием.
                    </p>
                    <a 
                      href="redm://connect/46.174.49.200:30120"
                      className="block border-4 border-mafia-sepia bg-green-700 hover:bg-green-800 p-3 text-center transition-all transform hover:scale-105 shadow-lg text-mafia-cream"
                    >
                      <Icon name="Gamepad2" size={24} className="mx-auto mb-1" />
                      <div className="text-base font-headline uppercase">Подключиться</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t-8 border-b-8 border-mafia-sepia py-6 aged-paper shadow-lg mb-8">
            <div className="flex items-center justify-center gap-12 flex-wrap">
              <div className="text-center transform hover:scale-110 transition-transform">
                <Icon name="Calendar" size={32} className="mx-auto mb-2 text-mafia-red" />
                <div className="text-4xl font-headline text-mafia-gray">1920</div>
                <div className="text-xs uppercase tracking-wider font-bold text-mafia-gray-light">Эпоха запрета</div>
              </div>
              <div className="w-1 h-16 bg-mafia-sepia" />
              <div className="text-center transform hover:scale-110 transition-transform">
                <Icon name="Clock" size={32} className="mx-auto mb-2 text-mafia-red" />
                <div className="text-4xl font-headline text-mafia-gray">24/7</div>
                <div className="text-xs uppercase tracking-wider font-bold text-mafia-gray-light">Всегда онлайн</div>
              </div>
              <div className="w-1 h-16 bg-mafia-sepia" />
              <div className="text-center transform hover:scale-110 transition-transform">
                <Icon name="Languages" size={32} className="mx-auto mb-2 text-mafia-red" />
                <div className="text-4xl font-headline text-mafia-gray">RU/EN</div>
                <div className="text-xs uppercase tracking-wider font-bold text-mafia-gray-light">Два языка</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-6 border-mafia-sepia aged-paper shadow-xl p-6 text-center">
              <div className="border-4 border-mafia-sepia inline-block p-4 aged-paper mb-3">
                <Icon name="MessageCircle" size={40} className="text-mafia-red" />
              </div>
              <h3 className="text-lg font-headline uppercase mb-2 text-mafia-gray">Активное сообщество</h3>
              <p className="text-xs font-body leading-relaxed text-mafia-gray-light">
                Присоединяйся к Discord, где 5000+ игроков обсуждают стратегии и делятся опытом
              </p>
            </div>
            
            <div className="border-6 border-mafia-sepia aged-paper shadow-xl p-6 text-center">
              <div className="border-4 border-mafia-sepia inline-block p-4 aged-paper mb-3">
                <Icon name="Headphones" size={40} className="text-mafia-red" />
              </div>
              <h3 className="text-lg font-headline uppercase mb-2 text-mafia-gray">Поддержка 24/7</h3>
              <p className="text-xs font-body leading-relaxed text-mafia-gray-light">
                Команда администраторов всегда на связи, чтобы помочь разобраться в любой ситуации
              </p>
            </div>
            
            <div className="border-6 border-mafia-sepia aged-paper shadow-xl p-6 text-center">
              <div className="border-4 border-mafia-sepia inline-block p-4 aged-paper mb-3">
                <Icon name="Zap" size={40} className="text-mafia-red" />
              </div>
              <h3 className="text-lg font-headline uppercase mb-2 text-mafia-gray">Регулярные обновления</h3>
              <p className="text-xs font-body leading-relaxed text-mafia-gray-light">
                Новый контент, события и улучшения каждую неделю — сервер постоянно развивается
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;