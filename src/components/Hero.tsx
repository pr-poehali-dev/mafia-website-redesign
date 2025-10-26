import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 4px),
            repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 4px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-6 border-8 border-black p-12 bg-white shadow-2xl">
            <div className="flex items-center justify-center gap-8 mb-8">
              <div className="h-1 w-32 bg-black" />
              <div className="w-16 h-16 border-4 border-black flex items-center justify-center rotate-45">
                <Icon name="Skull" className="text-black -rotate-45" size={32} />
              </div>
              <div className="h-1 w-32 bg-black" />
            </div>

            <h1 className="text-8xl md:text-9xl font-display font-black text-black leading-none tracking-tight uppercase border-y-4 border-black py-6">
              MAFIA HOUSE
            </h1>
            
            <div className="text-2xl font-body italic text-black/80 max-w-3xl mx-auto leading-relaxed border-t-2 border-b-2 border-black/20 py-4">
              "В эпоху сухого закона правит тот, кто контролирует виски. <span className="text-mafia-red font-bold not-italic">Предательство карается смертью.</span>"
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Button 
                size="lg" 
                className="bg-black text-white hover:bg-mafia-red font-headline text-xl px-12 py-7 h-auto border-4 border-black hover:border-mafia-red uppercase tracking-widest"
              >
                НАЧАТЬ ИГРУ
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-4 border-black text-black hover:bg-black hover:text-white font-headline text-xl px-12 py-7 h-auto uppercase tracking-widest"
              >
                ФОРУМ
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="border-4 border-black bg-white p-8 text-center hover:bg-black hover:text-white transition-all group">
              <div className="text-6xl font-display font-black mb-2 group-hover:text-mafia-red transition-colors">250+</div>
              <div className="text-sm font-body uppercase tracking-widest border-t-2 border-current pt-2">Игроков онлайн</div>
            </div>
            <div className="border-4 border-black bg-white p-8 text-center hover:bg-black hover:text-white transition-all group">
              <div className="text-6xl font-display font-black mb-2 group-hover:text-mafia-red transition-colors">1920</div>
              <div className="text-sm font-body uppercase tracking-widest border-t-2 border-current pt-2">Эпоха мафии</div>
            </div>
            <div className="border-4 border-black bg-white p-8 text-center hover:bg-black hover:text-white transition-all group">
              <div className="text-6xl font-display font-black mb-2 group-hover:text-mafia-red transition-colors">24/7</div>
              <div className="text-sm font-body uppercase tracking-widest border-t-2 border-current pt-2">Сервер активен</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" className="text-black" size={40} />
      </div>
    </section>
  );
};

export default Hero;
