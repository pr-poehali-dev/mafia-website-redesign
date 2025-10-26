import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const RulesSection = () => {
  const rules = [
    {
      id: '1',
      title: 'Кодекс чести семьи',
      icon: 'Shield',
      content: 'Преданность семье превыше всего. Предательство карается смертью. Уважай старших по рангу и выполняй приказы босса без вопросов.'
    },
    {
      id: '2',
      title: 'Правила ролевой игры',
      icon: 'Users',
      content: 'Играйте свою роль достойно. Запрещен метагейминг, повергейминг и использование OOC информации в IC. Уважайте других игроков.'
    },
    {
      id: '3',
      title: 'Территории и влияние',
      icon: 'Map',
      content: 'Каждая семья контролирует свою территорию. Вторжение на чужую территорию требует веских причин. Войны объявляются только через администрацию.'
    },
    {
      id: '4',
      title: 'Экономика и бизнес',
      icon: 'DollarSign',
      content: 'Контрабанда алкоголя, казино, рэкет - источники дохода. Все сделки должны быть отыграны. Запрещено использование багов для обогащения.'
    },
    {
      id: '5',
      title: 'Конфликты и PvP',
      icon: 'Swords',
      content: 'Перестрелки разрешены только при наличии RP причины. Обязательна озвучка действий. Нельзя убивать без предупреждения.'
    },
    {
      id: '6',
      title: 'Администрация сервера',
      icon: 'Gavel',
      content: 'Решения администрации окончательны. Жалобы принимаются на форуме. Неуважение к администрации карается баном.'
    },
  ];

  return (
    <section className="min-h-screen pt-[240px] pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="border-t-4 border-b-4 border-black py-3 mb-8 bg-white text-center">
            <h2 className="text-5xl font-headline uppercase tracking-wider">
              Правила сервера
            </h2>
            <div className="text-xs uppercase tracking-widest mt-1">
              Официальный кодекс чести • Обязательно к прочтению
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2 space-y-4">
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
                        <span className="text-lg font-headline uppercase text-left">
                          {rule.title}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="border-t-2 border-black px-4 py-4 bg-white">
                      <p className="font-body text-sm leading-relaxed text-justify">
                        {rule.content}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>

            <div className="space-y-6">
              <div className="border-4 border-black bg-red-700 text-white p-4">
                <div className="border-2 border-white p-3 text-center">
                  <Icon name="AlertTriangle" size={32} className="mx-auto mb-2" />
                  <div className="text-sm font-headline uppercase mb-2">
                    Внимание!
                  </div>
                  <div className="text-xs font-body leading-relaxed">
                    Незнание правил не освобождает от ответственности
                  </div>
                </div>
              </div>

              <div className="border-4 border-black bg-white p-4">
                <img 
                  src="https://cdn.poehali.dev/projects/cb4b7b13-739f-47b7-b656-8e116473ab1f/files/fa40f034-dcd1-4569-a3b1-ee4b25251f3c.jpg"
                  alt="Члены организации"
                  className="w-full aspect-square object-cover old-photo border-2 border-black mb-2"
                />
                <div className="text-[10px] font-body text-center italic border-t-2 border-black pt-2">
                  Рис. 1 — Члены организации, сфотографированы у штаб-квартиры, около 1925 года
                </div>
              </div>

              <div className="border-4 border-black bg-white p-4">
                <div className="border-b-2 border-black pb-2 mb-3 text-center">
                  <h3 className="text-sm font-headline uppercase tracking-wider">
                    Важная информация
                  </h3>
                </div>
                <div className="space-y-2 text-xs font-body">
                  <div className="border-b border-black pb-2">
                    <div className="font-bold">Возраст:</div>
                    <div>От 18 лет</div>
                  </div>
                  <div className="border-b border-black pb-2">
                    <div className="font-bold">Микрофон:</div>
                    <div>Обязателен</div>
                  </div>
                  <div className="border-b border-black pb-2">
                    <div className="font-bold">Язык:</div>
                    <div>Русский / English</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-4 border-black bg-white p-6 text-center">
            <div className="text-xs uppercase tracking-wider mb-2">
              Полная версия правил
            </div>
            <div className="text-sm font-body mb-4">
              Здесь представлены основные правила. Полную версию со всеми нюансами можно найти на форуме сервера.
            </div>
            <div className="inline-block border-2 border-black px-6 py-2 hover:bg-black hover:text-white transition-colors cursor-pointer">
              <span className="font-headline uppercase tracking-wider">
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
