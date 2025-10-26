import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-20"
      style={{
        backgroundImage: 'url(https://cdn.poehali.dev/projects/cb4b7b13-739f-47b7-b656-8e116473ab1f/files/4cb326ca-867f-4db3-9a2e-6b74b64ae20b.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-vintage-brown/80 via-vintage-brown/70 to-vintage-brown/90" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-block">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-20 bg-vintage-gold" />
              <Icon name="Star" className="text-vintage-gold" size={32} />
              <div className="h-px w-20 bg-vintage-gold" />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-bold text-vintage-gold leading-tight">
            MAFIA HOUSE
          </h1>
          
          <p className="text-xl md:text-2xl text-vintage-sepia font-body max-w-2xl mx-auto leading-relaxed">
            Добро пожаловать в эпоху сухого закона. Здесь царит закон улиц, семейная честь и власть подполья.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button 
              size="lg" 
              className="bg-vintage-gold text-vintage-brown hover:bg-vintage-gold/90 font-display text-lg px-8 py-6 h-auto"
            >
              <Icon name="Play" className="mr-2" size={20} />
              Начать играть
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-vintage-gold text-vintage-gold hover:bg-vintage-gold/10 font-display text-lg px-8 py-6 h-auto"
            >
              <Icon name="Users" className="mr-2" size={20} />
              Сообщество
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-display font-bold text-vintage-gold">250+</div>
              <div className="text-sm text-vintage-sepia font-body">Игроков онлайн</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-display font-bold text-vintage-gold">1920</div>
              <div className="text-sm text-vintage-sepia font-body">Эпоха мафии</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-display font-bold text-vintage-gold">24/7</div>
              <div className="text-sm text-vintage-sepia font-body">Сервер активен</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" className="text-vintage-gold" size={32} />
      </div>
    </section>
  );
};

export default Hero;
