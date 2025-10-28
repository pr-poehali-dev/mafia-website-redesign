import Icon from '@/components/ui/icon';
import { useState } from 'react';

const RulesSection = () => {
  const [activeCategory, setActiveCategory] = useState('general');

  const generalRules = {
    patient: [
      'Оскорбления игроков и администрации, а также разжигание конфликтов вне игры строго запрещены.',
      'Распространение неподтвержденной информации о других игроках, проекте или администрации считается нарушением.',
      'Запрещены любые упоминания, ссылки или реклама других игровых проектов. В том числе скрытая или замаскированная реклама под видом общения. Реферальные ссылки также запрещены.',
      'Демонстративное непонимание или игнорирование правил и лора сервера, а также явное неуважение администрации, трактуется как потребительское отношение. За это может быть вынесено наказание по решению администрации.',
      'Жалобу подает тот игрок, который пострадал от нарушения. Другие игроки могут быть привлечены как свидетели, но не имеют права подавать жалобу от третьего лица. Исключение: массовые нарушения правил затрагивающие всех игроков сервера (читы, массовый ДМ и тд.)',
    ],
    citizen: [
      'При игре на сервере необходимо придерживаться РП логики.',
      'Отделяйте свою личность от персонажа. Игрок и персонаж — не одно и то же.',
      'Запрещено использовать или передавать информацию, полученную вне ролевого контекста, в интересах персонажей. Нахождение в голосовых каналах во время игры на сервере - запрещено.',
      'Запрещено узнавать персонажей по голосу и другим мета-признакам без явного ролевого подтверждения.',
      'Запрещено злоупотребление жаргонизмами. Все разговоры в игре должны быть ролевыми. Любые внеигровые обсуждения в текстовом и голосовом чате запрещены.',
      'Запрещено создавать персонажей с российским или СНГ происхождением, а также персонажей, выполненных в карикатурной, гротескной форме. Искл.: Одобрение администрации.',
      'Персонаж обязан иметь понятную и логичную мотивацию для своих действий — как негативных, так и положительных.',
      'Запрещены аморальные действия без предварительного письменного согласия второго игрока в чате. Это касается пыток, сексуализированных действий, "шрамирования", изнасилования и т.п.',
      'Запрещен PG (PowerGaming) - это присвоение персонажу характеристик, способностей или действий, которые невозможны в рамках игрового мира или не подтверждены ролевой ситуацией.',
      'Игрок обязан отыгрывать страх перед серьёзной угрозой жизни и здоровью. Если у вас нет огнестрельного оружия, но вам угрожают огнестрельным оружием – вы должны сделать всё, чтобы не спровоцировать нападающего на выстрел. (NoFear)',
      'Игрок обязан отыгрывать боль и последствия ранений, если персонаж получил травму.',
      'Запрещены отыгровки в свою пользу. Пример: Потеря сознания для того, чтобы избежать ответа на вопросы.',
      'Запрещено удержание игрока без РП взаимодействия более 20 минут. Искл.: Одобрение администрации.',
      'Возвращение на место смерти запрещено в течение 45 минут. При потере сознания персонаж теряет память на 15 минут.',
      'Запрещено покидать активную ролевую ситуацию вне ролевым способом (например, дисконнект или вставание из нока в присутствии других игроков).',
      'Управление транспортом должно соответствовать логике ролевой игры. Нелогичное вождение недопустимо. (например перемещение на лошади по ЖД путям)',
      '"Игра в слоты" — когда игрок полностью игнорирует NPC, логику их нахождения и окружение — запрещена. Все NPC считаются частью игрового мира. В случае, если инициатором конфликта является вторая сторона, то правило игры в слоты не применяется.',
      'Все действия, доступные функционально в игре, необходимо выполнять именно функционально.',
      'Запрещено использовать бан-ворды на платформе Twitch при игроке ведущему трансляцию. Примечание: Об этом вы узнаете благодаря уведомлению и значку в худе(внизу экрана).',
      'Запрещено использовать телефон не по назначению (например, для розыгрышей).',
      'Запрещено использовать баги, недоработки и уязвимости для получения выгоды. Если вы обнаружили такую — сообщите администрации. Умышленное сокрытие наказуемо.',
      'Запрещено изменять цвет волос/кожи персонажа. Искл.: Одобрение администрации.',
      'Использование стороннего ПО для получения игрового преимущества запрещено. Примечание: В том числе передача игровой информации любым путём.',
      'Запрещено лгать в /me чат',
    ],
    bandit: [
      'При совершении крайм действий игрок должен вести откат ситуации. При совершении крайм действий в составе группы, откат должен вести как минимум один человек из группы.',
      'Активные преступные действия можно совершать не более чем втроём. Искл.: Фракции и бизнесы.',
      'Объединение криминальных фракций и бизнесов для проведения активных крайм действий запрещено. Искл.: Для организации альянса между фракциями - обращайтесь к администрации.',
      'В составе крайм бизнеса или фракции крайм разрешен в количестве до 7-ми человек. Примечание: Попытки разделения на группы и активное содействие - запрещены.',
      'Запрещено стрелять в безоружных людей повинующимся приказам, например - "поднять руки вверх". Запрещено открывать огонь на поражение без предупреждения и в течении 5 секунд с момента требования. Исключение: Прямая угроза жизни (навел прицел на вас)',
      'Запрещено грабить и/или похищать игроков в ноке, если вы не находились в ситуации, которая этому предшествовала.',
      'Запрещены похищения случайных персонажей с целью их ограбления. Примечание: Грабить случайных персонажей на месте вам никто не запрещает.',
      'Запрещено воспроизводить любые анимации из списка анимаций в перестрелке, если это дает преимущество и нарушает РП-логику ситуации (танец, дурачество и прочее).',
      'Запрещено при ограблении красть более половины оружия. При наличии у жертвы всего одного оружия — его можно забрать. Примечание: оружием считается только огнестрел и лук.',
      'Запрещено обворовывать людей, сумки лошадей, повозки, вне ролевой ситуации. Пояснение: Подойти к случайной повозке/лошади/человек без сознания, обыскать и обворовать сумки.',
      'Проведение преступных действий с 2:00 до 12:00 по МСК запрещено без одобрения администрации. Завершайте действия до 2:00.',
      'Запрещено инициировать любые криминальные действия на территории дома/квартиры и прилегающей зоне без одобрения администрации. Запрос подается через тикет в Discord. Кража имущества с территории дома также считается преступлением.',
      'В случае смерти персонажа из криминальной фракции, возвращение в ту же фракцию на новом персонаже возможно только через 3 дня.',
      'Совершение преступлений на территории криминальных группировок запрещено без веских оснований, а также на прилегающей к ним территории (+-10 метров от здания/забора). Примечание: Для проведения рейда на враждебную группировку требуется одобрение администрации.',
      'Ограбления, рейды и штурмы государственных зданий возможны только при согласовании с администрацией.',
      'Ограбление магазинов разрешено только группой не более 4 человек.',
    ],
    sheriff: [
      'Крайм на синем слоте - запрещен. Исключение: одобрение администрации.',
      'Объединение гражданских и государственных фракций ("синего слота") для проведения активных действий запрещено.',
      'Проведение полицейских рейдов на территории банд возможно только с разрешения администрации.',
      'Запрещено оказание медицинской помощи другим в пылу перестрелки. Дождитесь окончания сцены.',
      'Игрок не может одновременно иметь персонажа в государственной фракции и персонажа занимающегося краймом. Искл.: Одобрение администрации.',
    ],
    raids: [
      'Любые рейды требуют одобрения курирующей администрации.',
      'У каждого рейда должен быть ролевой мотив, основанный на произошедших ситуациях на сервере. Ролевым мотивом может являться: Прямое конкурирование в сфере бизнеса, стычки участников, повлекшие за собой смерть (РПК) одного или более из персонажей, защита интересов, территории и т.д.',
      'Во время рейда атакующая сторона может получить доступ к инвентарю проигравшей стороны, а также 50% оружия со склада.',
      'Время рейда ограничено и не должно превышать более 1 часа.',
      'Рейд считается успешным если атакующая сторона победила всех оппонентов и/или или удерживала территорию на протяжении 15 минут. В случае успешной атаки сторона получает иммунитет от рейдов оппонента сроком на 1 неделю.',
      'Рейд считается проваленным если обороняющаяся сторона победила всех оппонентов и/или удерживала территорию на протяжении 45 минут. В случае успешной обороны сторона автоматически получает одобрение на ответный рейд.',
      'В случае истечения времени рейда победителем признается обороняющаяся сторона.',
      'Обе стороны заранее извещаются курирующей администрацией о времени начала рейда и его завершении.',
      'Третьим лицам запрещено вмешиваться в рейд, либо находиться на территории рейда.',
    ],
  };

  const leaderRules = [
    {
      text: 'Лидер назначается на 30 дней с возможностью продления.',
      note: 'Может быть снят раньше по решению администрации.',
    },
    {
      text: 'Лидер имеет 3 страйка. При получении всех 3-ёх страйков лидер снимается с должности с запретом на слот лидера сроком в 30 дней (либо перманентно).',
      note: 'Выдача страйков происходит за нарушение правил самим лидером, его замами, а также при грубом/массовом нарушении правил составом.',
    },
    {
      text: 'При досрочном уходе с лидерского поста по собственному желанию, лидеру выдается запрет на слот лидера сроком в 30 дней. С досрочно сложившего полномочия может быть снята роль на срок в 3 дня.',
    },
    {
      text: 'Лидеру фракции во время занятия слота разрешается играть только на одном персонаже.',
    },
    {
      text: 'Лидер не может иметь более 2 заместителей.',
      punishment: '1 страйк',
    },
    {
      text: 'Лидер не может уволить игрока без причины. Исключения: бан, инактив.',
      punishment: '1 страйк',
    },
    {
      text: 'Лидер обязан вести учет склада и состав фракции.',
      punishment: '1 страйк',
    },
  ];

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
    <section className="min-h-screen pt-[180px] md:pt-[280px] pb-8 md:pb-16 newspaper-texture">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="border-4 md:border-8 border-black aged-paper text-center shadow-xl mb-6 md:mb-8 p-4 md:p-6 transform -rotate-1">
            <div className="border-2 md:border-4 border-black p-3 md:p-4 bg-black text-white">
              <div className="border-2 border-white p-2 md:p-3">
                <Icon name="Scale" size={28} className="mx-auto mb-2 md:w-10 md:h-10" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-headline uppercase tracking-wider md:tracking-widest mb-2 leading-tight break-words">
                  Регламент
                </h2>
                <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] border-t-2 border-b-2 border-white py-1 mt-2">
                  ⚖ Свод правил сервера ⚖
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 md:gap-4 mb-6 md:mb-8">
            <button
              onClick={() => setActiveCategory('general')}
              className={`border-2 md:border-4 lg:border-6 border-black aged-paper p-1 md:p-2 lg:p-4 transform transition-all hover:scale-105 hover:-rotate-1 ${
                activeCategory === 'general' ? 'shadow-2xl -rotate-1' : 'shadow-lg'
              }`}
            >
              <div className="border border-black md:border-2 p-1 md:p-2 lg:p-3">
                <Icon name="BookOpen" size={16} className="mx-auto mb-0.5 md:mb-1 lg:mb-2 md:w-6 md:h-6 lg:w-8 lg:h-8" />
                <div className="font-headline uppercase text-[10px] md:text-xs lg:text-sm xl:text-base leading-tight break-words">Общие</div>
                <div className="font-headline uppercase text-[10px] md:text-xs lg:text-sm xl:text-base leading-tight break-words">Правила</div>
              </div>
            </button>
            
            <button
              onClick={() => setActiveCategory('admin')}
              className={`border-2 md:border-4 lg:border-6 border-black aged-paper p-1 md:p-2 lg:p-4 transform transition-all hover:scale-105 hover:rotate-1 ${
                activeCategory === 'admin' ? 'shadow-2xl rotate-1' : 'shadow-lg'
              }`}
            >
              <div className="border border-black md:border-2 p-1 md:p-2 lg:p-3">
                <Icon name="Shield" size={16} className="mx-auto mb-0.5 md:mb-1 lg:mb-2 md:w-6 md:h-6 lg:w-8 lg:h-8" />
                <div className="font-headline uppercase text-[9px] md:text-xs lg:text-sm xl:text-base leading-tight break-words">Регламент</div>
                <div className="font-headline uppercase text-[9px] md:text-xs lg:text-sm xl:text-base leading-tight break-words">Админ-ции</div>
              </div>
            </button>
            
            <button
              onClick={() => setActiveCategory('leaders')}
              className={`border-2 md:border-4 lg:border-6 border-black aged-paper p-1 md:p-2 lg:p-4 transform transition-all hover:scale-105 hover:-rotate-1 ${
                activeCategory === 'leaders' ? 'shadow-2xl -rotate-1' : 'shadow-lg'
              }`}
            >
              <div className="border border-black md:border-2 p-1 md:p-2 lg:p-3">
                <Icon name="Crown" size={16} className="mx-auto mb-0.5 md:mb-1 lg:mb-2 md:w-6 md:h-6 lg:w-8 lg:h-8" />
                <div className="font-headline uppercase text-[10px] md:text-xs lg:text-sm xl:text-base leading-tight break-words">Правила</div>
                <div className="font-headline uppercase text-[10px] md:text-xs lg:text-sm xl:text-base leading-tight break-words">для Лидеров</div>
              </div>
            </button>
          </div>

          {activeCategory === 'admin' && (
            <div className="space-y-6">
              <div className="border-8 border-[#8B0000] aged-paper shadow-2xl transform rotate-1">
                <div className="border-4 border-black m-2 bg-white p-4 text-center">
                  <div className="border-2 border-black p-3">
                    <Icon name="AlertTriangle" size={36} className="mx-auto mb-2 text-[#8B0000]" />
                    <div className="text-2xl font-headline uppercase tracking-wider text-black">
                      ⚠ Регламент Администрации ⚠
                    </div>
                    <div className="text-[10px] uppercase tracking-widest mt-2 border-t border-b border-black py-1 text-black">
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
                          <div className="flex gap-2 text-sm md:text-base font-body leading-snug">
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
                            <div className="flex gap-2 text-sm md:text-base font-body leading-snug">
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
                            <div className="flex gap-2 text-sm md:text-base font-body leading-snug">
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
                          <div className="flex gap-2 text-sm md:text-base font-body leading-snug">
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

                <div className="border-6 border-black aged-paper shadow-xl transform -rotate-1 flex flex-col">
                  <div className="border-b-4 border-black p-3 bg-black text-white text-center">
                    <div className="text-xl font-headline uppercase tracking-wider">
                      § V §
                    </div>
                    <div className="text-sm font-headline uppercase mt-1">
                      Заключение
                    </div>
                  </div>
                  <div className="p-4 flex-1">
                    <div className="space-y-2">
                      {adminRules.conclusion.map((rule, index) => (
                        <div key={index} className="border-b border-black/30 pb-2 last:border-0">
                          <div className="flex gap-2 text-sm md:text-base font-body leading-snug">
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
                  <p className="text-sm md:text-base font-body leading-relaxed">
                    Все вышеперечисленные правила являются обязательными для исполнения. 
                    Нарушение регламента влечёт за собой дисциплинарные меры, вплоть до снятия с должности. 
                    Решения принимаются Главным Администратором или Руководством проекта.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeCategory === 'general' && (
            <div className="space-y-6">
              <div className="border-8 border-black aged-paper shadow-2xl transform -rotate-1">
                <div className="border-4 border-black m-2 bg-white p-4 text-center">
                  <div className="border-2 border-black p-3">
                    <Icon name="BookOpen" size={36} className="mx-auto mb-2 text-black" />
                    <div className="text-2xl font-headline uppercase tracking-wider text-black">
                      ⚖ Общие правила сервера ⚖
                    </div>
                    <div className="text-[10px] uppercase tracking-widest mt-2 border-t border-b border-black py-1 text-black">
                      Обязательны для всех участников
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-6 border-black aged-paper shadow-xl transform rotate-1">
                  <div className="border-b-4 border-black p-3 bg-black text-white text-center">
                    <div className="text-xl font-headline uppercase tracking-wider">§ 0 §</div>
                    <div className="text-sm font-headline uppercase mt-1">Правило "Пациента"</div>
                  </div>
                  <div className="p-4">
                    <div className="space-y-2">
                      {generalRules.patient.map((rule, index) => (
                        <div key={index} className="border-b border-black/30 pb-2 last:border-0">
                          <div className="flex gap-2 text-sm md:text-base font-body leading-snug">
                            <span className="font-black flex-shrink-0">0.{index + 1}</span>
                            <p className="text-justify">{rule}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t-4 border-black p-2 text-center bg-black text-white">
                    <div className="text-[10px] uppercase tracking-widest">5 пунктов</div>
                  </div>
                </div>

                <div className="border-6 border-black aged-paper shadow-xl transform -rotate-1 flex flex-col">
                  <div className="border-b-4 border-black p-3 bg-black text-white text-center">
                    <div className="text-xl font-headline uppercase tracking-wider">§ 3 §</div>
                    <div className="text-sm font-headline uppercase mt-1">Правила "Шерифа"</div>
                  </div>
                  <div className="p-4 flex-1">
                    <div className="space-y-2">
                      {generalRules.sheriff.map((rule, index) => (
                        <div key={index} className="border-b border-black/30 pb-2 last:border-0">
                          <div className="flex gap-2 text-sm md:text-base font-body leading-snug">
                            <span className="font-black flex-shrink-0">3.{index + 1}</span>
                            <p className="text-justify">{rule}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t-4 border-black p-2 text-center bg-black text-white">
                    <div className="text-[10px] uppercase tracking-widest">5 пунктов</div>
                  </div>
                </div>
              </div>

              <div className="border-6 border-black aged-paper shadow-xl">
                <div className="border-b-4 border-black p-3 bg-black text-white text-center">
                  <div className="text-xl font-headline uppercase tracking-wider">§ 1 §</div>
                  <div className="text-sm font-headline uppercase mt-1">Правила "Жителя Валентайна"</div>
                </div>
                <div className="p-4">
                  <div className="columns-2 gap-4 space-y-2">
                    {generalRules.citizen.map((rule, index) => (
                      <div key={index} className="border-b border-black/30 pb-2 break-inside-avoid last:border-0">
                        <div className="flex gap-2 text-sm md:text-base font-body leading-snug">
                          <span className="font-black flex-shrink-0">1.{index}</span>
                          <p className="text-justify">{rule}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t-4 border-black p-2 text-center bg-black text-white">
                  <div className="text-[10px] uppercase tracking-widest">24 пункта</div>
                </div>
              </div>

              <div className="border-6 border-black aged-paper shadow-xl transform rotate-1">
                <div className="border-b-4 border-black p-3 bg-black text-white text-center">
                  <div className="text-xl font-headline uppercase tracking-wider">§ 2 §</div>
                  <div className="text-sm font-headline uppercase mt-1">Правила "Бандита"</div>
                </div>
                <div className="p-4">
                  <div className="columns-2 gap-4 space-y-2">
                    {generalRules.bandit.map((rule, index) => (
                      <div key={index} className="border-b border-black/30 pb-2 break-inside-avoid last:border-0">
                        <div className="flex gap-2 text-sm md:text-base font-body leading-snug">
                          <span className="font-black flex-shrink-0">2.{index + 1}</span>
                          <p className="text-justify">{rule}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t-4 border-black p-2 text-center bg-black text-white">
                  <div className="text-[10px] uppercase tracking-widest">16 пунктов</div>
                </div>
              </div>

              <div className="border-6 border-black aged-paper shadow-xl transform -rotate-1">
                <div className="border-b-4 border-black p-3 bg-black text-white text-center">
                  <div className="text-xl font-headline uppercase tracking-wider">§ 4 §</div>
                  <div className="text-sm font-headline uppercase mt-1">Правила рейдов</div>
                </div>
                <div className="p-4">
                  <div className="space-y-2">
                    {generalRules.raids.map((rule, index) => (
                      <div key={index} className="border-b border-black/30 pb-2 last:border-0">
                        <div className="flex gap-2 text-sm md:text-base font-body leading-snug">
                          <span className="font-black flex-shrink-0">4.{index + 1}</span>
                          <p className="text-justify">{rule}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t-4 border-black p-2 text-center bg-black text-white">
                  <div className="text-[10px] uppercase tracking-widest">9 пунктов</div>
                </div>
              </div>

              <div className="border-8 border-black aged-paper shadow-xl p-6 text-center">
                <div className="border-4 border-black p-4">
                  <Icon name="AlertCircle" size={32} className="mx-auto mb-2" />
                  <div className="text-sm font-headline uppercase mb-3">★ Важные примечания ★</div>
                  <div className="text-sm md:text-base font-body leading-relaxed space-y-2 text-left">
                    <p>• Незнание правил не освобождает от ответственности</p>
                    <p>• Правила могут быть изменены без предварительного уведомления</p>
                    <p>• Администрация не несет ответственности за происходящее за пределами сервера и дискорд канала сервера</p>
                    <p>• Администрация имеет право увеличить или снизить срок наказания</p>
                    <p>• Администрация имеет право ограничить доступ к проекту в любой момент без объяснения причин</p>
                    <p>• Ответственность за нарушение несёт владелец аккаунта, независимо от того, кто находился за клавиатурой</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeCategory === 'leaders' && (
            <div className="space-y-6">
              <div className="border-8 border-black aged-paper shadow-2xl transform rotate-1">
                <div className="border-4 border-black m-2 bg-white p-4 text-center">
                  <div className="border-2 border-black p-3">
                    <Icon name="Crown" size={36} className="mx-auto mb-2 text-black" />
                    <div className="text-2xl font-headline uppercase tracking-wider text-black">
                      ⚜ Правила для лидеров фракций ⚜
                    </div>
                    <div className="text-[10px] uppercase tracking-widest mt-2 border-t border-b border-black py-1 text-black">
                      Обязательны для всех лидеров
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-6 border-black aged-paper shadow-xl transform -rotate-1">
                <div className="border-b-4 border-black p-3 bg-black text-white text-center">
                  <div className="text-xl font-headline uppercase tracking-wider">§ Правило Лидеров §</div>
                  <div className="text-sm font-headline uppercase mt-1">Обязанности и ответственность</div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {leaderRules.map((rule, index) => (
                      <div key={index} className="border-2 border-black p-4 bg-white/50">
                        <div className="flex gap-3">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">
                              1.{index + 1}
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm md:text-base font-body leading-relaxed text-justify mb-2">{rule.text}</p>
                            {rule.note && (
                              <div className="border-l-4 border-[#8B0000] pl-3 py-1 bg-yellow-50">
                                <div className="text-[10px] uppercase font-bold text-[#8B0000] mb-1">Примечание:</div>
                                <p className="text-sm md:text-base font-body italic">{rule.note}</p>
                              </div>
                            )}
                            {rule.punishment && (
                              <div className="border-2 border-[#8B0000] p-2 bg-red-50 mt-2">
                                <div className="text-[10px] uppercase font-bold text-[#8B0000] mb-1">⚠ Наказание:</div>
                                <p className="text-sm md:text-base font-body font-bold text-[#8B0000]">{rule.punishment}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t-4 border-black p-2 text-center bg-black text-white">
                  <div className="text-[10px] uppercase tracking-widest">7 основных пунктов</div>
                </div>
              </div>

              <div className="border-8 border-black aged-paper shadow-xl p-6 text-center transform rotate-1">
                <div className="border-4 border-black p-4">
                  <Icon name="ShieldAlert" size={32} className="mx-auto mb-2 text-[#8B0000]" />
                  <div className="text-sm font-headline uppercase mb-3">★ Система страйков ★</div>
                  <div className="text-sm md:text-base font-body leading-relaxed space-y-2 text-left">
                    <p>• <strong>1 страйк</strong> — предупреждение с занесением в личное дело</p>
                    <p>• <strong>2 страйка</strong> — строгое предупреждение, возможна временная приостановка полномочий</p>
                    <p>• <strong>3 страйка</strong> — снятие с должности с запретом на слот лидера на 30 дней (или навсегда)</p>
                    <div className="border-t-2 border-black pt-2 mt-3">
                      <p className="font-bold">Страйки выдаются за:</p>
                      <p>— Личное нарушение правил лидером</p>
                      <p>— Нарушения заместителей лидера</p>
                      <p>— Массовые/грубые нарушения состава фракции</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RulesSection;