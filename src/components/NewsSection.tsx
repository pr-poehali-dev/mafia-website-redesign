import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: 'NEW FAMILY ARRIVES IN TOWN',
      subtitle: 'Corleone Organization Establishes Eastern District Control',
      date: 'October 25, 1925',
      category: 'Breaking',
      image: 'https://cdn.poehali.dev/projects/cb4b7b13-739f-47b7-b656-8e116473ab1f/files/2322ea7f-61b6-4c91-901b-60cade2be720.jpg',
      excerpt: 'На улицах города замечена новая мафиозная группировка. Семья Корлеоне устанавливает свои порядки в восточном районе. Свидетели сообщают о вооружённых всадниках и подпольных операциях.',
    },
    {
      id: 2,
      title: 'SALOON ROBBERY SHOCKS DISTRICT',
      subtitle: 'Police Investigation Underway, Owner Silent',
      date: 'October 23, 1925',
      category: 'Crime',
      image: 'https://cdn.poehali.dev/projects/cb4b7b13-739f-47b7-b656-8e116473ab1f/files/9a73409c-d997-4539-bac2-07bc3743e5c1.jpg',
      excerpt: 'Этой ночью неизвестные лица совершили дерзкое ограбление главного салуна. Полиция ведёт расследование. Владелец заведения отказывается давать показания.',
    },
    {
      id: 3,
      title: 'TRAIN HEIST THWARTED BY SHERIFF',
      subtitle: 'Bandits Escape, Reward Offered for Capture',
      date: 'October 20, 1925',
      category: 'Law & Order',
      image: 'https://cdn.poehali.dev/projects/cb4b7b13-739f-47b7-b656-8e116473ab1f/files/68ecaba2-4e61-434a-a1b1-ff1755ea6f08.jpg',
      excerpt: 'Шериф сообщает об успешном предотвращении ограбления товарного поезда. Несколько бандитов скрылись. Объявлена награда за их поимку.',
    },
  ];

  return (
    <section className="min-h-screen pt-[240px] pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="border-t-4 border-b-4 border-black py-2 mb-8 bg-white text-center">
            <h2 className="text-4xl font-headline uppercase tracking-wider">
              Latest News From The Streets
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {news.map((item, index) => (
                <div key={item.id} className="border-4 border-black bg-white">
                  {index === 0 ? (
                    <div>
                      <div className="border-b-2 border-black p-3 bg-black text-white">
                        <div className="text-xs font-headline uppercase tracking-wider">
                          {item.category} • {item.date}
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 p-4">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full aspect-[4/3] object-cover old-photo border-2 border-black"
                        />
                        <div className="flex flex-col justify-between">
                          <div>
                            <h3 className="text-3xl font-headline font-bold leading-tight uppercase mb-2">
                              {item.title}
                            </h3>
                            <div className="text-sm font-headline mb-3 border-b border-black pb-2">
                              {item.subtitle}
                            </div>
                            <div className="font-body text-sm leading-relaxed text-justify">
                              {item.excerpt}
                            </div>
                          </div>
                          <div className="text-xs uppercase tracking-wider mt-4 border-t border-black pt-2">
                            Continued on page 2 →
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="grid md:grid-cols-5 gap-0">
                      <div className="md:col-span-2 border-r-2 border-black">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover old-photo"
                        />
                      </div>
                      <div className="md:col-span-3 p-4">
                        <div className="text-[10px] uppercase tracking-wider mb-2">
                          {item.category} • {item.date}
                        </div>
                        <h3 className="text-xl font-headline font-bold leading-tight uppercase mb-1">
                          {item.title}
                        </h3>
                        <div className="text-xs font-headline mb-2 border-b border-black pb-2">
                          {item.subtitle}
                        </div>
                        <div className="font-body text-xs leading-relaxed text-justify">
                          {item.excerpt}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="border-4 border-black bg-white p-4">
                <div className="border-b-2 border-black pb-2 mb-3 text-center">
                  <h3 className="text-sm font-headline uppercase tracking-wider">
                    Notice Board
                  </h3>
                </div>
                <div className="space-y-3 text-xs font-body">
                  <div className="border-2 border-black p-2">
                    <div className="font-bold uppercase mb-1">Wanted</div>
                    <div className="text-[10px] leading-tight">
                      Three armed men, suspected train robbers. $500 reward.
                    </div>
                  </div>
                  <div className="border-2 border-black p-2">
                    <div className="font-bold uppercase mb-1">Casino Opening</div>
                    <div className="text-[10px] leading-tight">
                      The Golden Horseshoe welcomes distinguished guests.
                    </div>
                  </div>
                  <div className="border-2 border-black p-2">
                    <div className="font-bold uppercase mb-1">Sheriff Notice</div>
                    <div className="text-[10px] leading-tight">
                      Curfew enforced from midnight. Stay indoors.
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-4 border-black bg-black text-white p-4">
                <div className="text-center">
                  <div className="text-xs uppercase tracking-wider mb-2">Advertisement</div>
                  <div className="border-2 border-white p-3">
                    <div className="text-2xl font-headline mb-2">TOMMY'S</div>
                    <div className="text-xs mb-2">Finest Whiskey</div>
                    <div className="text-[10px] italic">
                      "Quality you can trust"
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-4 border-black bg-white p-4">
                <div className="border-b-2 border-black pb-2 mb-3 text-center">
                  <h3 className="text-sm font-headline uppercase tracking-wider">
                    Server Statistics
                  </h3>
                </div>
                <div className="space-y-2 text-xs font-body">
                  <div className="flex justify-between border-b border-black pb-1">
                    <span>Players Online</span>
                    <span className="font-headline">250+</span>
                  </div>
                  <div className="flex justify-between border-b border-black pb-1">
                    <span>Active Families</span>
                    <span className="font-headline">12</span>
                  </div>
                  <div className="flex justify-between border-b border-black pb-1">
                    <span>Territories</span>
                    <span className="font-headline">8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t-2 border-b-2 border-black py-1 bg-white text-center">
            <div className="text-xs font-body uppercase tracking-widest">
              The Mafia Times • Volume I • Est. 1920 • Price: 5¢
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
