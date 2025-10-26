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
        return 'bg-black';
      case 'maintenance':
      case 'degraded':
        return 'bg-white';
      default:
        return 'bg-red-600';
    }
  };

  return (
    <section className="min-h-screen pt-[240px] pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="border-t-4 border-b-4 border-black py-3 mb-8 bg-white text-center">
            <h2 className="text-5xl font-headline uppercase tracking-wider">
              Мониторинг серверов
            </h2>
            <div className="text-xs uppercase tracking-widest mt-1">
              Состояние систем • Обновляется в реальном времени
            </div>
          </div>

          <div className="space-y-4 mb-8">
            {servers.map((server) => (
              <div 
                key={server.id}
                className="border-4 border-black bg-white p-4"
              >
                <div className="flex items-center justify-between mb-3 pb-3 border-b-2 border-black">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 border-2 border-black ${getStatusColor(server.status)}`} />
                    <div>
                      <h4 className="font-headline uppercase text-lg">{server.name}</h4>
                      <div className="text-xs font-body">
                        Версия {server.version} • Карта: {server.map}
                      </div>
                    </div>
                  </div>
                  <Badge className="bg-white text-black border-2 border-black font-headline uppercase text-xs">
                    {server.status === 'online' ? 'Работает' : 'Тех. работы'}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div className="border-2 border-black p-2 text-center">
                    <div className="font-body mb-1">Игроки</div>
                    <div className="font-headline font-bold">{server.players}</div>
                  </div>
                  <div className="border-2 border-black p-2 text-center">
                    <div className="font-body mb-1">Пинг</div>
                    <div className="font-headline font-bold">{server.ping}</div>
                  </div>
                  <div className="border-2 border-black p-2 text-center">
                    <div className="font-body mb-1">Аптайм</div>
                    <div className="font-headline font-bold">{server.uptime}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-4 border-black bg-white">
              <div className="border-b-2 border-black p-4 text-center">
                <h3 className="text-xl font-headline uppercase">
                  Состояние систем
                </h3>
              </div>
              
              <div className="p-4 space-y-2">
                {systemStatus.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between border-b border-black pb-2 last:border-0"
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 border-2 border-black ${getStatusColor(item.status)}`} />
                      <span className="font-body text-sm">{item.service}</span>
                    </div>
                    <span className="font-headline text-xs">{item.response}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-4 border-black bg-white">
              <div className="border-b-2 border-black p-4 text-center">
                <h3 className="text-xl font-headline uppercase">
                  Последние события
                </h3>
              </div>
              
              <div className="p-4 space-y-2">
                {recentEvents.map((event, index) => (
                  <div 
                    key={index}
                    className="border-b border-black pb-2 last:border-0"
                  >
                    <div className="flex items-start gap-2">
                      <span className="font-headline text-xs border border-black px-2 py-0.5">
                        {event.time}
                      </span>
                      <span className="font-body text-xs flex-1">{event.event}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 border-t-2 border-b-2 border-black py-1 bg-white text-center">
            <div className="text-xs font-body uppercase tracking-widest">
              Автоматическое обновление каждые 30 секунд • Все системы под контролем
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonitoringSection;
