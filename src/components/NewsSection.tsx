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
          <div className="border-t-4 border-b-4 border-black py-2 mb-8 bg-white text-center">
            <h2 className="text-4xl font-headline uppercase tracking-wider">
              Последние новости с улиц
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {news.map((item, index) => (
                <div key={item.id} className="border-4 border-black bg-white">
                  {index === 0 ? (
                    <div>
                      <div className="border-b-2 border-black p-3 bg-black text-white">
                        <div className="text-xs font-headline uppercase tracking-wider">
                          {item.category} • {item.date}
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 p-4">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full aspect-[4/3] object-cover old-photo border-2 border-black"
                        />
                        <div className="flex flex-col justify-between">
                          <div>
                            <h3 className="text-3xl font-headline font-bold leading-tight uppercase mb-2">
                              {item.title}
                            </h3>
                            <div className="text-sm font-headline mb-3 border-b border-black pb-2">
                              {item.subtitle}
                            </div>
                            <div className="font-body text-sm leading-relaxed text-justify">
                              {item.excerpt}
                            </div>
                          </div>
                          <div className="text-xs uppercase tracking-wider mt-4 border-t border-black pt-2">
                            Продолжение на стр. 2 →
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="grid md:grid-cols-5 gap-0">
                      <div className="md:col-span-2 border-r-2 border-black">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover old-photo"
                        />
                      </div>
                      <div className="md:col-span-3 p-4">
                        <div className="text-[10px] uppercase tracking-wider mb-2">
                          {item.category} • {item.date}
                        </div>
                        <h3 className="text-xl font-headline font-bold leading-tight uppercase mb-1">
                          {item.title}
                        </h3>
                        <div className="text-xs font-headline mb-2 border-b border-black pb-2">
                          {item.subtitle}
                        </div>
                        <div className="font-body text-xs leading-relaxed text-justify">
                          {item.excerpt}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="border-4 border-black bg-white p-4">
                <div className="border-b-2 border-black pb-2 mb-3 text-center">
                  <h3 className="text-sm font-headline uppercase tracking-wider">
                    Доска объявлений
                  </h3>
                </div>
                <div className="space-y-3 text-xs font-body">
                  <div className="border-2 border-black p-2">
                    <div className="font-bold uppercase mb-1">Разыскивается</div>
                    <div className="text-[10px] leading-tight">
                      Трое вооружённых мужчин, подозреваемые в ограблении поезда. Награда $500.
                    </div>
                  </div>
                  <div className="border-2 border-black p-2">
                    <div className="font-bold uppercase mb-1">Открытие казино</div>
                    <div className="text-[10px] leading-tight">
                      «Золотая Подкова» приглашает уважаемых гостей.
                    </div>
                  </div>
                  <div className="border-2 border-black p-2">
                    <div className="font-bold uppercase mb-1">Объявление шерифа</div>
                    <div className="text-[10px] leading-tight">
                      Комендантский час с полуночи. Оставайтесь дома.
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-4 border-black bg-black text-white p-4">
                <div className="text-center">
                  <div className="text-xs uppercase tracking-wider mb-2">Реклама</div>
                  <div className="border-2 border-white p-3">
                    <div className="text-2xl font-headline mb-2">TOMMY'S</div>
                    <div className="text-xs mb-2">Лучшее виски</div>
                    <div className="text-[10px] italic">
                      "Качество, которому можно доверять"
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-4 border-black bg-white p-4">
                <div className="border-b-2 border-black pb-2 mb-3 text-center">
                  <h3 className="text-sm font-headline uppercase tracking-wider">
                    Статистика сервера
                  </h3>
                </div>
                <div className="space-y-2 text-xs font-body">
                  <div className="flex justify-between border-b border-black pb-1">
                    <span>Игроков онлайн</span>
                    <span className="font-headline">250+</span>
                  </div>
                  <div className="flex justify-between border-b border-black pb-1">
                    <span>Активных семей</span>
                    <span className="font-headline">12</span>
                  </div>
                  <div className="flex justify-between border-b border-black pb-1">
                    <span>Территорий</span>
                    <span className="font-headline">8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t-2 border-b-2 border-black py-1 bg-white text-center">
            <div className="text-xs font-body uppercase tracking-widest">
              Мафия Таймс • Том I • Издание 1920 • Цена: 5¢
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;