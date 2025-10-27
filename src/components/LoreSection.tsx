import Icon from '@/components/ui/icon';

const LoreSection = () => {
  return (
    <section className="min-h-screen pt-[280px] pb-16 newspaper-texture">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="border-8 border-black aged-paper shadow-2xl mb-12 transform -rotate-1">
            <div className="border-4 border-[#8B0000] m-2 bg-white p-8 text-center">
              <div className="border-2 border-black p-6">
                <Icon name="BookOpen" size={56} className="mx-auto mb-4 text-[#8B0000]" />
                <h1 className="text-7xl font-headline uppercase tracking-wider mb-3" style={{fontFamily: 'UnifrakturMaguntia, serif'}}>
                  История Нью-Остина
                </h1>
                <div className="text-lg uppercase tracking-widest border-t-2 border-b-2 border-black py-2 mt-4">
                  Хроники эпохи перемен • 1919 год
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="border-6 border-black aged-paper shadow-xl transform rotate-1">
              <div className="border-b-4 border-black p-4 bg-gradient-to-r from-zinc-800 to-black text-amber-300 text-center">
                <div className="text-2xl font-headline uppercase tracking-wider flex items-center justify-center gap-3">
                  <Icon name="Calendar" size={28} />
                  Эпоха перемен
                  <Icon name="Calendar" size={28} />
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-32 h-32 flex-shrink-0 border-4 border-black bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                    <div className="text-6xl font-headline">1919</div>
                  </div>
                  <div className="flex-1 space-y-4 font-body text-base leading-relaxed text-justify">
                    <p className="first-letter:text-7xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:font-headline">
                      На дворе 1919 год. Эпоха Дикого Запада уже позади, и большинство штатов постепенно отходят от прежнего образа жизни, характерного для этого времени. Вместо этого на фоне изменений начинают расти преступные синдикаты мафии, которые пользуются шансом на расширение своих влияний в новых условиях.
                    </p>
                    <p>
                      Промышленность в это время активно развивается, что создает новые возможности для преступных группировок. Заводы, фабрики и производственные предприятия становятся объектами интереса банд, которые стремятся использовать их для своих целей — от грабежей и вымогательств до нелегальной торговли.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-6 border-black aged-paper shadow-xl transform -rotate-1">
              <div className="border-b-4 border-black p-4 bg-gradient-to-r from-[#8B0000] to-red-900 text-white text-center">
                <div className="text-2xl font-headline uppercase tracking-wider flex items-center justify-center gap-3">
                  <Icon name="ShieldAlert" size={28} />
                  Сухой закон
                  <Icon name="ShieldAlert" size={28} />
                </div>
              </div>
              <div className="p-8">
                <div className="newspaper-column">
                  <p className="font-body text-base leading-relaxed text-justify first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-none first-letter:font-headline">
                    Одним из ключевых факторов, способствующих росту преступности, является действие сухого закона, введенного в США в 1919 году. Этот закон запрещает производство, продажу и транспортировку алкогольных напитков. В ответ на запрет возникает подпольная продукция алкоголя, которая становится прибыльным бизнесом для преступных организаций.
                  </p>
                  <p className="font-body text-base leading-relaxed text-justify">
                    Банды организуют тайные заводы и контрабандные маршруты, чтобы удовлетворять растущий спрос на нелегальный алкоголь. Законодательные органы и правоохранительные органы ведут активную борьбу с этим подпольным бизнесом, но часто оказываются не в силах справиться с масштабом проблемы. Таким образом, на фоне стремительных перемен и борьбы с преступностью, страна переживает период социальных и экономических изменений, где конфликты между законами и преступными синдикатами становятся неотъемлемой частью жизни.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-6 border-black aged-paper shadow-xl">
              <div className="border-b-4 border-black p-4 bg-gradient-to-r from-amber-800 to-amber-900 text-white text-center">
                <div className="text-2xl font-headline uppercase tracking-wider flex items-center justify-center gap-3">
                  <Icon name="MapPin" size={28} />
                  Штат Нью-Остин
                  <Icon name="MapPin" size={28} />
                </div>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-4 border-black p-6 bg-white/50">
                    <div className="flex items-center gap-2 mb-4 border-b-2 border-black pb-2">
                      <Icon name="Skull" size={24} className="text-[#8B0000]" />
                      <h3 className="text-xl font-headline uppercase">Земля хаоса</h3>
                    </div>
                    <p className="font-body text-sm leading-relaxed text-justify">
                      Но не на всех территориях штатов все так гладко. Штат Нью-Остин, расположенный на Западе, по-прежнему застрял в реалиях Дикого Запада. Этот регион отличается от более цивилизованных и развитых частей страны своими уникальными условиями и проблемами.
                    </p>
                  </div>
                  <div className="border-4 border-black p-6 bg-white/50">
                    <div className="flex items-center gap-2 mb-4 border-b-2 border-black pb-2">
                      <Icon name="Users" size={24} className="text-[#8B0000]" />
                      <h3 className="text-xl font-headline uppercase">Власть банд</h3>
                    </div>
                    <p className="font-body text-sm leading-relaxed text-justify">
                      В Нью-Остине царит хаос, и правоохранительные органы с большой земли избегают этих районов, потому что здесь преобладают огромные бандформирования. Эти банды фактически навязывают свое видение власти и поддерживают собственный порядок.
                    </p>
                  </div>
                </div>
                <div className="mt-6 border-t-4 border-black pt-6">
                  <p className="font-body text-base leading-relaxed text-justify">
                    Такие банды имеют значительное влияние и контролируют большую часть региона, что делает их почти неприкасаемыми для внешнего вмешательства. Однако, несмотря на это, изредка представители правоохранительных органов с большой земли всё же предпринимают рискованные вылазки в Нью-Остин. Эти операции часто имеют целью ограниченное вмешательство или попытку нарушить деятельность местных банд, но они встречают жесткое сопротивление и редко достигают значительного успеха.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-6 border-black aged-paper shadow-xl transform rotate-1">
              <div className="border-b-4 border-black p-4 bg-gradient-to-r from-yellow-700 to-yellow-900 text-white text-center">
                <div className="text-2xl font-headline uppercase tracking-wider flex items-center justify-center gap-3">
                  <Icon name="Pickaxe" size={28} />
                  Шахты и ресурсы
                  <Icon name="Pickaxe" size={28} />
                </div>
              </div>
              <div className="p-8">
                <div className="newspaper-column">
                  <p className="font-body text-base leading-relaxed text-justify first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-none first-letter:font-headline">
                    Кроме того, банды Нью-Остина полностью контролируют местные шахты, где добываются ценные ресурсы. Эти ресурсы очень важны для остальной части страны, что создает зависимость остальных штатов от Нью-Остина. Из-за этого многие внешние силы стремятся получить доступ к этим шахтам, что порождает целый ряд конфликтов и напряжения.
                  </p>
                  <p className="font-body text-base leading-relaxed text-justify">
                    Некоторые смельчаки и авантюристы решаются на рискованные операции по проникновению на территорию Нью-Остина с целью извлечения выгоды из шахт. Такие вылазки часто заканчиваются неудачей из-за сильного сопротивления со стороны местных банд и сложных условий.
                  </p>
                  <p className="font-body text-base leading-relaxed text-justify">
                    Тем не менее, есть и те, кто предпочитает более мирные методы. Некоторые бизнесмены и политики находят общий язык с бандитами, предлагая им деловые предложения или заключая соглашения, чтобы получить доступ к ресурсам или наладить сотрудничество. Эти сделки позволяют им извлекать выгоду из сложной ситуации, но при этом они должны соблюдать осторожность, чтобы не нарушить хрупкий баланс сил в регионе.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-8 border-[#8B0000] aged-paper shadow-2xl transform -rotate-1">
              <div className="border-4 border-black m-2 bg-gradient-to-r from-red-900 via-red-800 to-orange-900 text-white p-6 text-center">
                <div className="border-2 border-white p-4">
                  <div className="text-3xl font-headline uppercase tracking-wider flex items-center justify-center gap-3 mb-2">
                    <Icon name="Flame" size={36} />
                    Угроза с Востока
                    <Icon name="Flame" size={36} />
                  </div>
                  <div className="text-sm uppercase tracking-widest border-t border-b border-white py-2">
                    Остров Гуарма готовит вторжение
                  </div>
                </div>
              </div>
              <div className="p-8 bg-gradient-to-b from-red-50/50 to-orange-50/50">
                <div className="border-4 border-[#8B0000] bg-white p-6 mb-6">
                  <div className="flex items-start gap-4">
                    <Icon name="AlertTriangle" size={48} className="text-[#8B0000] flex-shrink-0" />
                    <p className="font-body text-lg leading-relaxed text-justify font-bold">
                      Тогда как Запад изрыгает из своего пекла ожесточенные банды, ввергающие Нью-Остин в хаос, подкрадывается беда с Востока — острова, имя которому Гуарма.
                    </p>
                  </div>
                </div>
                <div className="space-y-4 font-body text-base leading-relaxed text-justify">
                  <p className="first-letter:text-7xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:font-headline first-letter:text-[#8B0000]">
                    Повстанцы укрепляют свои ряды, грядет массовое, спланированное движение на Материк. Плантации острова в изобилии произрастающих наркотических веществ, однако их сильнейшая тайна кроется не только в торговле веществами, но и уникальном, Кубинском алкоголе.
                  </p>
                  <div className="border-l-4 border-[#8B0000] pl-6 py-2 bg-red-50">
                    <p className="italic">
                      Здесь, на этом тропическом клочке земли, зарождаются идеи, способные изменить ход истории. Но их война - война не открытая, их путь - новая квазивойна.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-6 border-black aged-paper shadow-xl p-8 text-center">
              <div className="border-4 border-black p-6">
                <Icon name="Scroll" size={40} className="mx-auto mb-3 text-[#8B0000]" />
                <div className="text-sm font-headline uppercase tracking-widest mb-4">
                  История продолжается
                </div>
                <p className="font-body text-xs leading-relaxed italic">
                  События разворачиваются прямо сейчас. Станьте частью этой истории.<br/>
                  Ваши действия определят судьбу Нью-Остина.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t-4 border-b-4 border-black py-2 bg-white text-center">
            <div className="text-[10px] font-body uppercase tracking-widest">
              Официальная хроника событий штата Нью-Остин • Составлено историческим обществом
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoreSection;
