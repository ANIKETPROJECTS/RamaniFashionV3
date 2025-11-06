import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import bannerImage from "@assets/Pink and Gold Gradient Decorative Woman Wonderful Indian YouTube Thumbnail_1762440973562.png";

const slides = [
  {
    image: bannerImage,
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-auto overflow-hidden" style={{ backgroundColor: '#fff' }}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative w-full">
            <img
              src={slide.image}
              alt="Ramani Fashion Banner"
              className="w-full h-auto"
              data-testid={`img-hero-banner-${index}`}
              style={{ display: 'block' }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
