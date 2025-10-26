import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ForumSection = () => {
  const categories = [
    {
      id: 1,
      name: 'Новости и объявления',
      icon: 'Megaphone',
      topics: 156,
      posts: 892,
      lastPost: {
        title: 'Обновление сервера 2.0',
        author: 'Admin',
        time: '2 часа назад'
      }
    },
    {
      id: 2,
      name: 'Истории семей',
      icon: 'BookOpen',
      topics: 43,
      posts: 287,
      lastPost: {
        title: 'История семьи Корлеоне',
        author: 'DonVito',
        time: '5 часов назад'
      }
    },
    {
      id: 3,
      name: 'Жалобы и апелляции',
      icon: 'Scale',
      topics: 234,
      posts: 1456,
      lastPost: {
        title: 'Жалоба на игрока Tommy_G',
        author: 'Michael',
        time: '1 день назад'
      }
    },
    {
      id: 4,
      name: 'Предложения',
      icon: 'Lightbulb',
      topics: 89,
      posts: 543,
      lastPost: {
        title: 'Добавить новый район',
        author: 'Sonny',
        time: '2 дня назад'
      }
    }
  ];

  const recentTopics = [
    {
      id: 1,
      title: 'Война между семьями - итоги',
      author: 'Admin',
      category: 'Новости',
      replies: 45,
      views: 892,
      time: '1 час назад',
      hot: true
    },
    {
      id: 2,
      title: 'Набор в семью Лучано',
      author: 'LuckyLuciano',
      category: 'Семьи',
      replies: 23,
      views: 456,
      time: '3 часа назад',
      hot: false
    },
    {
      id: 3,
      title: 'Правила проведения ограблений',
      author: 'Moderator',
      category: 'Правила',
      replies: 67,
      views: 1234,
      time: '5 часов назад',
      hot: true
    }
  ];

  return (
    <section className="min-h-screen pt-32 pb-16 bg-mafia-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Icon name="MessageSquare" className="text-mafia-red" size={40} />
            <h2 className="text-5xl font-display font-black text-white tracking-wider">ФОРУМ</h2>
          </div>

          <div className="grid gap-6 mb-12">
            <Card className="bg-mafia-gray border-mafia-red/30">
              <CardHeader>
                <CardTitle className="text-2xl font-display font-black text-white tracking-wider">КАТЕГОРИИ ФОРУМА</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {categories.map((category) => (
                    <div 
                      key={category.id}
                      className="flex items-center justify-between p-4 rounded-lg bg-mafia-black/50 hover:bg-mafia-red/10 transition-colors cursor-pointer border border-mafia-red/20"
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <div className="w-12 h-12 rounded-lg bg-mafia-red/20 flex items-center justify-center">
                          <Icon name={category.icon as any} className="text-mafia-red" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-display font-black text-white mb-1">{category.name}</h3>
                          <div className="flex items-center gap-4 text-sm text-mafia-cream/70 font-body">
                            <span className="flex items-center gap-1">
                              <Icon name="FileText" size={14} />
                              {category.topics} тем
                            </span>
                            <span className="flex items-center gap-1">
                              <Icon name="MessageCircle" size={14} />
                              {category.posts} сообщений
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:block text-right">
                        <div className="text-sm font-body text-mafia-cream mb-1">{category.lastPost.title}</div>
                        <div className="text-xs text-mafia-cream/70 font-body">
                          {category.lastPost.author} • {category.lastPost.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-mafia-gray border-mafia-red/30">
              <CardHeader>
                <CardTitle className="text-2xl font-display font-black text-white tracking-wider">ПОСЛЕДНИЕ ТЕМЫ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTopics.map((topic) => (
                    <div 
                      key={topic.id}
                      className="flex items-start gap-4 p-4 rounded-lg bg-mafia-black/50 hover:bg-mafia-red/10 transition-colors cursor-pointer border border-mafia-red/20"
                    >
                      <Avatar className="bg-mafia-red/20">
                        <AvatarFallback className="text-mafia-red font-display font-black">
                          {topic.author[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h3 className="text-lg font-display font-black text-white hover:text-mafia-red transition-colors">
                            {topic.title}
                            {topic.hot && (
                              <Badge className="ml-2 bg-mafia-red text-white">
                                <Icon name="Flame" size={12} className="mr-1" />
                                HOT
                              </Badge>
                            )}
                          </h3>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-mafia-cream/70 font-body">
                          <span className="text-mafia-cream">{topic.author}</span>
                          <Badge variant="outline" className="border-mafia-red/30 text-mafia-cream">
                            {topic.category}
                          </Badge>
                          <span className="flex items-center gap-1">
                            <Icon name="MessageCircle" size={14} />
                            {topic.replies}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Eye" size={14} />
                            {topic.views}
                          </span>
                          <span className="ml-auto">{topic.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForumSection;