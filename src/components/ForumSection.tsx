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
    <section className="min-h-screen pt-32 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Classified Ads Section Header - 1920s Newspaper Style */}
          <div className="border-8 border-black bg-white p-8 mb-12 relative">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-black"></div>
            <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-black"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-black"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-black"></div>
            
            <div className="text-center">
              <div className="text-sm font-display font-black uppercase tracking-widest mb-2">
                Раздел объявлений и обсуждений
              </div>
              <div className="border-y-4 border-black py-4">
                <h2 className="text-7xl font-headline font-black text-black uppercase tracking-tighter">
                  ФОРУМ
                </h2>
              </div>
              <div className="mt-4 text-sm font-body text-black uppercase tracking-widest">
                Место встречи всех семей
              </div>
            </div>
          </div>

          {/* Categories - Classified Ads Style */}
          <div className="bg-white border-8 border-black mb-8">
            <div className="border-b-4 border-black bg-white p-6">
              <h3 className="text-3xl font-headline font-black text-black uppercase tracking-tighter text-center">
                Категории форума
              </h3>
            </div>
            
            <div className="p-6">
              <div className="grid gap-4">
                {categories.map((category) => (
                  <div 
                    key={category.id}
                    className="bg-white border-4 border-black p-4 hover:bg-black hover:text-white transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4 flex-1">
                        {/* Number box */}
                        <div className="w-14 h-14 border-4 border-black bg-white group-hover:bg-white group-hover:border-white flex items-center justify-center flex-shrink-0">
                          <Icon name={category.icon as any} className="text-black" size={24} />
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="text-xl font-display font-black uppercase mb-2">{category.name}</h4>
                          <div className="flex items-center gap-6 text-sm font-body">
                            <span className="flex items-center gap-2">
                              <Icon name="FileText" size={14} />
                              {category.topics} тем
                            </span>
                            <span className="flex items-center gap-2">
                              <Icon name="MessageCircle" size={14} />
                              {category.posts} сообщений
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="hidden md:block text-right border-l-2 border-black group-hover:border-white pl-4">
                        <div className="text-sm font-body font-bold mb-1">{category.lastPost.title}</div>
                        <div className="text-xs font-body uppercase tracking-wider">
                          {category.lastPost.author} • {category.lastPost.time}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Topics - Newspaper Headlines Style */}
          <div className="bg-white border-8 border-black">
            <div className="border-b-4 border-black bg-white p-6">
              <h3 className="text-3xl font-headline font-black text-black uppercase tracking-tighter text-center">
                Последние темы
              </h3>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {recentTopics.map((topic) => (
                  <div 
                    key={topic.id}
                    className="bg-white border-4 border-black p-5 hover:bg-black hover:text-white transition-all cursor-pointer group"
                  >
                    <div className="flex items-start gap-4">
                      {/* Avatar - circular badge style */}
                      <Avatar className="w-14 h-14 border-4 border-black bg-white group-hover:border-white flex-shrink-0">
                        <AvatarFallback className="text-black font-headline font-black text-xl bg-white">
                          {topic.author[0]}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        {/* Title with hot badge */}
                        <div className="flex items-start gap-3 mb-3">
                          <h4 className="text-2xl font-display font-black uppercase leading-tight flex-1">
                            {topic.title}
                          </h4>
                          {topic.hot && (
                            <Badge className="bg-red-600 text-white border-2 border-black font-display font-black uppercase px-3 py-1">
                              <Icon name="Flame" size={12} className="mr-1" />
                              HOT
                            </Badge>
                          )}
                        </div>

                        {/* Decorative separator */}
                        <div className="flex items-center gap-2 mb-3">
                          <div className="h-1 w-12 bg-black group-hover:bg-white"></div>
                          <div className="h-1 w-6 bg-black group-hover:bg-white"></div>
                        </div>

                        {/* Meta information */}
                        <div className="flex items-center gap-4 text-sm font-body flex-wrap">
                          <span className="font-black uppercase tracking-wider">{topic.author}</span>
                          <span className="w-1 h-1 bg-black group-hover:bg-white"></span>
                          <Badge className="bg-white text-black border-2 border-black group-hover:bg-black group-hover:text-white group-hover:border-white font-display uppercase text-xs">
                            {topic.category}
                          </Badge>
                          <span className="w-1 h-1 bg-black group-hover:bg-white"></span>
                          <span className="flex items-center gap-1">
                            <Icon name="MessageCircle" size={14} />
                            {topic.replies}
                          </span>
                          <span className="w-1 h-1 bg-black group-hover:bg-white"></span>
                          <span className="flex items-center gap-1">
                            <Icon name="Eye" size={14} />
                            {topic.views}
                          </span>
                          <span className="w-1 h-1 bg-black group-hover:bg-white"></span>
                          <span className="ml-auto uppercase tracking-wider">{topic.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer - vintage style */}
          <div className="mt-8 text-center border-t-4 border-black pt-6">
            <p className="font-body text-black text-sm uppercase tracking-widest">
              Общественный форум • Mafia House Gazette • Est. 1925
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForumSection;
