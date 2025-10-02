import { Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4" data-testid="text-footer-brand">
              Oils R Us
            </h3>
            <p className="text-muted-foreground">
              Your trusted source for premium quality oils
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <a 
                  href="tel:9733739000" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-phone"
                >
                  (973) 373-9000
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <p className="text-muted-foreground" data-testid="text-footer-address">
                  1123 Clinton Avenue<br />Irvington, NJ 07111
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Hours</h4>
            <div className="flex items-start gap-2">
              <Clock className="w-5 h-5 text-primary mt-0.5" />
              <div className="text-muted-foreground" data-testid="text-footer-hours">
                <p>Monday - Saturday</p>
                <p>11:00 AM - 7:00 PM</p>
                <p className="mt-2">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p data-testid="text-copyright">© {currentYear} Oils R Us. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
