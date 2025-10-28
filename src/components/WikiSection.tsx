import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface Article {
  title: string;
  content: string;
}

interface WikiCategory {
  id: number;
  name: string;
  icon: string;
  color: string;
  accentColor: string;
  articles: Article[];
}

const WikiSection = () => {
  const [selectedArticle, setSelectedArticle] = useState<{category: WikiCategory; article: Article; index: number} | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const wikiCategories: WikiCategory[] = [
    {
      id: 1,
      name: 'Основы игры',
      icon: 'BookOpen',
      color: 'bg-[#5B7C99]',
      accentColor: 'text-[#5B7C99]',
      articles: [
        {
          title: 'Создание персонажа',
          content: 'При создании персонажа вы выбираете внешность, историю и начальные навыки вашего героя. Важно продумать биографию - откуда вы приехали, кем были раньше, какие у вас цели. Это поможет вам лучше вжиться в роль и найти единомышленников. Помните, что персонаж должен быть реалистичным для эпохи 1919 года.'
        },
        {
          title: 'Первые шаги в игре',
          content: 'После входа на сервер изучите интерфейс и основные команды. Познакомьтесь с другими игроками, найдите работу или присоединитесь к мафиозной семье. Первые дни лучше провести, изучая город и налаживая связи. Не спешите в криминал - сначала разберитесь с правилами и механиками сервера.'
        },
        {
          title: 'Система прокачки',
          content: 'Прокачка персонажа происходит через выполнение действий: работу, криминальную деятельность, обучение навыкам. Каждый навык развивается отдельно - стрельба, вождение, медицина, ремесло. Чем больше практикуете, тем выше уровень. Высокие навыки открывают новые возможности и повышают эффективность.'
        },
        {
          title: 'Интерфейс и управление',
          content: 'Основное управление стандартное для RDR2. Дополнительные команды доступны через меню F1. Используйте /me для описания действий, /do для описания окружения, /b для внеролевого общения. Изучите горячие клавиши для быстрого доступа к инвентарю, телефону и меню взаимодействия.'
        }
      ]
    },
    {
      id: 2,
      name: 'Мафиозные семьи',
      icon: 'Users',
      color: 'bg-[#8B4513]',
      accentColor: 'text-[#8B4513]',
      articles: [
        {
          title: 'Структура семьи',
          content: 'Мафиозная семья имеет четкую иерархию: Дон (босс), Советник, Капитаны, Солдаты и Ассоциаты. Каждый ранг имеет свои обязанности и привилегии. Дон принимает стратегические решения, Капитаны управляют бизнесами, Солдаты выполняют операции. Продвижение зависит от лояльности, навыков и вклада в семью.'
        },
        {
          title: 'Как вступить в семью',
          content: 'Чтобы вступить в семью, нужно зарекомендовать себя. Выполняйте работу для членов семьи, демонстрируйте лояльность и навыки. Обычно требуется рекомендация действующего члена. Новички начинают как Ассоциаты - они работают на семью, но не являются полноправными членами. После испытательного срока могут быть инициированы.'
        },
        {
          title: 'Ранги и иерархия',
          content: 'Иерархия строгая: Ассоциат → Солдат → Капитан → Советник → Дон. Повышение требует времени, преданности и достижений. Каждый ранг открывает новые возможности: доступ к оружию, бизнесам, информации. Неуважение к старшим карается строго. Приказы вышестоящих обязательны к исполнению.'
        },
        {
          title: 'История известных семей',
          content: 'Самые влиятельные семьи Нью-Остина: Корлеоне (контроль западного района), Татталья (торговля и казино), Барзини (политическое влияние), Куneo (контрабанда). Каждая семья имеет свою историю, традиции и территории. Между семьями существуют союзы, соперничество и кодекс чести, регулирующий конфликты.'
        }
      ]
    },
    {
      id: 3,
      name: 'Экономика',
      icon: 'Coins',
      color: 'bg-[#B8860B]',
      accentColor: 'text-[#B8860B]',
      articles: [
        {
          title: 'Виды заработка',
          content: 'Легальные способы: работа шахтером, фермером, кузнецом, барменом. Полулегальные: азартные игры, букмекерство. Нелегальные: контрабанда, грабежи, рэкет, торговля краденым. Доход зависит от риска и вложений. Легальные профессии безопасны, но приносят меньше. Криминал прибыльнее, но опасен.'
        },
        {
          title: 'Контрабанда алкоголя',
          content: 'Сухой закон делает алкоголь золотой жилой. Процесс: покупка или производство → транспортировка → продажа в подпольных барах. Нужны связи с поставщиками, надежный транспорт и покупатели. Риски: облавы полиции, грабители, конкуренты. Прибыль высокая, но требует организации и защиты.'
        },
        {
          title: 'Казино и азартные игры',
          content: 'Азартные игры - стабильный доход для семей. Покер, блэкджек, кости, ставки на бои и скачки. Для открытия казино нужна лицензия (официальная или купленная у мафии). Важен контроль территории - конкуренты могут совершить рейд. Игровые столы требуют крупье и охрану.'
        },
        {
          title: 'Рэкет и вымогательство',
          content: 'Рэкет - получение платы за "защиту" от бизнесов на вашей территории. Подход должен быть деликатным: предложите защиту от других банд, гарантируйте безопасность. Слишком высокая плата разорит бизнес. Нужен баланс - чтобы платили регулярно и оставались на плаву. Невыплата карается, но не смертью - мертвый не платит.'
        }
      ]
    },
    {
      id: 4,
      name: 'Территории',
      icon: 'Map',
      color: 'bg-[#556B2F]',
      accentColor: 'text-[#556B2F]',
      articles: [
        {
          title: 'Карта города',
          content: 'Нью-Остин разделен на районы: Центр (нейтральная территория), Восточный район (промышленный), Западный (жилой), Северный (богатый), Южный (портовый). За городом: шахты, фермы, подпольные производства. Каждая территория имеет стратегическое значение - ресурсы, транспортные пути, клиентов.'
        },
        {
          title: 'Районы и влияние',
          content: 'Контроль района дает доход от бизнесов, рэкета и операций. Влияние измеряется присутствием: чем больше ваших людей, операций и союзников, тем сильнее контроль. Конкуренты могут оспорить территорию через переговоры или войну. Слабое присутствие приглашает захватчиков.'
        },
        {
          title: 'Контрольные точки',
          content: 'Ключевые точки: железнодорожная станция (контрабанда), порт (импорт), мост (контроль движения), центральная площадь (нейтральная встречи), ратуша (коррупция), полицейский участок (информация). Контроль этих точек дает тактическое преимущество и дополнительный доход.'
        },
        {
          title: 'Нейтральные зоны',
          content: 'Нейтральные зоны - места перемирия: центральная площадь, церковь, больница, некоторые бары. Здесь запрещены разборки и нападения. Идеальны для переговоров между враждующими семьями. Нарушение нейтралитета карается всеми семьями совместно - это священное правило.'
        }
      ]
    },
    {
      id: 5,
      name: 'PvP и войны',
      icon: 'Swords',
      color: 'bg-[#6B4C7C]',
      accentColor: 'text-[#6B4C7C]',
      articles: [
        {
          title: 'Правила PvP',
          content: 'PvP разрешен при наличии RP причины: месть, защита территории, выполнение контракта, война между семьями. Запрещен случайный убийства (RDM). Перед нападением дайте возможность RP - предупреждение, угроза, шанс сдаться. Убийство должно быть логичным продолжением конфликта, а не самоцелью.'
        },
        {
          title: 'Объявление войны',
          content: 'Война объявляется официально: Дон встречается с Доном другой семьи или отправляет посыльного. Указываются причины и условия. После объявления начинается подготовка: сбор союзников, закупка оружия, планирование операций. Война заканчивается мирным договором или уничтожением одной стороны.'
        },
        {
          title: 'Тактика перестрелок',
          content: 'Используйте укрытия, координируйте действия через голосовую связь. Назначьте роли: стрелки, медики, водители. Изучите местность заранее - пути отхода, засадные позиции. Не геройствуйте в одиночку. Групповая тактика побеждает. После боя уходите быстро - приедет полиция.'
        },
        {
          title: 'Оружие и боеприпасы',
          content: 'Доступное оружие: револьверы, дробовики, винтовки, пистолеты-пулеметы (редкие). Покупка через черный рынок или семейные связи. Боеприпасы закупаются отдельно. Качественное оружие дорогое, но надежное. Храните арсенал в секретных схронах. За ношение оружия в городе - штраф или арест.'
        }
      ]
    },
    {
      id: 6,
      name: 'Транспорт',
      icon: 'Car',
      color: 'bg-[#A0522D]',
      accentColor: 'text-[#A0522D]',
      articles: [
        {
          title: 'Виды транспорта',
          content: 'Доступный транспорт: лошади (дешево, медленно), повозки (для грузов), автомобили (дорого, быстро, престижно), поезда (пассажирские и грузовые). Автомобили редки в 1919 году - показатель статуса. Лошади универсальны для города и бездорожья. Выбор зависит от задачи и бюджета.'
        },
        {
          title: 'Покупка автомобилей',
          content: 'Автомобили покупаются у дилера или с рук. Новые модели: Ford Model T (доступный), Cadillac Type 57 (средний), Rolls-Royce Silver Ghost (элитный). Требуют регистрации и номеров. Цены высокие - автомобиль роскошь. Можно украсть, но нужна перекраска и поддельные документы.'
        },
        {
          title: 'Гаражи и парковки',
          content: 'Личный гараж хранит транспорт безопасно. Аренда или покупка помещения. Уличная парковка рискованна - могут угнать. Семейные гаражи вмещают несколько машин, доступны членам. Секретные гаражи используются для хранения контрабанды и краденых автомобилей.'
        },
        {
          title: 'Тюнинг машин',
          content: 'Тюнинг включает: улучшение двигателя (скорость), усиление подвески (проходимость), бронирование (защита), перекраска (маскировка). Доступен у механиков или в семейных мастерских. Дорого, но дает преимущество в погонях и перестрелках. Заметный тюнинг привлекает внимание полиции.'
        }
      ]
    }
  ];

  const handleArticleClick = (category: WikiCategory, article: Article, index: number) => {
    setSelectedArticle({ category, article, index });
    setIsClosing(false);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedArticle(null);
      setIsClosing(false);
    }, 300);
  };

  return (
    <section className="min-h-screen pt-[180px] md:pt-[280px] pb-8 md:pb-16 newspaper-texture">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="border-4 md:border-8 border-black aged-paper shadow-2xl mb-8 md:mb-12 transform -rotate-1">
            <div className="border-2 md:border-4 border-black m-2 bg-white p-4 md:p-6 text-center">
              <div className="border-2 border-black p-3 md:p-4">
                <Icon name="BookMarked" size={32} className="mx-auto mb-2 md:mb-3 text-black md:w-12 md:h-12" />
                <h1 className="text-3xl md:text-6xl lg:text-7xl font-headline uppercase tracking-wider mb-2 leading-tight break-words" style={{fontFamily: 'UnifrakturMaguntia, serif'}}>
                  Энциклопедия Мафии
                </h1>
                <div className="text-[10px] md:text-sm uppercase tracking-widest border-t-2 border-b-2 border-black py-2 mt-2 md:mt-3">
                  Справочник • Том I • 1925
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            {wikiCategories.map((category, index) => (
              <div 
                key={category.id}
                className="border-4 md:border-6 border-black aged-paper shadow-xl"
                style={{transform: `rotate(${index % 2 === 0 ? '0.5deg' : '-0.5deg'})`}}
              >
                <div className={`border-b-2 md:border-b-4 border-black p-3 md:p-5 ${category.color}`}>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-10 h-10 md:w-14 md:h-14 border-2 md:border-4 border-amber-200 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center flex-shrink-0">
                      <Icon name={category.icon as any} size={20} className="text-black md:w-7 md:h-7" />
                    </div>
                    <h3 className="text-base md:text-xl lg:text-2xl font-headline uppercase tracking-wide text-amber-100 leading-tight">
                      {category.name}
                    </h3>
                  </div>
                </div>

                <div className="p-4 md:p-6 bg-white border-2 md:border-4 border-black m-2">
                  <div className="space-y-3">
                    {category.articles.map((article, articleIndex) => (
                      <div 
                        key={articleIndex}
                        onClick={() => handleArticleClick(category, article, articleIndex)}
                        className="flex items-start gap-3 text-sm border-b-2 border-black pb-3 last:border-0 hover:pl-2 transition-all group/item cursor-pointer hover:bg-amber-50"
                      >
                        <div className="w-8 h-8 border-2 border-black flex items-center justify-center flex-shrink-0 bg-white mt-0.5 group-hover/item:bg-amber-100 transition-colors">
                          <span className="font-headline font-bold text-sm">{articleIndex + 1}</span>
                        </div>
                        <div className="flex-1">
                          <span className="font-body text-base block group-hover/item:underline">{article.title}</span>
                        </div>
                        <Icon name="ChevronRight" size={20} className={`${category.accentColor} mt-1 group-hover/item:translate-x-1 transition-transform`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t-4 border-b-4 border-black py-3 aged-paper text-center shadow-lg">
            <div className="text-xs font-body uppercase tracking-widest">
              Более 500 статей • Постоянно обновляется • Создано сообществом
            </div>
          </div>
        </div>
      </div>

      {selectedArticle && (
        <div 
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/80 transition-opacity duration-300 animate-in fade-in ${
            isClosing ? 'opacity-0' : 'opacity-100'
          }`}
          onClick={handleClose}
        >
          <div 
            className={`bg-white border-4 md:border-8 border-black max-w-3xl max-h-[80vh] overflow-y-auto m-4 transition-all duration-300 animate-in zoom-in-95 ${
              isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-2 md:border-4 border-black m-2">
              <div className={`border-b-2 md:border-b-4 border-black p-4 md:p-6 ${selectedArticle.category.color}`}>
                <div className="flex items-start justify-between gap-2 md:gap-4">
                  <div className="flex items-start gap-2 md:gap-4 flex-1">
                    <div className="w-12 h-12 md:w-16 md:h-16 border-2 md:border-4 border-amber-200 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center flex-shrink-0">
                      <span className="font-headline font-bold text-2xl md:text-3xl">{selectedArticle.index + 1}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] md:text-xs uppercase tracking-widest text-amber-200 mb-1 md:mb-2">
                        {selectedArticle.category.name}
                      </div>
                      <h2 className="text-xl md:text-2xl lg:text-3xl font-headline uppercase tracking-wider text-white leading-tight break-words">
                        {selectedArticle.article.title}
                      </h2>
                    </div>
                  </div>
                  <Button
                    onClick={handleClose}
                    className="bg-black text-white hover:bg-black/80 border-2 md:border-4 border-white flex-shrink-0"
                    size="icon"
                  >
                    <Icon name="X" size={20} className="md:w-6 md:h-6" />
                  </Button>
                </div>
              </div>

              <div className="p-4 md:p-8 aged-paper">
                <div className="border-l-2 md:border-l-4 border-black pl-3 md:pl-6">
                  <p className="font-body text-sm md:text-base lg:text-lg leading-relaxed text-justify first-letter:text-4xl md:first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-2 md:first-letter:mr-3 first-letter:leading-none first-letter:font-headline">
                    {selectedArticle.article.content}
                  </p>
                </div>

                <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t-2 md:border-t-4 border-black text-center">
                  <div className="flex items-center justify-center gap-2 text-[10px] md:text-sm uppercase tracking-widest font-body">
                    <Icon name="BookMarked" size={16} className="md:w-5 md:h-5" />
                    <span>Энциклопедия Мафии • Том I</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WikiSection;