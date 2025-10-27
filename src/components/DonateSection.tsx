import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const DonateSection = () => {
  const [amount, setAmount] = useState('');

  const packages = [
    {
      name: 'Работяга',
      oldPrice: '1300',
      price: '999',
      benefits: [
        '200 баксов',
        'Револьвер шофилда',
        '5 банок консервированного лосося',
        '5 чашек крепкого кофе',
        '+1 слот для создания персонажа',
        'Лотерейный билет работяги',
        '+10% к зарплате',
        'Роль в дискорде'
      ]
    },
    {
      name: 'Меценат',
      oldPrice: '2919',
      price: '2419',
      popular: true,
      benefits: [
        '250 баксов',
        'Кольт 911',
        '5 черничных пирогов',
        '5 алкогольных коктейлей «Бобита»',
        '(снимают стресс, дают +200хп)',
        'Золотой браслет на руку',
        'Роль в дискорде',
        '+2 слота для создания персонажа',
        'Лотерейный билет мецената',
        'Набор медикаментов',
        '(5 бинтов, аптечка, 2 опиума)',
        '+15% к зарплате',
        'Возможность играть за ХЭШ',
        '(После покупки необходимо создать тикет)'
      ]
    },
    {
      name: 'Дон',
      oldPrice: '4999',
      price: '3999',
      premium: true,
      benefits: [
        '500 баксов',
        '2 кольта 911',
        '(для стрельбы с двух рук по «Македонски»)',
        '6 бутылок водки',
        '(снимают стресс, +300хп и 200% к стамине)',
        'Набор медикаментов',
        '(5 бинтов, аптечка, 2 опиума)',
        '5 порций жаренных ребер барана',
        '5 черничных пирогов',
        '10 бутылок пива',
        '2 талона на татуировки',
        'ПП Томми Ган',
        'Роль в дискорде',
        '+2 слота для создания персонажа',
        'Лотерейный билет дона',
        'Индивидуальный крафт',
        '+20% к зарплате',
        'Возможность играть за 2 ХЭШа'
      ]
    }
  ];

  const currency = [
    { name: 'На ход ноги', oldPrice: '400', price: '350', amount: '100 баксов' },
    { name: 'Работяга', oldPrice: '2000', price: '1800', amount: '500 баксов' },
    { name: 'Двоярин', oldPrice: '4000', price: '3600', amount: '1000 баксов' },
    { name: 'Лакшери жизнь', oldPrice: '19019', price: '17019', amount: '5000 баксов' },
    { name: 'Психотип', oldPrice: '619', price: '519', amount: 'Смена Психотипа' }
  ];

  return (
    <section className="min-h-screen pt-[280px] pb-16 newspaper-texture">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="border-8 border-black aged-paper shadow-2xl mb-12 transform -rotate-1">
            <div className="border-4 border-black m-2 bg-white p-6 text-center">
              <div className="border-2 border-black p-4">
                <Icon name="DollarSign" size={48} className="mx-auto mb-3 text-black" />
                <h2 className="text-5xl font-headline uppercase tracking-wider mb-2">
                  Донат
                </h2>
                <div className="text-sm uppercase tracking-widest border-t border-b border-black py-2 my-3">
                  Поддержите развитие сервера
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="border-6 border-black aged-paper shadow-xl transform rotate-1">
              <div className="border-b-4 border-black p-3 bg-black text-white text-center">
                <div className="text-xl font-headline uppercase tracking-wider">Информация</div>
              </div>
              <div className="p-6">
                <div className="space-y-4 font-body text-sm">
                  <div className="border-2 border-black p-3 bg-yellow-50">
                    <div className="font-bold mb-1">Курс валют:</div>
                    <div className="text-2xl font-headline">4₽ = 1$</div>
                  </div>
                  <p className="leading-relaxed">
                    Возникли проблемы с пополнением? Напишите в Discord нашего сервера.
                  </p>
                  <div className="border-t-2 border-black pt-3 space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon name="Receipt" size={16} />
                      <span className="uppercase text-xs tracking-wide">Договор оферты</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Shield" size={16} />
                      <span className="uppercase text-xs tracking-wide">Безопасность</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-6 border-black aged-paper shadow-xl transform -rotate-1">
              <div className="border-b-4 border-black p-3 bg-black text-white text-center">
                <div className="text-xl font-headline uppercase tracking-wider">Как пополнить?</div>
              </div>
              <div className="p-6">
                <p className="text-sm font-body mb-4 leading-relaxed">
                  Для пополнения пожалуйста введите сумму, после оплаты вы получите код, 
                  который необходимо активировать на любом почтампе
                </p>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs uppercase tracking-wide font-bold block mb-2">
                      Сумма пополнения
                    </label>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Введите сумму в рублях"
                      className="w-full border-4 border-black p-3 font-headline text-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <Button className="w-full font-headline uppercase tracking-wider bg-black text-white border-4 border-black hover:bg-white hover:text-black text-lg py-6">
                    Пополнить
                  </Button>
                  <p className="text-[10px] font-body text-center leading-tight">
                    Нажимая кнопку "Пополнить" вы автоматически соглашаетесь с договором оферты.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t-4 border-b-4 border-black py-3 mb-8 bg-white text-center">
            <h3 className="text-4xl font-headline uppercase tracking-wider">Наборы</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`relative ${pkg.popular ? 'transform -rotate-2 scale-105' : index % 2 === 0 ? 'transform rotate-1' : 'transform -rotate-1'}`}
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10" style={{transform: `translateX(-50%) rotate(${index % 2 === 0 ? '8deg' : '-12deg'})`}}>
                  <div className="relative filter drop-shadow-md">
                    <svg width="12" height="50" viewBox="0 0 12 50" className="overflow-visible">
                      <defs>
                        <linearGradient id={`rust-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor: '#8B6914', stopOpacity: 1}} />
                          <stop offset="30%" style={{stopColor: '#704214', stopOpacity: 1}} />
                          <stop offset="60%" style={{stopColor: '#4A4A4A', stopOpacity: 1}} />
                          <stop offset="100%" style={{stopColor: '#2C2C2C', stopOpacity: 1}} />
                        </linearGradient>
                      </defs>
                      <path 
                        d={`M 6 0 Q ${index % 2 === 0 ? '7' : '5'} 15, 6 25 Q ${index % 2 === 0 ? '5' : '7'} 35, 6 45 L 6 50`}
                        stroke={`url(#rust-${index})`}
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                      />
                      <ellipse cx="6" cy="3" rx="4.5" ry="3.5" fill="#704214" opacity="0.9" />
                      <ellipse cx="6" cy="3" rx="3.5" ry="2.5" fill="#8B6914" />
                      <ellipse cx="5" cy="2.5" rx="1.5" ry="1" fill="#A0826D" opacity="0.7" />
                      <path d="M 4 3 Q 5 4, 6 3.5" stroke="#5C4033" strokeWidth="0.5" fill="none" opacity="0.6" />
                    </svg>
                  </div>
                </div>

                <div className={`border-6 border-black aged-paper shadow-2xl ${pkg.premium ? 'border-8 border-[#8B0000]' : ''}`}>
                  {pkg.popular && (
                    <div className="bg-[#8B0000] text-white text-center py-2 border-b-4 border-black">
                      <span className="text-sm font-headline uppercase tracking-wider">
                        ★ Популярный выбор ★
                      </span>
                    </div>
                  )}

                  <div className="border-b-4 border-black p-4 bg-white text-center">
                    <h4 className="text-3xl font-headline uppercase tracking-wide mb-3">{pkg.name}</h4>
                    <div className="inline-block border-4 border-black bg-white p-2">
                      <div className="text-sm line-through opacity-60">{pkg.oldPrice} Ꝑ</div>
                      <div className="text-4xl font-headline font-black">{pkg.price} Ꝑ</div>
                    </div>
                  </div>

                  <div className="p-4 min-h-[400px]">
                    <div className="space-y-1 text-xs font-body">
                      {pkg.benefits.map((benefit, idx) => (
                        <div 
                          key={idx} 
                          className={`flex items-start gap-2 pb-1 ${benefit.startsWith('(') ? 'pl-4 text-[10px] italic opacity-80' : 'border-b border-black/20'}`}
                        >
                          {!benefit.startsWith('(') && (
                            <span className="flex-shrink-0 text-[#8B0000] font-black">•</span>
                          )}
                          <span className="flex-1">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t-4 border-black p-4">
                    <Button className="w-full font-headline uppercase tracking-wider bg-black text-white border-2 border-black hover:bg-[#8B0000] hover:border-[#8B0000] text-base py-6">
                      Приобрести
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t-4 border-b-4 border-black py-3 mb-8 bg-white text-center">
            <h3 className="text-4xl font-headline uppercase tracking-wider">Валюта и услуги</h3>
          </div>

          <div className="grid md:grid-cols-5 gap-6 mb-12">
            {currency.map((item, index) => (
              <div 
                key={index}
                className={`transform ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'}`}
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10" style={{transform: `translateX(-50%) rotate(${index % 3 === 0 ? '15deg' : index % 3 === 1 ? '-10deg' : '5deg'})`}}>
                  <div className="relative filter drop-shadow-md">
                    <svg width="8" height="35" viewBox="0 0 8 35" className="overflow-visible">
                      <defs>
                        <linearGradient id={`rust-small-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor: '#8B6914', stopOpacity: 1}} />
                          <stop offset="35%" style={{stopColor: '#5C4033', stopOpacity: 1}} />
                          <stop offset="70%" style={{stopColor: '#3D3D3D', stopOpacity: 1}} />
                          <stop offset="100%" style={{stopColor: '#1F1F1F', stopOpacity: 1}} />
                        </linearGradient>
                      </defs>
                      <path 
                        d={`M 4 0 Q ${index % 2 === 0 ? '5' : '3'} 10, 4 18 Q ${index % 2 === 0 ? '3' : '5'} 25, 4 32 L 4 35`}
                        stroke={`url(#rust-small-${index})`}
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                      />
                      <ellipse cx="4" cy="2" rx="3" ry="2.5" fill="#5C4033" opacity="0.9" />
                      <ellipse cx="4" cy="2" rx="2.5" ry="2" fill="#8B6914" />
                      <ellipse cx="3.5" cy="1.7" rx="1" ry="0.8" fill="#A0826D" opacity="0.6" />
                    </svg>
                  </div>
                </div>

                <div className="border-4 border-black aged-paper shadow-xl relative">
                  <div className="border-b-2 border-black p-3 bg-white text-center">
                    <div className="text-lg font-headline uppercase leading-tight">{item.name}</div>
                  </div>
                  <div className="p-3 text-center">
                    <div className="text-xs mb-2 font-body">{item.amount}</div>
                    <div className="text-[10px] line-through opacity-60">{item.oldPrice} Ꝑ</div>
                    <div className="text-2xl font-headline font-black mb-3">{item.price} Ꝑ</div>
                    <Button className="w-full font-headline uppercase text-[10px] bg-black text-white border-2 border-black hover:bg-white hover:text-black py-3">
                      Купить
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-8 border-black aged-paper shadow-xl p-6 text-center">
            <div className="border-4 border-black p-4">
              <Icon name="Info" size={32} className="mx-auto mb-2" />
              <div className="text-xs font-body uppercase tracking-widest">
                Все средства идут на развитие и поддержку сервера • Спасибо за вашу поддержку!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;