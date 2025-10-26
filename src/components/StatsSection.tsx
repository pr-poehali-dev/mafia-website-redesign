import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
    { label: 'Всего игроков', value: '12,450', icon: 'Users', color: 'text-mafia-red' },
    { label: 'Онлайн сейчас', value: '287', icon: 'Activity', color: 'text-green-500' },
    { label: 'Активных семей', value: '24', icon: 'Shield', color: 'text-mafia-dark-red' },
    { label: 'Часов отыграно', value: '458,392', icon: 'Clock', color: 'text-mafia-cream' }
  ];

  const getRankBadge = (rank: number) => {
    if (rank === 1) return { icon: 'Trophy', color: 'text-yellow-500' };
    if (rank === 2) return { icon: 'Medal', color: 'text-gray-400' };
    if (rank === 3) return { icon: 'Award', color: 'text-orange-600' };
    return { icon: 'CircleDot', color: 'text-mafia-red' };
  };

  return (
    <section className="min-h-screen pt-32 pb-16 bg-mafia-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Icon name="BarChart3" className="text-mafia-red" size={40} />
            <h2 className="text-5xl font-display font-black text-white tracking-wider">СТАТИСТИКА</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {serverStats.map((stat, index) => (
              <Card key={index} className="bg-mafia-gray border-mafia-red/30">
                <CardContent className="pt-6 text-center">
                  <Icon name={stat.icon as any} className={`mx-auto mb-3 ${stat.color}`} size={32} />
                  <div className="text-3xl font-display font-black text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-mafia-cream/70 font-body">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-mafia-gray border-mafia-red/30">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Icon name="Shield" className="text-mafia-red" size={32} />
                  <CardTitle className="text-2xl font-display font-black text-white tracking-wider">ТОП СЕМЕЙ</CardTitle>
                </div>
                <CardDescription className="font-body text-mafia-cream">
                  Самые влиятельные мафиозные семьи
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topFamilies.map((family) => {
                    const badge = getRankBadge(family.rank);
                    return (
                      <div key={family.rank} className="p-4 rounded-lg bg-mafia-black/50 border border-mafia-red/20">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <Icon name={badge.icon as any} className={badge.color} size={24} />
                            <div>
                              <h3 className="text-lg font-display font-black text-white">{family.name}</h3>
                              <p className="text-sm text-mafia-cream/70 font-body">
                                {family.members} членов • {family.territory} территорий
                              </p>
                            </div>
                          </div>
                          <div className="text-2xl font-display font-black text-mafia-red">
                            #{family.rank}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm font-body">
                            <span className="text-mafia-cream/70">Влияние</span>
                            <span className="text-mafia-cream">{family.wealth}%</span>
                          </div>
                          <Progress value={family.wealth} className="h-2" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-mafia-gray border-mafia-red/30">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Icon name="Crown" className="text-mafia-red" size={32} />
                  <CardTitle className="text-2xl font-display font-black text-white tracking-wider">ТОП ИГРОКОВ</CardTitle>
                </div>
                <CardDescription className="font-body text-mafia-cream">
                  Лучшие игроки по уровню и достижениям
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPlayers.map((player) => {
                    const badge = getRankBadge(player.rank);
                    return (
                      <div key={player.rank} className="p-4 rounded-lg bg-mafia-black/50 border border-mafia-red/20">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <Icon name={badge.icon as any} className={badge.color} size={24} />
                            <div>
                              <h3 className="text-lg font-display font-black text-white">{player.name}</h3>
                              <p className="text-sm text-mafia-cream/70 font-body">
                                Уровень {player.level}
                              </p>
                            </div>
                          </div>
                          <div className="text-2xl font-display font-black text-mafia-red">
                            #{player.rank}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-3 text-sm font-body">
                          <div className="flex items-center gap-2">
                            <Icon name="Crosshair" size={16} className="text-mafia-red" />
                            <span className="text-mafia-cream/70">Убийств:</span>
                            <span className="text-mafia-cream font-bold">{player.kills}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Icon name="Clock" size={16} className="text-mafia-cream" />
                            <span className="text-mafia-cream/70">Часов:</span>
                            <span className="text-mafia-cream font-bold">{player.hours}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;