import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

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

  const servers = [
    {
      id: 1,
      name: 'Mafia House RDR2 [MAIN]',
      status: 'online',
      players: '287/300',
      ping: '15ms',
      uptime: '99.8%',
      version: '2.0.4',
      map: 'Valentine'
    },
    {
      id: 2,
      name: 'Mafia House RDR2 [VIP]',
      status: 'online',
      players: '45/50',
      ping: '12ms',
      uptime: '99.9%',
      version: '2.0.4',
      map: 'Saint Denis'
    },
    {
      id: 3,
      name: 'Mafia House RDR2 [TEST]',
      status: 'maintenance',
      players: '0/100',
      ping: '-',
      uptime: '-',
      version: '2.1.0-beta',
      map: 'Blackwater'
    }
  ];

  const systemStatus = [
    { service: 'Игровой сервер', status: 'operational', response: '45ms' },
    { service: 'База данных', status: 'operational', response: '12ms' },
    { service: 'Discord бот', status: 'operational', response: '23ms' },
    { service: 'API сервис', status: 'degraded', response: '156ms' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
      case 'operational':
        return 'bg-green-700';
      case 'maintenance':
      case 'degraded':
        return 'bg-yellow-600';
      default:
        return 'bg-red-700';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'online':
      case 'operational':
        return 'Работает';
      case 'maintenance':
        return 'Тех. работы';
      case 'degraded':
        return 'Замедлено';
      default:
        return 'Недоступно';
    }
  };

  return (
    <section className="min-h-screen pt-[180px] md:pt-[280px] pb-8 md:pb-16 newspaper-texture torn-edge-top crumpled-paper burn-mark burn-mark-top-right ink-stain ink-stain-bottom-right">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="border-4 md:border-6 lg:border-8 border-mafia-sepia aged-paper shadow-2xl mb-6 md:mb-12 transform -rotate-1">
            <div className="border-2 md:border-3 lg:border-4 border-mafia-sepia m-2 aged-paper p-3 md:p-4 lg:p-6 text-center">
              <div className="border border-mafia-sepia md:border-2 p-2 md:p-3 lg:p-4">
                <Icon name="BarChart3" size={32} className="mx-auto mb-2 md:mb-3 text-mafia-gray md:w-10 md:h-10 lg:w-12 lg:h-12" />
                <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-headline uppercase tracking-wide md:tracking-wider mb-2 leading-tight break-words" style={{fontFamily: 'UnifrakturMaguntia, serif'}}>
                  Статистика и Мониторинг
                </h1>
                <div className="text-xs md:text-sm uppercase tracking-wider md:tracking-widest border-t border-b md:border-t-2 md:border-b-2 border-mafia-sepia py-1 md:py-2 mt-2 md:mt-3 break-words">
                  Данные сервера в реальном времени
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 lg:gap-4 mb-4 md:mb-6 lg:mb-8">
            {serverStats.map((stat, index) => (
              <div 
                key={index} 
                className="border-2 md:border-3 lg:border-4 border-mafia-sepia aged-paper shadow-xl transform hover:scale-105 transition-transform"
              >
                <div className="border-b border-mafia-sepia md:border-b-2 bg-mafia-gray text-mafia-cream p-1 md:p-2 text-center">
                  <Icon name={stat.icon as any} className="mx-auto" size={18} />
                </div>
                <div className="p-2 md:p-3 lg:p-4 text-center">
                  <div className="text-xl md:text-2xl lg:text-3xl font-headline font-bold mb-0.5 md:mb-1 break-words">
                    {stat.value}
                  </div>
                  <div className="text-[9px] md:text-[10px] font-body uppercase tracking-wider break-words leading-tight">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t-2 md:border-t-3 lg:border-t-4 border-b-2 md:border-b-3 lg:border-b-4 border-mafia-sepia py-2 md:py-3 mb-4 md:mb-6 lg:mb-8 aged-paper text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-headline uppercase tracking-wider break-words leading-tight">Состояние серверов</h2>
          </div>

          <div className="space-y-3 md:space-y-4 lg:space-y-6 mb-6 md:mb-8 lg:mb-12">
            {servers.map((server) => (
              <div 
                key={server.id}
                className="border-4 md:border-5 lg:border-6 border-mafia-sepia aged-paper shadow-xl transform hover:rotate-0 transition-transform"
                style={{transform: `rotate(${server.id % 2 === 0 ? '0.5deg' : '-0.5deg'})`}}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-2 md:p-3 lg:p-4 border-b-2 md:border-b-3 lg:border-b-4 border-mafia-sepia aged-paper gap-2 md:gap-4">
                  <div className="flex items-center gap-2 md:gap-3 lg:gap-4 min-w-0 flex-1">
                    <div className={`w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 border-2 md:border-3 lg:border-4 border-mafia-sepia ${getStatusColor(server.status)} ${server.status === 'online' ? 'animate-pulse' : ''} flex-shrink-0`} />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-headline uppercase text-sm md:text-base lg:text-xl break-words leading-tight">{server.name}</h4>
                      <div className="text-[9px] md:text-xs font-body flex flex-wrap items-center gap-1 md:gap-2 lg:gap-3 mt-0.5 md:mt-1">
                        <span className="flex items-center gap-0.5 md:gap-1">
                          <Icon name="Package" size={10} className="md:w-3 md:h-3" />
                          <span className="text-[8px] md:text-xs">{server.version}</span>
                        </span>
                        <span className="border-l border-mafia-sepia md:border-l-2 pl-1 md:pl-2 lg:pl-3 flex items-center gap-0.5 md:gap-1">
                          <Icon name="MapPin" size={10} className="md:w-3 md:h-3" />
                          <span className="text-[8px] md:text-xs">{server.map}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <Badge className="aged-paper text-mafia-gray border-2 md:border-3 lg:border-4 border-mafia-sepia font-headline uppercase text-[10px] md:text-xs lg:text-sm px-2 md:px-3 lg:px-4 py-1 md:py-1.5 lg:py-2 whitespace-nowrap flex-shrink-0">
                    {getStatusText(server.status)}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-3 gap-2 md:gap-3 lg:gap-4 p-2 md:p-3 lg:p-4">
                  <div className="border-2 md:border-3 lg:border-4 border-mafia-sepia aged-paper p-1.5 md:p-2 lg:p-3 text-center">
                    <Icon name="Users" size={16} className="mx-auto mb-0.5 md:mb-1 md:w-5 md:h-5" />
                    <div className="font-body mb-0.5 md:mb-1 text-[8px] md:text-[10px] uppercase break-words leading-tight">Игроки</div>
                    <div className="font-headline font-bold text-xs md:text-sm lg:text-base break-words">{server.players}</div>
                  </div>
                  <div className="border-2 md:border-3 lg:border-4 border-mafia-sepia aged-paper p-1.5 md:p-2 lg:p-3 text-center">
                    <Icon name="Wifi" size={16} className="mx-auto mb-0.5 md:mb-1 md:w-5 md:h-5" />
                    <div className="font-body mb-0.5 md:mb-1 text-[8px] md:text-[10px] uppercase break-words leading-tight">Пинг</div>
                    <div className="font-headline font-bold text-xs md:text-sm lg:text-base break-words">{server.ping}</div>
                  </div>
                  <div className="border-2 md:border-3 lg:border-4 border-mafia-sepia aged-paper p-1.5 md:p-2 lg:p-3 text-center">
                    <Icon name="TrendingUp" size={16} className="mx-auto mb-0.5 md:mb-1 md:w-5 md:h-5" />
                    <div className="font-body mb-0.5 md:mb-1 text-[8px] md:text-[10px] uppercase break-words leading-tight">Аптайм</div>
                    <div className="font-headline font-bold text-xs md:text-sm lg:text-base break-words">{server.uptime}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="border-6 border-mafia-sepia aged-paper shadow-xl transform rotate-1">
              <div className="border-b-4 border-mafia-sepia p-3 bg-mafia-gray text-mafia-cream text-center">
                <Icon name="Trophy" size={24} className="mx-auto mb-1" />
                <h3 className="text-xl font-headline uppercase tracking-wider">
                  Топ семей
                </h3>
              </div>
              
              <div className="p-4 space-y-3">
                {topFamilies.map((family) => (
                  <div 
                    key={family.rank} 
                    className="border-4 border-mafia-sepia aged-paper p-3"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 border-4 border-mafia-sepia bg-mafia-gray text-mafia-cream flex items-center justify-center flex-shrink-0">
                        <span className="font-headline font-bold text-lg">{family.rank}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-headline uppercase text-base">{family.name}</h4>
                        <p className="text-xs font-body">{family.members} членов • {family.territory} территорий</p>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-[10px] mb-1 font-headline uppercase">
                        <span>Влияние</span>
                        <span>{family.wealth}%</span>
                      </div>
                      <div className="border-4 border-mafia-sepia h-4 aged-paper">
                        <div 
                          className="h-full bg-mafia-gray transition-all"
                          style={{ width: `${family.wealth}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-6 border-mafia-sepia aged-paper shadow-xl transform -rotate-1">
              <div className="border-b-4 border-mafia-sepia p-3 bg-mafia-gray text-mafia-cream text-center">
                <Icon name="Star" size={24} className="mx-auto mb-1" />
                <h3 className="text-xl font-headline uppercase tracking-wider">
                  Топ игроков
                </h3>
              </div>
              
              <div className="p-4 space-y-3">
                {topPlayers.map((player) => (
                  <div 
                    key={player.rank} 
                    className="border-4 border-mafia-sepia aged-paper p-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 border-4 border-mafia-sepia bg-mafia-gray text-mafia-cream flex items-center justify-center flex-shrink-0">
                        <span className="font-headline font-bold text-lg">{player.rank}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-headline uppercase text-base">{player.name}</h4>
                        <div className="text-[10px] font-body">
                          LVL {player.level} • {player.kills} убийств • {player.hours}ч
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-6 border-mafia-sepia aged-paper shadow-xl mb-8">
            <div className="border-b-4 border-mafia-sepia p-4 bg-gradient-to-r from-amber-700 to-amber-900 text-mafia-cream text-center">
              <Icon name="Settings" size={28} className="mx-auto mb-2" />
              <h3 className="text-xl font-headline uppercase">
                Состояние систем
              </h3>
            </div>
            
            <div className="p-6 grid md:grid-cols-2 gap-4">
              {systemStatus.map((item, index) => (
                <div 
                  key={index} 
                  className="border-4 border-mafia-sepia aged-paper p-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 border-4 border-mafia-sepia ${getStatusColor(item.status)} ${item.status === 'operational' ? 'animate-pulse' : ''}`} />
                    <span className="font-body text-sm font-bold">{item.service}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-headline text-sm border-2 border-mafia-sepia px-3 py-1 bg-yellow-50">
                      {item.response}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t-4 border-b-4 border-mafia-sepia py-2 aged-paper text-center">
            <div className="text-[10px] font-body uppercase tracking-widest">
              Данные обновляются каждую минуту • Последнее обновление: сейчас
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;