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
    <section className="min-h-screen pt-[240px] pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="border-t-4 border-b-4 border-black py-3 mb-6 bg-white text-center">
            <h2 className="text-5xl font-headline uppercase tracking-wider">
              Правила сервера
            </h2>
            <div className="text-xs uppercase tracking-widest mt-1">
              Официальный кодекс чести • Обязательно к прочтению
            </div>
          </div>

          <div className="border-4 border-black bg-red-700 text-white mb-6">
            <div className="border-4 border-white m-2 p-4 text-center">
              <Icon name="AlertTriangle" size={40} className="mx-auto mb-2" />
              <div className="text-xl font-headline uppercase mb-2">
                ⚠ Внимание!
              </div>
              <div className="text-sm font-body leading-relaxed">
                Незнание правил не освобождает от ответственности. Перед началом игры обязательно ознакомьтесь со всеми правилами сервера. Нарушение может привести к бану аккаунта.
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-4 mb-6">
            <div className="lg:col-span-3 space-y-3">
              {rules.map((rule, index) => (
                <Accordion key={rule.id} type="single" collapsible>
                  <AccordionItem value={rule.id} className="border-4 border-black bg-white">
                    <AccordionTrigger className="px-4 py-3 hover:bg-black hover:text-white transition-colors hover:no-underline">
                      <div className="flex items-center gap-3 w-full">
                        <div className="w-10 h-10 border-2 border-current flex items-center justify-center flex-shrink-0">
                          <span className="text-lg font-headline font-bold">
                            {index + 1}
                          </span>
                        </div>
                        <Icon name={rule.icon as any} size={20} />
                        <span className="text-base font-headline uppercase text-left">
                          {rule.title}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="border-t-2 border-black px-4 py-3 bg-white">
                      <p className="font-body text-sm leading-relaxed text-justify pl-14">
                        {rule.content}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>

            <div className="space-y-4">
              <div className="border-4 border-black bg-white p-3">
                <img 
                  src="https://cdn.poehali.dev/projects/cb4b7b13-739f-47b7-b656-8e116473ab1f/files/fa40f034-dcd1-4569-a3b1-ee4b25251f3c.jpg"
                  alt="Члены организации"
                  className="w-full aspect-square object-cover old-photo border-2 border-black mb-2"
                />
                <div className="text-[10px] font-body text-center italic border-t border-black pt-1">
                  Рис. 1 — Члены организации, около 1925
                </div>
              </div>

              <div className="border-4 border-black bg-white p-3">
                <div className="border-b-2 border-black pb-2 mb-2 text-center">
                  <h3 className="text-xs font-headline uppercase">
                    Требования
                  </h3>
                </div>
                <div className="space-y-2 text-xs font-body">
                  <div className="border-b border-black pb-1">
                    <div className="font-bold">Возраст:</div>
                    <div>От 18 лет</div>
                  </div>
                  <div className="border-b border-black pb-1">
                    <div className="font-bold">Микрофон:</div>
                    <div>Обязателен</div>
                  </div>
                  <div className="border-b border-black pb-1">
                    <div className="font-bold">Язык:</div>
                    <div>Русский / English</div>
                  </div>
                  <div className="border-b border-black pb-1">
                    <div className="font-bold">RedM:</div>
                    <div>Лицензия</div>
                  </div>
                </div>
              </div>

              <div className="border-4 border-black bg-black text-white p-3 text-center">
                <div className="text-xs uppercase mb-2">Наказания</div>
                <div className="space-y-1 text-[10px]">
                  <div className="border-b border-white pb-1">1-е нарушение: Предупреждение</div>
                  <div className="border-b border-white pb-1">2-е нарушение: Кик</div>
                  <div className="border-b border-white pb-1">3-е нарушение: Бан 24ч</div>
                  <div>4-е нарушение: Перманент</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-4 border-black bg-white p-4 text-center">
            <div className="text-xs uppercase tracking-wider mb-2">
              Полная версия правил
            </div>
            <div className="text-sm font-body mb-3">
              Здесь представлены основные правила. Полную версию со всеми нюансами можно найти на форуме сервера.
            </div>
            <div className="inline-block border-2 border-black px-6 py-2 hover:bg-black hover:text-white transition-colors cursor-pointer">
              <span className="font-headline uppercase tracking-wider text-sm">
                Читать на форуме →
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
