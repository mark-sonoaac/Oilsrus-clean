import oliveOil from "@assets/generated_images/Olive_oil_product_shot_f21ab873.png";
import coconutOil from "@assets/generated_images/Coconut_oil_product_shot_b031f635.png";
import essentialOils from "@assets/generated_images/Essential_oils_product_shot_d94a6290.png";
import avocadoOil from "@assets/generated_images/Avocado_oil_product_shot_bdd0e8ac.png";
import arganOil from "@assets/generated_images/Argan_oil_product_shot_b79b9e65.png";
import sesameOil from "@assets/generated_images/Sesame_oil_product_shot_6c0bc659.png";

const products = [
  { id: 1, name: "Premium Olive Oil", image: oliveOil, description: "Extra virgin cold-pressed" },
  { id: 2, name: "Coconut Oil", image: coconutOil, description: "Pure organic coconut oil" },
  { id: 3, name: "Essential Oils", image: essentialOils, description: "Aromatherapy collection" },
  { id: 4, name: "Avocado Oil", image: avocadoOil, description: "Rich in healthy fats" },
  { id: 5, name: "Argan Oil", image: arganOil, description: "Moroccan beauty oil" },
  { id: 6, name: "Sesame Oil", image: sesameOil, description: "Authentic Asian flavor" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4" data-testid="text-gallery-title">
            Our Premium Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through our wide range of premium oils, each carefully selected for quality and purity
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group bg-card border border-card-border rounded-lg overflow-hidden hover-elevate active-elevate-2 transition-transform duration-300 hover:scale-105"
              data-testid={`card-product-${product.id}`}
            >
              <div className="aspect-[4/5] bg-background overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-card-foreground mb-1" data-testid={`text-product-name-${product.id}`}>
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground" data-testid={`text-product-description-${product.id}`}>
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
