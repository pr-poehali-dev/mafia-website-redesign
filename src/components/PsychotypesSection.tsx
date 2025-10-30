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
      color: 'from-blue-900 to-blue-950',
      accentColor: 'bg-blue-800',
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
      color: 'from-red-900 to-red-950',
      accentColor: 'bg-red-800',
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
      color: 'from-amber-900 to-amber-950',
      accentColor: 'bg-amber-800',
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
      color: 'from-purple-900 to-purple-950',
      accentColor: 'bg-purple-800',
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
      color: 'from-slate-800 to-slate-950',
      accentColor: 'bg-slate-700',
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
      color: 'from-emerald-900 to-emerald-950',
      accentColor: 'bg-emerald-800',
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
    <section className="min-h-screen pt-[180px] md:pt-[280px] pb-8 md:pb-16 newspaper-texture torn-edge-top crumpled-paper burn-mark burn-mark-top-right ink-stain ink-stain-bottom-right">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="border-4 md:border-6 lg:border-8 border-mafia-sepia aged-paper shadow-2xl mb-6 md:mb-12 transform -rotate-1">
            <div className="border-2 md:border-3 lg:border-4 border-mafia-sepia m-2 aged-paper p-3 md:p-4 lg:p-6 text-center">
              <div className="border border-mafia-sepia md:border-2 p-2 md:p-3 lg:p-4">
                <Icon name="Brain" size={32} className="mx-auto mb-2 md:mb-3 text-mafia-gray md:w-10 md:h-10 lg:w-12 lg:h-12" />
                <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-headline uppercase tracking-wide md:tracking-wider mb-2 leading-tight break-words" style={{fontFamily: 'UnifrakturMaguntia, serif'}}>
                  Психотипы персонажей
                </h1>
                <div className="text-xs md:text-sm lg:text-base uppercase tracking-wider md:tracking-widest border-t border-b md:border-t-2 md:border-b-2 border-mafia-sepia py-1 md:py-2 mt-2 md:mt-3 break-words">
                  Выбери свой путь в мире Mafia House
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6 lg:space-y-8">
            {psychotypes.map((psycho, index) => (
              <div 
                key={index}
                className="border-4 md:border-6 lg:border-8 border-mafia-sepia aged-paper shadow-xl hover:shadow-2xl transition-all group"
                style={{transform: `rotate(${index % 2 === 0 ? '0.5deg' : '-0.5deg'})`}}
              >
                <div className="grid md:grid-cols-[280px_1fr] lg:grid-cols-[350px_1fr] gap-0">
                  <div className="relative md:border-r-4 lg:border-r-6 border-mafia-sepia overflow-hidden h-64 md:h-auto">
                    <img 
                      src={psycho.image} 
                      alt={psycho.name}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${psycho.color} opacity-70`} />
                    <div className="absolute inset-0 border-2 md:border-3 lg:border-4 border-mafia-sepia m-1 md:m-2" />
                    <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3 lg:p-4 text-white">
                      <div className={`border-2 md:border-3 lg:border-4 border-amber-200 ${psycho.accentColor} p-2 md:p-2.5 lg:p-3 mb-2 md:mb-3`}>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-headline uppercase tracking-wide mb-1 md:mb-2 text-amber-100 break-words leading-tight">
                          {psycho.name}
                        </h3>
                        <div className="flex flex-wrap items-center gap-1 md:gap-2 text-xs md:text-sm">
                          <div className="flex items-center gap-1 border border-amber-200 md:border-2 bg-black/50 px-1.5 md:px-2 py-0.5 md:py-1">
                            <Icon name="DollarSign" size={14} className="text-amber-200 md:w-4 md:h-4" />
                            <span className="font-headline text-amber-100 text-xs md:text-sm">{psycho.deposit}</span>
                          </div>
                          <div className="flex items-center gap-1 border border-amber-200 md:border-2 bg-black/50 px-1.5 md:px-2 py-0.5 md:py-1">
                            <Icon name="MapPin" size={14} className="text-amber-200 md:w-4 md:h-4" />
                            <span className="font-body text-amber-100 text-xs md:text-sm truncate max-w-[120px]">{psycho.startCity}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 md:p-5 lg:p-8 aged-paper">
                    <div className="border-2 md:border-3 lg:border-4 border-mafia-sepia bg-gradient-to-br from-amber-50 to-amber-100 p-3 md:p-4 lg:p-6 mb-3 md:mb-4 lg:mb-6">
                      <p className="font-body text-sm md:text-base lg:text-xl leading-relaxed">
                        {psycho.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
                      {psycho.bonuses.length > 0 && (
                        <div className="border-2 md:border-3 lg:border-4 border-mafia-sepia aged-paper p-2 md:p-3 lg:p-5">
                          <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-3 lg:mb-4 pb-2 md:pb-3 border-b-2 md:border-b-3 lg:border-b-4 border-mafia-sepia">
                            <Icon name="TrendingUp" size={18} className="text-green-700 flex-shrink-0 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                            <h4 className="font-headline uppercase text-xs md:text-sm lg:text-base break-words leading-tight">Преимущества</h4>
                          </div>
                          <div className="space-y-2 md:space-y-2.5 lg:space-y-3">
                            {psycho.bonuses.map((bonus, i) => (
                              <div key={i} className="flex items-center justify-between gap-1 md:gap-2 text-xs md:text-sm border-b border-mafia-sepia md:border-b-2 pb-1 md:pb-2 last:border-0">
                                <span className="font-body break-words flex-1 leading-tight">{bonus.label}</span>
                                <Badge className="bg-green-700 text-white border border-mafia-sepia md:border-2 text-[10px] md:text-xs px-1 md:px-2 py-0.5 md:py-1 whitespace-nowrap flex-shrink-0">
                                  {bonus.value}
                                </Badge>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {psycho.penalties.length > 0 && (
                        <div className="border-2 md:border-3 lg:border-4 border-mafia-sepia aged-paper p-2 md:p-3 lg:p-5">
                          <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-3 lg:mb-4 pb-2 md:pb-3 border-b-2 md:border-b-3 lg:border-b-4 border-mafia-sepia">
                            <Icon name="TrendingDown" size={18} className="text-red-700 flex-shrink-0 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                            <h4 className="font-headline uppercase text-xs md:text-sm lg:text-base break-words leading-tight">Недостатки</h4>
                          </div>
                          <div className="space-y-2 md:space-y-2.5 lg:space-y-3">
                            {psycho.penalties.map((penalty, i) => (
                              <div key={i} className="flex items-center justify-between gap-1 md:gap-2 text-xs md:text-sm border-b border-mafia-sepia md:border-b-2 pb-1 md:pb-2 last:border-0">
                                <span className="font-body break-words flex-1 leading-tight">{penalty.label}</span>
                                <Badge className="bg-red-700 text-white border border-mafia-sepia md:border-2 text-[10px] md:text-xs px-1 md:px-2 py-0.5 md:py-1 whitespace-nowrap flex-shrink-0">
                                  {penalty.value}
                                </Badge>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="border-2 md:border-3 lg:border-4 border-mafia-sepia aged-paper p-2 md:p-3 lg:p-5">
                        <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-3 lg:mb-4 pb-2 md:pb-3 border-b-2 md:border-b-3 lg:border-b-4 border-mafia-sepia">
                          <Icon name="AlertTriangle" size={18} className="text-amber-700 flex-shrink-0 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                          <h4 className="font-headline uppercase text-xs md:text-sm lg:text-base break-words leading-tight">Риски</h4>
                        </div>
                        <div className="space-y-2 md:space-y-2.5 lg:space-y-3">
                          {psycho.risks.map((risk, i) => (
                            <div key={i} className="text-xs md:text-sm border-b border-mafia-sepia md:border-b-2 pb-1 md:pb-2 last:border-0">
                              <span className="font-body block mb-0.5 md:mb-1 break-words leading-tight">{risk.label}</span>
                              {risk.value && (
                                <span className="font-headline font-bold text-amber-900 text-[10px] md:text-xs">
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

          <div className="border-t-4 border-b-4 border-mafia-sepia py-3 aged-paper text-center mt-12">
            <div className="text-sm font-body uppercase tracking-widest">
              *РПК — Разрешение на Персонажную Казнь • ТР — Тяжелое Ранение • Каждое ТР добавляет 0.1% к шансу РПК
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PsychotypesSection;