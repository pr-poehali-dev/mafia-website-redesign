import Icon from '@/components/ui/icon';

const LoreSection = () => {
  return (
    <section className="min-h-screen pt-[280px] pb-16 newspaper-texture">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="border-8 border-black aged-paper shadow-2xl mb-12">
            <div className="border-4 border-black m-2 bg-white text-center">
              <div className="border-b-4 border-black bg-black text-white py-2 px-4">
                <div className="text-xs uppercase tracking-[0.5em] font-body">Выпуск № 47</div>
              </div>
              <div className="p-6 border-b-4 border-black">
                <h1 className="text-7xl font-headline uppercase tracking-wider mb-2" style={{fontFamily: 'UnifrakturMaguntia, serif'}}>
                  Новостинская Газета
                </h1>
                <div className="text-sm uppercase tracking-widest">
                  The Frontier Gazette
                </div>
                <div className="text-sm uppercase tracking-widest border-t-2 border-black py-2 mt-3 font-body">
                  Нью-Остин • Понедельник, 15 Сентября 1919 • Цена 5 центов
                </div>
              </div>
              <div className="bg-black text-white py-1 px-4">
                <div className="text-xs uppercase tracking-widest font-body">«Голос Дикого Запада»</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-6 border-black aged-paper shadow-xl">
              <div className="border-b-4 border-black p-3 bg-black text-white">
                <h2 className="text-3xl font-headline uppercase tracking-wider text-center">
                  Эпоха перемен наступила
                </h2>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-28 h-28 flex-shrink-0 border-4 border-black bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center transform -rotate-3">
                    <div className="text-4xl font-headline">1919</div>
                  </div>
                  <div className="text-xs uppercase tracking-wider border-l-4 border-black pl-3 py-2 font-body">
                    <div>Специальный репортаж</div>
                    <div className="mt-1">От нашего корреспондента</div>
                  </div>
                </div>
                <div className="space-y-3 font-body text-sm leading-relaxed text-justify columns-1">
                  <p className="first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-none first-letter:font-headline">
                    На дворе 1919 год. Эпоха Дикого Запада уже позади, и большинство штатов постепенно отходят от прежнего образа жизни, характерного для этого времени. Вместо этого на фоне изменений начинают расти преступные синдикаты мафии, которые пользуются шансом на расширение своих влияний в новых условиях.
                  </p>
                  <p>
                    Промышленность в это время активно развивается, что создает новые возможности для преступных группировок. Заводы, фабрики и производственные предприятия становятся объектами интереса банд.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-6 border-black aged-paper shadow-xl">
              <div className="border-b-4 border-black p-3 bg-[#8B0000] text-white">
                <h2 className="text-3xl font-headline uppercase tracking-wider text-center">
                  Сухой закон: новая угроза
                </h2>
              </div>
              <div className="p-6">
                <div className="border-4 border-black p-3 mb-4 bg-amber-50 text-center">
                  <div className="text-xs uppercase tracking-widest font-bold font-body">Экстренное объявление</div>
                  <div className="text-2xl font-headline mt-1">ЗАПРЕЩЕНО</div>
                </div>
                <div className="space-y-3 font-body text-sm leading-relaxed text-justify columns-1">
                  <p className="first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-none first-letter:font-headline">
                    Одним из ключевых факторов, способствующих росту преступности, является действие сухого закона, введенного в США в 1919 году. Этот закон запрещает производство, продажу и транспортировку алкогольных напитков.
                  </p>
                  <p>
                    Банды организуют тайные заводы и контрабандные маршруты, чтобы удовлетворять растущий спрос на нелегальный алкоголь. Законодательные органы ведут активную борьбу, но часто оказываются не в силах справиться с масштабом проблемы.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-6 border-black aged-paper shadow-xl md:col-span-2">
              <div className="border-b-4 border-black p-3 bg-black text-white text-center">
                <h2 className="text-4xl font-headline uppercase tracking-wider">
                  Штат Нью-Остин: последний оплот хаоса
                </h2>
                <div className="text-xs uppercase tracking-widest mt-2 font-body">Эксклюзивный материал с границ цивилизации</div>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="border-4 border-black p-4 bg-white/80">
                    <div className="text-center mb-3 pb-2 border-b-4 border-black">
                      <Icon name="Skull" size={40} className="mx-auto text-[#8B0000] mb-2" />
                      <h3 className="text-xl font-headline uppercase">Земля беззакония</h3>
                    </div>
                    <p className="font-body text-xs leading-relaxed text-justify">
                      Штат Нью-Остин, расположенный на Западе, по-прежнему застрял в реалиях Дикого Запада. Этот регион отличается от более цивилизованных частей страны своими уникальными условиями и проблемами.
                    </p>
                  </div>
                  
                  <div className="border-4 border-black p-4 bg-white/80">
                    <div className="text-center mb-3 pb-2 border-b-4 border-black">
                      <Icon name="Users" size={40} className="mx-auto text-[#8B0000] mb-2" />
                      <h3 className="text-xl font-headline uppercase">Власть банд</h3>
                    </div>
                    <p className="font-body text-xs leading-relaxed text-justify">
                      В Нью-Остине царит хаос, и правоохранительные органы избегают этих районов, потому что здесь преобладают огромные бандформирования, которые навязывают свое видение власти.
                    </p>
                  </div>

                  <div className="border-4 border-black p-4 bg-white/80">
                    <div className="text-center mb-3 pb-2 border-b-4 border-black">
                      <Icon name="Pickaxe" size={40} className="mx-auto text-[#8B0000] mb-2" />
                      <h3 className="text-xl font-headline uppercase">Шахты</h3>
                    </div>
                    <p className="font-body text-xs leading-relaxed text-justify">
                      Банды Нью-Остина полностью контролируют местные шахты, где добываются ценные ресурсы, важные для остальной части страны, что создает зависимость.
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t-4 border-black pt-6 columns-2 gap-6">
                  <p className="font-body text-sm leading-relaxed text-justify first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-none first-letter:font-headline">
                    Такие банды имеют значительное влияние и контролируют большую часть региона, что делает их почти неприкасаемыми для внешнего вмешательства. Однако, несмотря на это, изредка представители правоохранительных органов с большой земли всё же предпринимают рискованные вылазки в Нью-Остин.
                  </p>
                  <p className="font-body text-sm leading-relaxed text-justify">
                    Эти операции часто имеют целью ограниченное вмешательство или попытку нарушить деятельность местных банд, но они встречают жесткое сопротивление и редко достигают значительного успеха. Местное население живет в постоянном страхе, но находит способы выживать в этих суровых условиях.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-6 border-black aged-paper shadow-xl">
              <div className="border-b-4 border-black p-3 bg-yellow-900 text-white">
                <h2 className="text-2xl font-headline uppercase tracking-wider text-center">
                  Конфликт за ресурсы разгорается
                </h2>
              </div>
              <div className="p-6">
                <div className="border-l-8 border-black pl-4 mb-4 bg-amber-50 py-3">
                  <div className="text-xs uppercase tracking-widest font-bold mb-1 font-body">Срочные новости</div>
                  <div className="text-lg font-headline">НАПРЯЖЕНИЕ РАСТЕТ</div>
                </div>
                <div className="space-y-3 font-body text-sm leading-relaxed text-justify">
                  <p className="first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-none first-letter:font-headline">
                    Некоторые смельчаки и авантюристы решаются на рискованные операции по добыче или контрабанде ресурсов, стараясь избежать столкновения с властными бандами. 
                  </p>
                  <p>
                    Такие операции требуют большой осторожности и часто заканчиваются неудачами, но для тех, кто отчаянно нуждается в средствах или ресурсах, это единственный шанс на выживание.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-6 border-black aged-paper shadow-xl">
              <div className="border-b-4 border-black p-3 bg-amber-800 text-white">
                <h2 className="text-2xl font-headline uppercase tracking-wider text-center">
                  Будущее остается неясным
                </h2>
              </div>
              <div className="p-6">
                <div className="mb-4 text-center">
                  <Icon name="Newspaper" size={48} className="mx-auto text-amber-800 mb-2" />
                  <div className="text-xs uppercase tracking-widest font-body border-y-2 border-black py-2">
                    Взгляд в будущее
                  </div>
                </div>
                <div className="space-y-3 font-body text-sm leading-relaxed text-justify">
                  <p className="first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-none first-letter:font-headline">
                    В целом, Нью-Остин остается зоной постоянного конфликта и напряжения, где банды, авантюристы и правоохранительные органы сталкиваются в борьбе за контроль и выживание.
                  </p>
                  <p>
                    Ситуация в регионе продолжает оставаться нестабильной, и будущее Нью-Остина остается неясным, в то время как остальная часть страны медленно адаптируется к новым реалиям послевоенного мира.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-6 border-black aged-paper shadow-xl md:col-span-2">
              <div className="border-b-4 border-black p-4 bg-gradient-to-r from-black via-zinc-800 to-black text-white text-center">
                <h2 className="text-4xl font-headline uppercase tracking-wider mb-2">
                  Реальность Нью-Остина
                </h2>
                <div className="text-xs uppercase tracking-widest font-body">Жизнь на грани закона и хаоса</div>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="border-4 border-black p-4 mb-6 bg-amber-50">
                      <div className="flex items-center gap-3 border-b-2 border-black pb-2 mb-3">
                        <Icon name="TrendingDown" size={32} className="text-[#8B0000]" />
                        <h3 className="text-2xl font-headline uppercase">Упадок порядка</h3>
                      </div>
                      <p className="font-body text-sm leading-relaxed text-justify">
                        Этот регион стал местом, где старые правила Дикого Запада всё ещё действуют, а преступность и насилие являются неотъемлемой частью повседневной жизни. В отличие от восточных штатов, где индустриализация и урбанизация приносят относительную стабильность и новый порядок, Нью-Остин продолжает жить по законам силы и выживания.
                      </p>
                    </div>

                    <div className="border-4 border-black p-4 bg-white">
                      <div className="flex items-center gap-3 border-b-2 border-black pb-2 mb-3">
                        <Icon name="Swords" size={32} className="text-[#8B0000]" />
                        <h3 className="text-2xl font-headline uppercase">Конфликты</h3>
                      </div>
                      <ul className="space-y-2 font-body text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-2xl leading-none">•</span>
                          <span>Борьба за территории между бандами</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-2xl leading-none">•</span>
                          <span>Контрабанда алкоголя и ценных ресурсов</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-2xl leading-none">•</span>
                          <span>Редкие вылазки федеральных маршалов</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-2xl leading-none">•</span>
                          <span>Отчаянные попытки авантюристов</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <div className="border-4 border-black p-4 mb-6 bg-white">
                      <div className="flex items-center gap-3 border-b-2 border-black pb-2 mb-3">
                        <Icon name="Users" size={32} className="text-[#8B0000]" />
                        <h3 className="text-2xl font-headline uppercase">Население</h3>
                      </div>
                      <p className="font-body text-sm leading-relaxed text-justify mb-3">
                        Жители Нью-Остина вынуждены приспосабливаться к условиям, где правосудие часто берут в свои руки самые сильные и беспощадные. Местное население, включая фермеров, торговцев и простых жителей, живет в постоянном страхе и неопределенности.
                      </p>
                      <p className="font-body text-sm leading-relaxed text-justify">
                        Они вынуждены искать способы выживания, балансируя между необходимостью сотрудничества с бандами и попытками сохранить свою независимость и безопасность.
                      </p>
                    </div>

                    <div className="border-4 border-black p-4 bg-amber-50">
                      <div className="text-center border-b-2 border-black pb-3 mb-3">
                        <Icon name="AlertTriangle" size={40} className="mx-auto mb-2 text-[#8B0000]" />
                        <h3 className="text-xl font-headline uppercase">Предупреждение</h3>
                      </div>
                      <p className="font-body text-xs leading-relaxed text-center italic">
                        «Федеральное правительство настоятельно не рекомендует путешествия в регион Нью-Остин без соответствующей вооруженной охраны. Местные власти не гарантируют безопасность граждан.»
                      </p>
                      <div className="text-center mt-3 pt-3 border-t-2 border-black">
                        <div className="text-xs uppercase tracking-wider font-body">— Министерство внутренних дел, 1919</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-8 border-black aged-paper shadow-2xl">
            <div className="border-4 border-black m-2 bg-black text-white p-4 text-center">
              <div className="text-xs uppercase tracking-[0.3em] mb-2 font-body">Редакция The Frontier Gazette</div>
              <p className="text-sm font-body italic">
                «Мы продолжим освещать события в Нью-Остине, пока есть смельчаки, готовые рассказать правду»
              </p>
              <div className="mt-3 pt-3 border-t border-white/30 text-xs uppercase tracking-widest font-body">
                Следующий выпуск • Четверг, 18 Сентября 1919
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoreSection;