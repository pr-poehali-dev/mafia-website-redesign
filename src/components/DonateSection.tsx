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
    <section className="min-h-screen pt-[240px] pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="border-t-4 border-b-4 border-black py-3 mb-8 bg-white text-center">
            <h2 className="text-5xl font-headline uppercase tracking-wider">
              Поддержите развитие сервера
            </h2>
            <div className="text-xs uppercase tracking-widest mt-1">
              Эксклюзивные преимущества для членов семьи
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div 
                key={pkg.id}
                className={`bg-white transition-all ${
                  pkg.popular 
                    ? 'border-8 border-black' 
                    : 'border-4 border-black'
                }`}
              >
                {pkg.popular && (
                  <div className="bg-black text-white text-center py-1">
                    <span className="text-xs font-headline uppercase tracking-wider">
                      Популярный выбор
                    </span>
                  </div>
                )}
                
                <div className="border-b-4 border-black p-6 text-center bg-white">
                  <div className="w-16 h-16 mx-auto mb-3 border-4 border-black bg-white flex items-center justify-center">
                    <Icon name={pkg.icon as any} className="text-black" size={32} />
                  </div>
                  
                  <h3 className="text-3xl font-headline font-bold uppercase mb-3">
                    {pkg.name}
                  </h3>
                  
                  <div className="border-4 border-black bg-white p-3 inline-block">
                    <div className="text-4xl font-headline font-bold">
                      {pkg.price}
                    </div>
                    <div className="text-xs uppercase tracking-wider">
                      в месяц
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="space-y-2 mb-6">
                    {pkg.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-2 text-xs border-b border-black pb-2">
                        <div className="w-3 h-3 border-2 border-black bg-black flex-shrink-0 mt-0.5"></div>
                        <span className="flex-1 font-body">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className="w-full font-headline uppercase tracking-wider bg-black text-white border-2 border-black hover:bg-white hover:text-black"
                  >
                    Приобрести
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-4 border-black bg-white p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-headline uppercase mb-3 border-b-2 border-black pb-2">
                  Зачем покупать донат?
                </h3>
                <div className="font-body text-sm leading-relaxed space-y-2">
                  <p>• Поддержите развитие сервера и новые обновления</p>
                  <p>• Получите эксклюзивный контент недоступный обычным игрокам</p>
                  <p>• Станьте частью элиты мафиозного мира</p>
                  <p>• Ускорьте своё развитие на сервере</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-headline uppercase mb-3 border-b-2 border-black pb-2">
                  Способы оплаты
                </h3>
                <div className="font-body text-sm leading-relaxed space-y-2">
                  <p>• Банковские карты (Visa, MasterCard, МИР)</p>
                  <p>• Электронные кошельки (ЮMoney, QIWI)</p>
                  <p>• Криптовалюта (BTC, ETH, USDT)</p>
                  <p>• Мобильные платежи</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t-2 border-b-2 border-black py-1 bg-white text-center">
            <div className="text-xs font-body uppercase tracking-widest">
              Все средства идут на развитие и поддержку сервера • Спасибо за вашу поддержку!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
