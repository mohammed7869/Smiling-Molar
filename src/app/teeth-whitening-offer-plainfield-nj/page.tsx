"use client";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import BookingModal from "@/app/booking/bookingScreen";

export default function OffersPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="details-page-header-section flex flex-col items-center justify-center">
        <h1>Professional Whitening Special - Only $299 in Plainfield, NJ</h1>
        <h2>Your Brighter Smile Starts Here</h2>
      </div>

      {/* Welcome Offer Section */}
      <div className="max-w-7xl mx-auto text-center py-10 px-4">
        <h2 className="text-xl font-bold mb-2">
          Claim Your $299 Teeth Whitening in Plainfield, NJ
        </h2>
        <p className="mb-2">
          Tired of dull, yellow, or stained teeth? Our $299 in-office whitening
          special gives you dramatic results without the mess of strips or the
          uncertainty of over-the-counter kits.
        </p>
        <p className="mb-2">
          In just one comfortable visit, our dental team can make your smile
          several shades whiter using safe, professional-grade materials.
          Whether you need a quick refresh or you’re getting ready for weddings,
          photos, or special occasions, this limited-time offer is the perfect
          opportunity to brighten your smile affordably and effectively.
        </p>
        <p className="mb-2 p-4">
          Patients from Plainfield (07060), North Plainfield (07062, 07063),
          South Plainfield (07080), and Scotch Plains (07076) trust Smiling
          Molar Dental to help them achieve stunning, natural-looking results.
          Whether it’s for a special event or simply a confidence boost, your
          brighter smile begins here. When patients search for “professional
          whitening near me” in Plainfield and nearby areas, they consistently
          choose Smiling Molar Dental for trusted care and beautiful results.
        </p>

        <button
          onClick={() => setIsBookingOpen(true)}
          className="bg-secondary/90 text-white px-6 py-2 rounded font-semibold shadow-lg hover:shadow-xl hover:bg-primary duration-300 transform hover:scale-105"
        >
          Book My $299 Whitening Special Now
        </button>
      </div>

      {/* Main Offer Section */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 py-8 px-4">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/Images/woman-patient-dentist.webp"
            alt="Teeth Whitening"
            width={400}
            height={350}
            className="rounded-lg shadow-lg object-cover w-full h-auto max-h-[350px]"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-xl md:text-2xl font-bold mb-4 ">
            What Sets Our Whitening Special Apart
          </h2>
          <ul className="space-y-4 text-left">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">
                <CheckCircle />
              </span>
              <div>
                <h3 className="text-base font-semibold">
                  Professional Care with a Personal Touch
                </h3>
                <p>
                  Your whitening procedure is planned and supervised by our
                  experienced dental team, ensuring brighter results that are
                  gentle on your teeth and gums.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">
                <CheckCircle />
              </span>
              <div>
                <h3 className="text-base font-semibold">
                  See Results Right Away
                </h3>
                <p>
                  In just one session, your smile can become multiple shades
                  whiter, giving you a noticeable boost in confidence before you
                  even leave the office.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">
                <CheckCircle />
              </span>
              <div>
                <h3 className="text-base font-semibold">
                  Easy to Maintain at Home
                </h3>
                <p>
                  Our team provides clear aftercare instructions and simple
                  maintenance tips so you can keep your smile looking brilliant
                  long after your appointment.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="w-full details-page-header-section text-left text-white py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-3xl font-bold mb-4 text-center">
            Why Patients Choose Smiling Molar Dental - Plainfield, NJ
          </h2>
          <p className="mb-4 text-base">
            Families across Plainfield, North Plainfield, South Plainfield, and
            Scotch Plains choose Smiling Molar Dental for cosmetic and family
            dental care because we offer:
          </p>
          <ul className="space-y-2 text-base">
            <li className="flex items-start gap-2">
              <CheckCircle size={18} className="mt-1" />A welcoming environment
              for patients of all ages-from kids to seniors
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={18} className="mt-1" />
              Transparent pricing with no hidden fees
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={18} className="mt-1" />
              Flexible scheduling, including same-day appointments
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={18} className="mt-1" />
              Convenient location in Plainfield, close to surrounding
              neighborhoods
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={18} className="mt-1" />A trusted dental team
              that combines skill with compassion
            </li>
          </ul>
        </div>
      </div>

      {/* What to Expect Section */}
      <div className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-xl md:text-3xl font-semibold mb-4 text-center">
          Your Whitening Visit: What to Expect
        </h2>
        <p className="text-center mb-8">
          Here’s how your $299 whitening appointment works at Smiling Molar
          Dental:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6 flex items-start gap-4">
            <span className="text-primary text-2xl mt-1">
              <CheckCircle />
            </span>
            <span>
              <strong> Warm Welcome & Quick Check-In </strong> - Our friendly
              team greets you and makes sure you’re comfortable from the moment
              you arrive.
            </span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex items-start gap-4">
            <span className="text-primary text-2xl mt-1">
              <CheckCircle />
            </span>
            <span>
              <strong> Personal Smile Assessment </strong>- We review your oral
              health and ensure whitening is the best and safest option for your
              teeth.
            </span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex items-start gap-4">
            <span className="text-primary text-2xl mt-1">
              <CheckCircle />
            </span>
            <span>
              <strong> Professional Whitening Treatment </strong> - In about an
              hour, our in-office system gently but effectively brightens your
              teeth for immediate results.
            </span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex items-start gap-4">
            <span className="text-primary text-2xl mt-1">
              <CheckCircle />
            </span>
            <span>
              <strong> Simple Aftercare Guidance </strong> - We’ll give you easy
              tips and recommendations to keep your smile bright for as long as
              possible.
            </span>
          </div>
        </div>
        <p className="text-center mt-8">
          At Smiling Molar Dental, we make teeth whitening comfortable,
          affordable, and tailored to you-so you leave with a glowing smile
          you’ll love to show off.
        </p>
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setIsBookingOpen(true)}
            className="bg-secondary/90 text-white px-6 py-2 rounded font-semibold shadow-lg hover:shadow-xl hover:bg-primary transition-all duration-300 transform hover:scale-105"
          >
            Book My $299 Whitening Special Now
          </button>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal open={isBookingOpen} setOpen={setIsBookingOpen} />
    </div>
  );
}
