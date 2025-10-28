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
      excerpt: 'На улицах города замечена новая мафиозная группировка. Семья Корлеоне устанавливает свои порядки в восточном районе. Свидетели сообщают о вооружённых всадниках и подпольных операциях. Местные жители обеспокоены происходящим.',
      content: 'По сообщениям очевидцев, вчера вечером в восточный район прибыла колонна всадников. Лидер группировки представился как Дон Корлеоне. Новая семья уже начала устанавливать свои порядки, договариваясь с местными торговцами о "защите". Шериф пока воздерживается от комментариев.',
    },
    {
      id: 2,
      title: 'ДЕРЗКОЕ ОГРАБЛЕНИЕ САЛУНА',
      subtitle: 'Полиция ведёт расследование, владелец молчит',
      date: '23 октября 1925',
      category: 'Криминал',
      image: 'https://cdn.poehali.dev/projects/cb4b7b13-739f-47b7-b656-8e116473ab1f/files/9a73409c-d997-4539-bac2-07bc3743e5c1.jpg',
      excerpt: 'Этой ночью неизвестные лица совершили дерзкое ограбление главного салуна. Полиция ведёт расследование. Владелец заведения отказывается давать показания.',
      content: 'Около полуночи трое вооружённых мужчин ворвались в салун "Красный фонарь". Похищена вся выручка за неделю. Странно, что владелец отказывается сотрудничать с полицией.',
    },
    {
      id: 3,
      title: 'ШЕРИФ ОСТАНОВИЛ ОГРАБЛЕНИЕ ПОЕЗДА',
      subtitle: 'Бандиты скрылись, объявлена награда за поимку',
      date: '20 октября 1925',
      category: 'Закон и порядок',
      image: 'https://cdn.poehali.dev/projects/cb4b7b13-739f-47b7-b656-8e116473ab1f/files/68ecaba2-4e61-434a-a1b1-ff1755ea6f08.jpg',
      excerpt: 'Шериф сообщает об успешном предотвращении ограбления товарного поезда. Несколько бандитов скрылись в горах. Объявлена награда за их поимку - 500 долларов.',
      content: 'Благодаря бдительности шерифа и его помощников удалось предотвратить крупное ограбление. Банда планировала похитить золото на сумму более 10,000 долларов.',
    },
    {
      id: 4,
      title: 'ПЕРЕСТРЕЛКА НА ГЛАВНОЙ УЛИЦЕ',
      subtitle: 'Двое ранено, нападавшие скрылись верхом',
      date: '18 октября 1925',
      category: 'Инциденты',
      image: 'https://cdn.poehali.dev/projects/cb4b7b13-739f-47b7-b656-8e116473ab1f/files/2322ea7f-61b6-4c91-901b-60cade2be720.jpg',
      excerpt: 'Вчера днём на главной улице произошла перестрелка между двумя группировками. Двое прохожих получили ранения.',
    },
    {
      id: 5,
      title: 'НОВЫЙ САЛУН ОТКРЫВАЕТСЯ',
      subtitle: 'Владелец обещает лучшее виски в округе',
      date: '15 октября 1925',
      category: 'Бизнес',
      image: 'https://cdn.poehali.dev/projects/cb4b7b13-739f-47b7-b656-8e116473ab1f/files/9a73409c-d997-4539-bac2-07bc3743e5c1.jpg',
      excerpt: 'На окраине города открывается новый салун "Золотая звезда". Владелец обещает развлечения на любой вкус.',
    },
  ];

  return (
    <section className="min-h-screen pt-[180px] md:pt-[280px] pb-8 md:pb-16 newspaper-texture">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="border-4 md:border-8 border-black aged-paper shadow-2xl mb-8 md:mb-12 transform -rotate-1">
            <div className="border-2 md:border-4 border-black m-2 bg-white p-4 md:p-6">
              <div className="text-center border-b-2 md:border-b-4 border-black pb-3 md:pb-4 mb-3 md:mb-4">
                <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] mb-2">№ 42 • Год издания VIII</div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline uppercase tracking-wider mb-2" style={{fontFamily: 'UnifrakturMaguntia, serif'}}>
                  Валентайнская Газета
                </h1>
                <div className="text-xs md:text-sm uppercase tracking-widest">
                  The Valentine Gazette
                </div>
              </div>
              <div className="grid grid-cols-3 text-center text-[10px] md:text-xs border-t-2 border-black pt-2">
                <div>26 октября 1925</div>
                <div className="border-l-2 border-r-2 border-black">Цена: 5 центов</div>
                <div className="hidden md:block">Выпуск ежедневный</div>
                <div className="md:hidden">Ежедневно</div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {news.slice(0, 1).map((item) => (
                <div key={item.id} className="border-6 border-black aged-paper shadow-2xl">
                  <div className="border-b-4 border-black p-3 bg-[#8B0000] text-white text-center">
                    <div className="flex items-center justify-center gap-2 text-sm font-headline uppercase tracking-wider">
                      <Icon name="AlertCircle" size={18} />
                      {item.category}
                      <Icon name="AlertCircle" size={18} />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-right text-xs mb-3 uppercase tracking-wide border-b border-black pb-2">
                      {item.date}
                    </div>
                    <h2 className="text-5xl font-headline font-black leading-none uppercase mb-3 border-b-4 border-black pb-3">
                      {item.title}
                    </h2>
                    <div className="text-xl font-headline italic mb-4 border-l-4 border-black pl-3">
                      {item.subtitle}
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 mb-4">
                      <div className="border-4 border-black photo-border">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full aspect-[4/3] object-cover old-photo"
                        />
                      </div>
                      <div className="space-y-3">
                        <p className="font-body text-base leading-relaxed text-justify first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-none">
                          {item.excerpt}
                        </p>
                        <p className="font-body text-sm leading-relaxed text-justify">
                          {item.content}
                        </p>
                      </div>
                    </div>
                    <div className="border-t-2 border-dashed border-black pt-3 text-xs italic text-center">
                      Продолжение на стр. 3 →
                    </div>
                  </div>
                </div>
              ))}

              <div className="border-6 border-black aged-paper shadow-xl">
                <div className="border-b-2 border-black p-3 bg-black text-white text-center">
                  <div className="text-lg font-headline uppercase tracking-wider">Городская хроника</div>
                </div>
                <div className="p-6 newspaper-column">
                  {news.slice(1, 3).map((item) => (
                    <div key={item.id} className="mb-6 break-inside-avoid">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="w-20 h-20 flex-shrink-0 border-2 border-black">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover old-photo"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="text-[10px] uppercase mb-1 flex items-center justify-between">
                            <span>{item.category}</span>
                            <span>{item.date}</span>
                          </div>
                          <h3 className="text-lg font-headline font-bold uppercase leading-tight mb-1">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      <div className="text-sm font-headline italic mb-2 border-l-2 border-black pl-2">
                        {item.subtitle}
                      </div>
                      <p className="font-body text-xs leading-relaxed text-justify">
                        {item.excerpt}
                      </p>
                      {item.content && (
                        <p className="font-body text-xs leading-relaxed text-justify mt-2">
                          {item.content}
                        </p>
                      )}
                      <div className="border-b border-dashed border-black mt-3"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-6 border-black aged-paper shadow-xl transform rotate-1">
                <div className="border-b-4 border-black p-3 bg-black text-white text-center">
                  <Icon name="Pin" size={24} className="mx-auto mb-1" />
                  <h3 className="text-base font-headline uppercase tracking-wider">
                    Доска объявлений
                  </h3>
                </div>
                <div className="p-4 space-y-3">
                  <div className="border-4 border-[#8B0000] bg-red-50 p-3">
                    <div className="font-bold uppercase mb-1 text-xs flex items-center gap-1">
                      <Icon name="AlertTriangle" size={14} />
                      Разыскивается
                    </div>
                    <div className="text-[11px] leading-tight font-body">
                      Трое вооружённых мужчин. Награда $500.
                    </div>
                  </div>
                  <div className="border-2 border-black bg-white p-3">
                    <div className="font-bold uppercase mb-1 text-xs">
                      Открытие казино
                    </div>
                    <div className="text-[11px] leading-tight font-body">
                      «Золотая Подкова». Каждую ночь с полуночи.
                    </div>
                  </div>
                  <div className="border-2 border-black bg-white p-3">
                    <div className="font-bold uppercase mb-1 text-xs">
                      Объявление шерифа
                    </div>
                    <div className="text-[11px] leading-tight font-body">
                      Комендантский час с полуночи.
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-6 border-black aged-paper shadow-xl transform -rotate-1">
                <div className="border-b-2 border-black p-3 bg-white text-center">
                  <div className="text-sm font-headline uppercase tracking-wider">Короткие новости</div>
                </div>
                <div className="p-4 space-y-4">
                  {news.slice(3).map((item) => (
                    <div key={item.id} className="border-b-2 border-dashed border-black pb-3 last:border-0">
                      <div className="text-[10px] uppercase mb-1">{item.date}</div>
                      <h4 className="text-sm font-headline font-bold uppercase leading-tight mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[11px] font-body leading-snug text-justify">
                        {item.excerpt}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-4 border-black bg-white p-4 text-center transform rotate-2">
                <div className="border-2 border-black p-3">
                  <Icon name="Info" size={20} className="mx-auto mb-2" />
                  <div className="text-[10px] font-headline uppercase tracking-widest">
                    Хотите разместить объявление?
                  </div>
                  <div className="text-[9px] font-body mt-2">
                    Обращайтесь в редакцию газеты
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t-4 border-b-4 border-black py-2 bg-white text-center">
            <div className="text-[10px] font-body uppercase tracking-widest">
              Валентайнская Газета • Основана в 1917 году • Главный редактор: Джеймс Макдональд
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;