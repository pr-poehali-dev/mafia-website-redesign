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
        return 'bg-vintage-gold text-vintage-brown';
      case 'События':
        return 'bg-vintage-red text-vintage-sepia';
      case 'Важное':
        return 'bg-vintage-sepia text-vintage-brown';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Icon name="Newspaper" className="text-vintage-gold" size={40} />
            <h2 className="text-5xl font-display font-bold text-vintage-gold">Новости</h2>
          </div>

          <div className="grid gap-6">
            {news.map((item) => (
              <Card 
                key={item.id} 
                className="overflow-hidden hover:shadow-2xl hover:shadow-vintage-gold/20 transition-all duration-300 bg-card border-vintage-gold/30 group"
              >
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="relative md:col-span-1 h-64 md:h-auto overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/50" />
                  </div>
                  
                  <div className="md:col-span-2">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <Badge className={getCategoryColor(item.category)}>
                          {item.category}
                        </Badge>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                          <Icon name="Calendar" size={16} />
                          {item.date}
                        </div>
                      </div>
                      <CardTitle className="text-3xl font-display text-vintage-gold group-hover:text-vintage-gold/80 transition-colors">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-foreground font-body text-base leading-relaxed">
                        {item.excerpt}
                      </CardDescription>
                      <div className="mt-6 flex items-center gap-2 text-vintage-gold font-body hover:gap-4 transition-all cursor-pointer">
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
