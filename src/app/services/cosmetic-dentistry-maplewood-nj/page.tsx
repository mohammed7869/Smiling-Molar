import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import BookCallBtn from "../book-call-btn";
import { CheckCircle } from "lucide-react";
import { generateServiceMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata: Metadata = generateServiceMetadata(
  "cosmetic-dentistry-maplewood-nj",
  "/Images/Cosmetic Dentistry.webp"
);

export default function CosmeticDentistryPage() {
  const features = [
    {
      icon: "/Images/icons/teeth-whitening.png",
      title: "Our Most Popular Cosmetic Services",
      description:
        "Our cosmetic offerings are designed to fit a range of goals, timelines, and budgets.",
      points: [
        "Porcelain Veneers",
        <Link
          key="teeth-whitening"
          href="/services/teeth-whitening-and-veneers-maplewood-nj"
          className="text-primary mr-2 hover:underline font-medium"
        >
          Teeth Whitening (In-Office & Take-Home)
        </Link>,
        "Dental Bonding for Chips & Gaps",
        "Tooth-Colored Fillings & Restorations",
        "Smile Makeover Consultations",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "The Power of a Confident Smile",
      description:
        "Feeling good about your smile can impact every part of your life—from relationships to career.",
      points: [
        "Look younger and more vibrant",
        "Enhance first impressions",
        "Smile more freely and confidently",
        "Improve symmetry and tooth shape",
        "Correct years of wear and discoloration",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Cosmetic Dentistry for Maplewood & Nearby Areas",
      description:
        "We're proud to be your trusted local cosmetic dentist serving:",
      points: [
        <Link
          key="maplewood"
          href="/service-areas/maplewood-nj-dentist-near-you"
          className="text-primary hover:underline font-medium"
        >
          Maplewood – 07040
        </Link>,
        <Link
          key="south-orange"
          href="/service-areas/south-orange-nj-dentist-near-you"
          className="text-primary hover:underline font-medium"
        >
          South Orange – 07079
        </Link>,
        <Link
          key="vauxhall"
          href="/service-areas/vauxhall-nj-dentist-near-you"
          className="text-primary hover:underline font-medium"
        >
          Vauxhall – 07088
        </Link>,
        <Link
          key="irvington"
          href="/service-areas/irvington-nj-dentist-near-you"
          className="text-primary hover:underline font-medium"
        >
          Irvington – 07111
        </Link>,
        <Link
          key="newark"
          href="/service-areas/newark-nj-dentist-near-you"
          className="text-primary hover:underline font-medium"
        >
          Newark – 07106 & 07112
        </Link>,
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Cosmetic Dentistry in Maplewood, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Transform Your Smile with Cosmetic Dentistry in Maplewood |
                Tulip Dental | Family & Cosmetic Dentist{" "}
              </h2>
            </Fade>
            {/* <div className='flex items-center justify-center gap-2'> <Link href={'/'} className='font-medium'>Home </Link><span><ChevronRight/></span> <span className='text-white/80'>Emergency Dentistry</span></div> */}
          </div>
          <div className="details-page-desc-section">
            {/* Image Section */}
            <div className="image_section">
              <div className="image_section-cover">
                <div className="main-image">
                  <img
                    src="/Images/Cosmetic Dentistry.webp"
                    alt="Cosmetic Dentistry at Tulip Dental Maplewood"
                  />
                </div>
                {/* <img
              src="/Images/s1.webp"
              className="overlay-image"
              alt="Overlay"
            /> */}
              </div>
            </div>

            {/* Text Section with Fade-in after delay */}
            <div className="desc-text-section">
              <div className="desc-text-subtitle">Cosmetic Dentistry</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                About Cosmetic Dentistry
              </h2>
              <p>
                Your smile is one of the first things people notice-why not make
                it unforgettable? At Tulip Dental in{" "}
                <Link
                  href="/service-areas/maplewood-nj-dentist-near-you"
                  className="text-primary mr-2 hover:underline font-medium"
                >
                  Maplewood
                </Link>
                , NJ, we offer modern, high-quality cosmetic dental treatments
                to help you feel more confident every time you smile. Whether
                you’re looking to{" "}
                <Link
                  href="/services/teeth-whitening-and-veneers-maplewood-nj"
                  className="text-primary hover:underline font-medium"
                >
                  whiten your teeth
                </Link>
                , fix chips and gaps, or completely transform your look with
                veneers or a full smile makeover, our skilled team is here to
                help.{" "}
              </p>
              <p>
                We proudly serve patients from Maplewood (07040), South Orange
                (07079), Vauxhall (07088), Irvington (07111), and nearby Newark
                (07106 and 07112). Searching for a “cosmetic dentist near me”?
                You’ve just found one who truly cares.{" "}
              </p>
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <div className="wcu-subtitle">Top Reasons</div> */}
              <div className="wcu-title">
                <h2>
                  Top Reasons To Choose Tulip Dental for Cosmetic Dentistry
                </h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />{" "}
                      Personalized Smile Makeovers
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Advanced
                      Technology & Materials
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />{" "}
                      Natural-Looking Enhancements
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Flexible
                      Financing Options
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" /> Convenient
                      Location in Maplewood, NJ
                    </h3>
                  </li>
                </ul>
              </div>
            </div>
            <div className="wcu-img-section">
              <Zoom cascade damping={0.3} duration={800}>
                <img
                  className="bdr-doctor-img"
                  src="/Images/top-reasons.webp"
                  alt="Expert Dentist at Tulip Dental Maplewood"
                />
              </Zoom>
            </div>
          </div>
          <div className="features-section">
            <h2 className="features-heading">
              Cosmetic Dentistry Services That Make You Smile
            </h2>
            <p className="features-description">
              Cosmetic dentistry isn’t just about looks-it’s about how you feel.
              We take a conservative yet artistic approach to every procedure,
              ensuring natural results that boost your self-esteem and oral
              health.
              <br />
              <br />
              Here’s what we offer at Tulip Dental:
            </p>

            <div className="features-grid">
              {features.map((service, idx) => (
                <div className="feature-card" key={idx}>
                  <div className="flex flex-col items-start mb-3">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-12 h-12 mb-2"
                    />
                    <h3>{service.title}</h3>
                  </div>
                  <p>{service.description}</p>
                  <ul className="feature-list">
                    {service.points.map((point, i) => (
                      <li
                        key={i}
                        className="feature-list-item flex items-start gap-2"
                      >
                        <CheckCircle className="text-primary shrink-0 mt-[2px]" />
                        <span className="leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="faq-section">
            <h2 className="faq-heading">Cosmetic Dentistry FAQs</h2>
            <div className="faq-acc-container">
              <Accordion type="single" className="w-full space-y-5">
                <AccordionItem value="q1" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">What is cosmetic dentistry?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Cosmetic dentistry focuses on improving the appearance of
                      your teeth, gums, and overall smile. It includes
                      treatments like{" "}
                      <Link
                        href="/services/teeth-whitening-and-veneers-maplewood-nj"
                        className="text-primary mr-2 hover:underline font-medium"
                      >
                        whitening
                      </Link>
                      , veneers, bonding, and more.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How do I know which cosmetic treatment is right for me?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      We’ll begin with a personalized consultation to assess
                      your goals and discuss which treatments best fit your
                      needs, lifestyle, and budget.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">Is cosmetic dentistry painful?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Not at all. Most cosmetic procedures are minimally
                      invasive and require little to no recovery time. We ensure
                      your comfort every step of the way.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      How long do cosmetic results last?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      It depends on the treatment and your oral care routine.
                      Veneers can last 10–15 years or more, while whitening may
                      need occasional touch-ups. We’ll guide you on how to
                      maintain your results.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="faq-acc">
                  <AccordionTrigger className="faq-qn">
                    <h3 className="text-lg">
                      Can cosmetic dentistry fix crooked teeth?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="faq-ans">
                    <p>
                      Yes! Mild alignment issues can often be corrected with
                      veneers or bonding. For more advanced cases, we may
                      recommend Invisalign or orthodontic options.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="features-section">
            <h2 className="features-heading">
              Ready to Love Your Smile Again?
            </h2>
            <p className="features-description">
              If you’re tired of hiding your smile, Tulip Dental is here to
              help. From subtle enhancements to full smile makeovers, we offer
              compassionate, expert care in a comfortable setting.
            </p>
          </div>

          <BookCallBtn />
        </div>
      </main>
    </div>
  );
}
