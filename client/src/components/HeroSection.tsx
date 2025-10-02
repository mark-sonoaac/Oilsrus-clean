import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Premium_oil_bottles_hero_image_2d94a600.png";

export default function HeroSection() {
  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/50 to-primary/60" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-24 text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-semibold text-primary-foreground mb-6 tracking-tight" data-testid="text-heading">
          Oils R Us
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/95 mb-8 max-w-2xl mx-auto">
          Discover the Finest Premium Oils
        </p>
        <p className="text-lg text-primary-foreground/90 mb-12 max-w-xl mx-auto">
          A curated collection of the highest quality oils for all your needs
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground border border-accent-border rounded-full px-8"
            onClick={scrollToGallery}
            data-testid="button-view-collection"
          >
            View Our Collection
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="backdrop-blur-sm bg-white/10 border-white/30 text-primary-foreground hover:bg-white/20 rounded-full px-8"
            asChild
            data-testid="button-get-directions"
          >
            <a href="https://www.google.com/maps?q=1123+Clinton+Avenue,+Irvington,+NJ+07111" target="_blank" rel="noopener noreferrer">
              Get Directions
            </a>
          </Button>
        </div>

        <div className="bg-background/95 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-8 max-w-3xl mx-auto border border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center gap-2">
              <Phone className="w-6 h-6 text-primary" />
              <a 
                href="tel:9733739000" 
                className="text-foreground hover:text-primary transition-colors font-medium"
                data-testid="link-phone"
              >
                (973) 373-9000
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-6 h-6 text-primary" />
              <p className="text-foreground text-center" data-testid="text-address">
                1123 Clinton Avenue<br />Irvington, NJ 07111
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock className="w-6 h-6 text-primary" />
              <p className="text-foreground" data-testid="text-hours">
                Mon - Sat<br />11:00 AM - 7:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
