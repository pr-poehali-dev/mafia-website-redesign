import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const PsychotypesSection = () => {
  const psychotypes = [
    {
      name: 'Интеллигент',
      image: 'https://mh-rp.com/uploads/psycho/123-AGVvUeIJvQe6kALI5w-plO8K8VJTVkSkOM8EDmroXkGJMVLxPTMk4i2o3Rins4F4z67NMeHqTPksfKkNCvQm5aoHpkrnyq-KhBjMVdByY2iuzTpCAkriZLxMHjWaZUb9IxmloXS60kh5CSZ2NHEXKO9XJgWsXK8ss20481.webp',
      description: 'Зачастую — дети артистов, политиков и прочего высшего общества. Связи и образование дают преимущество в научных и правительственных сферах. Родом из Сен-Дени, Сан-Фиерро, Блэквотера и пр.',
      deposit: '$250',
      startCity: 'Сент-Дени',
      bonuses: [
        { label: 'Харизма', value: '+20%', type: 'positive' },
        { label: 'Научный труд', value: '+75%', type: 'positive' },
      ],
      penalties: [
        { label: 'Физ. подготовка', value: '-30%', type: 'negative' },
        { label: 'Владение оружием', value: '-50%', type: 'negative' },
        { label: 'Тяжелый труд', value: '-75%', type: 'negative' },
      ],
      risks: [
        { label: 'Вероятность РПК', value: '0.1%/0.1%' },
        { label: 'Вероятность ТР', value: '30%/16%' },
        { label: 'Здоровье при ТР', value: '75%' },
        { label: 'Мент. состояние', value: '75%' },
      ]
    },
    {
      name: 'Циник',
      image: 'https://mh-rp.com/uploads/psycho/115-AGVvUc8mBC2c5NHmE8qk0DV4swMx6rzHSynXLetHcEIe9qkjf8AJILqZs96zE2QNo6Jqyud79I6A8Rq8iOUkV2or93jcChTdCT9fU41Hrhfwr9yShe97nOvQGa4vQ0lfqq7iRSQ89G0YHg6BHk6PlF8IEmHzcxNs2048.webp',
      description: 'Могут выходить из любого общества, являясь больше детьми эпохи, чем окружения. Пренебрежение моральными и этическими нормами позволяет раскрыть себя там, где другому непозволительно.',
      deposit: '$100',
      startCity: 'Валентайн',
      bonuses: [
        { label: 'Физ. подготовка', value: '+30%', type: 'positive' },
        { label: 'Владение оружием', value: '+25%', type: 'positive' },
        { label: 'Летальная работа', value: '+75%', type: 'positive' },
        { label: 'Легендарная охота', value: '+25%', type: 'positive' },
      ],
      penalties: [
        { label: 'Харизма', value: '-20%', type: 'negative' },
        { label: 'Научный труд', value: '-75%', type: 'negative' },
        { label: 'Тяжелый труд', value: '-75%', type: 'negative' },
      ],
      risks: [
        { label: 'Вероятность РПК', value: '0.1%/0.1%' },
        { label: 'Вероятность ТР', value: '40%/18%' },
        { label: 'Здоровье при ТР', value: '65%' },
        { label: 'Мент. состояние', value: '52%' },
      ]
    },
    {
      name: 'Милитарист',
      image: 'https://mh-rp.com/uploads/psycho/121-AGVvUdiWK4ObrMl5bkI4shEAT1kBvNI2qG2tQte6AH7WwNXxRGvMvqLxciouTb2fEjk7fB3coATRa4l7utlHJ5VMvAt8jnoi7ct8UCF-vDderVYwycAkCFXhXkieufIX3S-m5BSdv31FmUSIkTPvr-u6Zl1Z6GNos2048.webp',
      description: 'Воспитан в строгости и дисциплине. Хорошо осведомлен в политике и военном деле. Круг интересов и характер способностей зачастую сводится к военной теме.',
      deposit: '$150',
      startCity: 'Строуберри',
      bonuses: [
        { label: 'Физ. подготовка', value: '+50%', type: 'positive' },
        { label: 'Владение оружием', value: '+50%', type: 'positive' },
        { label: 'Летальная работа', value: '+15%', type: 'positive' },
      ],
      penalties: [
        { label: 'Харизма', value: '-25%', type: 'negative' },
        { label: 'Научный труд', value: '-75%', type: 'negative' },
        { label: 'Легендарная охота', value: '-15%', type: 'negative' },
      ],
      risks: [
        { label: 'Вероятность РПК', value: '0.1%/0.1%' },
        { label: 'Вероятность ТР', value: '0.1%/0.1%' },
        { label: 'Здоровье при ТР', value: '50%' },
        { label: 'Мент. состояние', value: '30%' },
      ]
    },
    {
      name: 'Хрустальный',
      image: 'https://mh-rp.com/uploads/psycho/114-AGVvUc3n1XBcDyJxy1IXcTod8amsOLOFQIsu8ARy1Khr3gRMWBsNuImWc20Fa1fkaQenid33mgq-yT3Q9xrSa5ABDuZ9kEWrSKMEut8s37etku0aUSaovDr0lhULRsyS-JmkFC1ZHNfbj4MmUsHEaeuWj1VDburBs20481.webp',
      description: 'Талантлив и хорошо во всём, за что бы ни взялся. Объяснить это чем-то рациональным едва ли удастся, как и его аномально слабое здоровье, совладать с которым современная медицина не в силах.',
      deposit: '$250',
      startCity: 'Блэквотер',
      bonuses: [
        { label: 'Харизма', value: '+30%', type: 'positive' },
        { label: 'Владение оружием', value: '+50%', type: 'positive' },
        { label: 'Любой труд', value: '+25%', type: 'positive' },
      ],
      penalties: [],
      risks: [
        { label: 'Вероятность РПК', value: '0.1%/0.1%' },
        { label: 'Вероятность ТР', value: '50%/20%' },
        { label: 'Здоровье при ТР', value: '35%' },
        { label: 'Мент. состояние', value: '19%' },
      ]
    },
    {
      name: 'Живой мертвец',
      image: 'https://mh-rp.com/uploads/psycho/112-AGVvUfNEl0FLxRpXXizenY03zhIRSPlaZohSs6b01fhf2XQwbDdui2FxY8QTNEK0eaXvAt5eLOc3rkahcCNXwM2bbC4yVIKkXFLynIoKegZgvR-qXMunxNYhxD9ngroG70t882PugirG8Pu9VArXqpIj2zSApHFgUs20481.webp',
      description: 'Не способен ни на что, кроме праздного прожигания жизни. Единственное, чем он способен удивить — невероятной выживаемостью. Мало у кого укладывается в голове то, как он выживает со своим образом жизни.',
      deposit: '$15',
      startCity: 'Случайный',
      bonuses: [],
      penalties: [
        { label: 'Физ. подготовка', value: '-75%', type: 'negative' },
        { label: 'Владение оружием', value: '-100%', type: 'negative' },
        { label: 'Харизма', value: '-50%', type: 'negative' },
        { label: 'Научный труд', value: '-75%', type: 'negative' },
        { label: 'Легендарная охота', value: '-75%', type: 'negative' },
        { label: 'Тяжелый труд', value: '-75%', type: 'negative' },
        { label: 'Летальная работа', value: '-75%', type: 'negative' },
      ],
      risks: [
        { label: 'Гипертония, тик, судороги', value: '' },
        { label: 'Вероятность РПК', value: '0%/0%' },
        { label: 'Вероятность ТР', value: '0%/0%' },
        { label: 'Мент. состояние', value: '8%' },
      ]
    },
    {
      name: 'Неприкаянный',
      image: 'https://mh-rp.com/uploads/psycho/116-AGVvUcGxmhuJJRnUeHq0w7EwqoAyd9JwTTr8FlgghSDPUFa3uKN8DIkwfHO90B6xvUdhhVeRfIQWjlOpY8n1T3ZskX4wYy-VBAuAyNyuFlnUGcTEtiEOVeNb3u9V2UskE7lYF5jJmFjjrx-S2-fyJwEbaQ0GzAlnA7s20481.webp',
      description: 'Ни плох, ни хорош ни в чем определенном. Едва ли осознанно центрист во всех взглядах, скорее — недостаточно заинтересован в чём-либо и не имеет особых навыков и образования.',
      deposit: '$40',
      startCity: 'Случайный',
      bonuses: [],
      penalties: [
        { label: 'Физ. подготовка', value: '-25%', type: 'negative' },
      ],
      risks: [
        { label: 'Вероятность РПК', value: '0.1%/0.1%' },
        { label: 'Вероятность ТР', value: '35%/15%' },
        { label: 'Здоровье при ТР', value: '75%' },
        { label: 'Мент. состояние', value: '41%' },
      ]
    },
  ];

  return (
    <section className="min-h-screen pt-[280px] pb-16 newspaper-texture">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="border-8 border-black aged-paper shadow-2xl mb-12 transform -rotate-1">
            <div className="border-4 border-black m-2 bg-white p-6 text-center">
              <div className="border-2 border-black p-4">
                <Icon name="Brain" size={48} className="mx-auto mb-3 text-black" />
                <h1 className="text-7xl font-headline uppercase tracking-wider mb-2" style={{fontFamily: 'UnifrakturMaguntia, serif'}}>
                  Психотипы персонажей
                </h1>
                <div className="text-sm uppercase tracking-widest border-t-2 border-b-2 border-black py-2 mt-3">
                  Выбери свой путь в мире Mafia House
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {psychotypes.map((psycho, index) => (
              <div 
                key={index}
                className="border-6 border-black aged-paper shadow-xl transform hover:scale-[1.01] transition-all"
                style={{transform: `rotate(${index % 2 === 0 ? '0.5deg' : '-0.5deg'})`}}
              >
                <div className="grid md:grid-cols-[300px_1fr] gap-0">
                  <div className="relative border-r-4 border-black overflow-hidden bg-black">
                    <img 
                      src={psycho.image} 
                      alt={psycho.name}
                      className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-3xl font-headline uppercase tracking-wider mb-2">
                        {psycho.name}
                      </h3>
                      <div className="flex items-center gap-3 text-xs">
                        <div className="flex items-center gap-1 border-2 border-white px-2 py-1">
                          <Icon name="DollarSign" size={14} />
                          <span className="font-headline">{psycho.deposit}</span>
                        </div>
                        <div className="flex items-center gap-1 border-2 border-white px-2 py-1">
                          <Icon name="MapPin" size={14} />
                          <span className="font-body">{psycho.startCity}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="border-4 border-black bg-white p-4 mb-4">
                      <p className="font-body text-sm leading-relaxed">
                        {psycho.description}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      {psycho.bonuses.length > 0 && (
                        <div className="border-4 border-black bg-white p-3">
                          <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-black">
                            <Icon name="TrendingUp" size={18} className="text-green-700" />
                            <h4 className="font-headline uppercase text-sm">Преимущества</h4>
                          </div>
                          <div className="space-y-2">
                            {psycho.bonuses.map((bonus, i) => (
                              <div key={i} className="flex items-center justify-between text-xs">
                                <span className="font-body">{bonus.label}</span>
                                <Badge className="bg-green-700 text-white border-2 border-black text-xs px-2 py-0">
                                  {bonus.value}
                                </Badge>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {psycho.penalties.length > 0 && (
                        <div className="border-4 border-black bg-white p-3">
                          <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-black">
                            <Icon name="TrendingDown" size={18} className="text-red-700" />
                            <h4 className="font-headline uppercase text-sm">Недостатки</h4>
                          </div>
                          <div className="space-y-2">
                            {psycho.penalties.map((penalty, i) => (
                              <div key={i} className="flex items-center justify-between text-xs">
                                <span className="font-body">{penalty.label}</span>
                                <Badge className="bg-red-700 text-white border-2 border-black text-xs px-2 py-0">
                                  {penalty.value}
                                </Badge>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="border-4 border-black bg-white p-3">
                        <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-black">
                          <Icon name="AlertTriangle" size={18} className="text-amber-700" />
                          <h4 className="font-headline uppercase text-sm">Риски</h4>
                        </div>
                        <div className="space-y-2">
                          {psycho.risks.map((risk, i) => (
                            <div key={i} className="text-xs">
                              <span className="font-body block">{risk.label}</span>
                              {risk.value && (
                                <span className="font-headline font-bold text-amber-900">
                                  {risk.value}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t-4 border-b-4 border-black py-2 bg-white text-center mt-12">
            <div className="text-[10px] font-body uppercase tracking-widest">
              *РПК — Разрешение на Персонажную Казнь • ТР — Тяжелое Ранение • Каждое ТР добавляет 0.1% к шансу РПК
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PsychotypesSection;
