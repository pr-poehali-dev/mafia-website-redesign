import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen pt-[240px] pb-16 newspaper-texture"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="border-4 border-black bg-white mb-6">
            <div className="border-b-4 border-black p-4 bg-black text-white text-center">
              <h2 className="text-4xl md:text-5xl font-headline font-bold leading-tight uppercase">
                МАФИЯ ХАУС ОТКРЫВАЕТ ДВЕРИ ДЛЯ НОВОБРАНЦЕВ
              </h2>
              <div className="text-xs font-body mt-2 uppercase tracking-wider">
                Эксклюзивный игровой опыт • Вступай в семью прямо сейчас
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-0">
              <div className="lg:col-span-2 p-6 border-r-4 border-black">
                <div className="columns-2 gap-6 text-justify font-body text-sm leading-relaxed mb-6">
                  <p className="mb-3">
                    <span className="float-left text-6xl font-headline leading-none mr-2 mt-1">В</span>
                    эпоху сухого закона, когда виски ценится на вес золота, а честь семьи дороже жизни, открывается уникальная возможность стать частью легендарной организации.
                  </p>
                  <p className="mb-3">
                    Мафия Хаус — это не просто сервер, это целый мир, где каждое решение имеет последствия, каждый союз может быть предательством, а каждая сделка заключается рукопожатием и взглядом в глаза.
                  </p>
                  <p className="mb-3">
                    Более 250 игроков уже присоединились к семьям, контролирующим районы города. Подпольные казино, нелегальная торговля, разборки с конкурентами — всё это ждёт тех, кто готов рискнуть.
                  </p>
                  <p className="mb-3">
                    Создавай свою репутацию, заводи союзников, веди бизнес и защищай территорию семьи. Здесь каждый день — новая глава в истории преступного мира.
                  </p>
                </div>

                <div className="border-4 border-black bg-[#F5E6D0] p-4 text-center">
                  <div className="text-2xl font-headline uppercase mb-1">⚠ Внимание!</div>
                  <div className="text-xs uppercase tracking-wider">
                    Предательство карается смертью • Честь превыше всего
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="border-2 border-black p-3">
                  <img 
                    src="https://cdn.poehali.dev/projects/cb4b7b13-739f-47b7-b656-8e116473ab1f/files/fa40f034-dcd1-4569-a3b1-ee4b25251f3c.jpg" 
                    alt="Члены организации"
                    className="w-full aspect-square object-cover old-photo border-2 border-black mb-2"
                  />
                  <div className="text-[10px] font-body text-center italic border-t border-black pt-1">
                    Рис. 1 — Члены организации у штаб-квартиры, около 1925
                  </div>
                </div>

                <div className="border-2 border-black bg-black text-white p-4 text-center">
                  <div className="text-3xl font-headline mb-1">250+</div>
                  <div className="text-xs uppercase tracking-wider">Активных членов</div>
                </div>

                <div className="border-2 border-black bg-white p-3">
                  <div className="text-center font-headline uppercase text-xs mb-2 border-b border-black pb-1">
                    Сводка погоды
                  </div>
                  <div className="text-[10px] font-body text-center leading-tight">
                    Переменная облачность с вероятностью перестрелок. Температура: жарко. Атмосфера: напряжённая.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="border-4 border-black bg-white p-4">
              <div className="border-b-2 border-black pb-2 mb-3 text-center">
                <h3 className="text-lg font-headline uppercase">
                  Еженедельная сводка
                </h3>
              </div>
              <div className="font-body text-xs leading-relaxed space-y-2">
                <div className="flex justify-between border-b border-black pb-1">
                  <span>Казино операции</span>
                  <span className="font-headline">127</span>
                </div>
                <div className="flex justify-between border-b border-black pb-1">
                  <span>Разборки с конкурентами</span>
                  <span className="font-headline">43</span>
                </div>
                <div className="flex justify-between border-b border-black pb-1">
                  <span>Новобранцы</span>
                  <span className="font-headline">89</span>
                </div>
                <div className="flex justify-between border-b border-black pb-1">
                  <span>Контрабанда</span>
                  <span className="font-headline">156</span>
                </div>
              </div>
            </div>

            <div className="border-4 border-black bg-black text-white p-4 flex flex-col justify-center items-center text-center">
              <div className="text-xs uppercase tracking-[0.2em] mb-2">Специальное предложение</div>
              <div className="text-2xl font-headline uppercase mb-3 leading-tight">
                Вступи в семью<br/>на этой неделе
              </div>
              <Button 
                className="bg-white text-black hover:bg-[#F5E6D0] font-headline uppercase tracking-wider border-2 border-white text-sm"
              >
                Вступить сейчас
              </Button>
            </div>

            <div className="border-4 border-black bg-white p-4">
              <div className="border-b-2 border-black pb-2 mb-3 text-center">
                <h3 className="text-lg font-headline uppercase">
                  Территории
                </h3>
              </div>
              <div className="font-body text-xs leading-relaxed space-y-2">
                <div className="flex justify-between border-b border-black pb-1">
                  <span>Центральный район</span>
                  <span className="font-headline">Корлеоне</span>
                </div>
                <div className="flex justify-between border-b border-black pb-1">
                  <span>Восточная часть</span>
                  <span className="font-headline">Лучано</span>
                </div>
                <div className="flex justify-between border-b border-black pb-1">
                  <span>Доки</span>
                  <span className="font-headline">Дженовезе</span>
                </div>
                <div className="flex justify-between border-b border-black pb-1">
                  <span>Казино квартал</span>
                  <span className="font-headline">Гамбино</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t-4 border-b-4 border-black py-3 bg-white">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="text-center">
                <div className="text-3xl font-headline">1920</div>
                <div className="text-xs uppercase tracking-wider">Эпоха</div>
              </div>
              <div className="w-px h-10 bg-black" />
              <div className="text-center">
                <div className="text-3xl font-headline">24/7</div>
                <div className="text-xs uppercase tracking-wider">Онлайн</div>
              </div>
              <div className="w-px h-10 bg-black" />
              <div className="text-center">
                <div className="text-3xl font-headline">RU/EN</div>
                <div className="text-xs uppercase tracking-wider">Языки</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
