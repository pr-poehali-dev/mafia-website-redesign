import Icon from '@/components/ui/icon';

const WikiSection = () => {
  const wikiCategories = [
    {
      id: 1,
      name: 'Основы игры',
      icon: 'BookOpen',
      color: 'bg-blue-700',
      articles: [
        'Создание персонажа',
        'Первые шаги в игре',
        'Система прокачки',
        'Интерфейс и управление'
      ]
    },
    {
      id: 2,
      name: 'Мафиозные семьи',
      icon: 'Users',
      color: 'bg-red-700',
      articles: [
        'Структура семьи',
        'Как вступить в семью',
        'Ранги и иерархия',
        'История известных семей'
      ]
    },
    {
      id: 3,
      name: 'Экономика',
      icon: 'Coins',
      color: 'bg-amber-600',
      articles: [
        'Виды заработка',
        'Контрабанда алкоголя',
        'Казино и азартные игры',
        'Рэкет и вымогательство'
      ]
    },
    {
      id: 4,
      name: 'Территории',
      icon: 'Map',
      color: 'bg-green-700',
      articles: [
        'Карта города',
        'Районы и влияние',
        'Контрольные точки',
        'Нейтральные зоны'
      ]
    },
    {
      id: 5,
      name: 'PvP и войны',
      icon: 'Swords',
      color: 'bg-purple-700',
      articles: [
        'Правила PvP',
        'Объявление войны',
        'Тактика перестрелок',
        'Оружие и боеприпасы'
      ]
    },
    {
      id: 6,
      name: 'Транспорт',
      icon: 'Car',
      color: 'bg-orange-700',
      articles: [
        'Виды транспорта',
        'Покупка автомобилей',
        'Гаражи и парковки',
        'Тюнинг машин'
      ]
    }
  ];

  const popularArticles = [
    { title: 'Гайд для новичков', views: 2456, icon: 'Star' },
    { title: 'Как заработать первый миллион', views: 1834, icon: 'DollarSign' },
    { title: 'Лучшие тактики в войнах', views: 1523, icon: 'Swords' }
  ];

  return (
    <section className="min-h-screen pt-[280px] pb-16 newspaper-texture">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="border-8 border-black aged-paper shadow-2xl mb-12 transform -rotate-1">
            <div className="border-4 border-black m-2 bg-white p-6 text-center">
              <div className="border-2 border-black p-4">
                <Icon name="BookMarked" size={48} className="mx-auto mb-3 text-black" />
                <h1 className="text-7xl font-headline uppercase tracking-wider mb-2" style={{fontFamily: 'UnifrakturMaguntia, serif'}}>
                  Энциклопедия Мафии
                </h1>
                <div className="text-sm uppercase tracking-widest border-t-2 border-b-2 border-black py-2 mt-3">
                  Справочник игрока • Том I • Издание 1925
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {wikiCategories.map((category, index) => (
              <div 
                key={category.id}
                className="border-6 border-black aged-paper shadow-xl hover:shadow-2xl transition-all cursor-pointer group"
                style={{transform: `rotate(${index % 2 === 0 ? '0.5deg' : '-0.5deg'})`}}
              >
                <div className={`border-b-4 border-black p-5 ${category.color}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 border-4 border-white bg-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon name={category.icon as any} size={28} className="text-black" />
                    </div>
                    <h3 className="text-2xl font-headline uppercase tracking-wide text-white">
                      {category.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 bg-white border-4 border-black m-2">
                  <div className="space-y-3">
                    {category.articles.map((article, articleIndex) => (
                      <div 
                        key={articleIndex}
                        className="flex items-start gap-3 text-sm border-b-2 border-black pb-3 last:border-0 hover:pl-2 transition-all group/item"
                      >
                        <div className="w-8 h-8 border-2 border-black flex items-center justify-center flex-shrink-0 bg-white mt-0.5">
                          <span className="font-headline font-bold text-sm">{articleIndex + 1}</span>
                        </div>
                        <div className="flex-1">
                          <span className="font-body text-base block group-hover/item:underline">{article}</span>
                        </div>
                        <Icon name="ChevronRight" size={20} className={`${category.color.replace('bg-', 'text-')} mt-1 group-hover/item:translate-x-1 transition-transform`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-8 border-black aged-paper shadow-2xl transform rotate-1">
            <div className="border-4 border-black m-2">
              <div className="border-b-4 border-black p-6 bg-gradient-to-r from-red-700 to-red-800 text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Icon name="TrendingUp" size={32} className="text-white" />
                  <h3 className="text-4xl font-headline uppercase text-white">
                    Популярные статьи
                  </h3>
                  <Icon name="TrendingUp" size={32} className="text-white" />
                </div>
                <div className="text-xs uppercase tracking-widest border-t-2 border-b-2 border-white py-1 inline-block px-6 mt-2 text-white">
                  Самое читаемое за неделю
                </div>
              </div>
              
              <div className="p-6 space-y-4 bg-white">
                {popularArticles.map((article, index) => (
                  <div 
                    key={index}
                    className="border-4 border-black bg-white p-5 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 border-4 border-black bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <span className="font-headline font-black text-2xl text-black">{index + 1}</span>
                        </div>
                        <div className="w-12 h-12 border-4 border-black bg-gradient-to-br from-red-700 to-red-800 flex items-center justify-center">
                          <Icon name={article.icon as any} size={24} className="text-white" />
                        </div>
                        <span className="font-headline uppercase text-lg group-hover:underline">
                          {article.title}
                        </span>
                      </div>
                      <div className="text-sm font-body border-l-4 border-black pl-4 flex items-center gap-2">
                        <Icon name="Eye" size={18} />
                        <span className="font-bold">{article.views}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 border-t-4 border-b-4 border-black py-3 aged-paper text-center shadow-lg">
            <div className="text-xs font-body uppercase tracking-widest">
              Более 500 статей • Постоянно обновляется • Создано сообществом
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WikiSection;