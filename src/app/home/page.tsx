"use client";

import React, { useState, Suspense } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { InfoIcon, MessageCircle, Stethoscope, User } from "lucide-react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

// Lazy load heavy components
const ServicesSection = dynamic(() => import("./services"), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-lg" />,
});

const InsuranceSection = dynamic(() => import("./accepted-insurance"), {
  ssr: false,
  loading: () => <div className="h-64 bg-gray-50 animate-pulse rounded-lg" />,
});

const SpecialOffersSection = dynamic(() => import("./special-offer"), {
  ssr: false,
  loading: () => <div className="h-64 bg-gray-50 animate-pulse rounded-lg" />,
});

const LocationTabs = dynamic(() => import("./addresses"), {
  ssr: false,
  loading: () => <div className="h-48 bg-gray-50 animate-pulse rounded-lg" />,
});

const FloatingTextForm = dynamic(
  () => import("@/components/ui/floatingButton"),
  {
    ssr: false,
  }
);

const FloatingPromo = dynamic(() => import("@/components/ui/promo-popup"), {
  ssr: false,
});

const BookingModal = dynamic(() => import("../booking/bookingScreen"), {
  ssr: false,
});

// Lazy load animation components
const Slide = dynamic(
  () => import("react-awesome-reveal").then((mod) => ({ default: mod.Slide })),
  {
    ssr: false,
  }
);

const services = [
  {
    icon: "/Images/icons/broken-tooth.png",
    price: "55",
    title: "Emergency Visit",
  },
  {
    icon: "/Images/icons/teeth-whitening.png",
    price: "299",
    title: "Teeth Whitening",
  },
  {
    icon: "/Images/icons/dental-checkup.png",
    price: "79",
    title: "Exam, Cleaning & X-rays",
  },
];

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const { ref, inView } = useInView();

  return (
    <div>
      {/* Static Hero Banner */}
      <section className="hero relative w-full h-[calc(100vh-80px)] bg-white overflow-hidden flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Images/banner-1.avif"
            alt="Dental treatment at Tulip Dental Maplewood"
            fill
            className="object-cover"
            priority
            quality={95}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-transparent"></div>
        </div>

        {/* Content - Modified for mobile viewport with text moved higher */}
        <div className="relative z-10 container mx-auto px-3 sm:px-4 md:px-6 flex-1 flex items-start sm:items-center mt-14 sm:mt-0 pt-4 sm:pt-0 py-2 sm:py-16 md:py-20">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-start sm:items-center">
            <div className="relative order-1 lg:order-1 text-center sm:text-left">
              {/* Decorative Frames - adjusted for mobile */}
              <div className="absolute top-0 right-6 w-16 h-16 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 border-t-2 border-r-2 border-white opacity-80"></div>
              <div className="absolute -bottom-4 left-0 w-16 h-16 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 border-b-2 border-l-2 border-white opacity-80"></div>

              <div className="text-white space-y-2 sm:space-y-6 md:space-y-8 lg:space-y-8 p-2 sm:p-6 lg:p-8 relative z-10 mt-4 sm:mt-0">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight">
                  Welcome to Smiling Molar Dental
                </h1>
                <p className="text-xs sm:text-base md:text-lg lg:text-xl text-white/80 max-w-lg leading-relaxed mx-auto sm:mx-0">
                  <span className="sm:hidden">
                    Trusted Family and Cosmetic Dental Care in
                    <br />
                    Plainfield, NJ
                  </span>
                  <span className="hidden text-2xl sm:inline">
                    Trusted Family and Cosmetic Dental Care in Plainfield, NJ
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip - Now visible on all devices with proper mobile spacing */}
        <div className="relative z-20 bg-gray-800/90 backdrop-blur-sm py-2 sm:py-8">
          <div className="container mx-auto px-3 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            {/* Left Section */}
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 text-gray-800"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-sm sm:ml-1 sm:text-lg font-semibold text-white">
                  Walk-Ins Welcome
                </h3>
                <p className="text-xs sm:ml-1 sm:text-sm text-white/80">
                  1024 Park Ave Suite 6C, Plainfield, NJ 07060
                </p>
              </div>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/Tulip+Dental/@40.7224245,-74.2585831,17z/data=!3m1!4b1!4m6!3m5!1s0x89c3ade1837b4603:0x405323d2009ce42e!8m2!3d40.7224205!4d-74.2560082!16s%2Fg%2F11xkptdrcn?entry=ttu&g_ep=EgoyMDI1MDkxNS4wIKXMDSoASAFQAw%3D%3D",
                    "_blank"
                  )
                }
                className="bg-transparent border-2 border-white text-white hover:border-primary hover:text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-semibold transition-all duration-300 text-xs sm:text-base w-full sm:w-auto"
              >
                Get Direction
              </button>

              <button
                onClick={() => setIsBookingOpen(true)}
                className="bg-transparent border-2 border-white text-white hover:border-primary hover:text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-semibold transition-all duration-300 text-xs sm:text-base w-full sm:w-auto"
              >
                Book Online
              </button>
              <a
                href="tel:908-264-2357"
                className="bg-white text-gray-800 hover:bg-gray-300 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-semibold transition-all duration-300 text-xs sm:text-base text-center w-full sm:w-auto"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Services Strip */}
      {/* <section className="w-full bg-gradient-to-r from-slate-50 to-blue-50 py-8 md:py-12 border-b border-slate-200">
        <div className="w-full mx-auto px-4 md:px-6">
          <div className="relative overflow-hidden">
            <div className="scroll-track-services flex animate-scroll-services">
              {[...allServices, ...allServices].map((service, index) => (
                <Link
                  key={`${service.name}-${index}`}
                  href={service.link}
                  className="flex-shrink-0 mx-4 group hover:scale-105 transition-all duration-300"
                >
                  <span className="text-sm md:text-base font-medium text-slate-700 group-hover:text-blue-600 group-hover:bg-white group-hover:shadow-lg transition-all duration-300 whitespace-nowrap px-4 py-3 rounded-xl hover:border hover:border-blue-200">
                    {service.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

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
            animation: scroll-services 60s linear infinite;
          }
          .animate-scroll-services:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section> */}

      <div className="w-full bg-gradient-to-r from-slate-50 to-blue-50 flex items-center justify-center overflow-hidden py-8 md:py-12 border-b border-slate-200">
        <div className="w-full max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {/* Accessible - Dental Care */}
            <div className="bg-white rounded-2xl p-6 md:p-8 md:py-12 shadow-lg border border-slate-200 flex items-center space-x-4 md:space-x-6">
              <div className="flex-shrink-0">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary md:w-16 md:h-16"
                >
                  <path
                    d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19Z"
                    fill="currentColor"
                  />
                  <path d="M7 10H9V12H7V10Z" fill="currentColor" />
                  <path d="M11 10H13V12H11V10Z" fill="currentColor" />
                  <path d="M15 10H17V12H15V10Z" fill="currentColor" />
                  <path d="M7 14H9V16H7V14Z" fill="currentColor" />
                  <path d="M11 14H13V16H11V14Z" fill="currentColor" />
                  <path d="M15 14H17V16H15V14Z" fill="currentColor" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">
                  Accessible
                </h3>
                <p className="text-sm md:text-base font-bold">DENTAL CARE</p>
              </div>
            </div>

            {/* Affordable - Payment Plans */}
            <div className="bg-white rounded-2xl p-6 md:p-8 md:py-12 shadow-lg border border-slate-200 flex items-center space-x-4 md:space-x-6">
              <div className="flex-shrink-0">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary md:w-16 md:h-16"
                >
                  <path
                    d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19Z"
                    fill="currentColor"
                  />
                  <path d="M7 10H9V12H7V10Z" fill="currentColor" />
                  <path d="M11 10H13V12H11V10Z" fill="currentColor" />
                  <path d="M15 10H17V12H15V10Z" fill="currentColor" />
                  <path d="M7 14H9V16H7V14Z" fill="currentColor" />
                  <path d="M11 14H13V16H11V14Z" fill="currentColor" />
                  <path d="M15 14H17V16H15V14Z" fill="currentColor" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">
                  Affordable
                </h3>
                <p className="text-sm md:text-base font-bold">PAYMENT PLANS</p>
              </div>
            </div>

            {/* Convenient - Hours & Availability */}
            <div className="bg-white rounded-2xl p-6 md:p-8 md:py-12 shadow-lg border border-slate-200 flex items-center space-x-4 md:space-x-6">
              <div className="flex-shrink-0">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary md:w-16 md:h-16"
                >
                  <path
                    d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19Z"
                    fill="currentColor"
                  />
                  <path d="M7 10H9V12H7V10Z" fill="currentColor" />
                  <path d="M11 10H13V12H11V10Z" fill="currentColor" />
                  <path d="M15 10H17V12H15V10Z" fill="currentColor" />
                  <path d="M7 14H9V16H7V14Z" fill="currentColor" />
                  <path d="M11 14H13V16H11V14Z" fill="currentColor" />
                  <path d="M15 14H17V16H15V14Z" fill="currentColor" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">
                  Convenient
                </h3>
                <p className="text-sm md:text-base font-bold">
                  HOURS & AVAILABILITY
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomepageSections />

      <section className="w-full bg-gradient-to-br from-white to-sky-50 relative overflow-hidden py-10 md:py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-20 px-6 md:px-8">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 h-64 md:h-120">
            <Image
              src="/Images/homepage-dentist.avif"
              alt="Happy patient & dentist at Tulip Dental Maplewood"
              width={600}
              height={400}
              className="rounded-md md:rounded-xl mt-8 object-cover shadow-md w-full h-full"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90} // High quality for content images
            />
          </div>

          {/* Right Side - Text */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <h1 className="text-3xl md:text-5xl font-semibold text-primary leading-tight">
              Dentist in Plainfield, NJ | Smiling Molar Dental - Family &
              Cosmetic Care
            </h1>

            <p className="text-base leading-relaxed">
              Welcome to Smiling Molar Dental, your trusted dentist in
              Plainfield, NJ. We are a modern, full-service dental practice
              dedicated to providing gentle, high-quality dental care for
              patients of all ages. Whether you need preventive checkups,
              advanced cosmetic dentistry, or emergency treatment, our
              experienced dental team is here to help you achieve and maintain a
              healthy, confident smile.
              <br />
              <br /> Our office combines a welcoming, family-friendly atmosphere
              with advanced technology to deliver exceptional results.
              Conveniently located in Plainfield, we proudly serve patients from
              Plainfield (07060), North Plainfield (07062, 07063), South
              Plainfield (07080), Scotch Plains (07076), and surrounding
              neighborhoods. So if you're searching for a "dentist near me" or
              "family dental care near you", Smiling Molar Dental is your
              trusted local destination for comprehensive oral health.
            </p>

            {/* <Fade> */}
            <Link
              href="/about-smiling-molar-dental-plainfield-nj"
              className="border border-primary text-primary rounded-lg px-4 py-3 hover:bg-blue-50 text-sm font-medium transition"
            >
              Learn More
            </Link>
            {/* </Fade> */}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            // const { ref, inView } = useInView({
            //   threshold: 0.1,
            // });

            return (
              <div
                key={index}
                ref={ref}
                className="bg-card rounded-lg p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={64}
                  height={64}
                  className="w-16 h-16 mb-4"
                  loading="lazy"
                  quality={95} // High quality for icons
                />

                <div className="text-3xl font-bold text-primary mb-2">
                  $
                  {inView ? (
                    service.price.includes("/") ? (
                      <CountUp
                        end={parseInt(service.price.split("/")[0])}
                        duration={1.5}
                        separator=","
                        suffix="/month"
                      />
                    ) : (
                      <CountUp
                        end={parseInt(service.price)}
                        duration={1.5}
                        separator=","
                      />
                    )
                  ) : service.price.includes("/") ? (
                    "0/month"
                  ) : (
                    "0"
                  )}
                </div>

                <div className="text-lg font-semibold">{service.title}</div>
              </div>
            );
          })}
        </div>
      </section>

      <Suspense
        fallback={<div className="h-96 bg-gray-50 animate-pulse rounded-lg" />}
      >
        <ServicesSection />
      </Suspense>

      <Suspense
        fallback={<div className="h-64 bg-gray-50 animate-pulse rounded-lg" />}
      >
        <InsuranceSection />
      </Suspense>

      <Suspense
        fallback={<div className="h-64 bg-gray-50 animate-pulse rounded-lg" />}
      >
        <SpecialOffersSection />
      </Suspense>

      <section className="w-full bg-gradient-to-br from-white to-sky-50 relative overflow-hidden py-10 md:py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-20 px-6 md:px-8">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 h-64 md:h-80">
            <Image
              src="/Images/homepage-affordable.avif"
              alt="Affordable dental treatments at Tulip Dental Maplewood"
              width={600}
              height={400}
              className="rounded-md md:rounded-xl w-full h-full object-cover shadow-md"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90} // High quality for content images
            />
          </div>

          {/* Right Side - Text */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
            <h2 className="text-3xl md:text-5xl font-semibold text-primary leading-tight">
              Affordable Care for Everyone
            </h2>

            <p className="text-lg ">
              <strong>No insurance? No problem</strong>. We believe quality
              dental care should be accessible to all. That’s why we offer:
            </p>

            <div className="text-base text-left leading-relaxed">
              <ul className="list-disc gap-3 mt-2 px-4">
                <li className="list-disc">
                  <div className="flex gap-2 ">
                    <span>
                      <strong>$55 Emergency Dental Visit -</strong> Includes
                      Exam & Digital X-ray
                    </span>
                  </div>
                </li>
                <li className="list-disc">
                  <div className="flex gap-2">
                    <span>
                      <strong>$79 New Patient Special -</strong> Exam,
                      Professional Cleaning & Digital X-rays
                    </span>
                  </div>
                </li>
                <li className="list-disc">
                  <div className="flex gap-2">
                    <span>
                      <strong>Interest-Free Financing Options</strong> for
                      qualified patients
                    </span>
                  </div>
                </li>
                <li className="list-disc">
                  <div className="flex gap-2">
                    <span>
                      {" "}
                      <strong>Senior Discounts</strong> Available on select days
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* <Fade> */}
            <a href="tel:908-264-2357">
              <Button className="bg-primary hover:bg-secondary/80 text-white px-3 py-2 rounded-md text-sm  font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer">
                CALL TODAY!
              </Button>
            </a>
            {/* </Fade> */}
          </div>
        </div>
      </section>
      <Suspense
        fallback={<div className="h-48 bg-gray-50 animate-pulse rounded-lg" />}
      >
        <LocationTabs />
      </Suspense>
      <FloatingTextForm />
      <FloatingPromo />
      <BookingModal open={isBookingOpen} setOpen={setIsBookingOpen} />
    </div>
  );
}

function HomepageSections() {
  const sections = [
    {
      label: "About Us",
      icon: <InfoIcon />,
      bg: "bg-primary",
      href: "/about-smiling-molar-dental-plainfield-nj",
    },
    {
      label: "Our Providers",
      icon: <User />,
      bg: "bg-primary/70",
      href: "/providers",
    },
    {
      label: "Our Services",
      icon: <Stethoscope />,
      bg: "bg-secondary",
      href: "/services",
    },
    {
      label: "Contact Us",
      icon: <MessageCircle />,
      bg: "bg-secondary/70",
      href: "/contact-tulip-dental-maplewood-nj",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {sections.map((section, idx) => (
        <Link
          href={section.href}
          key={idx}
          className={`rounded-sm shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer text-white ${section.bg} flex flex-col items-center justify-center p-3 md:p-6 text-center`}
        >
          <div className="text-4xl mb-2">{section.icon}</div>
          <div className="text-md md:text-xl font-semibold">
            {section.label}
          </div>
        </Link>
      ))}
    </div>
  );
}
