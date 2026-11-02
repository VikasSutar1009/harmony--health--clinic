import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  CalendarCheck,
  ShieldCheck,
} from "lucide-react";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1100&q=85",
    alt: "Modern dental clinic treatment room",
    title: "Modern Dental Care",
    description: "Comfortable care for a healthier smile.",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1674998806375-58edc35ddf3b?q=80&w=900&auto=format&fit=crop",
    alt: "Dental professional providing patient care",
    title: "Healthy Smiles Begin Here",
    description: "Personalized care for your oral health.",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1100&q=85",
    alt: "Healthcare professional in a clinical setting",
    title: "Move Better, Feel Better",
    description: "Physiotherapy support for movement and recovery.",
  },
];

export default function Hero() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const previousImage = () => {
    setActiveImage(
      (current) => (current - 1 + heroImages.length) % heroImages.length
    );
  };

  const nextImage = () => {
    setActiveImage((current) => (current + 1) % heroImages.length);
  };

  const goToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const goToServices = () => {
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="hero section" id="home">
      <div className="hero-content">
        <span className="eyebrow">
          <span className="status-dot" />
          YOUR HEALTH, OUR PRIORITY
        </span>

        <h1>
          Care that helps you
          <span className="text-primary"> feel better.</span>
        </h1>

        <p className="hero-description">
          Discover personalized dental care and physiotherapy in one
          welcoming place. Our goal is to help you move comfortably
          and smile confidently.
        </p>

        <div className="hero-actions">
          <button
            type="button"
            className="button button-primary"
            onClick={goToBooking}
          >
            Book Your Visit <ArrowRight size={18} />
          </button>

          <button
            type="button"
            className="button button-outline"
            onClick={goToServices}
          >
            Explore Treatments
          </button>
        </div>

        <div className="hero-trust">
          <span>
            <ShieldCheck size={19} />
            Patient-focused care
          </span>

          <span>
            <CalendarCheck size={19} />
            Convenient appointments
          </span>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-slider">
          {heroImages.map((image, index) => (
            <div
              key={image.src}
              className={`hero-slide ${
                index === activeImage ? "active" : ""
              }`}
              aria-hidden={index !== activeImage}
            >
              <img
                className="hero-image"
                src={image.src}
                alt={image.alt}
                loading={index === 0 ? "eager" : "lazy"}
              />

              <div className="hero-image-caption">
                <span>HARMONY HEALTH CLINIC</span>
                <h2>{image.title}</h2>
                <p>{image.description}</p>
              </div>
            </div>
          ))}

          <button
            type="button"
            className="hero-slider-arrow hero-slider-prev"
            onClick={previousImage}
            aria-label="Previous image"
          >
            <ArrowLeft size={20} />
          </button>

          <button
            type="button"
            className="hero-slider-arrow hero-slider-next"
            onClick={nextImage}
            aria-label="Next image"
          >
            <ArrowRight size={20} />
          </button>

          <div className="hero-slider-dots">
            {heroImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                className={`hero-slider-dot ${
                  index === activeImage ? "active" : ""
                }`}
                onClick={() => setActiveImage(index)}
                aria-label={`Show image ${index + 1}`}
                aria-current={index === activeImage ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
