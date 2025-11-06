import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import bannerImage from "@assets/Pink and Gold Gradient Decorative Woman Wonderful Indian YouTube Thumbnail (1)_1762443213141.png";

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
    <div className="relative w-full h-[450px] md:h-[500px] overflow-hidden" style={{ backgroundColor: '#fff' }}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative h-full w-full">
            <img
              src={slide.image}
              alt="Ramani Fashion Banner"
              className="w-full h-full object-cover object-center"
              data-testid={`img-hero-banner-${index}`}
              style={{ display: 'block' }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
