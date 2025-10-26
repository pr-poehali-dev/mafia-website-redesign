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
    <section className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Icon name="Coins" className="text-vintage-gold" size={40} />
              <h2 className="text-5xl font-display font-bold text-vintage-gold">Донат</h2>
            </div>
            <p className="text-xl text-vintage-sepia font-body max-w-2xl mx-auto">
              Поддержите развитие сервера и получите эксклюзивные преимущества
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {packages.map((pkg) => (
              <Card 
                key={pkg.id}
                className={`relative overflow-hidden transition-all duration-300 ${
                  pkg.popular 
                    ? 'border-2 border-vintage-gold shadow-2xl shadow-vintage-gold/30 scale-105' 
                    : 'border-vintage-gold/30 hover:border-vintage-gold/50 hover:shadow-xl hover:shadow-vintage-gold/10'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-vintage-gold text-vintage-brown px-4 py-1 text-sm font-display font-bold">
                    ПОПУЛЯРНЫЙ
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-vintage-gold/20 flex items-center justify-center">
                    <Icon name={pkg.icon as any} className="text-vintage-gold" size={40} />
                  </div>
                  <CardTitle className="text-3xl font-display text-vintage-gold mb-2">
                    {pkg.name}
                  </CardTitle>
                  <div className="text-4xl font-display font-bold text-foreground">
                    {pkg.price}
                  </div>
                  <CardDescription className="font-body text-sm">
                    в месяц
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 font-body text-sm">
                        <Icon name="Check" className="text-vintage-gold mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full font-display text-lg ${
                      pkg.popular
                        ? 'bg-vintage-gold text-vintage-brown hover:bg-vintage-gold/90'
                        : 'bg-vintage-gold/20 text-vintage-gold border border-vintage-gold hover:bg-vintage-gold hover:text-vintage-brown'
                    }`}
                  >
                    Приобрести
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-vintage-brown/50 border-vintage-gold/30">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Icon name="Info" className="text-vintage-gold" size={32} />
                <CardTitle className="text-2xl font-display text-vintage-gold">Важная информация</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 font-body text-foreground">
              <p>• Все донат-привилегии действуют 30 дней с момента активации</p>
              <p>• Возврат средств не предусмотрен, кроме случаев технической ошибки</p>
              <p>• При нарушении правил сервера донат не возвращается</p>
              <p>• Донат не дает преимуществ в RP ситуациях, только игровые удобства</p>
              <p className="pt-4 flex items-center gap-2 text-vintage-gold">
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
