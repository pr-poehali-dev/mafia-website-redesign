import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
        return <Badge className="bg-green-600 text-white">Онлайн</Badge>;
      case 'maintenance':
        return <Badge className="bg-yellow-600 text-white">Тех. работы</Badge>;
      case 'offline':
        return <Badge className="bg-red-600 text-white">Оффлайн</Badge>;
      case 'operational':
        return <Badge className="bg-green-600 text-white">Работает</Badge>;
      case 'degraded':
        return <Badge className="bg-yellow-600 text-white">Замедлен</Badge>;
      default:
        return <Badge variant="outline">Неизвестно</Badge>;
    }
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'success':
        return { icon: 'CheckCircle2', color: 'text-green-500' };
      case 'warning':
        return { icon: 'AlertTriangle', color: 'text-yellow-500' };
      case 'maintenance':
        return { icon: 'Settings', color: 'text-blue-500' };
      default:
        return { icon: 'Info', color: 'text-mafia-red' };
    }
  };

  return (
    <section className="min-h-screen pt-32 pb-16 bg-mafia-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Icon name="Activity" className="text-mafia-red" size={40} />
            <h2 className="text-5xl font-display font-black text-white tracking-wider">МОНИТОРИНГ</h2>
          </div>

          <div className="grid gap-6 mb-8">
            <Card className="bg-mafia-gray border-mafia-red/30">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Icon name="Server" className="text-mafia-red" size={32} />
                  <CardTitle className="text-2xl font-display font-black text-white tracking-wider">ИГРОВЫЕ СЕРВЕРЫ</CardTitle>
                </div>
                <CardDescription className="font-body text-mafia-cream">
                  Статус и информация о всех игровых серверах
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {servers.map((server) => (
                    <div 
                      key={server.id}
                      className="p-5 rounded-lg bg-mafia-black/50 border border-mafia-red/20"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${
                            server.status === 'online' ? 'bg-green-500 animate-pulse' : 
                            server.status === 'maintenance' ? 'bg-yellow-500' : 'bg-red-500'
                          }`} />
                          <h3 className="text-xl font-display font-black text-white">{server.name}</h3>
                        </div>
                        {getStatusBadge(server.status)}
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm font-body">
                        <div>
                          <div className="text-mafia-cream/70 mb-1">Игроки</div>
                          <div className="text-mafia-cream font-bold flex items-center gap-1">
                            <Icon name="Users" size={16} className="text-mafia-red" />
                            {server.players}
                          </div>
                        </div>
                        <div>
                          <div className="text-mafia-cream/70 mb-1">Пинг</div>
                          <div className="text-mafia-cream font-bold flex items-center gap-1">
                            <Icon name="Wifi" size={16} className="text-mafia-red" />
                            {server.ping}
                          </div>
                        </div>
                        <div>
                          <div className="text-mafia-cream/70 mb-1">Аптайм</div>
                          <div className="text-mafia-cream font-bold flex items-center gap-1">
                            <Icon name="Clock" size={16} className="text-mafia-red" />
                            {server.uptime}
                          </div>
                        </div>
                        <div>
                          <div className="text-mafia-cream/70 mb-1">Версия</div>
                          <div className="text-mafia-cream font-bold">{server.version}</div>
                        </div>
                        <div>
                          <div className="text-mafia-cream/70 mb-1">Карта</div>
                          <div className="text-mafia-cream font-bold flex items-center gap-1">
                            <Icon name="Map" size={16} className="text-mafia-red" />
                            {server.map}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-mafia-gray border-mafia-red/30">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Icon name="Cpu" className="text-mafia-red" size={32} />
                    <CardTitle className="text-2xl font-display font-black text-white tracking-wider">СИСТЕМНЫЕ СЕРВИСЫ</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {systemStatus.map((item, index) => (
                      <div 
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg bg-mafia-black/50"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${
                            item.status === 'operational' ? 'bg-green-500' : 'bg-yellow-500'
                          }`} />
                          <span className="font-body text-mafia-cream">{item.service}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-mafia-cream/70 font-body">{item.response}</span>
                          {getStatusBadge(item.status)}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-mafia-gray border-mafia-red/30">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Icon name="Bell" className="text-mafia-red" size={32} />
                    <CardTitle className="text-2xl font-display font-black text-white tracking-wider">СОБЫТИЯ</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentEvents.map((event, index) => {
                      const eventStyle = getEventIcon(event.type);
                      return (
                        <div 
                          key={index}
                          className="flex items-start gap-3 p-3 rounded-lg bg-mafia-black/50"
                        >
                          <Icon 
                            name={eventStyle.icon as any} 
                            className={eventStyle.color} 
                            size={20} 
                          />
                          <div className="flex-1">
                            <div className="font-body text-mafia-cream">{event.event}</div>
                            <div className="text-xs text-mafia-cream/70 font-body mt-1">
                              {event.time}
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
      </div>
    </section>
  );
};

export default MonitoringSection;