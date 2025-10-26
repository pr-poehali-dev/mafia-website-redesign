import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const DonateSection = () => {
  const packages = [
    {
      id: 1,
      name: 'Солдат',
      price: '299₽',
      icon: 'User',
      benefits: [
        'Уникальный ник',
        'Приоритет в очереди',
        'Личный автомобиль',
        'Стартовый капитал $5,000'
      ]
    },
    {
      id: 2,
      name: 'Капореджиме',
      price: '599₽',
      icon: 'Star',
      popular: true,
      benefits: [
        'Всё из "Солдат"',
        'Эксклюзивная одежда',
        'Личное оружие',
        'Стартовый капитал $15,000',
        'Доступ к VIP казино'
      ]
    },
    {
      id: 3,
      name: 'Дон семьи',
      price: '1,299₽',
      icon: 'Crown',
      benefits: [
        'Всё из "Капореджиме"',
        'Эксклюзивная резиденция',
        'Премиум транспорт',
        'Стартовый капитал $50,000',
        'Возможность создать семью',
        'Персональный телохранитель'
      ]
    }
  ];

  return (
    <section className="min-h-screen pt-32 pb-16 bg-mafia-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Icon name="Coins" className="text-mafia-red" size={40} />
              <h2 className="text-5xl font-display font-black text-white tracking-wider">ДОНАТ</h2>
            </div>
            <p className="text-xl text-mafia-cream font-body max-w-2xl mx-auto">
              Поддержите развитие сервера и получите эксклюзивные преимущества
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {packages.map((pkg) => (
              <Card 
                key={pkg.id}
                className={`relative overflow-hidden transition-all duration-300 bg-mafia-gray ${
                  pkg.popular 
                    ? 'border-2 border-mafia-red shadow-2xl shadow-mafia-red/30 scale-105' 
                    : 'border-mafia-red/30 hover:border-mafia-red/50 hover:shadow-xl hover:shadow-mafia-red/10'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-mafia-red text-white px-4 py-1 text-sm font-display font-black tracking-wider">
                    ПОПУЛЯРНЫЙ
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-mafia-red/20 flex items-center justify-center">
                    <Icon name={pkg.icon as any} className="text-mafia-red" size={40} />
                  </div>
                  <CardTitle className="text-3xl font-display font-black text-white tracking-wider mb-2">
                    {pkg.name}
                  </CardTitle>
                  <div className="text-4xl font-display font-black text-mafia-red">
                    {pkg.price}
                  </div>
                  <CardDescription className="font-body text-sm text-mafia-cream">
                    в месяц
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 font-body text-sm">
                        <Icon name="Check" className="text-mafia-red mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-mafia-cream">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full font-display font-black text-lg tracking-wider ${
                      pkg.popular
                        ? 'bg-mafia-red text-white hover:bg-mafia-dark-red'
                        : 'bg-mafia-red/20 text-mafia-red border border-mafia-red hover:bg-mafia-red hover:text-white'
                    }`}
                  >
                    ПРИОБРЕСТИ
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-mafia-gray border-mafia-red/30">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Icon name="Info" className="text-mafia-red" size={32} />
                <CardTitle className="text-2xl font-display font-black text-white tracking-wider">ВАЖНАЯ ИНФОРМАЦИЯ</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 font-body text-mafia-cream">
              <p>• Все донат-привилегии действуют 30 дней с момента активации</p>
              <p>• Возврат средств не предусмотрен, кроме случаев технической ошибки</p>
              <p>• При нарушении правил сервера донат не возвращается</p>
              <p>• Донат не дает преимуществ в RP ситуациях, только игровые удобства</p>
              <p className="pt-4 flex items-center gap-2 text-mafia-red">
                <Icon name="MessageCircle" size={20} />
                <span>По всем вопросам обращайтесь в поддержку на форуме</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;