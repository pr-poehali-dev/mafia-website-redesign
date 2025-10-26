import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
    <section className="min-h-screen pt-32 pb-16 bg-mafia-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Icon name="ScrollText" className="text-mafia-red" size={40} />
            <h2 className="text-5xl font-display font-black text-white tracking-wider">ПРАВИЛА</h2>
          </div>

          <Card className="mb-8 bg-mafia-red/20 border-mafia-red">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Icon name="AlertTriangle" className="text-mafia-red" size={32} />
                <CardTitle className="text-2xl font-display font-black text-white tracking-wider">ВАЖНО</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-mafia-cream font-body text-base leading-relaxed">
                Незнание правил не освобождает от ответственности. Перед началом игры обязательно ознакомьтесь со всеми правилами сервера. Нарушение может привести к бану аккаунта.
              </CardDescription>
            </CardContent>
          </Card>

          <Accordion type="single" collapsible className="space-y-4">
            {rules.map((rule) => (
              <AccordionItem 
                key={rule.id} 
                value={rule.id}
                className="border border-mafia-red/30 rounded-lg overflow-hidden bg-mafia-gray"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-mafia-red/10 transition-colors hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-mafia-red/20 flex items-center justify-center">
                      <Icon name={rule.icon as any} className="text-mafia-red" size={24} />
                    </div>
                    <span className="text-xl font-display font-black text-white text-left tracking-wider">
                      {rule.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2">
                  <p className="text-mafia-cream font-body text-base leading-relaxed ml-16">
                    {rule.content}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Card className="mt-8 bg-mafia-gray border-mafia-red">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Icon name="FileText" className="text-mafia-red" size={32} />
                <CardTitle className="text-2xl font-display font-black text-white tracking-wider">ПОЛНЫЕ ПРАВИЛА</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-mafia-cream font-body text-base leading-relaxed mb-4">
                Здесь представлены основные правила. Полную версию со всеми нюансами можно найти на форуме сервера.
              </CardDescription>
              <div className="flex items-center gap-2 text-mafia-red font-body hover:gap-4 transition-all cursor-pointer">
                <span>Читать полные правила на форуме</span>
                <Icon name="ExternalLink" size={20} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RulesSection;