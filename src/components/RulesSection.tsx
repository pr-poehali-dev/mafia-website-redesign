import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const RulesSection = () => {
  const [activeCategory, setActiveCategory] = useState('admin');

  const adminRules = {
    mainProvisions: [
      'Запрещено отменять или заменять наказания, выданные другим администратором. Все наказания выдаются строго по регламенту.',
      'Запрещено принимать во внимание доказательства, присланные в личные сообщения и прочие неофициальные каналы. Исключения: доказательства нарушений, полученные от медиа-партнёров в разделе "Media", а также материалы по фактам использования стороннего ПО или торговли валютой/услугами.',
      'Багоюз, торговля валютой, услугами или предметами — основание для немедленного снятия.',
      'Администратор обязан хранить доказательства по каждому наказанию не менее 48 часов.',
      'Запрещено демонстрировать превосходство над игроками и злоупотреблять своим статусом.',
      'Запрещено спавнить объекты, технику или сущности в людных местах без обоснования. Разрешено: при помощи игроку, записи роликов, организации мероприятий.',
      'Вмешательство в RP-процессы запрещено. Исключение — куратор в роли массовки.',
      'Администратор обязан выдавать наказания беспристрастно, без личных симпатий и антипатий.',
      'Незнание правил сервера не освобождает администратора от ответственности.',
      'Запрещено разглашать внутреннюю информацию проекта — материалы Discord, переписок и прочее. Нарушение — немедленное снятие.',
      'Ненормативная лексика, как в IC, так и в OOC-контексте — запрещена.',
      'Угрозы в адрес игроков со стороны администратора — основание для немедленного снятия.',
      'Запрещено давать некkorректные ответы в тикете.',
      'Выдача игрокам HP, оружия, транспорта и т.д. без обоснования — строго запрещена.',
    ],
    gameProperty: [
      'Администратор имеет право владеть домом, одеждой и иным личным имуществом.',
      'Владение бизнесом запрещено. Исключение: по прямому поручению главного администратора или руководства проекта.',
      'Покупка, продажа или дарение имущества от имени администрации без согласования — запрещено.',
      'Проведение розыгрышей или передача денег/вещей игрокам — только с разрешения ГА.',
    ],
    behaviorNorms: [
      'Администрации запрещено занимать руководящие должности во фракциях.',
      'Жалоба на администратора рассматривается на общих основаниях, как на любого игрока. Пример: если администратор нарушил RP на втором слоте — он получает наказание на основном админ-слоте.',
      'Запрещено использовать привилегии для давления, угроз, манипуляций или навязывания своего мнения. Даже разговор о наказаниях, оценках игроков или авторитарный тон — недопустимы.',
    ],
    curatorDuties: [
      'Контролировать активность лидера и общей работы фракции.',
      'Следить за количеством наборов и их корректностью.',
      'Принимать и рассматривать жалобы на лидеров.',
      'Контролировать склад фракции.',
      'Модерировать фракционный Discord-чат.',
      'Консультировать лидеров, отвечать на вопросы.',
      'Владеть полной информацией о состоянии фракции, своевременно доносить её до руководства.',
    ],
    conclusion: [
      'Вся администрация подчиняется регламенту.',
      'Нарушение любого из вышеуказанных пунктов влечёт последствия, определяемые по тяжести проступка.',
      'Решение о выговорах, снятии и поощрении принимает ГА или руководство проекта.',
    ],
  };

  return (
    <section className="min-h-screen pt-[280px] pb-16 newspaper-texture">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="border-t-8 border-b-8 border-black py-6 mb-8 aged-paper text-center shadow-xl">
            <div className="flex items-center justify-center gap-4 mb-3">
              <Icon name="Scale" size={48} className="text-[#8B0000]" />
              <h2 className="text-6xl font-headline uppercase tracking-wider">
                Регламент сервера
              </h2>
              <Icon name="Scale" size={48} className="text-[#8B0000]" />
            </div>
            <div className="text-sm uppercase tracking-widest mt-2 border-t-2 border-b-2 border-black py-2 inline-block px-8">
              📜 Официальный кодекс • Обязательно к прочтению 📜
            </div>
          </div>

          <div className="border-8 border-black aged-paper mb-8 shadow-xl">
            <div className="grid grid-cols-3 border-b-4 border-black">
              <button
                onClick={() => setActiveCategory('general')}
                className={`p-4 font-headline uppercase text-sm border-r-4 border-black transition-all ${
                  activeCategory === 'general'
                    ? 'bg-black text-amber-400'
                    : 'hover:bg-zinc-800 hover:text-amber-400'
                }`}
              >
                <Icon name="BookOpen" size={24} className="mx-auto mb-2" />
                Общие правила
              </button>
              <button
                onClick={() => setActiveCategory('admin')}
                className={`p-4 font-headline uppercase text-sm border-r-4 border-black transition-all ${
                  activeCategory === 'admin'
                    ? 'bg-black text-amber-400'
                    : 'hover:bg-zinc-800 hover:text-amber-400'
                }`}
              >
                <Icon name="Shield" size={24} className="mx-auto mb-2" />
                Администрация
              </button>
              <button
                onClick={() => setActiveCategory('leaders')}
                className={`p-4 font-headline uppercase text-sm transition-all ${
                  activeCategory === 'leaders'
                    ? 'bg-black text-amber-400'
                    : 'hover:bg-zinc-800 hover:text-amber-400'
                }`}
              >
                <Icon name="Crown" size={24} className="mx-auto mb-2" />
                Для лидеров
              </button>
            </div>

            {activeCategory === 'admin' && (
              <div className="p-8">
                <div className="border-8 border-[#8B0000] bg-gradient-to-br from-red-700 via-red-800 to-red-900 mb-6 shadow-2xl vintage-stamp">
                  <div className="border-4 border-amber-400 m-2 p-4 text-center bg-black/20">
                    <Icon name="AlertTriangle" size={40} className="mx-auto mb-2 text-amber-300" />
                    <div className="text-xl font-headline uppercase mb-2 text-white">
                      ⚠ РЕГЛАМЕНТ АДМИНИСТРАЦИИ ⚠
                    </div>
                    <div className="text-xs font-body text-amber-100 border-t border-b border-amber-400 py-2">
                      Обязательно к соблюдению всеми членами администрации
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="border-4 border-black aged-paper p-6">
                    <div className="flex items-center gap-3 mb-4 border-b-2 border-black pb-3">
                      <div className="w-10 h-10 border-4 border-black bg-white flex items-center justify-center">
                        <span className="font-headline font-black text-xl">I</span>
                      </div>
                      <h3 className="text-2xl font-headline uppercase">Основные положения</h3>
                    </div>
                    <div className="space-y-3">
                      {adminRules.mainProvisions.map((rule, index) => (
                        <div key={index} className="flex gap-3 text-sm font-body leading-relaxed border-b border-black/20 pb-2 last:border-0">
                          <span className="font-bold text-[#8B0000] flex-shrink-0">{index + 1}.</span>
                          <p className="text-justify">{rule}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-4 border-black aged-paper p-6">
                    <div className="flex items-center gap-3 mb-4 border-b-2 border-black pb-3">
                      <div className="w-10 h-10 border-4 border-black bg-white flex items-center justify-center">
                        <span className="font-headline font-black text-xl">II</span>
                      </div>
                      <h3 className="text-2xl font-headline uppercase">Игровое имущество</h3>
                    </div>
                    <div className="space-y-3">
                      {adminRules.gameProperty.map((rule, index) => (
                        <div key={index} className="flex gap-3 text-sm font-body leading-relaxed border-b border-black/20 pb-2 last:border-0">
                          <span className="font-bold text-[#8B0000] flex-shrink-0">{index + 1}.</span>
                          <p className="text-justify">{rule}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-4 border-black aged-paper p-6">
                    <div className="flex items-center gap-3 mb-4 border-b-2 border-black pb-3">
                      <div className="w-10 h-10 border-4 border-black bg-white flex items-center justify-center">
                        <span className="font-headline font-black text-xl">III</span>
                      </div>
                      <h3 className="text-2xl font-headline uppercase">Поведенческие нормы</h3>
                    </div>
                    <div className="space-y-3">
                      {adminRules.behaviorNorms.map((rule, index) => (
                        <div key={index} className="flex gap-3 text-sm font-body leading-relaxed border-b border-black/20 pb-2 last:border-0">
                          <span className="font-bold text-[#8B0000] flex-shrink-0">{index + 1}.</span>
                          <p className="text-justify">{rule}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-4 border-black aged-paper p-6">
                    <div className="flex items-center gap-3 mb-4 border-b-2 border-black pb-3">
                      <div className="w-10 h-10 border-4 border-black bg-white flex items-center justify-center">
                        <span className="font-headline font-black text-xl">IV</span>
                      </div>
                      <h3 className="text-2xl font-headline uppercase">Обязанности куратора</h3>
                    </div>
                    <div className="space-y-3">
                      {adminRules.curatorDuties.map((rule, index) => (
                        <div key={index} className="flex gap-3 text-sm font-body leading-relaxed border-b border-black/20 pb-2 last:border-0">
                          <span className="font-bold text-[#8B0000] flex-shrink-0">{index + 1}.</span>
                          <p className="text-justify">{rule}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-4 border-black aged-paper p-6">
                    <div className="flex items-center gap-3 mb-4 border-b-2 border-black pb-3">
                      <div className="w-10 h-10 border-4 border-black bg-white flex items-center justify-center">
                        <span className="font-headline font-black text-xl">V</span>
                      </div>
                      <h3 className="text-2xl font-headline uppercase">Заключение</h3>
                    </div>
                    <div className="space-y-3">
                      {adminRules.conclusion.map((rule, index) => (
                        <div key={index} className="flex gap-3 text-sm font-body leading-relaxed border-b border-black/20 pb-2 last:border-0">
                          <span className="font-bold text-[#8B0000] flex-shrink-0">{index + 1}.</span>
                          <p className="text-justify">{rule}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeCategory === 'general' && (
              <div className="p-8 text-center">
                <Icon name="Construction" size={64} className="mx-auto mb-4 text-[#8B0000]" />
                <p className="text-xl font-headline uppercase">Раздел в разработке</p>
                <p className="text-sm font-body mt-2">Общие правила скоро появятся</p>
              </div>
            )}

            {activeCategory === 'leaders' && (
              <div className="p-8 text-center">
                <Icon name="Construction" size={64} className="mx-auto mb-4 text-[#8B0000]" />
                <p className="text-xl font-headline uppercase">Раздел в разработке</p>
                <p className="text-sm font-body mt-2">Правила для лидеров скоро появятся</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
