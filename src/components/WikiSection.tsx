import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
    <section className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Icon name="BookOpen" className="text-vintage-gold" size={40} />
            <h2 className="text-5xl font-display font-bold text-vintage-gold">Вики</h2>
          </div>

          <Card className="mb-8 bg-card border-vintage-gold/30">
            <CardContent className="pt-6">
              <div className="relative">
                <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input 
                  placeholder="Поиск по вики..."
                  className="pl-10 h-12 bg-vintage-brown/30 border-vintage-gold/30 text-foreground placeholder:text-muted-foreground font-body"
                />
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {wikiCategories.map((category) => (
              <Card 
                key={category.id}
                className="bg-card border-vintage-gold/30 hover:border-vintage-gold hover:shadow-xl hover:shadow-vintage-gold/10 transition-all cursor-pointer group"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-lg bg-vintage-gold/20 flex items-center justify-center group-hover:bg-vintage-gold/30 transition-colors">
                      <Icon name={category.icon as any} className="text-vintage-gold" size={24} />
                    </div>
                    <CardTitle className="text-2xl font-display text-vintage-gold">
                      {category.name}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.articles.map((article, index) => (
                      <li 
                        key={index}
                        className="flex items-center gap-2 text-foreground hover:text-vintage-gold transition-colors cursor-pointer font-body"
                      >
                        <Icon name="FileText" size={16} className="text-vintage-gold" />
                        <span>{article}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-vintage-gold/10 border-vintage-gold">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Icon name="TrendingUp" className="text-vintage-gold" size={32} />
                <CardTitle className="text-2xl font-display text-vintage-gold">Популярные статьи</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {popularArticles.map((article, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-vintage-brown/30 hover:bg-vintage-brown/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-vintage-gold/20 flex items-center justify-center">
                        <Icon name={article.icon as any} className="text-vintage-gold" size={20} />
                      </div>
                      <span className="text-lg font-body text-foreground">{article.title}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                      <Icon name="Eye" size={16} />
                      <span>{article.views}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WikiSection;
