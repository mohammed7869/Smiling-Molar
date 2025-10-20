"use client";

import React, { useState } from "react";
import { Fade, Slide, Zoom, Bounce } from "react-awesome-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Link from "next/link";
import BookingModal from "../booking/bookingScreen";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: "/Images/icons/tooth-implant.png",
    price: "1199",
    title: "Dental Implant",
  },
  {
    icon: "/Images/icons/teeth-whitening.png",
    price: "299",
    title: "Teeth Whitening",
  },
  {
    icon: "/Images/icons/braces1.png",
    price: "250",
    title: "Braces",
  },
];

const features = [
  {
    icon: "/Images/icons/female-dentist.png",
    title: "All-Ages Care Under One Roof",
    desc: "Kids, teens, adults, and seniors all receive personalized treatment in one convenient location.",
  },
  {
    icon: "/Images/icons/perfect-teeth.png",
    title: "Same-Day Emergency Appointments",
    desc: "Quick relief when dental issues arise, so you're never left waiting in pain.",
  },
  {
    icon: "/Images/icons/dental-chair.png",
    title: "Comprehensive Range of Services",
    desc: "From preventive cleanings to cosmetic dentistry and advanced restorative procedures, we offer everything you need for a healthy smile.",
  },
  {
    icon: "/Images/icons/Immediate Pain Relief.png",
    title: "Modern & Comfortable Office",
    desc: "Our welcoming environment and advanced equipment make every visit more pleasant and efficient.",
  },
  {
    icon: "/Images/icons/orthodontics.png",
    title: "Deep Community Roots",
    desc: "We're proud to serve Plainfield, North Plainfield, South Plainfield, Scotch Plains, and nearby neighborhoods with trusted, compassionate care.",
  },
];

const team = [
  {
    img: "/Images/Team/Neetu Bhanushali.png",
    name: "Dr. Neetu Bhanushali",
    role: "Doctor of Dental Surgery",
    time: "11 am - 03 pm",
    rating: 5.0,
    slug: "providers/neetu-bhanushali-plainfield-nj-dentist",
  },
  {
    img: "/Images/Team/Steven Reff.png",
    name: "Dr. Steven Reff, DDS",
    role: "Doctor of Dental Surgery",
    time: "11 am - 03 pm",
    rating: 5.0,
    slug: "providers/steven-reff-plainfield-nj-dentist",
  },
];

const testimonials = [
  {
    img: "/Images/dental1.webp",
    name: "Albert Rusho",
    service: "Root Canals",
    text: "The dental care I received was exceptional. The team maintained my healthy teeth with professional expertise, ensuring my comfort throughout the entire procedure. I couldn't be more satisfied with the results.",
  },
];

export default function AboutUsClient() {
  const { ref, inView } = useInView();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-background text-foreground font-sans overflow-x-hidden relative">
      <div className="details-page-header-section">
        <Fade direction="up" duration={1000}>
          <h1>About Smiling Molar Dental</h1>
        </Fade>
        <Fade direction="down" duration={1000}>
          <h2 className="text-center">
            Serving Families Across Plainfield, North Plainfield, South
            Plainfield & Scotch Plains, NJ
          </h2>
        </Fade>
      </div>

      <section className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="flex-1 space-y-4 sm:space-y-6 lg:pr-8 order-2 lg:order-1 w-full">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-primary leading-tight">
            Get to Know Smiling Molar Dental - Plainfield, NJ
          </h2>
          <p>
            At Smiling Molar Dental, we believe that everyone deserves a
            healthy, confident smile-delivered with care, comfort, and
            compassion. Located in Plainfield, New Jersey, our practice has
            become a trusted dental home for families across Plainfield (07060),
            North Plainfield (07062, 07063), South Plainfield (07080), Scotch
            Plains (07076), and nearby neighborhoods.
          </p>
          <p>
            Whether you're looking for routine preventive care, cosmetic
            enhancements, or restorative treatments, we make it easy for
            patients of all ages to get exceptional dental care right here near
            you.
          </p>
          <p>
            Smiling Molar Dental was founded with a simple vision: to make
            high-quality dental care accessible, comfortable, and stress-free
            for the entire community. From the moment you step into our modern,
            family-friendly office, you'll notice the difference-our team takes
            the time to listen, explain, and personalize every treatment plan to
            meet your needs.
          </p>
          <p>
            At Smiling Molar Dental, we're not just here to treat teeth-we're
            here to care for people, one smile at a time.
          </p>

          <div className="flex justify-left">
            <button
              className="group bg-secondary/90 hover:bg-primary text-white px-4 py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-lg md:rounded-xl font-semibold text-sm md:text-base lg:text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center gap-2"
              onClick={() => setIsBookingOpen(true)}
            >
              Book Appointment
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2 w-full">
          {/* <Slide direction="right"> */}
          <img
            src="/Images/about-us-1.webp"
            alt="Dental checkup at Tulip Dental Maplewood"
            className="rounded-xl shadow-lg w-full max-w-sm sm:max-w-md lg:max-w-lg object-cover"
            loading="lazy"
          />
          {/* </Slide> */}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="flex-1 flex justify-center lg:justify-start mb-6 lg:mb-0 order-2 lg:order-1 w-full">
          <img
            src="/Images/why-patients-choose (1).webp"
            alt="Trusted dental care at Tulip Dental Maplewood"
            className="rounded-xl shadow-lg w-full max-w-sm sm:max-w-md lg:max-w-lg object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex-1 lg:pl-12 order-1 lg:order-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-primary mt-2">
            Why Families Trust Smiling Molar Dental in Plainfield, NJ
          </h2>
          <p>
            Choosing the right dentist is about more than just finding a clinic
            nearby-it's about finding a place where your entire family feels
            valued and cared for. Here's why families across Plainfield and
            surrounding areas trust Smiling Molar Dental:
          </p>
          <div className="space-y-4 sm:space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center md:items-start gap-3 sm:gap-4"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-8 h-8 sm:w-12 sm:h-12 mt-1 "
                  loading="lazy"
                />

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-primary mb-1">
                    {feature.title}
                  </h3>
                  <p>
                    {feature.title === "Emergency Dental Care" ? (
                      <>
                        We provide advanced care for dental emergencies to
                        ensure you're never left in pain
                      </>
                    ) : (
                      feature.desc
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Zoom triggerOnce>
        <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-6 sm:mb-10 text-primary">
            Your Dental Team at Smiling Molar Dental
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-8 lg:gap-8 place-items-center">
            {team.map((member, index) => (
              <Link
                href={`/${member.slug}`}
                key={index}
                className="bg-card rounded-lg p-4 sm:p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover mb-3 sm:mb-4 border-4 border-primary"
                  loading="lazy"
                />
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-primary mb-1">
                  {member.name}
                </h3>
                <div className="flex gap-1 font-bold items-center text-xs sm:text-sm">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-yellow-500 fill-current"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.204 3.707a1 1 0 00.95.69h3.905c.969 0 1.371 1.24.588 1.81l-3.158 2.294a1 1 0 00-.364 1.118l1.204 3.707c.3.921-.755 1.688-1.538 1.118l-3.158-2.294a1 1 0 00-1.176 0l-3.158 2.294c-.783.57-1.838-.197-1.538-1.118l1.204-3.707a1 1 0 00-.364-1.118L2.322 9.134c-.783-.57-.38-1.81.588-1.81h3.905a1 1 0 00.95-.69l1.204-3.707z" />
                    </svg>
                  ))}{" "}
                  5.0 Rating
                </div>
              </Link>
            ))}
          </div>
        </section>
      </Zoom>

      {/* Call to Action Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="flex text-center flex-col sm:flex-row gap-8 sm:gap-4">
          <a
            href="tel:9082642357"
            className="w-full flex flex-col bg-secondary/90 hover:bg-primary text-white rounded-lg px-2 py-3 hover:from-blue-700 hover:to-cyan-700 text-xs sm:text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span className="text-sm sm:text-base">Call us Today</span>
            +1 (908) 264-2357
          </a>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="w-full flex flex-col bg-secondary/90 hover:bg-primary text-white rounded-lg px-2 py-3 hover:from-blue-700 hover:to-cyan-700 text-xs sm:text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Book Online
            <span className="text-sm sm:text-base">
              Schedule Your Appointment Now
            </span>
          </button>
        </div>
      </section>

      <BookingModal open={isBookingOpen} setOpen={setIsBookingOpen} />
    </div>
  );
}
