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
    { title: 'Гайд для новичков', views: 2456, icon: 'Star' },
    { title: 'Как заработать первый миллион', views: 1834, icon: 'DollarSign' },
    { title: 'Лучшие тактики в войнах', views: 1523, icon: 'Swords' }
  ];

  return (
    <section className="min-h-screen pt-[240px] pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="border-t-8 border-b-8 border-black py-6 mb-8 aged-paper text-center shadow-xl">
            <div className="flex items-center justify-center gap-4 mb-3">
              <Icon name="BookMarked" size={48} className="text-[#8B0000]" />
              <h2 className="text-6xl font-headline uppercase tracking-wider">
                Энциклопедия
              </h2>
              <Icon name="BookMarked" size={48} className="text-[#8B0000]" />
            </div>
            <div className="text-sm uppercase tracking-widest mt-2 border-t-2 border-b-2 border-black py-2 inline-block px-8">
              📚 Справочник игрока • Том I • Издание 1925 📚
            </div>
          </div>

          <div className="border-6 border-black aged-paper mb-8 shadow-xl">
            <div className="p-5">
              <div className="relative">
                <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-black z-10" size={24} />
                <Input 
                  placeholder="ПОИСК ПО ЭНЦИКЛОПЕДИИ..."
                  className="pl-14 h-14 bg-white border-4 border-black text-black placeholder:text-black/50 font-headline uppercase tracking-wider text-base shadow-inner"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {wikiCategories.map((category) => (
              <div 
                key={category.id}
                className="border-6 border-black aged-paper shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer group"
              >
                <div className="border-b-4 border-black p-4 bg-gradient-to-r from-black to-zinc-800 text-amber-400">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 border-4 border-amber-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon name={category.icon as any} size={24} />
                    </div>
                    <h3 className="text-lg font-headline uppercase tracking-wide">
                      {category.name}
                    </h3>
                  </div>
                </div>

                <div className="p-5">
                  <div className="space-y-3">
                    {category.articles.map((article, articleIndex) => (
                      <div 
                        key={articleIndex}
                        className="flex items-center gap-3 text-sm border-b-2 border-black pb-2 last:border-0 hover:pl-2 transition-all"
                      >
                        <div className="w-6 h-6 border-2 border-black flex items-center justify-center flex-shrink-0 bg-white">
                          <span className="font-headline font-bold text-xs">{articleIndex + 1}</span>
                        </div>
                        <span className="flex-1 font-body">{article}</span>
                        <Icon name="ChevronRight" size={16} className="text-[#8B0000]" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-8 border-black aged-paper shadow-2xl">
            <div className="border-b-4 border-black p-5 bg-gradient-to-r from-[#8B0000] to-red-900 text-center">
              <h3 className="text-2xl font-headline uppercase text-white flex items-center justify-center gap-3">
                <Icon name="TrendingUp" size={28} />
                Популярные статьи недели
                <Icon name="TrendingUp" size={28} />
              </h3>
            </div>
            
            <div className="p-6 space-y-4">
              {popularArticles.map((article, index) => (
                <div 
                  key={index}
                  className="border-4 border-black bg-gradient-to-br from-[#F5E6D0] to-[#E5D3A8] p-4 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 border-4 border-black bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <span className="font-headline font-black text-xl">{index + 1}</span>
                      </div>
                      <div className="w-10 h-10 border-4 border-black bg-[#8B0000] flex items-center justify-center">
                        <Icon name={article.icon as any} size={20} className="text-white" />
                      </div>
                      <span className="font-headline uppercase text-base group-hover:text-[#8B0000] transition-colors">
                        {article.title}
                      </span>
                    </div>
                    <div className="text-sm font-body border-l-4 border-black pl-4 flex items-center gap-2">
                      <Icon name="Eye" size={16} />
                      {article.views} просмотров
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 border-t-4 border-b-4 border-black py-3 aged-paper text-center shadow-lg">
            <div className="text-xs font-body uppercase tracking-widest">
              📖 Более 500 статей • Постоянно обновляется • Создано сообществом 📖
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WikiSection;
