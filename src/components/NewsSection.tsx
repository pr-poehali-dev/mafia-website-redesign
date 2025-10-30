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
    <section className="min-h-screen pt-[180px] md:pt-[280px] pb-8 md:pb-16 newspaper-texture overflow-x-hidden w-full">
      <div className="w-full px-3 md:px-4 max-w-7xl mx-auto">
        <div className="w-full">
          <div className="border-3 md:border-6 lg:border-8 border-mafia-sepia aged-paper shadow-2xl mb-6 md:mb-12 mx-auto torn-edge-top crumpled-paper burn-mark burn-mark-top-right ink-stain ink-stain-bottom-right" style={{maxWidth: 'calc(100vw - 24px)'}}>
            <div className="border-2 md:border-4 border-mafia-sepia m-1 md:m-2 aged-paper p-2 md:p-4 lg:p-6">
              <div className="text-center border-b-2 md:border-b-4 border-mafia-sepia pb-2 md:pb-4 mb-2 md:mb-4 text-mafia-gray">
                <div className="text-[8px] md:text-[10px] uppercase tracking-wider md:tracking-[0.3em] mb-1 md:mb-2">№ 42 • Год VIII</div>
                <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-headline uppercase tracking-tight md:tracking-wide lg:tracking-wider mb-1 md:mb-2 leading-tight" style={{fontFamily: 'UnifrakturMaguntia, serif'}}>
                  Валентайнская Газета
                </h1>
                <div className="text-[9px] md:text-xs uppercase tracking-wide md:tracking-widest">
                  The Valentine Gazette
                </div>
              </div>
              <div className="grid grid-cols-3 text-center text-[8px] md:text-[10px] border-t-2 border-mafia-sepia pt-1 md:pt-2 text-mafia-gray-light">
                <div className="px-1">26.10.1925</div>
                <div className="border-l-2 border-r-2 border-mafia-sepia px-1">5¢</div>
                <div className="px-1">Ежедневно</div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8 w-full">
            <div className="lg:col-span-2 space-y-3 md:space-y-6 lg:space-y-8 w-full">
              {news.slice(0, 1).map((item) => (
                <div key={item.id} className="border-3 md:border-4 lg:border-6 border-mafia-sepia aged-paper shadow-2xl w-full torn-edge-bottom crumpled-paper burn-mark burn-mark-bottom-left ink-stain ink-stain-top-left" style={{maxWidth: 'calc(100vw - 24px)'}}>
                  <div className="border-b-2 md:border-b-4 border-mafia-sepia p-2 md:p-3 bg-mafia-red text-mafia-cream text-center">
                    <div className="flex items-center justify-center gap-1 md:gap-2 text-[10px] md:text-xs lg:text-sm font-headline uppercase tracking-wide">
                      <Icon name="AlertCircle" size={14} className="md:w-4 md:h-4" />
                      <span className="truncate">{item.category}</span>
                      <Icon name="AlertCircle" size={14} className="md:w-4 md:h-4" />
                    </div>
                  </div>
                  <div className="p-3 md:p-4 lg:p-6 text-mafia-gray">
                    <div className="text-right text-[9px] md:text-[10px] mb-2 uppercase tracking-wide border-b border-mafia-sepia pb-1 md:pb-2 text-mafia-gray-light">
                      {item.date}
                    </div>
                    <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-headline font-black leading-tight uppercase mb-2 md:mb-3 border-b-2 md:border-b-4 border-mafia-sepia pb-2 md:pb-3 break-words text-mafia-gray">
                      {item.title}
                    </h2>
                    <div className="text-xs md:text-sm lg:text-base xl:text-lg font-headline italic mb-3 md:mb-4 border-l-2 md:border-l-4 border-mafia-sepia pl-2 md:pl-3 leading-tight text-mafia-gray-light">
                      {item.subtitle}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 mb-3 md:mb-4">
                      <div className="border-2 md:border-4 border-mafia-sepia">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full aspect-[4/3] object-cover old-photo"
                        />
                      </div>
                      <div className="space-y-2 md:space-y-3">
                        <p className="font-body text-[11px] md:text-xs lg:text-sm leading-relaxed text-justify first-letter:text-2xl md:first-letter:text-4xl first-letter:font-bold first-letter:float-left first-letter:mr-1 md:first-letter:mr-2 first-letter:leading-none">
                          {item.excerpt}
                        </p>
                        <p className="font-body text-[10px] md:text-xs lg:text-sm leading-relaxed text-justify">
                          {item.content}
                        </p>
                      </div>
                    </div>
                    <div className="border-t-2 border-dashed border-mafia-sepia pt-2 md:pt-3 text-[10px] md:text-xs italic text-center text-mafia-gray-light">
                      Продолжение на стр. 3 →
                    </div>
                  </div>
                </div>
              ))}

              <div className="border-3 md:border-4 lg:border-6 border-mafia-sepia aged-paper shadow-xl w-full torn-edge-top crumpled-paper burn-mark burn-mark-top-right ink-stain ink-stain-bottom-right" style={{maxWidth: 'calc(100vw - 24px)'}}>
                <div className="border-b-2 border-mafia-sepia p-2 md:p-3 bg-mafia-gray text-mafia-cream text-center">
                  <div className="text-xs md:text-sm lg:text-base font-headline uppercase tracking-wide">Городская хроника</div>
                </div>
                <div className="p-3 md:p-4 lg:p-6 text-mafia-gray">
                  {news.slice(1, 3).map((item) => (
                    <div key={item.id} className="mb-3 md:mb-6 last:mb-0 break-inside-avoid">
                      <div className="flex items-start gap-2 md:gap-3 mb-2">
                        <div className="w-14 h-14 md:w-20 md:h-20 flex-shrink-0 border-2 border-mafia-sepia">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover old-photo"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[8px] md:text-[10px] uppercase mb-1 flex items-center justify-between gap-1">
                            <span className="truncate flex-1">{item.category}</span>
                            <span className="whitespace-nowrap text-[7px] md:text-[9px]">{item.date}</span>
                          </div>
                          <h3 className="text-xs md:text-sm lg:text-base font-headline font-bold uppercase leading-tight mb-1 break-words">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      <div className="text-[10px] md:text-xs font-headline italic mb-2 border-l-2 border-black pl-2 leading-tight">
                        {item.subtitle}
                      </div>
                      <p className="font-body text-[9px] md:text-[10px] lg:text-xs leading-relaxed text-justify">
                        {item.excerpt}
                      </p>
                      {item.content && (
                        <p className="font-body text-[9px] md:text-[10px] lg:text-xs leading-relaxed text-justify mt-2">
                          {item.content}
                        </p>
                      )}
                      <div className="border-b border-dashed border-mafia-sepia mt-2 md:mt-3"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3 md:space-y-6 w-full">
              <div className="border-3 md:border-4 lg:border-6 border-mafia-sepia aged-paper shadow-xl w-full" style={{maxWidth: 'calc(100vw - 24px)'}}>
                <div className="border-b-2 md:border-b-4 border-mafia-sepia p-2 md:p-3 bg-mafia-gray text-mafia-cream text-center">
                  <Icon name="Pin" size={18} className="mx-auto mb-1 md:w-6 md:h-6" />
                  <h3 className="text-xs md:text-sm lg:text-base font-headline uppercase tracking-wide">
                    Доска объявлений
                  </h3>
                </div>
                <div className="p-3 md:p-4 space-y-2 md:space-y-3">
                  <div className="border-3 border-[#8B0000] aged-paper p-2 md:p-3">
                    <div className="font-bold uppercase mb-1 text-[10px] md:text-xs flex items-center gap-1 text-mafia-gray">
                      <Icon name="AlertTriangle" size={12} className="md:w-4 md:h-4 text-mafia-red" />
                      Разыскивается
                    </div>
                    <div className="text-[9px] md:text-[11px] leading-tight font-body text-mafia-gray">
                      Трое вооружённых мужчин. Награда $500.
                    </div>
                  </div>
                  <div className="border-2 border-mafia-sepia aged-paper p-2 md:p-3">
                    <div className="font-bold uppercase mb-1 text-[10px] md:text-xs text-mafia-gray">
                      Открытие казино
                    </div>
                    <div className="text-[9px] md:text-[11px] leading-tight font-body text-mafia-gray">
                      «Золотая Подкова». Каждую ночь с полуночи.
                    </div>
                  </div>
                  <div className="border-2 border-mafia-sepia aged-paper p-2 md:p-3">
                    <div className="font-bold uppercase mb-1 text-[10px] md:text-xs text-mafia-gray">
                      Объявление шерифа
                    </div>
                    <div className="text-[9px] md:text-[11px] leading-tight font-body text-mafia-gray">
                      Комендантский час с полуночи.
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-3 md:border-4 lg:border-6 border-mafia-sepia aged-paper shadow-xl w-full" style={{maxWidth: 'calc(100vw - 24px)'}}>
                <div className="border-b-2 border-mafia-sepia p-2 md:p-3 aged-paper text-center">
                  <div className="text-xs md:text-sm font-headline uppercase tracking-wide text-mafia-gray">Короткие новости</div>
                </div>
                <div className="p-3 md:p-4 space-y-3 md:space-y-4">
                  {news.slice(3).map((item) => (
                    <div key={item.id} className="border-b-2 border-dashed border-mafia-sepia pb-2 md:pb-3 last:border-0">
                      <div className="text-[8px] md:text-[10px] uppercase mb-1 text-mafia-gray-light">{item.date}</div>
                      <h4 className="text-[11px] md:text-xs lg:text-sm font-headline font-bold uppercase leading-tight mb-1 break-words text-mafia-gray">
                        {item.title}
                      </h4>
                      <p className="text-[9px] md:text-[10px] lg:text-[11px] font-body leading-snug text-justify text-mafia-gray">
                        {item.excerpt}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-3 border-mafia-sepia aged-paper p-3 md:p-4 text-center w-full" style={{maxWidth: 'calc(100vw - 24px)'}}>
                <div className="border-2 border-mafia-sepia p-2 md:p-3">
                  <Icon name="Info" size={16} className="mx-auto mb-1 md:mb-2 md:w-5 md:h-5 text-mafia-gray" />
                  <div className="text-[9px] md:text-[10px] font-headline uppercase tracking-wide text-mafia-gray">
                    Хотите разместить объявление?
                  </div>
                  <div className="text-[8px] md:text-[9px] font-body mt-1 md:mt-2 text-mafia-gray-light">
                    Обращайтесь в редакцию газеты
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-8 border-t-2 md:border-t-4 border-b-2 md:border-b-4 border-black py-2 bg-white text-center w-full" style={{maxWidth: 'calc(100vw - 24px)'}}>
            <div className="text-[8px] md:text-[10px] font-body uppercase tracking-wide md:tracking-widest px-2">
              Валентайнская Газета • Основана в 1917 году • Главный редактор: Джеймс Макдональд
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;