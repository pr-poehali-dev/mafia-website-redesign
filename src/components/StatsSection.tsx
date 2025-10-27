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

  return (
    <section className="min-h-screen pt-[280px] pb-16 newspaper-texture">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="border-t-4 border-b-4 border-black py-3 mb-8 bg-white text-center">
            <h2 className="text-5xl font-headline uppercase tracking-wider">
              Статистика сервера
            </h2>
            <div className="text-xs uppercase tracking-widest mt-1">
              Актуально на сегодня • Официальные данные
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {serverStats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white border-4 border-black p-4 text-center"
              >
                <Icon name={stat.icon as any} className="mx-auto text-black mb-2" size={32} />
                <div className="text-3xl font-headline font-bold text-black mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] text-black font-body uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-4 border-black bg-white">
              <div className="border-b-2 border-black p-4 text-center">
                <h3 className="text-2xl font-headline uppercase">
                  Топ семей
                </h3>
              </div>
              
              <div className="p-4 space-y-3">
                {topFamilies.map((family) => (
                  <div 
                    key={family.rank} 
                    className="border-2 border-black p-3"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 border-2 border-black flex items-center justify-center">
                          <span className="font-headline font-bold">{family.rank}</span>
                        </div>
                        <div>
                          <h4 className="font-headline uppercase text-sm">{family.name}</h4>
                          <p className="text-xs font-body">{family.members} чел. • {family.territory} зон</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-[10px] mb-1">
                        <span>Влияние</span>
                        <span>{family.wealth}%</span>
                      </div>
                      <div className="border-2 border-black h-3 bg-white">
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

            <div className="border-4 border-black bg-white">
              <div className="border-b-2 border-black p-4 text-center">
                <h3 className="text-2xl font-headline uppercase">
                  Топ игроков
                </h3>
              </div>
              
              <div className="p-4 space-y-3">
                {topPlayers.map((player) => (
                  <div 
                    key={player.rank} 
                    className="border-2 border-black p-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 border-2 border-black flex items-center justify-center">
                          <span className="font-headline font-bold">{player.rank}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-headline uppercase text-sm">{player.name}</h4>
                          <div className="text-[10px] font-body">
                            Уровень {player.level} • {player.kills} убийств • {player.hours}ч
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 border-t-2 border-b-2 border-black py-1 bg-white text-center">
            <div className="text-xs font-body uppercase tracking-widest">
              Данные обновляются каждый час • Последнее обновление: сегодня, 12:00
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;