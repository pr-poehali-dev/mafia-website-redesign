import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const MonitoringSection = () => {
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
    { service: 'Форум', status: 'operational', response: '89ms' },
    { service: 'Система доната', status: 'operational', response: '34ms' },
    { service: 'Discord бот', status: 'operational', response: '23ms' },
    { service: 'API сервис', status: 'degraded', response: '156ms' }
  ];

  const recentEvents = [
    { time: '14:32', event: 'Сервер #1 перезапущен', type: 'info' },
    { time: '13:15', event: 'Обновление до версии 2.0.4', type: 'success' },
    { time: '12:08', event: 'Пик онлайна: 298 игроков', type: 'info' },
    { time: '11:45', event: 'Кратковременная задержка API', type: 'warning' },
    { time: '10:20', event: 'Профилактика сервера #3', type: 'maintenance' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
      case 'operational':
        return 'bg-green-600';
      case 'maintenance':
      case 'degraded':
        return 'bg-yellow-500';
      default:
        return 'bg-red-600';
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
    <section className="min-h-screen pt-[280px] pb-16 newspaper-texture">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="border-t-8 border-b-8 border-black py-6 mb-8 aged-paper text-center shadow-xl">
            <div className="flex items-center justify-center gap-4 mb-3">
              <Icon name="Activity" size={48} className="text-[#8B0000]" />
              <h2 className="text-6xl font-headline uppercase tracking-wider">
                Мониторинг
              </h2>
              <Icon name="Activity" size={48} className="text-[#8B0000]" />
            </div>
            <div className="text-sm uppercase tracking-widest mt-2 border-t-2 border-b-2 border-black py-2 inline-block px-8">
              🔧 Состояние систем • Обновляется в реальном времени 🔧
            </div>
          </div>

          <div className="space-y-6 mb-8">
            {servers.map((server) => (
              <div 
                key={server.id}
                className="border-6 border-black aged-paper shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="flex items-center justify-between p-5 border-b-4 border-black bg-gradient-to-r from-[#F5E6D0] to-[#E5D3A8]">
                  <div className="flex items-center gap-4">
                    <div className={`w-6 h-6 border-4 border-black ${getStatusColor(server.status)} shadow-lg animate-pulse`} />
                    <div>
                      <h4 className="font-headline uppercase text-xl">{server.name}</h4>
                      <div className="text-xs font-body flex items-center gap-3 mt-1">
                        <span className="flex items-center gap-1">
                          <Icon name="Package" size={12} />
                          Версия {server.version}
                        </span>
                        <span className="border-l-2 border-black pl-3 flex items-center gap-1">
                          <Icon name="MapPin" size={12} />
                          {server.map}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Badge className="bg-white text-black border-4 border-black font-headline uppercase text-sm px-4 py-2">
                    {getStatusText(server.status)}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-3 gap-4 p-5">
                  <div className="border-4 border-black aged-paper p-4 text-center shadow-lg">
                    <Icon name="Users" size={24} className="mx-auto mb-2 text-[#8B0000]" />
                    <div className="font-body mb-1 text-xs uppercase">Игроки</div>
                    <div className="font-headline font-bold text-xl">{server.players}</div>
                  </div>
                  <div className="border-4 border-black aged-paper p-4 text-center shadow-lg">
                    <Icon name="Wifi" size={24} className="mx-auto mb-2 text-[#8B0000]" />
                    <div className="font-body mb-1 text-xs uppercase">Пинг</div>
                    <div className="font-headline font-bold text-xl">{server.ping}</div>
                  </div>
                  <div className="border-4 border-black aged-paper p-4 text-center shadow-lg">
                    <Icon name="TrendingUp" size={24} className="mx-auto mb-2 text-[#8B0000]" />
                    <div className="font-body mb-1 text-xs uppercase">Аптайм</div>
                    <div className="font-headline font-bold text-xl">{server.uptime}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-6 border-black aged-paper shadow-xl">
              <div className="border-b-4 border-black p-5 bg-gradient-to-r from-black to-zinc-800 text-amber-400 text-center">
                <Icon name="Settings" size={28} className="mx-auto mb-2" />
                <h3 className="text-xl font-headline uppercase">
                  Состояние систем
                </h3>
              </div>
              
              <div className="p-5 space-y-3">
                {systemStatus.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between border-b-2 border-black pb-3 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 border-2 border-black ${getStatusColor(item.status)}`} />
                      <span className="font-body text-sm">{item.service}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-headline text-sm border-2 border-black px-3 py-1 bg-white">
                        {item.response}
                      </span>
                      <Badge className="bg-white text-black border-2 border-black font-headline text-xs px-2">
                        {getStatusText(item.status)}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-6 border-black aged-paper shadow-xl">
              <div className="border-b-4 border-black p-5 bg-gradient-to-r from-[#8B0000] to-red-900 text-white text-center">
                <Icon name="Clock" size={28} className="mx-auto mb-2" />
                <h3 className="text-xl font-headline uppercase">
                  Последние события
                </h3>
              </div>
              
              <div className="p-5 space-y-3">
                {recentEvents.map((event, index) => (
                  <div 
                    key={index}
                    className="border-b-2 border-black pb-3 last:border-0"
                  >
                    <div className="flex items-start gap-3">
                      <span className="font-headline text-sm border-2 border-black px-3 py-1 bg-white flex-shrink-0">
                        {event.time}
                      </span>
                      <span className="font-body text-sm flex-1">{event.event}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 border-t-4 border-b-4 border-black py-3 aged-paper text-center shadow-lg">
            <div className="text-xs font-body uppercase tracking-widest">
              🔄 Автоматическое обновление каждые 30 секунд • Все системы под контролем 🔄
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonitoringSection;