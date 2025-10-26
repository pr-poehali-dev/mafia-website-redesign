import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden newspaper-texture"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 3px),
            repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 3px)
          `,
          backgroundSize: '30px 30px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="border-8 border-double border-black p-2 mb-12 bg-white">
            <div className="border-4 border-black p-10 bg-white">
              <div className="flex items-center justify-center gap-6 mb-6">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 bg-black rotate-45 mb-1" />
                  <div className="h-16 w-px bg-black" />
                  <div className="w-2 h-2 bg-black rotate-45 mt-1" />
                </div>
                <div className="text-center">
                  <div className="text-xs font-body tracking-[0.3em] uppercase mb-1">Vol. I — No. 1</div>
                  <div className="h-px w-full bg-black mb-1" />
                  <div className="text-xs font-body italic">Established 1920</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 bg-black rotate-45 mb-1" />
                  <div className="h-16 w-px bg-black" />
                  <div className="w-2 h-2 bg-black rotate-45 mt-1" />
                </div>
              </div>

              <h1 className="text-8xl md:text-9xl font-display font-black text-black leading-none text-center tracking-tighter uppercase mb-4">
                MAFIA HOUSE
              </h1>
              
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px flex-1 bg-black" />
                <div className="text-sm font-body tracking-[0.2em] uppercase">Prohibition Era Chronicle</div>
                <div className="h-px flex-1 bg-black" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="border-2 border-black p-6 bg-[#f8f5ec]">
                  <img 
                    src="https://cdn.poehali.dev/projects/cb4b7b13-739f-47b7-b656-8e116473ab1f/files/fa40f034-dcd1-4569-a3b1-ee4b25251f3c.jpg" 
                    alt="Gang members"
                    className="w-full h-64 object-cover old-photo mb-3"
                  />
                  <div className="text-xs font-body text-center italic border-t border-black pt-2">
                    Fig. 1 — Члены организации, 1925
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <p className="text-xl font-body leading-relaxed text-justify">
                    В эпоху <span className="font-bold">сухого закона</span> улицы города контролируют могущественные семьи. 
                    Виски течёт рекой в подпольных заведениях, а <span className="text-mafia-red font-bold">предательство карается смертью</span>.
                  </p>
                  <div className="border-l-4 border-black pl-4 italic text-lg font-body">
                    "Семья — это всё. Честь дороже золота."
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 border-t-2 border-black">
                <Button 
                  size="lg" 
                  className="bg-black text-white hover:bg-mafia-red font-headline text-2xl px-12 py-7 h-auto border-4 border-black hover:border-mafia-red uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  ВСТУПИТЬ В СЕМЬЮ
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-4 border-black text-black hover:bg-black hover:text-white font-headline text-2xl px-12 py-7 h-auto uppercase tracking-widest"
                >
                  ЧИТАТЬ ГАЗЕТУ
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="border-4 border-black bg-white p-8 text-center hover:bg-black hover:text-white transition-all group shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-7xl font-display font-black mb-3 group-hover:text-mafia-red transition-colors">250+</div>
              <div className="h-px bg-current mb-3" />
              <div className="text-xs font-body uppercase tracking-[0.2em]">Игроков<br/>онлайн</div>
            </div>
            <div className="border-4 border-black bg-white p-8 text-center hover:bg-black hover:text-white transition-all group shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-7xl font-display font-black mb-3 group-hover:text-mafia-red transition-colors">1920</div>
              <div className="h-px bg-current mb-3" />
              <div className="text-xs font-body uppercase tracking-[0.2em]">Эпоха<br/>мафии</div>
            </div>
            <div className="border-4 border-black bg-white p-8 text-center hover:bg-black hover:text-white transition-all group shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-7xl font-display font-black mb-3 group-hover:text-mafia-red transition-colors">24/7</div>
              <div className="h-px bg-current mb-3" />
              <div className="text-xs font-body uppercase tracking-[0.2em]">Сервер<br/>активен</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="border-2 border-black bg-white p-2">
          <Icon name="ChevronDown" className="text-black" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;