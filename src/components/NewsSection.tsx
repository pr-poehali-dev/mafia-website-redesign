import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: 'Обновление: Новая семья Корлеоне',
      date: '25 октября 2025',
      category: 'Обновление',
      image: 'https://cdn.poehali.dev/projects/cb4b7b13-739f-47b7-b656-8e116473ab1f/files/f99e6a28-bfdc-4272-a15f-c007d6a0a870.jpg',
      excerpt: 'На сервер прибыла новая мафиозная семья. Присоединяйтесь к Корлеоне и докажите свою преданность делу.',
    },
    {
      id: 2,
      title: 'События: Налёт на казино',
      date: '23 октября 2025',
      category: 'События',
      image: 'https://cdn.poehali.dev/projects/cb4b7b13-739f-47b7-b656-8e116473ab1f/files/abef5df8-9fd2-48cc-a5dd-d218c4b21f4a.jpg',
      excerpt: 'Этой ночью все семьи сойдутся в схватке за контроль над главным казино города. Готовьтесь к войне.',
    },
    {
      id: 3,
      title: 'Правила: Изменения в кодексе',
      date: '20 октября 2025',
      category: 'Важное',
      image: 'https://cdn.poehali.dev/projects/cb4b7b13-739f-47b7-b656-8e116473ab1f/files/4cb326ca-867f-4db3-9a2e-6b74b64ae20b.jpg',
      excerpt: 'Обновлены правила взаимодействия между семьями. Ознакомьтесь с новыми положениями кодекса чести.',
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Обновление':
        return 'bg-mafia-red text-white';
      case 'События':
        return 'bg-mafia-cream text-black';
      case 'Важное':
        return 'bg-white text-black';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section className="min-h-screen pt-32 pb-16 bg-mafia-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Icon name="Newspaper" className="text-mafia-red" size={40} />
            <h2 className="text-5xl font-display font-black text-white tracking-wider">НОВОСТИ</h2>
          </div>

          <div className="grid gap-6">
            {news.map((item) => (
              <Card 
                key={item.id} 
                className="overflow-hidden hover:shadow-2xl hover:shadow-mafia-red/30 transition-all duration-300 bg-mafia-gray border-mafia-red/20 hover:border-mafia-red group"
              >
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="relative md:col-span-1 h-64 md:h-auto overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-mafia-gray/80" />
                  </div>
                  
                  <div className="md:col-span-2">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <Badge className={`${getCategoryColor(item.category)} font-bold tracking-wide`}>
                          {item.category}
                        </Badge>
                        <div className="flex items-center gap-2 text-sm text-mafia-cream/50 font-medium">
                          <Icon name="Calendar" size={16} />
                          {item.date}
                        </div>
                      </div>
                      <CardTitle className="text-3xl font-display font-bold text-white group-hover:text-mafia-red transition-colors">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-mafia-cream/80 text-base leading-relaxed">
                        {item.excerpt}
                      </CardDescription>
                      <div className="mt-6 flex items-center gap-2 text-mafia-red font-medium hover:gap-4 transition-all cursor-pointer">
                        <span>Читать полностью</span>
                        <Icon name="ArrowRight" size={20} />
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;