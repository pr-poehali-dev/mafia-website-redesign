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
    <section className="min-h-screen pt-32 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Wanted Poster Style Header */}
          <div className="border-8 border-black bg-white p-8 mb-12 relative">
            {/* Corner decorations */}
            <div className="absolute top-2 left-2 w-12 h-12 border-t-4 border-l-4 border-black"></div>
            <div className="absolute top-2 right-2 w-12 h-12 border-t-4 border-r-4 border-black"></div>
            <div className="absolute bottom-2 left-2 w-12 h-12 border-b-4 border-l-4 border-black"></div>
            <div className="absolute bottom-2 right-2 w-12 h-12 border-b-4 border-r-4 border-black"></div>
            
            <div className="text-center border-4 border-black p-6">
              <div className="text-sm font-display font-black uppercase tracking-widest mb-2">
                Официальный документ
              </div>
              <h2 className="text-7xl font-headline font-black text-black uppercase tracking-tighter mb-2">
                ПРАВИЛА
              </h2>
              <div className="h-1 bg-black my-4"></div>
              <div className="text-sm font-body uppercase tracking-widest">
                Кодекс чести • Est. 1925
              </div>
            </div>
          </div>

          {/* Warning Notice - Wanted Poster Style */}
          <div className="bg-red-600 border-8 border-black mb-8 relative">
            <div className="bg-white border-4 border-black m-2 p-6">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Icon name="AlertTriangle" className="text-black" size={48} />
                <h3 className="text-4xl font-headline font-black text-black tracking-tighter uppercase">
                  ВАЖНО!
                </h3>
                <Icon name="AlertTriangle" className="text-black" size={48} />
              </div>
              <div className="border-y-4 border-black py-4">
                <p className="text-black font-body text-lg leading-relaxed text-center">
                  Незнание правил не освобождает от ответственности. Перед началом игры обязательно ознакомьтесь со всеми правилами сервера. Нарушение может привести к бану аккаунта.
                </p>
              </div>
            </div>
          </div>

          {/* Rules Accordion - Legal Document Style */}
          <Accordion type="single" collapsible className="space-y-6">
            {rules.map((rule, index) => (
              <AccordionItem 
                key={rule.id} 
                value={rule.id}
                className="border-4 border-black bg-white"
              >
                <AccordionTrigger className="px-6 py-6 hover:bg-black hover:text-white transition-colors hover:no-underline group">
                  <div className="flex items-center gap-4 w-full">
                    {/* Article number - vintage style */}
                    <div className="w-16 h-16 border-4 border-black bg-white group-hover:bg-black group-hover:text-white group-hover:border-white flex items-center justify-center flex-shrink-0 transition-colors">
                      <span className="text-2xl font-headline font-black">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 flex-1">
                      <Icon name={rule.icon as any} className="group-hover:text-white" size={24} />
                      <span className="text-xl font-display font-black uppercase text-left tracking-wider">
                        {rule.title}
                      </span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="border-t-4 border-black">
                  <div className="px-6 py-6 bg-white">
                    {/* Decorative opener */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-1 bg-black"></div>
                      <div className="w-4 h-1 bg-black"></div>
                    </div>
                    
                    <p className="text-black font-body text-lg leading-relaxed ml-0 pl-20">
                      {rule.content}
                    </p>
                    
                    {/* Decorative closer */}
                    <div className="flex items-center gap-2 mt-4 justify-end">
                      <div className="w-4 h-1 bg-black"></div>
                      <div className="w-8 h-1 bg-black"></div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Full Rules Notice - Official Document Style */}
          <div className="mt-12 bg-white border-8 border-black p-8">
            <div className="border-4 border-black p-6">
              <div className="flex items-center gap-4 mb-6 pb-4 border-b-4 border-black">
                <Icon name="FileText" className="text-black" size={48} />
                <h3 className="text-3xl font-headline font-black text-black tracking-tighter uppercase">
                  Полные правила
                </h3>
              </div>
              
              <p className="text-black font-body text-lg leading-relaxed mb-6">
                Здесь представлены основные правила. Полную версию со всеми нюансами можно найти на форуме сервера.
              </p>
              
              <div className="border-4 border-black bg-white hover:bg-black hover:text-white transition-colors cursor-pointer group">
                <div className="flex items-center justify-center gap-3 py-4">
                  <span className="font-display font-black uppercase tracking-wider">
                    Читать полные правила на форуме
                  </span>
                  <Icon name="ExternalLink" size={20} className="group-hover:text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Signature - official document style */}
          <div className="mt-8 text-center border-t-4 border-black pt-6">
            <p className="font-body text-black text-sm uppercase tracking-widest">
              Утверждено администрацией • Mafia House • 1925
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
