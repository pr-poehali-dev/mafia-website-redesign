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
    { title: 'Как заработать первый миллион', views: 1834, icon: 'TrendingUp' },
    { title: 'Лучшие тактики в войнах', views: 1523, icon: 'Target' }
  ];

  return (
    <section className="min-h-screen pt-32 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Encyclopedia Header - 1920s Dictionary/Encyclopedia Style */}
          <div className="border-8 border-black bg-white p-8 mb-12 relative">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-black"></div>
            <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-black"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-black"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-black"></div>
            
            <div className="text-center">
              <div className="text-sm font-display font-black uppercase tracking-widest mb-2">
                Энциклопедия знаний
              </div>
              <div className="border-y-4 border-black py-4">
                <h2 className="text-7xl font-headline font-black text-black uppercase tracking-tighter">
                  ВИКИ
                </h2>
              </div>
              <div className="mt-4 text-sm font-body text-black uppercase tracking-widest">
                Справочник игрока • Том I • Est. 1925
              </div>
            </div>
          </div>

          {/* Encyclopedia Illustrations */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#f8f5ec] border-2 border-black p-4">
              <img 
                src="https://cdn.poehali.dev/projects/cb4b7b13-739f-47b7-b656-8e116473ab1f/files/3438390e-31b2-4337-b212-4d3a6c7a242b.jpg"
                alt="Town documentation"
                className="w-full old-photo border-2 border-black mb-3"
              />
              <p className="text-center text-black font-body text-sm italic">
                Fig. 8 — Historical documentation of main settlement, 1925
              </p>
            </div>
            <div className="bg-[#f8f5ec] border-2 border-black p-4">
              <img 
                src="https://cdn.poehali.dev/projects/cb4b7b13-739f-47b7-b656-8e116473ab1f/files/2322ea7f-61b6-4c91-901b-60cade2be720.jpg"
                alt="Transportation study"
                className="w-full old-photo border-2 border-black mb-3"
              />
              <p className="text-center text-black font-body text-sm italic">
                Fig. 9 — Study of transportation methods and routes, 1925
              </p>
            </div>
          </div>

          {/* Search Box - Vintage Card Catalog Style */}
          <div className="bg-white border-8 border-black mb-8 p-6">
            <div className="border-4 border-black p-4">
              <div className="relative">
                <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-black" size={24} />
                <Input 
                  placeholder="ПОИСК ПО ВИКИ..."
                  className="pl-14 h-16 bg-white border-4 border-black text-black placeholder:text-black/50 font-display font-black text-lg uppercase tracking-wider focus:outline-none focus:ring-0 focus:border-black"
                />
              </div>
            </div>
          </div>

          {/* Categories Grid - Encyclopedia Sections */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {wikiCategories.map((category, index) => (
              <div 
                key={category.id}
                className="bg-white border-4 border-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer group"
              >
                {/* Header */}
                <div className="border-b-4 border-black p-5 bg-white group-hover:bg-black group-hover:text-white transition-colors">
                  <div className="flex items-center gap-4">
                    {/* Chapter number */}
                    <div className="w-16 h-16 border-4 border-black bg-white group-hover:bg-white group-hover:border-white flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-headline font-black text-black">{index + 1}</span>
                    </div>
                    
                    <div className="flex items-center gap-3 flex-1">
                      <Icon name={category.icon as any} className="group-hover:text-white" size={28} />
                      <h3 className="text-2xl font-display font-black uppercase tracking-wider">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Articles List - Table of Contents Style */}
                <div className="p-5">
                  <div className="space-y-3">
                    {category.articles.map((article, articleIndex) => (
                      <div 
                        key={articleIndex}
                        className="flex items-start gap-3 pb-3 border-b-2 border-black last:border-0 hover:pl-2 transition-all"
                      >
                        {/* Article number */}
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className="font-display font-black text-black">§{articleIndex + 1}</span>
                          <div className="w-1 h-1 bg-black"></div>
                        </div>
                        
                        <span className="text-black font-body text-base flex-1">{article}</span>
                        
                        {/* Arrow indicator */}
                        <Icon name="ChevronRight" size={16} className="text-black flex-shrink-0 mt-1" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Popular Articles - Best Sellers Section */}
          <div className="bg-white border-8 border-black">
            <div className="border-b-4 border-black bg-white p-6">
              <div className="flex items-center justify-center gap-4">
                <Icon name="TrendingUp" className="text-black" size={40} />
                <h3 className="text-3xl font-headline font-black text-black uppercase tracking-tighter">
                  Популярные статьи
                </h3>
                <Icon name="TrendingUp" className="text-black" size={40} />
              </div>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {popularArticles.map((article, index) => (
                  <div 
                    key={index}
                    className="bg-white border-4 border-black p-5 hover:bg-black hover:text-white transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4 flex-1">
                        {/* Rank badge */}
                        <div className="w-12 h-12 border-4 border-black bg-white group-hover:bg-white group-hover:border-white flex items-center justify-center flex-shrink-0">
                          <span className="text-xl font-headline font-black text-black">{index + 1}</span>
                        </div>
                        
                        {/* Icon */}
                        <div className="w-10 h-10 border-2 border-black bg-white group-hover:bg-white group-hover:border-white flex items-center justify-center">
                          <Icon name={article.icon as any} className="text-black" size={20} />
                        </div>
                        
                        {/* Title */}
                        <span className="text-xl font-body text-black group-hover:text-white flex-1">
                          {article.title}
                        </span>
                      </div>
                      
                      {/* Views counter */}
                      <div className="flex items-center gap-2 border-l-2 border-black group-hover:border-white pl-4">
                        <Icon name="Eye" size={20} />
                        <span className="font-display font-black text-lg">{article.views}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer - Encyclopedia edition info */}
          <div className="mt-8 border-t-4 border-black pt-6">
            <div className="text-center">
              <p className="font-body text-black text-sm uppercase tracking-widest mb-2">
                Официальная энциклопедия • Mafia House Publishing
              </p>
              <p className="font-body text-black text-xs uppercase tracking-widest">
                Первое издание • Том I • Напечатано в 1925 году
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WikiSection;