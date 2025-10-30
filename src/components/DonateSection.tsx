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
    <section className="min-h-screen pt-[280px] pb-16 newspaper-texture torn-edge-top crumpled-paper burn-mark burn-mark-top-right ink-stain ink-stain-bottom-right">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="border-8 border-mafia-sepia aged-paper shadow-2xl mb-12 transform -rotate-1">
            <div className="border-4 border-mafia-sepia m-2 aged-paper p-6 text-center">
              <div className="border-2 border-mafia-sepia p-4">
                <Icon name="DollarSign" size={48} className="mx-auto mb-3 text-mafia-gray" />
                <h2 className="text-5xl font-headline uppercase tracking-wider mb-2">
                  Донат
                </h2>
                <div className="text-sm uppercase tracking-widest border-t border-b border-mafia-sepia py-2 my-3">
                  Поддержите развитие сервера
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="border-6 border-mafia-sepia aged-paper shadow-xl transform rotate-1">
              <div className="border-b-4 border-mafia-sepia p-3 bg-mafia-gray text-mafia-cream text-center">
                <div className="text-xl font-headline uppercase tracking-wider">Информация</div>
              </div>
              <div className="p-6">
                <div className="space-y-4 font-body text-sm text-mafia-gray">
                  <div className="border-2 border-mafia-sepia p-3 aged-paper">
                    <div className="font-bold mb-1 text-mafia-gray">Курс валют:</div>
                    <div className="text-2xl font-headline text-mafia-gray">4₽ = 1$</div>
                  </div>
                  <p className="leading-relaxed text-mafia-gray">
                    Возникли проблемы с пополнением? Напишите в Discord нашего сервера.
                  </p>
                  <div className="border-t-2 border-mafia-sepia pt-3 space-y-2 text-mafia-gray">
                    <div className="flex items-center gap-2">
                      <Icon name="Receipt" size={16} className="text-mafia-gray" />
                      <span className="uppercase text-xs tracking-wide text-mafia-gray">Договор оферты</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Shield" size={16} className="text-mafia-gray" />
                      <span className="uppercase text-xs tracking-wide text-mafia-gray">Безопасность</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-6 border-mafia-sepia aged-paper shadow-xl transform -rotate-1">
              <div className="border-b-4 border-mafia-sepia p-3 bg-mafia-gray text-mafia-cream text-center">
                <div className="text-xl font-headline uppercase tracking-wider">Как пополнить?</div>
              </div>
              <div className="p-6">
                <p className="text-sm font-body mb-4 leading-relaxed text-mafia-gray">
                  Для пополнения пожалуйста введите сумму, после оплаты вы получите код, 
                  который необходимо активировать на любом почтампе
                </p>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs uppercase tracking-wide font-bold block mb-2 text-mafia-gray">
                      Сумма пополнения
                    </label>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Введите сумму в рублях"
                      className="w-full border-4 border-mafia-sepia p-3 font-headline text-lg focus:outline-none focus:ring-2 focus:ring-black aged-paper text-mafia-gray"
                    />
                  </div>
                  <Button className="w-full font-headline uppercase tracking-wider bg-mafia-gray text-mafia-cream border-4 border-mafia-sepia hover:aged-paper hover:text-mafia-gray text-lg py-6">
                    Пополнить
                  </Button>
                  <p className="font-body text-center leading-tight text-sm text-mafia-gray-light">
                    Нажимая кнопку "Пополнить" вы автоматически соглашаетесь с договором оферты.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t-4 border-b-4 border-mafia-sepia py-3 mb-8 aged-paper text-center">
            <h3 className="text-4xl font-headline uppercase tracking-wider text-mafia-gray">Наборы</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`relative ${pkg.popular ? 'transform -rotate-2 scale-105' : index % 2 === 0 ? 'transform rotate-1' : 'transform -rotate-1'}`}
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-b from-zinc-700 to-zinc-900 rounded-full shadow-lg z-10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-zinc-400 rounded-full"></div>
                </div>

                <div className={`border-6 border-mafia-sepia aged-paper shadow-2xl ${pkg.premium ? 'border-8 border-mafia-red' : ''}`}>
                  {pkg.popular && (
                    <div className="bg-mafia-red text-mafia-cream text-center py-2 border-b-4 border-mafia-sepia">
                      <span className="text-sm font-headline uppercase tracking-wider">
                        ★ Популярный выбор ★
                      </span>
                    </div>
                  )}

                  <div className="border-b-4 border-mafia-sepia p-4 aged-paper text-center">
                    <h4 className="text-3xl font-headline uppercase tracking-wide mb-3 text-mafia-gray">{pkg.name}</h4>
                    <div className="inline-block border-4 border-mafia-sepia aged-paper p-2">
                      <div className="text-sm line-through opacity-60 text-mafia-gray-light">{pkg.oldPrice} Ꝑ</div>
                      <div className="text-4xl font-headline font-black text-mafia-gray">{pkg.price} Ꝑ</div>
                    </div>
                  </div>

                  <div className="p-4 min-h-[400px]">
                    <div className="space-y-1 text-xs font-body text-mafia-gray">
                      {pkg.benefits.map((benefit, idx) => (
                        <div 
                          key={idx} 
                          className={`flex items-start gap-2 pb-1 ${benefit.startsWith('(') ? 'pl-4 text-[10px] italic opacity-80' : 'border-b border-mafia-sepia/20'}`}
                        >
                          {!benefit.startsWith('(') && (
                            <span className="flex-shrink-0 text-[#8B0000] font-black">•</span>
                          )}
                          <span className="flex-1 text-mafia-gray">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t-4 border-mafia-sepia p-4">
                    <Button className="w-full font-headline uppercase tracking-wider bg-mafia-gray text-mafia-cream border-2 border-mafia-sepia hover:bg-mafia-red hover:border-mafia-red text-base py-6">
                      Приобрести
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t-4 border-b-4 border-mafia-sepia py-3 mb-8 aged-paper text-center">
            <h3 className="text-4xl font-headline uppercase tracking-wider text-mafia-gray">Валюта и услуги</h3>
          </div>

          <div className="grid md:grid-cols-5 gap-6 mb-12">
            {currency.map((item, index) => (
              <div 
                key={index}
                className={`transform ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'}`}
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-to-b from-zinc-700 to-zinc-900 rounded-full shadow-lg z-10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full"></div>
                </div>

                <div className="border-4 border-mafia-sepia aged-paper shadow-xl relative">
                  <div className="border-b-2 border-mafia-sepia p-3 aged-paper text-center">
                    <div className="text-lg font-headline uppercase leading-tight text-mafia-gray">{item.name}</div>
                  </div>
                  <div className="p-3 text-center">
                    <div className="text-xs mb-2 font-body text-mafia-gray">{item.amount}</div>
                    <div className="text-[10px] line-through opacity-60 text-mafia-gray-light">{item.oldPrice} Ꝑ</div>
                    <div className="text-2xl font-headline font-black mb-3 text-mafia-gray">{item.price} Ꝑ</div>
                    <Button className="w-full font-headline uppercase text-[10px] bg-mafia-gray text-mafia-cream border-2 border-mafia-sepia hover:aged-paper hover:text-mafia-gray py-3">
                      Купить
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-8 border-mafia-sepia aged-paper shadow-xl p-6 text-center">
            <div className="border-4 border-mafia-sepia p-4">
              <Icon name="Info" size={32} className="mx-auto mb-2 text-mafia-gray" />
              <div className="text-xs font-body uppercase tracking-widest text-mafia-gray">
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