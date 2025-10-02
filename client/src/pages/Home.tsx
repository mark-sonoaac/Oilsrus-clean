import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <GallerySection />
      <AboutSection />
      <MapSection />
      <Footer />
    </div>
  );
}
