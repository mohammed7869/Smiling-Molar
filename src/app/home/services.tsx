"use client";

import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/lib/hooks/useIsMobile";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import BookingModal from "../booking/bookingScreen";

export default function ServicesSection() {
  const [imagesLoaded, setImagesLoaded] = useState<{ [key: string]: boolean }>(
    {}
  );
  const isMobile = useIsMobile();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const services = [
    // { id: 0, title: "Family Dentistry", description: "Family Dentistry services", image: "/Images/family-dentistry.webp", icon: "/Images/icons/Dental checkup.png", href: "/services/cosmetic-dentistry" },
    {
      id: 0,
      title: "Cosmetic Dentistry",
      description: "Cosmetic dentistry services",
      image: "/Images/cosmetic-dentistry.avif",
      alt: "Cosmetic Dentistry at Smiling Molar Dental in Plainfield",
      icon: "/Images/icons/Cosmetic dentistry.png",
      iconAlt: "Cosmetic dentistry icon",
      href: "/services/cosmetic-dentistry-maplewood-nj",
    },
    {
      id: 1,
      title: "Emergency Dentistry",
      description: "Urgent oral care services",
      image: "/Images/emergency-dentistry.avif",
      alt: "Emergency dental care services for urgent oral health issues and dental emergencies",
      icon: "/Images/icons/emergency denstiry.png",
      iconAlt: "Emergency dentistry icon",
      href: "/services/emergency-dentistry-maplewood-nj",
    },
    {
      id: 2,
      title: "Teeth Whitening",
      description: "Brighten your smile",
      image: "/Images/whiteningveneers.avif",
      alt: "Teeth Whitening & Veneers at Tulip Dental Maplewood",
      icon: "/Images/icons/teeth-whitening.png",
      iconAlt: "Teeth whitening icon",
      href: "/services/teeth-whitening-and-veneers-maplewood-nj",
    },
    {
      id: 3,
      title: "Orthodontics",
      description: "Orthodontic correction",
      image: "/Images/orthodontics.avif",
      alt: "Orthodontics treatment at Smiling Molar Dental in Plainfield",
      icon: "/Images/icons/braces1.png",
      iconAlt: "Orthodontics braces icon",
      href: "/services/orthodontics-maplewood-nj",
    },
    {
      id: 4,
      title: "Root Canal",
      description: "Save infected teeth",
      image: "/Images/root-canal.avif",
      alt: "Root Canal Specialists at Smiling Molar Dental in Plainfield",
      icon: "/Images/icons/root-canal.png",
      iconAlt: "Root canal treatment icon",
      href: "/services/root-canal-treatment-maplewood-nj",
    },
    {
      id: 5,
      title: "Dental Implants",
      description: "Permanent tooth replacement",
      image: "/Images/dental-implant.avif",
      alt: "Dental Implants at Smiling Molar Dental in Plainfield, NJ",
      icon: "/Images/icons/tooth-implant.png",
      iconAlt: "Dental implant icon",
      href: "/services/dental-implants-maplewood-nj",
    },
    {
      id: 6,
      title: "Oral Surgery",
      description: "Advanced procedures",
      image: "/Images/oral-surgery.avif",
      alt: "Oral Surgery at Smiling Molar Dental in Plainfield, New Jersey",
      icon: "/Images/icons/oral surgery.png",
      iconAlt: "Oral surgery icon",
      href: "/services/oral-surgery-maplewood-nj",
    },
    {
      id: 12,
      title: "Tooth Extraction",
      description: "Safe tooth removal",
      image: "/Images/tooth-extraction.avif",
      alt: "Tooth extractions at Smiling Molar Dental in Plainfield, New Jersey",
      icon: "/Images/icons/tooth-extraction.png",
      iconAlt: "Tooth extraction icon",
      href: "/services/tooth-extraction-maplewood-nj",
    },
    {
      id: 14,
      title: "Crowns and Bridges",
      description: "Restore damaged teeth",
      image: "/Images/dental crown n bridge.avif",
      alt: "Dental Crowns & Bridges at Smiling Molar Dental in Plainfield, NJ",
      icon: "/Images/icons/dental-crown.png",
      iconAlt: "Dental crown icon",
      href: "/services/crowns-and-bridges-maplewood-nj",
    },
    {
      id: 16,
      title: "Dental Fillings",
      description: "Repair cavities",
      image: "/Images/dental-filling.avif",
      alt: "Dental Fillings at Smiling Molar Dental in Plainfield, NJ",
      icon: "/Images/icons/tooth-filling.png",
      iconAlt: "Dental filling icon",
      href: "/services/dental-fillings-maplewood-nj",
    },
  ];

  // Duplicate services for seamless infinite loop
  const duplicatedServices = [...services, ...services];

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      if (prev === 0) {
        return services.length - 1;
      }
      return prev - 1;
    });
    // Pause auto-scroll temporarily when manually navigating
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000); // Resume after 3 seconds
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      if (prev === services.length - 1) {
        return 0;
      }
      return prev + 1;
    });
    // Pause auto-scroll temporarily when manually navigating
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000); // Resume after 3 seconds
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000);
  };

  // Auto-advance slides
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => {
          if (prev === services.length - 1) {
            return 0;
          }
          return prev + 1;
        });
      }, 4000); // Change slide every 4 seconds

      return () => clearInterval(timer);
    }
  }, [isPaused, services.length]);

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = services.map((service) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => {
            setImagesLoaded((prev) => ({ ...prev, [service.image]: true }));
            resolve();
          };
          img.onerror = () => {
            setImagesLoaded((prev) => ({ ...prev, [service.image]: true })); // Mark as loaded even if error
            resolve();
          };
          img.src = service.image;
        });
      });

      await Promise.all(imagePromises);
    };

    preloadImages();
  }, []);

  return (
    <section className="relative w-full mt-10 mx-auto px-4">
      <Fade delay={200}>
        <h2 className="text-center text-primary text-3xl md:text-5xl font-extrabold mb-10">
          Services We Offer
        </h2>
      </Fade>

      {/* Services carousel container */}
      <div className="relative overflow-hidden py-3">
        {/* Gradient overlays for smooth edges - only on desktop */}
        <div className="hidden md:block absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="hidden md:block absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Mobile: Single slide view */}
        <div className="md:hidden">
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {services.map((service, index) => (
              <div key={service.id} className="w-full flex-shrink-0 px-2">
                <div className="rounded-xl overflow-hidden w-full">
                  <div className="relative h-80 bg-gray-100">
                    <img
                      src={service.image}
                      alt={service.alt}
                      className={`w-full h-full object-cover transition-opacity duration-200 ${
                        imagesLoaded[service.image]
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                      loading="eager"
                    />
                    {!imagesLoaded[service.image] && (
                      <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                        <div className="w-8 h-8 border-4 border-gray-300 border-t-primary rounded-full animate-spin"></div>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-white">
                      <h3 className="flex items-center gap-2 text-primary text-base font-bold leading-tight mb-1">
                        <img
                          src={service.icon}
                          alt={service.iconAlt}
                          className="w-5 h-5"
                        />
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-xs mb-2  w-full">
                        {service.description}
                      </p>
                      <Link
                        href={service.href}
                        className="text-primary hover:text-blue-800 inline-flex items-center text-xs"
                      >
                        Learn More
                        <ChevronRight className="w-3 h-3 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Auto-scrolling view */}
        <div className="hidden md:block">
          <div
            className={`scroll-track-services flex animate-scroll-services ${
              isPaused ? "animation-paused" : ""
            }`}
          >
            {duplicatedServices.map((service, index) => (
              <div
                key={`${service.id}-${index}`}
                className="flex-shrink-0 mx-3"
              >
                <div className="rounded-xl overflow-hidden w-99">
                  <div className="relative h-90 bg-gray-100">
                    <img
                      src={service.image}
                      alt={service.alt}
                      className={`w-full h-full object-cover transition-opacity duration-300 ${
                        imagesLoaded[service.image]
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                      loading="eager"
                    />
                    {!imagesLoaded[service.image] && (
                      <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                        <div className="w-8 h-8 border-4 border-gray-300 border-t-primary rounded-full animate-spin"></div>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 p-5 bg-white w-[270px]">
                      <h3 className="flex items-center gap-2 text-primary text-xl font-bold leading-tight mb-1">
                        <img
                          src={service.icon}
                          alt={service.iconAlt}
                          className="w-8 h-8"
                        />
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 w-full">
                        {service.description}
                      </p>
                      <Link
                        href={service.href}
                        className="text-primary hover:text-blue-800 inline-flex items-center"
                      >
                        Learn More
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows - Only show on mobile, positioned closer to edges */}
        <button
          onClick={prevSlide}
          className="md:hidden absolute left-1 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition z-20"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        <button
          onClick={nextSlide}
          className="md:hidden absolute right-1 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition z-20"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Dot Navigation - Only show on mobile */}
      <div className="md:hidden flex justify-center mt-4 space-x-2">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-primary" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Custom CSS for desktop animation */}
      <style jsx>{`
        .scroll-track-services {
          width: fit-content;
        }
        @keyframes scroll-services {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-services {
          animation: scroll-services 40s linear infinite;
        }

        .animate-scroll-services:hover {
          animation-play-state: paused;
        }

        .animation-paused {
          animation-play-state: paused;
        }
      `}</style>

      <h2 className="text-center text-3xl md:text-5xl font-extrabold my-7">
        Emergency Dentist in Plainfield, NJ
      </h2>

      <p className="max-w-5xl mx-auto mb-4">
        Dental emergencies can happen when you least expect them - whether it’s
        a sudden toothache, a chipped tooth, or a broken crown. At Smiling Molar
        Dental, we offer same-day emergency dental appointments in Plainfield,
        NJ, so you can get fast, effective relief without the long wait.
      </p>

      <div className="flex justify-center">
        <button
          className="group bg-primary hover:bg-secondary/80 text-white px-4 py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-lg md:rounded-xl font-semibold text-sm md:text-base lg:text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center gap-2"
          onClick={() => setIsBookingOpen(true)}
        >
          Book Appointment
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <BookingModal open={isBookingOpen} setOpen={setIsBookingOpen} />
    </section>
  );
}
