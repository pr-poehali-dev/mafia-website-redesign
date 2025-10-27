import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen pt-[240px] pb-16 newspaper-texture"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="border-8 border-black aged-paper mb-8 shadow-2xl transform hover:scale-[1.01] transition-transform duration-300">
            <div className="border-b-8 border-black p-6 bg-gradient-to-r from-black via-zinc-900 to-black text-white text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
              <h2 className="text-5xl md:text-6xl font-headline font-black leading-tight uppercase tracking-tight relative z-10">
                МАФИЯ ХАУС
              </h2>
              <div className="text-2xl font-headline mt-2 text-amber-400 uppercase">
                Империя начинается здесь
              </div>
              <div className="text-xs font-body mt-3 uppercase tracking-widest text-amber-200">
                🔥 Эксклюзивный игровой опыт • Вступай в семью прямо сейчас 🔥
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-0">
              <div className="lg:col-span-2 p-8 border-r-8 border-black bg-gradient-to-br from-[#F5E6D0] via-[#EDD9B7] to-[#E5D3A8]">
                <div className="columns-2 gap-8 text-justify font-body text-base leading-relaxed mb-8">
                  <div className="relative">
                    <span className="float-left text-8xl font-gothic leading-none mr-3 mt-2 text-[#8B0000]">В</span>
                    <p className="mb-4">
                      эпоху сухого закона, когда виски ценится на вес золота, а честь семьи дороже жизни, открывается уникальная возможность стать частью легендарной организации.
                    </p>
                  </div>
                  <p className="mb-4">
                    <strong className="text-[#8B0000]">Мафия Хаус</strong> — это не просто сервер, это целый мир, где каждое решение имеет последствия, каждый союз может быть предательством, а каждая сделка заключается рукопожатием и взглядом в глаза.
                  </p>
                  <p className="mb-4">
                    Более <strong>250 игроков</strong> уже присоединились к семьям, контролирующим районы города. Подпольные казино, нелегальная торговля, разборки с конкурентами — всё это ждёт тех, кто готов рискнуть.
                  </p>
                  <p className="mb-4">
                    Создавай свою репутацию, заводи союзников, веди бизнес и защищай территорию семьи. Здесь каждый день — новая глава в истории преступного мира 1920-х годов.
                  </p>
                </div>

                <div className="border-8 border-[#8B0000] bg-gradient-to-r from-red-700 via-red-800 to-red-900 p-6 text-white text-center vintage-stamp relative">
                  <div className="absolute -top-2 -right-2 w-12 h-12 border-4 border-white bg-black rounded-full flex items-center justify-center">
                    <Icon name="Skull" size={24} className="text-white" />
                  </div>
                  <div className="text-3xl font-headline uppercase mb-2">⚠ Внимание! ⚠</div>
                  <div className="text-sm uppercase tracking-widest border-t-2 border-b-2 border-white py-2">
                    Предательство карается смертью • Честь превыше всего
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4 bg-gradient-to-b from-[#E5D3A8] to-[#D2B48C]">
                <div className="border-4 border-black photo-border transform -rotate-2 hover:rotate-0 transition-transform">
                  <img 
                    src="https://cdn.poehali.dev/projects/cb4b7b13-739f-47b7-b656-8e116473ab1f/files/fa40f034-dcd1-4569-a3b1-ee4b25251f3c.jpg" 
                    alt="Члены организации"
                    className="w-full aspect-square object-cover old-photo"
                  />
                  <div className="bg-white border-t-4 border-black p-2">
                    <div className="text-xs font-headline text-center uppercase">
                      Рис. 1 — Основатели, 1925
                    </div>
                  </div>
                </div>

                <div className="border-4 border-black bg-gradient-to-br from-black to-zinc-800 text-amber-400 p-6 text-center shadow-xl">
                  <Icon name="Users" size={48} className="mx-auto mb-2" />
                  <div className="text-5xl font-headline mb-1">250+</div>
                  <div className="text-xs uppercase tracking-widest text-white">Активных членов семьи</div>
                </div>

                <div className="border-4 border-black aged-paper p-4">
                  <div className="text-center font-headline uppercase text-sm mb-3 border-b-2 border-black pb-2">
                    📰 Экстренный выпуск
                  </div>
                  <div className="text-xs font-body text-center leading-relaxed italic">
                    "Переменная облачность с высокой вероятностью разборок. Температура: жарко. Атмосфера: крайне напряжённая. Рекомендуется держать оружие наготове."
                  </div>
                  <div className="text-[10px] text-center mt-2 border-t border-black pt-1">
                    — Метеобюро, 26 октября 1925
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border-6 border-black aged-paper shadow-xl transform hover:-translate-y-1 transition-all">
              <div className="border-b-4 border-black p-4 bg-black text-amber-400 text-center">
                <Icon name="TrendingUp" size={32} className="mx-auto mb-2" />
                <h3 className="text-xl font-headline uppercase">
                  Еженедельная сводка
                </h3>
              </div>
              <div className="p-5 font-body text-sm leading-relaxed space-y-3">
                <div className="flex justify-between items-center border-b-2 border-black pb-2">
                  <span className="flex items-center gap-2">
                    <Icon name="DollarSign" size={16} />
                    Казино операции
                  </span>
                  <span className="font-headline text-xl text-[#8B0000]">127</span>
                </div>
                <div className="flex justify-between items-center border-b-2 border-black pb-2">
                  <span className="flex items-center gap-2">
                    <Icon name="Swords" size={16} />
                    Разборки
                  </span>
                  <span className="font-headline text-xl text-[#8B0000]">43</span>
                </div>
                <div className="flex justify-between items-center border-b-2 border-black pb-2">
                  <span className="flex items-center gap-2">
                    <Icon name="UserPlus" size={16} />
                    Новобранцы
                  </span>
                  <span className="font-headline text-xl text-green-700">+89</span>
                </div>
                <div className="flex justify-between items-center border-b-2 border-black pb-2">
                  <span className="flex items-center gap-2">
                    <Icon name="Package" size={16} />
                    Контрабанда
                  </span>
                  <span className="font-headline text-xl text-[#8B0000]">156</span>
                </div>
              </div>
            </div>

            <div className="border-6 border-amber-600 bg-gradient-to-br from-amber-50 via-amber-100 to-yellow-200 shadow-2xl flex flex-col justify-center items-center text-center p-8 relative overflow-hidden transform hover:scale-105 transition-all">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-32 h-32 border-8 border-amber-400 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 border-8 border-amber-400 rounded-full translate-x-1/2 translate-y-1/2"></div>
              </div>
              <Icon name="Crown" size={56} className="mb-3 text-amber-600 relative z-10" />
              <div className="text-xs uppercase tracking-[0.3em] mb-3 font-bold text-amber-800 relative z-10">⭐ Специальное предложение ⭐</div>
              <div className="text-3xl font-headline uppercase mb-5 leading-tight text-black relative z-10">
                Вступи в семью<br/>на этой неделе
              </div>
              <Button 
                className="bg-gradient-to-r from-black to-zinc-800 text-amber-400 hover:from-zinc-800 hover:to-black font-headline uppercase tracking-wider border-4 border-black text-base px-8 py-6 shadow-xl relative z-10"
              >
                Вступить сейчас →
              </Button>
            </div>

            <div className="border-6 border-black aged-paper shadow-xl transform hover:-translate-y-1 transition-all">
              <div className="border-b-4 border-black p-4 bg-[#8B0000] text-white text-center">
                <Icon name="Map" size={32} className="mx-auto mb-2" />
                <h3 className="text-xl font-headline uppercase">
                  Территории
                </h3>
              </div>
              <div className="p-5 font-body text-sm leading-relaxed space-y-3">
                <div className="flex justify-between items-center border-b-2 border-black pb-2">
                  <span className="flex items-center gap-2">
                    <Icon name="Building" size={16} />
                    Центр
                  </span>
                  <span className="font-headline text-base">Корлеоне</span>
                </div>
                <div className="flex justify-between items-center border-b-2 border-black pb-2">
                  <span className="flex items-center gap-2">
                    <Icon name="Warehouse" size={16} />
                    Восток
                  </span>
                  <span className="font-headline text-base">Лучано</span>
                </div>
                <div className="flex justify-between items-center border-b-2 border-black pb-2">
                  <span className="flex items-center gap-2">
                    <Icon name="Anchor" size={16} />
                    Доки
                  </span>
                  <span className="font-headline text-base">Дженовезе</span>
                </div>
                <div className="flex justify-between items-center border-b-2 border-black pb-2">
                  <span className="flex items-center gap-2">
                    <Icon name="Coins" size={16} />
                    Казино
                  </span>
                  <span className="font-headline text-base">Гамбино</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t-8 border-b-8 border-black py-6 aged-paper shadow-lg">
            <div className="flex items-center justify-center gap-12 flex-wrap">
              <div className="text-center transform hover:scale-110 transition-transform">
                <Icon name="Calendar" size={32} className="mx-auto mb-2 text-[#8B0000]" />
                <div className="text-4xl font-headline text-black">1920</div>
                <div className="text-xs uppercase tracking-wider font-bold">Эпоха запрета</div>
              </div>
              <div className="w-1 h-16 bg-black" />
              <div className="text-center transform hover:scale-110 transition-transform">
                <Icon name="Clock" size={32} className="mx-auto mb-2 text-[#8B0000]" />
                <div className="text-4xl font-headline text-black">24/7</div>
                <div className="text-xs uppercase tracking-wider font-bold">Всегда онлайн</div>
              </div>
              <div className="w-1 h-16 bg-black" />
              <div className="text-center transform hover:scale-110 transition-transform">
                <Icon name="Languages" size={32} className="mx-auto mb-2 text-[#8B0000]" />
                <div className="text-4xl font-headline text-black">RU/EN</div>
                <div className="text-xs uppercase tracking-wider font-bold">Два языка</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
