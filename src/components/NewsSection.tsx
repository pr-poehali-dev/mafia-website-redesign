import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: 'НОВАЯ СЕМЬЯ ПРИБЫЛА В ГОРОД',
      subtitle: 'Организация Корлеоне устанавливает контроль над восточным районом',
      date: '25 октября 1925',
      category: 'Срочные новости',
      image: 'https://cdn.poehali.dev/projects/cb4b7b13-739f-47b7-b656-8e116473ab1f/files/2322ea7f-61b6-4c91-901b-60cade2be720.jpg',
      excerpt: 'На улицах города замечена новая мафиозная группировка. Семья Корлеоне устанавливает свои порядки в восточном районе. Свидетели сообщают о вооружённых всадниках и подпольных операциях.',
    },
    {
      id: 2,
      title: 'ДЕРЗКОЕ ОГРАБЛЕНИЕ САЛУНА',
      subtitle: 'Полиция ведёт расследование, владелец молчит',
      date: '23 октября 1925',
      category: 'Криминал',
      image: 'https://cdn.poehali.dev/projects/cb4b7b13-739f-47b7-b656-8e116473ab1f/files/9a73409c-d997-4539-bac2-07bc3743e5c1.jpg',
      excerpt: 'Этой ночью неизвестные лица совершили дерзкое ограбление главного салуна. Полиция ведёт расследование. Владелец заведения отказывается давать показания.',
    },
    {
      id: 3,
      title: 'ШЕРИФ ОСТАНОВИЛ ОГРАБЛЕНИЕ ПОЕЗДА',
      subtitle: 'Бандиты скрылись, объявлена награда за поимку',
      date: '20 октября 1925',
      category: 'Закон и порядок',
      image: 'https://cdn.poehali.dev/projects/cb4b7b13-739f-47b7-b656-8e116473ab1f/files/68ecaba2-4e61-434a-a1b1-ff1755ea6f08.jpg',
      excerpt: 'Шериф сообщает об успешном предотвращении ограбления товарного поезда. Несколько бандитов скрылись. Объявлена награда за их поимку.',
    },
  ];

  return (
    <section className="min-h-screen pt-[240px] pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="border-t-8 border-b-8 border-black py-6 mb-8 aged-paper text-center shadow-xl">
            <div className="flex items-center justify-center gap-4 mb-3">
              <Icon name="Newspaper" size={48} className="text-[#8B0000]" />
              <h2 className="text-6xl font-headline uppercase tracking-wider">
                Новости
              </h2>
              <Icon name="Newspaper" size={48} className="text-[#8B0000]" />
            </div>
            <div className="text-sm uppercase tracking-widest mt-2 border-t-2 border-b-2 border-black py-2 inline-block px-8">
              📰 Последние события с улиц города • Выпуск от 26.10.1925 📰
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {news.map((item, index) => (
                <div key={item.id} className="border-8 border-black aged-paper shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all">
                  {index === 0 ? (
                    <div>
                      <div className="border-b-4 border-black p-4 bg-gradient-to-r from-[#8B0000] to-red-900 text-white">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-headline uppercase tracking-wider flex items-center gap-2">
                            <Icon name="AlertCircle" size={20} />
                            {item.category}
                          </div>
                          <div className="text-sm font-headline uppercase">
                            {item.date}
                          </div>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6 p-6">
                        <div className="border-4 border-black photo-border">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full aspect-[4/3] object-cover old-photo"
                          />
                        </div>
                        <div className="flex flex-col justify-between">
                          <div>
                            <h3 className="text-4xl font-headline font-black leading-tight uppercase mb-3">
                              {item.title}
                            </h3>
                            <div className="text-base font-headline mb-4 border-b-2 border-black pb-3">
                              {item.subtitle}
                            </div>
                            <div className="font-body text-base leading-relaxed text-justify">
                              {item.excerpt}
                            </div>
                          </div>
                          <div className="text-sm uppercase tracking-wider mt-5 border-t-2 border-black pt-3 flex items-center gap-2">
                            <Icon name="ArrowRight" size={16} />
                            Продолжение на стр. 2
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="grid md:grid-cols-5 gap-0">
                      <div className="md:col-span-2 border-r-4 border-black">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover old-photo"
                        />
                      </div>
                      <div className="md:col-span-3 p-5">
                        <div className="text-xs uppercase tracking-wider mb-3 flex items-center justify-between border-b-2 border-black pb-2">
                          <span className="flex items-center gap-1">
                            <Icon name="Tag" size={12} />
                            {item.category}
                          </span>
                          <span>{item.date}</span>
                        </div>
                        <h3 className="text-2xl font-headline font-bold leading-tight uppercase mb-2">
                          {item.title}
                        </h3>
                        <div className="text-sm font-headline mb-3 border-b-2 border-black pb-2">
                          {item.subtitle}
                        </div>
                        <div className="font-body text-sm leading-relaxed text-justify">
                          {item.excerpt}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="border-6 border-black aged-paper shadow-xl">
                <div className="border-b-4 border-black p-4 bg-gradient-to-r from-black to-zinc-800 text-amber-400 text-center">
                  <Icon name="Pin" size={28} className="mx-auto mb-2" />
                  <h3 className="text-base font-headline uppercase tracking-wider">
                    Доска объявлений
                  </h3>
                </div>
                <div className="p-4 space-y-4">
                  <div className="border-4 border-[#8B0000] bg-gradient-to-br from-red-50 to-red-100 p-3">
                    <div className="font-bold uppercase mb-2 text-sm flex items-center gap-2">
                      <Icon name="AlertTriangle" size={16} />
                      Разыскивается
                    </div>
                    <div className="text-xs leading-tight font-body">
                      Трое вооружённых мужчин, подозреваемые в ограблении поезда. Награда $500.
                    </div>
                  </div>
                  <div className="border-4 border-black bg-white p-3">
                    <div className="font-bold uppercase mb-2 text-sm flex items-center gap-2">
                      <Icon name="Sparkles" size={16} />
                      Открытие казино
                    </div>
                    <div className="text-xs leading-tight font-body">
                      «Золотая Подкова» приглашает уважаемых гостей. Каждую ночь с полуночи.
                    </div>
                  </div>
                  <div className="border-4 border-black bg-white p-3">
                    <div className="font-bold uppercase mb-2 text-sm flex items-center gap-2">
                      <Icon name="ShieldAlert" size={16} />
                      Объявление шерифа
                    </div>
                    <div className="text-xs leading-tight font-body">
                      Комендантский час с полуночи до рассвета. Оставайтесь дома.
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-6 border-amber-600 bg-gradient-to-br from-amber-50 via-amber-100 to-yellow-200 shadow-2xl p-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-24 h-24 border-8 border-amber-600 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 right-0 w-24 h-24 border-8 border-amber-600 rounded-full translate-x-1/2 translate-y-1/2"></div>
                </div>
                <div className="relative z-10">
                  <div className="text-xs uppercase tracking-wider mb-3 font-bold">
                    ⭐ Реклама ⭐
                  </div>
                  <div className="border-4 border-black p-4 bg-white">
                    <div className="text-3xl font-headline mb-2">TOMMY'S</div>
                    <div className="text-sm mb-2 font-headline">Лучшее виски в городе</div>
                    <div className="text-xs italic font-body border-t-2 border-black pt-2">
                      "Качество, которому можно доверять"
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-6 border-black aged-paper shadow-xl">
                <div className="border-b-4 border-black p-4 bg-black text-white text-center">
                  <Icon name="BarChart3" size={28} className="mx-auto mb-2" />
                  <h3 className="text-base font-headline uppercase tracking-wider">
                    Статистика сервера
                  </h3>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex justify-between border-b-2 border-black pb-2 items-center">
                    <span className="font-body text-sm flex items-center gap-2">
                      <Icon name="Users" size={14} />
                      Игроков онлайн
                    </span>
                    <span className="font-headline text-xl text-[#8B0000]">250+</span>
                  </div>
                  <div className="flex justify-between border-b-2 border-black pb-2 items-center">
                    <span className="font-body text-sm flex items-center gap-2">
                      <Icon name="Shield" size={14} />
                      Активных семей
                    </span>
                    <span className="font-headline text-xl text-[#8B0000]">12</span>
                  </div>
                  <div className="flex justify-between border-b-2 border-black pb-2 items-center">
                    <span className="font-body text-sm flex items-center gap-2">
                      <Icon name="MapPin" size={14} />
                      Территорий
                    </span>
                    <span className="font-headline text-xl text-[#8B0000]">8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t-4 border-b-4 border-black py-3 aged-paper text-center shadow-lg">
            <div className="text-xs font-body uppercase tracking-widest">
              📰 Мафия Таймс • Том I • Издание 1925 • Цена: 5¢ • Печатается ежедневно 📰
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
