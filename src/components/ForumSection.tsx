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
          <div className="border-t-8 border-b-8 border-black py-6 mb-8 aged-paper text-center shadow-xl">
            <div className="flex items-center justify-center gap-4 mb-3">
              <Icon name="MessagesSquare" size={48} className="text-[#8B0000]" />
              <h2 className="text-6xl font-headline uppercase tracking-wider">
                Форум
              </h2>
              <Icon name="MessagesSquare" size={48} className="text-[#8B0000]" />
            </div>
            <div className="text-sm uppercase tracking-widest mt-2 border-t-2 border-b-2 border-black py-2 inline-block px-8">
              📰 Место встречи всех семей • Последние обсуждения 📰
            </div>
          </div>

          <div className="grid gap-6 mb-8">
            {categories.map((category) => (
              <div 
                key={category.id}
                className="border-6 border-black aged-paper shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer group"
              >
                <div className="p-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-16 h-16 border-4 border-black bg-gradient-to-br from-black to-zinc-800 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <Icon name={category.icon as any} size={28} className="text-amber-400" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-xl font-headline uppercase mb-2 tracking-wide">{category.name}</h4>
                      <div className="flex items-center gap-6 text-sm font-body">
                        <span className="flex items-center gap-1">
                          <Icon name="FileText" size={14} />
                          {category.topics} тем
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="MessageSquare" size={14} />
                          {category.posts} сообщений
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="hidden lg:block text-right border-l-4 border-black pl-6 max-w-xs">
                    <div className="text-sm font-headline mb-1 uppercase">{category.lastPost.title}</div>
                    <div className="text-xs font-body border-t-2 border-black pt-1 mt-1">
                      {category.lastPost.author} • {category.lastPost.time}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-8 border-black aged-paper shadow-2xl">
            <div className="border-b-4 border-black bg-gradient-to-r from-black to-zinc-800 p-5 text-center">
              <h3 className="text-2xl font-headline uppercase text-amber-400 flex items-center justify-center gap-3">
                <Icon name="Flame" size={28} />
                Горячие темы
                <Icon name="Flame" size={28} />
              </h3>
            </div>
            
            <div className="p-6 space-y-4">
              {recentTopics.map((topic) => (
                <div 
                  key={topic.id}
                  className="border-4 border-black bg-gradient-to-br from-[#F5E6D0] to-[#E5D3A8] p-4 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group"
                >
                  <div className="flex items-start gap-4">
                    <Avatar className="w-12 h-12 border-4 border-black flex-shrink-0 shadow-lg">
                      <AvatarFallback className="font-headline font-bold text-lg bg-white text-black">
                        {topic.author[0]}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-2 mb-2">
                        <h4 className="text-lg font-headline uppercase flex-1 group-hover:text-[#8B0000] transition-colors">
                          {topic.title}
                        </h4>
                        {topic.hot && (
                          <Badge className="bg-gradient-to-r from-red-600 to-red-800 text-white border-2 border-black text-xs px-3 py-1 shadow-lg">
                            🔥 HOT
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-xs font-body border-t-2 border-black pt-2">
                        <span className="font-bold">{topic.author}</span>
                        <span className="border-l-2 border-black pl-2">{topic.category}</span>
                        <span className="border-l-2 border-black pl-2 flex items-center gap-1">
                          <Icon name="MessageCircle" size={12} />
                          {topic.replies}
                        </span>
                        <span className="border-l-2 border-black pl-2 flex items-center gap-1">
                          <Icon name="Eye" size={12} />
                          {topic.views}
                        </span>
                        <span className="border-l-2 border-black pl-2">{topic.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 border-t-4 border-b-4 border-black py-3 aged-paper text-center shadow-lg">
            <div className="text-xs font-body uppercase tracking-widest">
              💬 Присоединяйтесь к обсуждениям • Делитесь историями • Находите союзников 💬
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForumSection;
