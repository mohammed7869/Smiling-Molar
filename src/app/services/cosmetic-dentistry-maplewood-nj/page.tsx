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
      title: "Professional Teeth Whitening",
      description:
        "Our goal is to provide cosmetic treatments that are safe, effective, and long-lasting, giving you a smile that boosts both your confidence and your oral health.",
      points: [
        "In-office whitening for fast, dramatic results",
        "Take-home kits for flexible treatment options",
        "Safe methods that protect enamel and gums",
        "Noticeably brighter smiles with lasting effects",
      ],
    },
    {
      icon: "/Images/icons/Smart Treatment Decisions Under Pressure.png",
      title: "Veneers & Cosmetic Bonding",
      description:
        "Our goal is to provide cosmetic treatments that are safe, effective, and long-lasting, giving you a smile that boosts both your confidence and your oral health.",
      points: [
        "Custom-crafted veneers for a flawless smile makeover",
        "Tooth-colored bonding to repair chips, gaps, and imperfections",
        "Natural aesthetics that blend seamlessly with surrounding teeth",
        "Durable materials designed to last for years",
      ],
    },
    {
      icon: "/Images/icons/Serving Harrisburg Nearby Communities.png",
      title: "Complete Smile Transformations",
      description:
        "Our goal is to provide cosmetic treatments that are safe, effective, and long-lasting, giving you a smile that boosts both your confidence and your oral health.",
      points: [
        "Combination of veneers, crowns, whitening, and Invisalign®",
        "Personalized treatment plans for full smile makeovers",
        "A balanced focus on both appearance and function",
        "Results that leave a lasting impression",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="details-page-container">
        <div className="details-page">
          <div className="details-page-header-section">
            <Fade direction="up" duration={1000}>
              <h1>Cosmetic Dentistry in Plainfield, NJ</h1>
            </Fade>
            <Fade direction="down" duration={1000}>
              <h2 className="text-center">
                Enhance Your Smile with Cosmetic Dentistry | Smiling Molar
                Dental
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
                Understanding Cosmetic Dentistry
              </h2>
              <p>
                A confident smile can transform the way you look and feel. At
                Smiling Molar Dental, we offer comprehensive cosmetic dentistry
                to help you achieve the radiant, natural-looking smile you've
                always wanted.
              </p>
              <p>
                Whether you want to fix chips and cracks, brighten stained
                teeth, or completely redesign your smile, our team uses modern
                techniques and high-quality materials to create results that are
                both beautiful and long-lasting.
              </p>
              <p>
                We proudly serve patients from Plainfield (07060), North
                Plainfield (07062, 07063), South Plainfield (07080), Scotch
                Plains (07076), and nearby communities. If you're searching for
                a "cosmetic dentist near me" in the Plainfield area, we're here
                to make your dream smile a reality.
              </p>
            </div>
          </div>
          <div className="wcu-section">
            <div className="wcu-text-section">
              {/* <div className="wcu-subtitle">Top Reasons</div> */}
              <div className="wcu-title">
                <h2>Why Choose Smiling Molar Dental for Cosmetic Dentistry</h2>
              </div>
              <div className="wcu-points-section">
                <ul className="wcu-points">
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Comprehensive Aesthetic Solutions
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Modern Technology & Precision Techniques
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Personalized Smile Design
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Flexible Financing Options
                    </h3>
                  </li>
                  <li>
                    <h3 className="service-point-title">
                      <CheckCircle className="service-point-icon" />
                      Convenient Location for Local Families
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
