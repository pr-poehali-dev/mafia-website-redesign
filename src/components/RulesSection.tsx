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
      'Запрещено давать некорректные ответы в тикете.',
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
          <div className="border-8 border-black aged-paper text-center shadow-xl mb-8 p-6 transform -rotate-1">
            <div className="border-4 border-black p-4 bg-black text-white">
              <div className="border-2 border-white p-3">
                <Icon name="Scale" size={40} className="mx-auto mb-2" />
                <h2 className="text-5xl font-headline uppercase tracking-widest mb-2">
                  Регламент
                </h2>
                <div className="text-xs uppercase tracking-[0.3em] border-t-2 border-b-2 border-white py-1 mt-2">
                  ⚖ Свод правил сервера ⚖
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <button
              onClick={() => setActiveCategory('general')}
              className={`border-6 border-black aged-paper p-4 transform transition-all hover:scale-105 hover:-rotate-1 ${
                activeCategory === 'general' ? 'shadow-2xl -rotate-1' : 'shadow-lg'
              }`}
            >
              <div className="border-2 border-black p-3">
                <Icon name="BookOpen" size={32} className="mx-auto mb-2" />
                <div className="font-headline uppercase text-lg">Общие</div>
                <div className="font-headline uppercase text-lg">Правила</div>
              </div>
            </button>
            
            <button
              onClick={() => setActiveCategory('admin')}
              className={`border-6 border-black aged-paper p-4 transform transition-all hover:scale-105 hover:rotate-1 ${
                activeCategory === 'admin' ? 'shadow-2xl rotate-1' : 'shadow-lg'
              }`}
            >
              <div className="border-2 border-black p-3">
                <Icon name="Shield" size={32} className="mx-auto mb-2" />
                <div className="font-headline uppercase text-lg">Регламент</div>
                <div className="font-headline uppercase text-lg">Администрации</div>
              </div>
            </button>
            
            <button
              onClick={() => setActiveCategory('leaders')}
              className={`border-6 border-black aged-paper p-4 transform transition-all hover:scale-105 hover:-rotate-1 ${
                activeCategory === 'leaders' ? 'shadow-2xl -rotate-1' : 'shadow-lg'
              }`}
            >
              <div className="border-2 border-black p-3">
                <Icon name="Crown" size={32} className="mx-auto mb-2" />
                <div className="font-headline uppercase text-lg">Правила</div>
                <div className="font-headline uppercase text-lg">для Лидеров</div>
              </div>
            </button>
          </div>

          {activeCategory === 'admin' && (
            <div className="space-y-6">
              <div className="border-8 border-[#8B0000] aged-paper shadow-2xl transform rotate-1">
                <div className="border-4 border-black m-2 bg-gradient-to-r from-red-800 to-red-900 text-white p-4 text-center">
                  <div className="border-2 border-amber-400 p-3">
                    <Icon name="AlertTriangle" size={36} className="mx-auto mb-2 text-amber-300" />
                    <div className="text-2xl font-headline uppercase tracking-wider">
                      ⚠ Регламент Администрации ⚠
                    </div>
                    <div className="text-[10px] uppercase tracking-widest mt-2 border-t border-b border-amber-400 py-1">
                      Строго обязательно к исполнению
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-6 border-black aged-paper shadow-xl transform -rotate-1">
                  <div className="border-b-4 border-black p-3 bg-black text-white text-center">
                    <div className="text-xl font-headline uppercase tracking-wider">
                      § I §
                    </div>
                    <div className="text-sm font-headline uppercase mt-1">
                      Основные положения
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="space-y-2">
                      {adminRules.mainProvisions.map((rule, index) => (
                        <div key={index} className="border-b border-black/30 pb-2 last:border-0">
                          <div className="flex gap-2 text-xs font-body leading-snug">
                            <span className="font-black flex-shrink-0">{index + 1}.</span>
                            <p className="text-justify">{rule}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t-4 border-black p-2 text-center bg-black text-white">
                    <div className="text-[10px] uppercase tracking-widest">14 пунктов</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="border-6 border-black aged-paper shadow-xl transform rotate-1">
                    <div className="border-b-4 border-black p-3 bg-black text-white text-center">
                      <div className="text-xl font-headline uppercase tracking-wider">
                        § II §
                      </div>
                      <div className="text-sm font-headline uppercase mt-1">
                        Игровое имущество
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="space-y-2">
                        {adminRules.gameProperty.map((rule, index) => (
                          <div key={index} className="border-b border-black/30 pb-2 last:border-0">
                            <div className="flex gap-2 text-xs font-body leading-snug">
                              <span className="font-black flex-shrink-0">{index + 1}.</span>
                              <p className="text-justify">{rule}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="border-t-4 border-black p-2 text-center bg-black text-white">
                      <div className="text-[10px] uppercase tracking-widest">4 пункта</div>
                    </div>
                  </div>

                  <div className="border-6 border-black aged-paper shadow-xl">
                    <div className="border-b-4 border-black p-3 bg-black text-white text-center">
                      <div className="text-xl font-headline uppercase tracking-wider">
                        § III §
                      </div>
                      <div className="text-sm font-headline uppercase mt-1">
                        Поведенческие нормы
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="space-y-2">
                        {adminRules.behaviorNorms.map((rule, index) => (
                          <div key={index} className="border-b border-black/30 pb-2 last:border-0">
                            <div className="flex gap-2 text-xs font-body leading-snug">
                              <span className="font-black flex-shrink-0">{index + 1}.</span>
                              <p className="text-justify">{rule}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="border-t-4 border-black p-2 text-center bg-black text-white">
                      <div className="text-[10px] uppercase tracking-widest">3 пункта</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-6 border-black aged-paper shadow-xl transform rotate-1">
                  <div className="border-b-4 border-black p-3 bg-black text-white text-center">
                    <div className="text-xl font-headline uppercase tracking-wider">
                      § IV §
                    </div>
                    <div className="text-sm font-headline uppercase mt-1">
                      Обязанности куратора
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="space-y-2">
                      {adminRules.curatorDuties.map((rule, index) => (
                        <div key={index} className="border-b border-black/30 pb-2 last:border-0">
                          <div className="flex gap-2 text-xs font-body leading-snug">
                            <span className="font-black flex-shrink-0">{index + 1}.</span>
                            <p className="text-justify">{rule}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t-4 border-black p-2 text-center bg-black text-white">
                    <div className="text-[10px] uppercase tracking-widest">7 пунктов</div>
                  </div>
                </div>

                <div className="border-6 border-black aged-paper shadow-xl transform -rotate-1">
                  <div className="border-b-4 border-black p-3 bg-black text-white text-center">
                    <div className="text-xl font-headline uppercase tracking-wider">
                      § V §
                    </div>
                    <div className="text-sm font-headline uppercase mt-1">
                      Заключение
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="space-y-2">
                      {adminRules.conclusion.map((rule, index) => (
                        <div key={index} className="border-b border-black/30 pb-2 last:border-0">
                          <div className="flex gap-2 text-xs font-body leading-snug">
                            <span className="font-black flex-shrink-0">{index + 1}.</span>
                            <p className="text-justify">{rule}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t-4 border-black p-2 text-center bg-black text-white">
                    <div className="text-[10px] uppercase tracking-widest">3 пункта</div>
                  </div>
                </div>
              </div>

              <div className="border-8 border-black aged-paper shadow-xl p-6 text-center">
                <div className="border-4 border-black p-4">
                  <Icon name="Info" size={32} className="mx-auto mb-2" />
                  <div className="text-sm font-headline uppercase mb-2">
                    ★ Примечание ★
                  </div>
                  <p className="text-xs font-body leading-relaxed">
                    Все вышеперечисленные правила являются обязательными для исполнения. 
                    Нарушение регламента влечёт за собой дисциплинарные меры, вплоть до снятия с должности. 
                    Решения принимаются Главным Администратором или Руководством проекта.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeCategory === 'general' && (
            <div className="border-8 border-black aged-paper p-12 text-center shadow-xl">
              <div className="border-4 border-black p-8">
                <Icon name="Construction" size={64} className="mx-auto mb-4 text-[#8B0000]" />
                <div className="text-3xl font-headline uppercase mb-3">В разработке</div>
                <p className="text-sm font-body">Общие правила скоро появятся</p>
              </div>
            </div>
          )}

          {activeCategory === 'leaders' && (
            <div className="border-8 border-black aged-paper p-12 text-center shadow-xl">
              <div className="border-4 border-black p-8">
                <Icon name="Construction" size={64} className="mx-auto mb-4 text-[#8B0000]" />
                <div className="text-3xl font-headline uppercase mb-3">В разработке</div>
                <p className="text-sm font-body">Правила для лидеров скоро появятся</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
