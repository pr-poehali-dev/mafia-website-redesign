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
    <section className="min-h-screen pt-[240px] pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="border-t-4 border-b-4 border-black py-3 mb-8 bg-white text-center">
            <h2 className="text-5xl font-headline uppercase tracking-wider">
              Форум сообщества
            </h2>
            <div className="text-xs uppercase tracking-widest mt-1">
              Место встречи всех семей
            </div>
          </div>

          <div className="grid gap-4 mb-8">
            {categories.map((category) => (
              <div 
                key={category.id}
                className="border-4 border-black bg-white hover:bg-black hover:text-white transition-all cursor-pointer group"
              >
                <div className="p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-12 h-12 border-2 border-current flex items-center justify-center flex-shrink-0">
                      <Icon name={category.icon as any} size={20} />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-lg font-headline uppercase mb-1">{category.name}</h4>
                      <div className="flex items-center gap-4 text-xs font-body">
                        <span>{category.topics} тем</span>
                        <span>{category.posts} сообщений</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="hidden md:block text-right border-l-2 border-current pl-4">
                    <div className="text-xs font-body mb-1">{category.lastPost.title}</div>
                    <div className="text-[10px] uppercase tracking-wider opacity-70">
                      {category.lastPost.author} • {category.lastPost.time}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-4 border-black bg-white">
            <div className="border-b-2 border-black bg-white p-4 text-center">
              <h3 className="text-2xl font-headline uppercase">
                Последние темы
              </h3>
            </div>
            
            <div className="p-4 space-y-3">
              {recentTopics.map((topic) => (
                <div 
                  key={topic.id}
                  className="border-2 border-black p-3 hover:bg-black hover:text-white transition-all cursor-pointer group"
                >
                  <div className="flex items-start gap-3">
                    <Avatar className="w-10 h-10 border-2 border-current flex-shrink-0">
                      <AvatarFallback className="font-headline font-bold bg-white text-black group-hover:bg-black group-hover:text-white">
                        {topic.author[0]}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-2 mb-1">
                        <h4 className="text-base font-headline uppercase flex-1">
                          {topic.title}
                        </h4>
                        {topic.hot && (
                          <Badge className="bg-red-600 text-white border-2 border-current text-[10px] px-2 py-0">
                            HOT
                          </Badge>
                        )}
                      </div>
                      <div className="text-xs font-body opacity-70">
                        {topic.author} в {topic.category} • {topic.replies} ответов • {topic.views} просмотров • {topic.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 border-t-2 border-b-2 border-black py-1 bg-white text-center">
            <div className="text-xs font-body uppercase tracking-widest">
              Присоединяйтесь к обсуждениям • Делитесь историями • Находите союзников
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForumSection;
