import { CheckCircle } from "lucide-react";
import aboutImage from "@assets/generated_images/Oils_with_natural_botanicals_lifestyle_77b78933.png";

const features = [
  "Sustainably Sourced",
  "Lab Tested for Purity",
  "Premium Quality Guaranteed",
  "Expert Curation"
];

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6" data-testid="text-about-title">
              About Oils R Us
            </h2>
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              Oils R Us is dedicated to providing only the highest quality oils for all purposes. Whether you're looking for essential oils, carrier oils, or culinary oils, we have it all.
            </p>
            <p className="text-lg text-foreground mb-8 leading-relaxed">
              Our products are sourced from the best suppliers, and our commitment to quality means that only the finest oils make it to our shelves. Experience luxury in every drop!
            </p>
            
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3" data-testid={`feature-${index}`}>
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={aboutImage} 
                alt="Premium oils with natural botanicals"
                className="w-full h-auto object-cover"
                data-testid="img-about"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
