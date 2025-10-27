import Icon from '@/components/ui/icon';

const WikiSection = () => {
  const wikiCategories = [
    {
      id: 1,
      name: 'Основы игры',
      icon: 'BookOpen',
      color: 'bg-[#5B7C99]',
      accentColor: 'text-[#5B7C99]',
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
      color: 'bg-[#8B4513]',
      accentColor: 'text-[#8B4513]',
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
      color: 'bg-[#B8860B]',
      accentColor: 'text-[#B8860B]',
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
      color: 'bg-[#556B2F]',
      accentColor: 'text-[#556B2F]',
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
      color: 'bg-[#6B4C7C]',
      accentColor: 'text-[#6B4C7C]',
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
      color: 'bg-[#A0522D]',
      accentColor: 'text-[#A0522D]',
      articles: [
        'Виды транспорта',
        'Покупка автомобилей',
        'Гаражи и парковки',
        'Тюнинг машин'
      ]
    }
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

          <div className="grid md:grid-cols-2 gap-8">
            {wikiCategories.map((category, index) => (
              <div 
                key={category.id}
                className="border-6 border-black aged-paper shadow-xl hover:shadow-2xl transition-all cursor-pointer group"
                style={{transform: `rotate(${index % 2 === 0 ? '0.5deg' : '-0.5deg'})`}}
              >
                <div className={`border-b-4 border-black p-5 ${category.color}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 border-4 border-amber-200 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon name={category.icon as any} size={28} className="text-black" />
                    </div>
                    <h3 className="text-2xl font-headline uppercase tracking-wide text-amber-100">
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
                        <Icon name="ChevronRight" size={20} className={`${category.accentColor} mt-1 group-hover/item:translate-x-1 transition-transform`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
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