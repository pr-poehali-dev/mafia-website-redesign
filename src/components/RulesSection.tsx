import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const RulesSection = () => {
  const rules = [
    {
      id: '1',
      title: 'Кодекс чести семьи',
      icon: 'Shield',
      content: 'Преданность семье превыше всего. Предательство карается смертью. Уважай старших по рангу и выполняй приказы босса без вопросов. Омерта — закон молчания. Никогда не сотрудничай с властями. Защищай честь семьи любой ценой.'
    },
    {
      id: '2',
      title: 'Правила ролевой игры',
      icon: 'Users',
      content: 'Играйте свою роль достойно. Запрещен метагейминг, повергейминг и использование OOC информации в IC. Уважайте других игроков. Все действия должны иметь RP обоснование. Общение в голосовом чате обязательно на русском языке.'
    },
    {
      id: '3',
      title: 'Территории и влияние',
      icon: 'Map',
      content: 'Каждая семья контролирует свою территорию. Вторжение на чужую территорию требует веских причин. Войны объявляются только через администрацию. Захват территорий происходит по расписанию. Нейтральные зоны неприкосновенны.'
    },
    {
      id: '4',
      title: 'Экономика и бизнес',
      icon: 'DollarSign',
      content: 'Контрабанда алкоголя, казино, рэкет - источники дохода. Все сделки должны быть отыграны. Запрещено использование багов для обогащения. Отмывание денег через легальный бизнес приветствуется. Взяточничество властей разрешено.'
    },
    {
      id: '5',
      title: 'Конфликты и PvP',
      icon: 'Swords',
      content: 'Перестрелки разрешены только при наличии RP причины. Обязательна озвучка действий. Нельзя убивать без предупреждения. После смерти забываете последние 15 минут (NLR). Запрещено возвращаться на место смерти в течение 30 минут.'
    },
    {
      id: '6',
      title: 'Администрация сервера',
      icon: 'Gavel',
      content: 'Решения администрации окончательны. Жалобы принимаются на форуме. Неуважение к администрации карается баном. Следуйте указаниям модераторов. Обман администрации приведёт к перманентному бану аккаунта.'
    },
  ];

  return (
    <section className="min-h-screen pt-[280px] pb-16 newspaper-texture">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="border-t-8 border-b-8 border-black py-6 mb-8 aged-paper text-center shadow-xl">
            <div className="flex items-center justify-center gap-4 mb-3">
              <Icon name="Scale" size={48} className="text-[#8B0000]" />
              <h2 className="text-6xl font-headline uppercase tracking-wider">
                Правила сервера
              </h2>
              <Icon name="Scale" size={48} className="text-[#8B0000]" />
            </div>
            <div className="text-sm uppercase tracking-widest mt-2 border-t-2 border-b-2 border-black py-2 inline-block px-8">
              📜 Официальный кодекс чести • Обязательно к прочтению 📜
            </div>
          </div>

          <div className="border-8 border-[#8B0000] bg-gradient-to-br from-red-700 via-red-800 to-red-900 mb-8 shadow-2xl vintage-stamp">
            <div className="border-8 border-amber-400 m-3 p-6 text-center bg-black/20">
              <Icon name="AlertTriangle" size={56} className="mx-auto mb-3 text-amber-300 animate-pulse" />
              <div className="text-3xl font-headline uppercase mb-3 text-white">
                ⚠ КРИТИЧЕСКИ ВАЖНО! ⚠
              </div>
              <div className="text-base font-body leading-relaxed text-amber-100 border-t-2 border-b-2 border-amber-400 py-3">
                Незнание правил не освобождает от ответственности. Перед началом игры обязательно ознакомьтесь со всеми правилами сервера. Нарушение может привести к немедленному бану аккаунта без права восстановления.
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 mb-8">
            <div className="lg:col-span-3 space-y-4">
              {rules.map((rule, index) => (
                <Accordion key={rule.id} type="single" collapsible>
                  <AccordionItem value={rule.id} className="border-6 border-black aged-paper shadow-lg hover:shadow-2xl transition-shadow">
                    <AccordionTrigger className="px-6 py-4 hover:bg-gradient-to-r hover:from-black hover:to-zinc-800 hover:text-amber-400 transition-all hover:no-underline">
                      <div className="flex items-center gap-4 w-full">
                        <div className="w-12 h-12 border-4 border-current flex items-center justify-center flex-shrink-0 bg-white text-black">
                          <span className="text-xl font-headline font-black">
                            {index + 1}
                          </span>
                        </div>
                        <Icon name={rule.icon as any} size={28} />
                        <span className="text-lg font-headline uppercase text-left tracking-wide">
                          {rule.title}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="border-t-4 border-black px-6 py-5 bg-gradient-to-br from-[#F5E6D0] to-[#E5D3A8]">
                      <p className="font-body text-base leading-relaxed text-justify pl-16">
                        {rule.content}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>

            <div className="space-y-6">
              <div className="border-6 border-black aged-paper shadow-xl transform -rotate-1 hover:rotate-0 transition-transform">
                <div className="photo-border">
                  <img 
                    src="https://cdn.poehali.dev/projects/cb4b7b13-739f-47b7-b656-8e116473ab1f/files/fa40f034-dcd1-4569-a3b1-ee4b25251f3c.jpg"
                    alt="Члены организации"
                    className="w-full aspect-square object-cover old-photo"
                  />
                </div>
                <div className="bg-white border-t-4 border-black p-3">
                  <div className="text-xs font-headline text-center uppercase">
                    Рис. 2 — Совет старейшин, 1925
                  </div>
                </div>
              </div>

              <div className="border-6 border-black aged-paper shadow-xl">
                <div className="border-b-4 border-black p-4 bg-gradient-to-r from-black to-zinc-800 text-amber-400 text-center">
                  <Icon name="CheckCircle" size={32} className="mx-auto mb-2" />
                  <h3 className="text-base font-headline uppercase">
                    Требования
                  </h3>
                </div>
                <div className="p-4 space-y-3 text-sm font-body">
                  <div className="border-b-2 border-black pb-2 flex items-center gap-2">
                    <Icon name="User" size={16} />
                    <div>
                      <div className="font-bold">Возраст:</div>
                      <div>От 18 лет</div>
                    </div>
                  </div>
                  <div className="border-b-2 border-black pb-2 flex items-center gap-2">
                    <Icon name="Mic" size={16} />
                    <div>
                      <div className="font-bold">Микрофон:</div>
                      <div>Обязателен</div>
                    </div>
                  </div>
                  <div className="border-b-2 border-black pb-2 flex items-center gap-2">
                    <Icon name="Languages" size={16} />
                    <div>
                      <div className="font-bold">Язык:</div>
                      <div>Русский / English</div>
                    </div>
                  </div>
                  <div className="border-b-2 border-black pb-2 flex items-center gap-2">
                    <Icon name="Gamepad2" size={16} />
                    <div>
                      <div className="font-bold">RedM:</div>
                      <div>Лицензия</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-6 border-[#8B0000] bg-gradient-to-br from-black to-zinc-900 text-white shadow-xl">
                <div className="p-5 text-center">
                  <Icon name="AlertOctagon" size={40} className="mx-auto mb-3 text-red-500" />
                  <div className="text-sm uppercase mb-3 tracking-wider text-amber-400 font-bold">Система наказаний</div>
                  <div className="space-y-2 text-xs">
                    <div className="border-b border-white/30 pb-2 flex items-center justify-between">
                      <span>1-е нарушение</span>
                      <span className="text-yellow-400 font-bold">⚠ Предупреждение</span>
                    </div>
                    <div className="border-b border-white/30 pb-2 flex items-center justify-between">
                      <span>2-е нарушение</span>
                      <span className="text-orange-400 font-bold">🚪 Кик</span>
                    </div>
                    <div className="border-b border-white/30 pb-2 flex items-center justify-between">
                      <span>3-е нарушение</span>
                      <span className="text-red-400 font-bold">⏱ Бан 24ч</span>
                    </div>
                    <div className="pt-1 flex items-center justify-between">
                      <span>4-е нарушение</span>
                      <span className="text-red-600 font-bold">🔨 Перманент</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-8 border-black aged-paper p-8 text-center shadow-2xl">
            <Icon name="BookOpen" size={48} className="mx-auto mb-4 text-[#8B0000]" />
            <div className="text-base uppercase tracking-wider mb-3 font-headline">
              📖 Полная версия правил 📖
            </div>
            <div className="text-sm font-body mb-5 max-w-2xl mx-auto leading-relaxed">
              Здесь представлены основные правила. Полную версию со всеми нюансами, примерами и исключениями можно найти на официальном форуме сервера.
            </div>
            <div className="inline-block border-4 border-black px-8 py-4 bg-black text-amber-400 hover:bg-zinc-800 transition-colors cursor-pointer shadow-lg transform hover:scale-105 transition-transform">
              <span className="font-headline uppercase tracking-wider text-base flex items-center gap-2">
                Читать на форуме
                <Icon name="ExternalLink" size={20} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RulesSection;