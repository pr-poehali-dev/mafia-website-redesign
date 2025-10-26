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
    <section className="min-h-screen pt-32 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* 1920s Advertisement Header */}
          <div className="border-8 border-black bg-white p-8 mb-12 relative">
            {/* Art deco corner decorations */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-8 border-l-8 border-black"></div>
            <div className="absolute top-0 right-0 w-20 h-20 border-t-8 border-r-8 border-black"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-8 border-l-8 border-black"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-8 border-r-8 border-black"></div>
            
            <div className="text-center">
              {/* Vintage ad style subheading */}
              <div className="text-sm font-display font-black uppercase tracking-widest mb-2">
                Эксклюзивное предложение
              </div>
              
              {/* Main headline - advertisement poster style */}
              <div className="border-y-8 border-black py-6 my-4">
                <h2 className="text-8xl font-headline font-black text-black uppercase tracking-tighter">
                  ДОНАТ
                </h2>
              </div>
              
              {/* Subtext */}
              <div className="max-w-2xl mx-auto">
                <p className="text-xl font-body text-black leading-relaxed">
                  Поддержите развитие сервера и получите эксклюзивные преимущества
                </p>
              </div>
              
              {/* Decorative line */}
              <div className="flex items-center justify-center gap-3 mt-6">
                <div className="h-1 w-16 bg-black"></div>
                <div className="w-4 h-4 bg-black transform rotate-45"></div>
                <div className="h-1 w-16 bg-black"></div>
              </div>
            </div>
          </div>

          {/* Advertisement Photos */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#f8f5ec] border-2 border-black p-4">
              <img 
                src="https://cdn.poehali.dev/projects/cb4b7b13-739f-47b7-b656-8e116473ab1f/files/9a73409c-d997-4539-bac2-07bc3743e5c1.jpg"
                alt="Saloon poker scene"
                className="w-full old-photo border-2 border-black mb-3"
              />
              <p className="text-center text-black font-body text-sm italic">
                Fig. 3 — Premium entertainment for distinguished members, 1925
              </p>
            </div>
            <div className="bg-[#f8f5ec] border-2 border-black p-4">
              <img 
                src="https://cdn.poehali.dev/projects/cb4b7b13-739f-47b7-b656-8e116473ab1f/files/3438390e-31b2-4337-b212-4d3a6c7a242b.jpg"
                alt="Western street"
                className="w-full old-photo border-2 border-black mb-3"
              />
              <p className="text-center text-black font-body text-sm italic">
                Fig. 4 — Exclusive access to premier locations, 1925
              </p>
            </div>
            <div className="bg-[#f8f5ec] border-2 border-black p-4">
              <img 
                src="https://cdn.poehali.dev/projects/cb4b7b13-739f-47b7-b656-8e116473ab1f/files/68ecaba2-4e61-434a-a1b1-ff1755ea6f08.jpg"
                alt="Train robbery"
                className="w-full old-photo border-2 border-black mb-3"
              />
              <p className="text-center text-black font-body text-sm italic">
                Fig. 5 — Adventure opportunities for elite members, 1925
              </p>
            </div>
          </div>

          {/* Package Cards - 1920s Advertisement Posters */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {packages.map((pkg) => (
              <div 
                key={pkg.id}
                className={`relative bg-white transition-all ${
                  pkg.popular 
                    ? 'border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]' 
                    : 'border-4 border-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'
                }`}
              >
                {/* Popular ribbon - vintage style */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 border-4 border-black px-6 py-2 z-10">
                    <span className="text-white font-headline font-black tracking-wider text-sm uppercase">
                      Популярный выбор
                    </span>
                  </div>
                )}
                
                {/* Header with icon */}
                <div className="border-b-4 border-black p-6 text-center bg-white">
                  <div className="w-20 h-20 mx-auto mb-4 border-4 border-black bg-white flex items-center justify-center">
                    <Icon name={pkg.icon as any} className="text-black" size={40} />
                  </div>
                  
                  <h3 className="text-3xl font-headline font-black text-black uppercase tracking-tighter mb-2">
                    {pkg.name}
                  </h3>
                  
                  {/* Art deco divider */}
                  <div className="flex items-center justify-center gap-2 my-3">
                    <div className="h-1 w-8 bg-black"></div>
                    <div className="w-2 h-2 bg-black transform rotate-45"></div>
                    <div className="h-1 w-8 bg-black"></div>
                  </div>
                  
                  {/* Price - vintage ad style */}
                  <div className="border-4 border-black bg-white p-3 inline-block">
                    <div className="text-5xl font-headline font-black text-black">
                      {pkg.price}
                    </div>
                    <div className="font-body text-sm text-black uppercase tracking-wider">
                      в месяц
                    </div>
                  </div>
                </div>

                {/* Benefits list */}
                <div className="p-6">
                  <div className="space-y-3 mb-6">
                    {pkg.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3 font-body text-sm border-b-2 border-black pb-2">
                        <div className="w-4 h-4 border-2 border-black bg-black flex-shrink-0 mt-1"></div>
                        <span className="text-black flex-1">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button - vintage style */}
                  <Button 
                    className={`w-full font-headline font-black text-xl tracking-wider uppercase py-6 transition-all ${
                      pkg.popular
                        ? 'bg-black text-white border-4 border-black hover:bg-white hover:text-black'
                        : 'bg-white text-black border-4 border-black hover:bg-black hover:text-white'
                    }`}
                  >
                    Приобрести
                  </Button>
                </div>

                {/* Package number - vintage label */}
                <div className="absolute top-6 right-6 bg-white border-4 border-black px-3 py-1">
                  <span className="font-display font-black text-black text-sm">ПАКЕТ {pkg.id}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Important Information - Legal Notice Style */}
          <div className="bg-white border-8 border-black p-8">
            <div className="border-4 border-black p-6">
              {/* Header */}
              <div className="flex items-center justify-center gap-4 mb-6 pb-6 border-b-4 border-black">
                <Icon name="Info" className="text-black" size={48} />
                <h3 className="text-4xl font-headline font-black text-black tracking-tighter uppercase">
                  Важная информация
                </h3>
                <Icon name="Info" className="text-black" size={48} />
              </div>
              
              {/* Information blocks - old document style */}
              <div className="space-y-4 font-body text-black text-lg">
                <div className="flex items-start gap-3 pb-3 border-b-2 border-black">
                  <span className="font-black">§1</span>
                  <p>Все донат-привилегии действуют 30 дней с момента активации</p>
                </div>
                
                <div className="flex items-start gap-3 pb-3 border-b-2 border-black">
                  <span className="font-black">§2</span>
                  <p>Возврат средств не предусмотрен, кроме случаев технической ошибки</p>
                </div>
                
                <div className="flex items-start gap-3 pb-3 border-b-2 border-black">
                  <span className="font-black">§3</span>
                  <p>При нарушении правил сервера донат не возвращается</p>
                </div>
                
                <div className="flex items-start gap-3 pb-3 border-b-2 border-black">
                  <span className="font-black">§4</span>
                  <p>Донат не дает преимуществ в RP ситуациях, только игровые удобства</p>
                </div>
                
                {/* Support notice */}
                <div className="mt-6 pt-6 border-t-4 border-black text-center">
                  <div className="flex items-center justify-center gap-3">
                    <Icon name="MessageCircle" size={24} />
                    <span className="font-display font-black uppercase tracking-wider">
                      По всем вопросам обращайтесь в поддержку на форуме
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer - vintage advertisement */}
          <div className="mt-8 text-center border-t-4 border-black pt-6">
            <p className="font-body text-black text-sm uppercase tracking-widest">
              Официальный магазин • Mafia House • Безопасные платежи • Est. 1925
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;