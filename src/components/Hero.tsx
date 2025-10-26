import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen pt-[240px] pb-16 newspaper-texture"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2 border-4 border-black bg-white p-6">
              <div className="border-b-4 border-black pb-4 mb-4">
                <h2 className="text-5xl md:text-6xl font-headline font-bold leading-none tracking-tight uppercase">
                  MAFIA HOUSE OPENS DOORS TO NEW RECRUITS
                </h2>
                <div className="text-xs font-body mt-2 uppercase tracking-wider">
                  Exclusive Gaming Experience • Join the Family Today
                </div>
              </div>

              <div className="columns-2 gap-6 text-justify font-body text-sm leading-relaxed">
                <p className="mb-3">
                  <span className="float-left text-6xl font-headline leading-none mr-2 mt-1">В</span>
                  эпоху сухого закона, когда виски ценится на вес золота, а честь семьи дороже жизни, открывается уникальная возможность стать частью легендарной организации.
                </p>
                <p className="mb-3">
                  Mafia House — это не просто сервер, это целый мир, где каждое решение имеет последствия, каждый союз может быть предательством, а каждая сделка заключается рукопожатием и взглядом в глаза.
                </p>
                <p className="mb-3">
                  Более 250 игроков уже присоединились к семьям, контролирующим районы города. Подпольные казино, нелегальная торговля, разборки с конкурентами — всё это ждёт тех, кто готов рискнуть.
                </p>
                <div className="border-4 border-black bg-[#F5E6D0] p-4 my-4 text-center not-prose">
                  <div className="text-2xl font-headline uppercase mb-2">Внимание!</div>
                  <div className="text-xs uppercase tracking-wider">
                    Предательство карается смертью • Honor Above All
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-4 border-black bg-white p-4">
                <div className="border-b-2 border-black pb-2 mb-3">
                  <h3 className="text-sm font-headline uppercase tracking-wider text-center">
                    The Weather
                  </h3>
                </div>
                <div className="text-xs font-body text-center leading-relaxed">
                  Partly cloudy with a chance of gunfire. Temperature: Hot. Atmosphere: Tense.
                </div>
              </div>

              <div className="border-4 border-black bg-white p-4">
                <img 
                  src="https://cdn.poehali.dev/projects/cb4b7b13-739f-47b7-b656-8e116473ab1f/files/fa40f034-dcd1-4569-a3b1-ee4b25251f3c.jpg" 
                  alt="Gang members"
                  className="w-full aspect-square object-cover old-photo mb-2 border-2 border-black"
                />
                <div className="text-[10px] font-body text-center italic border-t-2 border-black pt-2">
                  Fig. 1 — Members of the organization photographed outside headquarters, circa 1925
                </div>
              </div>

              <div className="border-4 border-black bg-black text-white p-6 text-center">
                <div className="text-4xl font-headline mb-2">250+</div>
                <div className="h-px bg-white mb-2" />
                <div className="text-xs uppercase tracking-wider">Active Members</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border-4 border-black bg-white p-6">
              <div className="border-b-2 border-black pb-2 mb-3">
                <h3 className="text-2xl font-headline uppercase tracking-wide">
                  Weekly Activities Report
                </h3>
              </div>
              <div className="font-body text-sm leading-relaxed space-y-2">
                <div className="flex justify-between border-b border-black pb-1">
                  <span>Казино операции</span>
                  <span className="font-headline">127</span>
                </div>
                <div className="flex justify-between border-b border-black pb-1">
                  <span>Разборки с конкурентами</span>
                  <span className="font-headline">43</span>
                </div>
                <div className="flex justify-between border-b border-black pb-1">
                  <span>Новобранцы</span>
                  <span className="font-headline">89</span>
                </div>
              </div>
            </div>

            <div className="border-4 border-black bg-black text-white p-6 flex flex-col justify-center items-center text-center">
              <div className="text-xs uppercase tracking-[0.3em] mb-3">Special Offer</div>
              <div className="text-3xl font-headline uppercase mb-4 leading-tight">
                Join the Family<br/>This Week
              </div>
              <Button 
                size="lg"
                className="bg-white text-black hover:bg-[#F5E6D0] font-headline uppercase tracking-wider border-2 border-white"
              >
                Вступить сейчас
              </Button>
            </div>
          </div>

          <div className="border-t-4 border-b-4 border-black py-4 bg-white">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="text-center">
                <div className="text-3xl font-headline">1920</div>
                <div className="text-xs uppercase tracking-wider">Era</div>
              </div>
              <div className="w-px h-12 bg-black" />
              <div className="text-center">
                <div className="text-3xl font-headline">24/7</div>
                <div className="text-xs uppercase tracking-wider">Online</div>
              </div>
              <div className="w-px h-12 bg-black" />
              <div className="text-center">
                <div className="text-3xl font-headline">RU/EN</div>
                <div className="text-xs uppercase tracking-wider">Languages</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
