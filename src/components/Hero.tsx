import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      style={{
        backgroundImage: 'url(https://cdn.poehali.dev/projects/cb4b7b13-739f-47b7-b656-8e116473ab1f/files/43da6b9c-f3ac-4e8f-a8ea-c4af565321cd.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/95" />
      <div className="absolute inset-0 bg-mafia-red/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10 animate-fade-in">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-mafia-red blur-3xl opacity-20"></div>
            <div className="relative flex items-center justify-center gap-6 mb-8">
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-mafia-red to-transparent" />
              <Icon name="Skull" className="text-mafia-red" size={40} />
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-mafia-red to-transparent" />
            </div>
          </div>

          <h1 className="text-7xl md:text-9xl font-display font-black text-white leading-none tracking-wider">
            MAFIA HOUSE
          </h1>
          
          <div className="relative">
            <p className="text-2xl md:text-3xl text-mafia-cream font-light max-w-3xl mx-auto leading-relaxed tracking-wide">
              Эпоха сухого закона. Город контролируют семьи. <span className="text-mafia-red font-semibold">Предательство карается смертью.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Button 
              size="lg" 
              className="bg-mafia-red text-white hover:bg-mafia-red/90 font-bold text-lg px-10 py-7 h-auto shadow-2xl shadow-mafia-red/50 hover:shadow-mafia-red/70 transition-all"
            >
              <Icon name="Play" className="mr-3" size={22} />
              НАЧАТЬ ИГРУ
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black font-bold text-lg px-10 py-7 h-auto transition-all"
            >
              <Icon name="Users" className="mr-3" size={22} />
              СООБЩЕСТВО
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-12 pt-20 max-w-4xl mx-auto">
            <div className="space-y-3 relative group">
              <div className="absolute inset-0 bg-mafia-red blur-2xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative text-5xl font-display font-black text-mafia-red">250+</div>
              <div className="text-sm text-mafia-cream/70 font-medium tracking-wider uppercase">Игроков онлайн</div>
            </div>
            <div className="space-y-3 relative group">
              <div className="absolute inset-0 bg-mafia-red blur-2xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative text-5xl font-display font-black text-mafia-red">1920</div>
              <div className="text-sm text-mafia-cream/70 font-medium tracking-wider uppercase">Эпоха мафии</div>
            </div>
            <div className="space-y-3 relative group">
              <div className="absolute inset-0 bg-mafia-red blur-2xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative text-5xl font-display font-black text-mafia-red">24/7</div>
              <div className="text-sm text-mafia-cream/70 font-medium tracking-wider uppercase">Сервер активен</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" className="text-mafia-red" size={40} />
      </div>
    </section>
  );
};

export default Hero;