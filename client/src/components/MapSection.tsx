import { MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MapSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4" data-testid="text-map-title">
            Visit Our Store
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Come experience our premium oils in person at our Irvington location
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-lg border border-border mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.6844087876395!2d-74.2319!3d40.7312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c254b7f6f6f6f6%3A0x1234567890!2s1123%20Clinton%20Ave%2C%20Irvington%2C%20NJ%2007111!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Oils R Us Location"
              data-testid="map-embed"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-medium" data-testid="text-map-address">1123 Clinton Avenue, Irvington, NJ 07111</span>
            </div>
            <Button 
              asChild
              className="bg-primary text-primary-foreground border border-primary-border rounded-full px-8"
              data-testid="button-directions"
            >
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=1123+Clinton+Avenue,+Irvington,+NJ+07111" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Get Directions
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
