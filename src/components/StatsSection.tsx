import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const StatsSection = () => {
  const topFamilies = [
    { rank: 1, name: 'Корлеоне', members: 45, territory: 8, wealth: 95 },
    { rank: 2, name: 'Лучано', members: 38, territory: 7, wealth: 88 },
    { rank: 3, name: 'Дженовезе', members: 32, territory: 6, wealth: 82 },
    { rank: 4, name: 'Гамбино', members: 28, territory: 5, wealth: 76 },
    { rank: 5, name: 'Бонанно', members: 25, territory: 4, wealth: 70 }
  ];

  const topPlayers = [
    { rank: 1, name: 'DonVito', level: 85, kills: 342, hours: 1250 },
    { rank: 2, name: 'LuckyLuciano', level: 82, kills: 318, hours: 1180 },
    { rank: 3, name: 'Michael_C', level: 79, kills: 295, hours: 1095 },
    { rank: 4, name: 'Sonny_B', level: 76, kills: 276, hours: 1020 },
    { rank: 5, name: 'Fredo_C', level: 73, kills: 254, hours: 965 }
  ];

  const serverStats = [
    { label: 'Всего игроков', value: '12,450', icon: 'Users' },
    { label: 'Онлайн сейчас', value: '287', icon: 'Activity' },
    { label: 'Активных семей', value: '24', icon: 'Shield' },
    { label: 'Часов отыграно', value: '458,392', icon: 'Clock' }
  ];

  const getRankIcon = (rank: number) => {
    if (rank === 1) return '★';
    if (rank === 2) return '☆';
    if (rank === 3) return '◆';
    return '●';
  };

  return (
    <section className="min-h-screen pt-32 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Statistical Tables Header - 1920s Newspaper Style */}
          <div className="border-8 border-black bg-white p-8 mb-12 relative">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-black"></div>
            <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-black"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-black"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-black"></div>
            
            <div className="text-center">
              <div className="text-sm font-display font-black uppercase tracking-widest mb-2">
                Официальные данные и рейтинги
              </div>
              <div className="border-y-4 border-black py-4">
                <h2 className="text-7xl font-headline font-black text-black uppercase tracking-tighter">
                  СТАТИСТИКА
                </h2>
              </div>
              <div className="mt-4 text-sm font-body text-black uppercase tracking-widest">
                Актуально на сегодня • Издание от 26 октября 1925
              </div>
            </div>
          </div>

          {/* Server Stats - Statistical Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {serverStats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white border-4 border-black p-6 text-center hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <div className="border-b-4 border-black pb-3 mb-3">
                  <Icon name={stat.icon as any} className="mx-auto text-black" size={40} />
                </div>
                <div className="text-4xl font-headline font-black text-black mb-2">
                  {stat.value}
                </div>
                <div className="text-xs text-black font-body uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tables Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Top Families Table - Statistical Table Style */}
            <div className="bg-white border-8 border-black">
              {/* Table Header */}
              <div className="border-b-4 border-black bg-white p-6">
                <div className="flex items-center justify-center gap-3">
                  <Icon name="Shield" className="text-black" size={36} />
                  <h3 className="text-3xl font-headline font-black text-black uppercase tracking-tighter">
                    Топ семей
                  </h3>
                </div>
                <p className="text-center font-body text-black text-sm uppercase tracking-wider mt-2">
                  Самые влиятельные организации
                </p>
              </div>
              
              {/* Table Content */}
              <div className="p-4">
                <div className="space-y-3">
                  {topFamilies.map((family) => (
                    <div 
                      key={family.rank} 
                      className="bg-white border-4 border-black p-4"
                    >
                      {/* Header row */}
                      <div className="flex items-center justify-between mb-3 pb-3 border-b-2 border-black">
                        <div className="flex items-center gap-3">
                          {/* Rank badge */}
                          <div className="w-12 h-12 border-4 border-black bg-white flex items-center justify-center">
                            <span className="text-2xl font-headline font-black text-black">
                              {getRankIcon(family.rank)}
                            </span>
                          </div>
                          <div>
                            <h4 className="text-xl font-display font-black text-black uppercase">
                              {family.name}
                            </h4>
                            <p className="text-sm text-black font-body">
                              {family.members} чел. • {family.territory} зон
                            </p>
                          </div>
                        </div>
                        
                        {/* Rank number */}
                        <div className="text-3xl font-headline font-black text-black border-4 border-black px-4 py-1">
                          №{family.rank}
                        </div>
                      </div>
                      
                      {/* Progress bar - old style */}
                      <div>
                        <div className="flex items-center justify-between text-xs font-body font-black mb-2 uppercase tracking-wider">
                          <span className="text-black">Влияние</span>
                          <span className="text-black">{family.wealth}%</span>
                        </div>
                        <div className="border-4 border-black h-4 bg-white">
                          <div 
                            className="h-full bg-black"
                            style={{ width: `${family.wealth}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Top Players Table */}
            <div className="bg-white border-8 border-black">
              {/* Table Header */}
              <div className="border-b-4 border-black bg-white p-6">
                <div className="flex items-center justify-center gap-3">
                  <Icon name="Crown" className="text-black" size={36} />
                  <h3 className="text-3xl font-headline font-black text-black uppercase tracking-tighter">
                    Топ игроков
                  </h3>
                </div>
                <p className="text-center font-body text-black text-sm uppercase tracking-wider mt-2">
                  Лучшие по уровню и достижениям
                </p>
              </div>
              
              {/* Table Content */}
              <div className="p-4">
                <div className="space-y-3">
                  {topPlayers.map((player) => (
                    <div 
                      key={player.rank} 
                      className="bg-white border-4 border-black p-4"
                    >
                      {/* Header row */}
                      <div className="flex items-center justify-between mb-3 pb-3 border-b-2 border-black">
                        <div className="flex items-center gap-3">
                          {/* Rank badge */}
                          <div className="w-12 h-12 border-4 border-black bg-white flex items-center justify-center">
                            <span className="text-2xl font-headline font-black text-black">
                              {getRankIcon(player.rank)}
                            </span>
                          </div>
                          <div>
                            <h4 className="text-xl font-display font-black text-black uppercase">
                              {player.name}
                            </h4>
                            <p className="text-sm text-black font-body">
                              Уровень {player.level}
                            </p>
                          </div>
                        </div>
                        
                        {/* Rank number */}
                        <div className="text-3xl font-headline font-black text-black border-4 border-black px-4 py-1">
                          №{player.rank}
                        </div>
                      </div>
                      
                      {/* Stats grid */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="border-2 border-black p-2 text-center">
                          <div className="flex items-center justify-center gap-2 mb-1">
                            <Icon name="Crosshair" size={14} className="text-black" />
                            <span className="text-xs text-black font-body uppercase tracking-wider">Убийств</span>
                          </div>
                          <div className="font-display font-black text-xl text-black">{player.kills}</div>
                        </div>
                        
                        <div className="border-2 border-black p-2 text-center">
                          <div className="flex items-center justify-center gap-2 mb-1">
                            <Icon name="Clock" size={14} className="text-black" />
                            <span className="text-xs text-black font-body uppercase tracking-wider">Часов</span>
                          </div>
                          <div className="font-display font-black text-xl text-black">{player.hours}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer - Statistical Bureau */}
          <div className="mt-8 border-4 border-black p-6 text-center bg-white">
            <div className="border-y-2 border-black py-3">
              <p className="font-body text-black text-sm uppercase tracking-widest">
                Статистическое бюро • Mafia House Statistics Office • Est. 1925
              </p>
              <p className="font-body text-black text-xs uppercase tracking-widest mt-2">
                Все данные проверены и заверены администрацией
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
