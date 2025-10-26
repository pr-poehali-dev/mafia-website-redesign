import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: 'Новая семья прибыла в город',
      date: '25 октября 1925',
      category: 'Обновление',
      image: 'https://cdn.poehali.dev/projects/cb4b7b13-739f-47b7-b656-8e116473ab1f/files/71367b75-9a1f-4377-9e92-18c2f59e9b57.jpg',
      excerpt: 'На улицах города замечена новая мафиозная группировка. Семья Корлеоне устанавливает свои порядки в восточном районе.',
    },
    {
      id: 2,
      title: 'Дерзкое ограбление казино',
      date: '23 октября 1925',
      category: 'События',
      image: 'https://cdn.poehali.dev/projects/cb4b7b13-739f-47b7-b656-8e116473ab1f/files/edcfe6a1-80df-41e5-8f75-69701ac29e56.jpg',
      excerpt: 'Этой ночью неизвестные лица совершили дерзкое ограбление главного казино. Полиция ведёт расследование.',
    },
    {
      id: 3,
      title: 'Изменения в законодательстве',
      date: '20 октября 1925',
      category: 'Важное',
      image: 'https://cdn.poehali.dev/projects/cb4b7b13-739f-47b7-b656-8e116473ab1f/files/e229e0f9-49bb-4ef8-b64b-3fc1fa214e6d.jpg',
      excerpt: 'Городской совет принял новые правила для борьбы с контрабандой алкоголя. Штрафы увеличены в три раза.',
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Важное':
        return 'bg-red-600 text-white border-2 border-black';
      default:
        return 'bg-white text-black border-2 border-black';
    }
  };

  return (
    <section className="min-h-screen pt-32 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Art Deco Header with decorative borders */}
          <div className="border-8 border-black p-8 mb-12 bg-white relative">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-black"></div>
            <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-black"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-black"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-black"></div>
            
            <div className="text-center">
              <div className="border-y-4 border-black py-4">
                <h2 className="text-7xl font-headline font-black text-black uppercase tracking-tighter">
                  НОВОСТИ
                </h2>
              </div>
              <div className="mt-4 text-sm font-body text-black uppercase tracking-widest">
                Extra! Extra! Читайте все о событиях
              </div>
            </div>
          </div>

          {/* Newspaper columns layout */}
          <div className="space-y-8">
            {news.map((item, index) => (
              <div 
                key={item.id} 
                className="bg-white border-8 border-black p-0 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all group relative"
              >
                {/* Top decorative line */}
                <div className="h-2 bg-black border-b-4 border-white"></div>
                
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Image column with grayscale */}
                  <div className="relative md:col-span-1 h-64 md:h-auto overflow-hidden border-r-4 border-black">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover grayscale"
                    />
                    {/* Newspaper style overlay text */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black text-white p-2 font-body text-xs uppercase tracking-wider">
                      Фото дня
                    </div>
                  </div>
                  
                  <div className="md:col-span-2 p-6">
                    {/* Category and Date - newspaper style */}
                    <div className="flex items-center justify-between mb-4 pb-4 border-b-4 border-black">
                      <Badge className={`${getCategoryColor(item.category)} font-display font-black tracking-wider text-sm px-4 py-2 uppercase`}>
                        {item.category}
                      </Badge>
                      <div className="flex items-center gap-2 text-sm text-black font-body uppercase tracking-wider font-bold">
                        <Icon name="Calendar" size={16} />
                        {item.date}
                      </div>
                    </div>

                    {/* Headline - classic newspaper style */}
                    <h3 className="text-4xl font-display font-black text-black uppercase leading-none mb-4 tracking-tight">
                      {item.title}
                    </h3>

                    {/* Decorative line */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-1 w-12 bg-black"></div>
                      <div className="h-1 w-6 bg-black"></div>
                      <div className="h-1 w-3 bg-black"></div>
                    </div>

                    {/* Body text - old newspaper serif */}
                    <p className="text-black font-body text-lg leading-relaxed mb-6">
                      {item.excerpt}
                    </p>

                    {/* Read more - vintage style */}
                    <div className="flex items-center gap-2 cursor-pointer group-hover:gap-4 transition-all">
                      <span className="text-black font-display font-black uppercase tracking-wider text-sm border-b-4 border-black pb-1">
                        Читать полностью
                      </span>
                      <Icon name="ArrowRight" size={20} className="text-black" />
                    </div>
                  </div>
                </div>

                {/* Bottom decorative line */}
                <div className="h-2 bg-black border-t-4 border-white"></div>

                {/* Edition number - vintage newspaper style */}
                <div className="absolute top-4 right-4 bg-white border-4 border-black px-3 py-1">
                  <span className="font-display font-black text-black text-sm">№{index + 1}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Vintage newspaper footer */}
          <div className="mt-12 border-4 border-black p-6 bg-white text-center">
            <div className="border-y-2 border-black py-2">
              <p className="font-body text-black uppercase tracking-widest text-sm">
                Все права защищены • Mafia House Gazette • Est. 1925
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;