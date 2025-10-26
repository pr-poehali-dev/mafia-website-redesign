import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const WikiSection = () => {
  const wikiCategories = [
    {
      id: 1,
      name: 'Основы игры',
      icon: 'BookOpen',
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
      articles: [
        'Виды транспорта',
        'Покупка автомобилей',
        'Гаражи и парковки',
        'Тюнинг машин'
      ]
    }
  ];

  const popularArticles = [
    { title: 'Гайд для новичков', views: 2456 },
    { title: 'Как заработать первый миллион', views: 1834 },
    { title: 'Лучшие тактики в войнах', views: 1523 }
  ];

  return (
    <section className="min-h-screen pt-[240px] pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="border-t-4 border-b-4 border-black py-3 mb-8 bg-white text-center">
            <h2 className="text-5xl font-headline uppercase tracking-wider">
              Энциклопедия знаний
            </h2>
            <div className="text-xs uppercase tracking-widest mt-1">
              Справочник игрока • Том I
            </div>
          </div>

          <div className="border-4 border-black bg-white mb-8 p-4">
            <div className="relative">
              <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-black" size={20} />
              <Input 
                placeholder="ПОИСК ПО ВИКИ..."
                className="pl-12 h-12 bg-white border-2 border-black text-black placeholder:text-black/50 font-headline uppercase tracking-wider"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {wikiCategories.map((category, index) => (
              <div 
                key={category.id}
                className="border-4 border-black bg-white hover:bg-black hover:text-white transition-all cursor-pointer group"
              >
                <div className="border-b-2 border-current p-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 border-2 border-current flex items-center justify-center flex-shrink-0">
                      <Icon name={category.icon as any} size={20} />
                    </div>
                    <h3 className="text-lg font-headline uppercase">
                      {category.name}
                    </h3>
                  </div>
                </div>

                <div className="p-3">
                  <div className="space-y-2">
                    {category.articles.map((article, articleIndex) => (
                      <div 
                        key={articleIndex}
                        className="flex items-center gap-2 text-xs border-b border-current pb-2 last:border-0"
                      >
                        <span className="font-headline">§{articleIndex + 1}</span>
                        <span className="flex-1 font-body">{article}</span>
                        <Icon name="ChevronRight" size={14} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-4 border-black bg-white">
            <div className="border-b-2 border-black p-4 text-center">
              <h3 className="text-2xl font-headline uppercase">
                Популярные статьи
              </h3>
            </div>
            
            <div className="p-4 space-y-2">
              {popularArticles.map((article, index) => (
                <div 
                  key={index}
                  className="border-2 border-black p-3 hover:bg-black hover:text-white transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 border-2 border-current flex items-center justify-center">
                        <span className="font-headline font-bold">{index + 1}</span>
                      </div>
                      <span className="font-headline uppercase text-sm">{article.title}</span>
                    </div>
                    <div className="text-xs font-body">
                      {article.views} просмотров
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 border-t-2 border-b-2 border-black py-1 bg-white text-center">
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
