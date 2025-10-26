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

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'online':
      case 'operational':
        return <Badge className="bg-white text-black border-2 border-black font-display font-black uppercase">Работает</Badge>;
      case 'maintenance':
      case 'degraded':
        return <Badge className="bg-white text-black border-2 border-black font-display font-black uppercase">Тех. работы</Badge>;
      case 'offline':
        return <Badge className="bg-red-600 text-white border-2 border-black font-display font-black uppercase">Оффлайн</Badge>;
      default:
        return <Badge className="bg-white text-black border-2 border-black font-display font-black uppercase">Неизвестно</Badge>;
    }
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'success':
        return { icon: 'CheckCircle2', symbol: '✓' };
      case 'warning':
        return { icon: 'AlertTriangle', symbol: '⚠' };
      case 'maintenance':
        return { icon: 'Settings', symbol: '⚙' };
      default:
        return { icon: 'Info', symbol: 'ℹ' };
    }
  };

  return (
    <section className="min-h-screen pt-32 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Telegraph/News Wire Header - 1920s Style */}
          <div className="border-8 border-black bg-white p-8 mb-12 relative">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-black"></div>
            <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-black"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-black"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-black"></div>
            
            <div className="text-center">
              <div className="text-sm font-display font-black uppercase tracking-widest mb-2">
                Телеграфная служба мониторинга
              </div>
              <div className="border-y-4 border-black py-4">
                <h2 className="text-7xl font-headline font-black text-black uppercase tracking-tighter">
                  МОНИТОРИНГ
                </h2>
              </div>
              <div className="mt-4 text-sm font-body text-black uppercase tracking-widest">
                Состояние серверов • Актуально сейчас
              </div>
            </div>
          </div>

          {/* Telegraph News Photos */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#f8f5ec] border-2 border-black p-4">
              <img 
                src="https://cdn.poehali.dev/projects/cb4b7b13-739f-47b7-b656-8e116473ab1f/files/2322ea7f-61b6-4c91-901b-60cade2be720.jpg"
                alt="Server operations"
                className="w-full old-photo border-2 border-black mb-3"
              />
              <p className="text-center text-black font-body text-sm italic">
                Fig. 13 — Daily operations and server maintenance, 1925
              </p>
            </div>
            <div className="bg-[#f8f5ec] border-2 border-black p-4">
              <img 
                src="https://cdn.poehali.dev/projects/cb4b7b13-739f-47b7-b656-8e116473ab1f/files/b25aa8e1-c16f-459e-aa83-6ae8f06a762d.jpg"
                alt="Night watch"
                className="w-full old-photo border-2 border-black mb-3"
              />
              <p className="text-center text-black font-body text-sm italic">
                Fig. 14 — 24-hour monitoring and surveillance team, 1925
              </p>
            </div>
            <div className="bg-[#f8f5ec] border-2 border-black p-4">
              <img 
                src="https://cdn.poehali.dev/projects/cb4b7b13-739f-47b7-b656-8e116473ab1f/files/68ecaba2-4e61-434a-a1b1-ff1755ea6f08.jpg"
                alt="Emergency response"
                className="w-full old-photo border-2 border-black mb-3"
              />
              <p className="text-center text-black font-body text-sm italic">
                Fig. 15 — Rapid response team in action, 1925
              </p>
            </div>
          </div>

          {/* Server Status - Telegraph Report Style */}
          <div className="bg-white border-8 border-black mb-8">
            <div className="border-b-4 border-black bg-white p-6">
              <div className="flex items-center justify-center gap-3">
                <Icon name="Server" className="text-black" size={40} />
                <h3 className="text-3xl font-headline font-black text-black uppercase tracking-tighter">
                  Игровые серверы
                </h3>
              </div>
              <p className="text-center font-body text-black text-sm uppercase tracking-wider mt-2">
                Текущее состояние всех серверов
              </p>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {servers.map((server) => (
                  <div 
                    key={server.id}
                    className="bg-white border-4 border-black p-6"
                  >
                    {/* Server header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b-4 border-black">
                      <div className="flex items-center gap-4">
                        {/* Status indicator - telegraph style */}
                        <div className="flex flex-col items-center gap-1">
                          <div className={`w-6 h-6 border-4 border-black ${
                            server.status === 'online' ? 'bg-black' : 
                            server.status === 'maintenance' ? 'bg-white' : 'bg-white'
                          }`} />
                          <div className="text-xs font-display font-black uppercase">
                            {server.status === 'online' ? 'ON' : 'OFF'}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-2xl font-display font-black text-black uppercase mb-1">
                            {server.name}
                          </h4>
                          <div className="text-sm font-body text-black uppercase tracking-wider">
                            Версия {server.version} • Карта: {server.map}
                          </div>
                        </div>
                      </div>
                      
                      {getStatusBadge(server.status)}
                    </div>
                    
                    {/* Server stats grid - telegraph table */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <div className="border-2 border-black p-3 text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <Icon name="Users" size={16} className="text-black" />
                          <span className="text-xs font-body uppercase tracking-wider">Игроки</span>
                        </div>
                        <div className="font-display font-black text-xl text-black">{server.players}</div>
                      </div>
                      
                      <div className="border-2 border-black p-3 text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <Icon name="Wifi" size={16} className="text-black" />
                          <span className="text-xs font-body uppercase tracking-wider">Пинг</span>
                        </div>
                        <div className="font-display font-black text-xl text-black">{server.ping}</div>
                      </div>
                      
                      <div className="border-2 border-black p-3 text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <Icon name="Clock" size={16} className="text-black" />
                          <span className="text-xs font-body uppercase tracking-wider">Аптайм</span>
                        </div>
                        <div className="font-display font-black text-xl text-black">{server.uptime}</div>
                      </div>
                      
                      <div className="border-2 border-black p-3 text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <Icon name="Map" size={16} className="text-black" />
                          <span className="text-xs font-body uppercase tracking-wider">Локация</span>
                        </div>
                        <div className="font-display font-black text-base text-black">{server.map}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Two column layout */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* System Services - Service List */}
            <div className="bg-white border-8 border-black">
              <div className="border-b-4 border-black bg-white p-6">
                <div className="flex items-center justify-center gap-3">
                  <Icon name="Cpu" className="text-black" size={36} />
                  <h3 className="text-2xl font-headline font-black text-black uppercase tracking-tighter">
                    Сервисы
                  </h3>
                </div>
              </div>
              
              <div className="p-4">
                <div className="space-y-3">
                  {systemStatus.map((item, index) => (
                    <div 
                      key={index}
                      className="bg-white border-2 border-black p-4"
                    >
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <span className="font-body text-black font-bold">{item.service}</span>
                        {getStatusBadge(item.status)}
                      </div>
                      <div className="flex items-center gap-2 text-sm font-body text-black">
                        <Icon name="Zap" size={14} />
                        <span className="uppercase tracking-wider">Отклик: {item.response}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Events - Telegraph Reports */}
            <div className="bg-white border-8 border-black">
              <div className="border-b-4 border-black bg-white p-6">
                <div className="flex items-center justify-center gap-3">
                  <Icon name="Radio" className="text-black" size={36} />
                  <h3 className="text-2xl font-headline font-black text-black uppercase tracking-tighter">
                    События
                  </h3>
                </div>
              </div>
              
              <div className="p-4">
                <div className="space-y-3">
                  {recentEvents.map((event, index) => {
                    const eventData = getEventIcon(event.type);
                    return (
                      <div 
                        key={index}
                        className="bg-white border-2 border-black p-4"
                      >
                        <div className="flex items-start gap-3">
                          {/* Time stamp - telegraph style */}
                          <div className="border-2 border-black px-3 py-1 flex-shrink-0">
                            <span className="font-display font-black text-sm text-black">{event.time}</span>
                          </div>
                          
                          {/* Symbol */}
                          <div className="w-8 h-8 border-2 border-black flex items-center justify-center flex-shrink-0">
                            <span className="text-xl">{eventData.symbol}</span>
                          </div>
                          
                          {/* Event text */}
                          <span className="font-body text-black flex-1">{event.event}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Footer - Telegraph Office */}
          <div className="mt-8 border-4 border-black p-6 text-center bg-white">
            <div className="border-y-2 border-black py-3">
              <p className="font-body text-black text-sm uppercase tracking-widest">
                Телеграфная служба мониторинга • Mafia House Telegraph Office
              </p>
              <p className="font-body text-black text-xs uppercase tracking-widest mt-2">
                Обновляется в режиме реального времени • Est. 1925
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonitoringSection;