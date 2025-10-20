"use client";

import { useState } from "react";
import { Bounce, Fade } from "react-awesome-reveal";
import BookingModal from "../booking/bookingScreen";
import { useWorkingHours } from "@/lib/hooks/useWorkingHours";

const locations = [
  {
    id: "plainfield",
    name: "Smiling Molar Dental, NJ",
    address: "1024 Park Ave Suite 6C, Plainfield, NJ 07060, United States",
    phone: "(908) 264-2357",
    hours: [
      "Monday: 9:00 AM - 7:00 PM",
      "Tuesday: 9:00 AM - 6:00 PM",
      "Wednesday: 9:00 AM - 7:00 PM",
      "Thursday: 9:00 AM - 6:00 PM",
      "Friday: 9:00 AM - 5:00 PM",
      "Saturday: 8:30 AM - 3:00 PM",
      "Sunday: Closed",
    ],

    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.7997524427874!2d-74.25858312546795!3d40.72242453697971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3acfa57f6c787%3A0x1b55d762a76534d7!2s1024%20Park%20Ave%20Suite%206C%2C%20Plainfield%2C%20NJ%2007060%2C%20USA!5e0!3m2!1sen!2sin!4v1755590103689!5m2!1sen!2sin",
  },
];

export default function LocationTabs() {
  const [selected] = useState(locations[0]);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const { workingHours, loading } = useWorkingHours();

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-12">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        {/* Info Block */}
        <div className="flex-1 text-center relative bg-[#0087ce] rounded-lg p-8 text-white shadow-lg overflow-hidden space-y-4">
          {" "}
          <Bounce>
            <h2 className="text-2xl font-bold">{selected.name}</h2>
          </Bounce>
          <p className="whitespace-pre-line text-white text-xs md:text-base text-center">
            {selected.address}
          </p>
          <h3 className="text-md font-medium mt-4">Hours of Operation:</h3>
          <Fade delay={400}>
            {loading ? (
              <ul className="text-sm text-gray-700">
                {[...Array(7)].map((_, i) => (
                  <li key={i} className="text-white">
                    <div className="h-4 bg-white/20 rounded animate-pulse mb-1"></div>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="text-sm text-gray-700">
                {workingHours.map((hour, i) => {
                  const isToday = new Date().getDay() === hour.dayOfWeek;
                  return (
                    <li
                      key={i}
                      className={`text-white ${
                        isToday
                          ? "bg-white/10 border-2 rounded-md border-secondary"
                          : ""
                      }`}
                    >
                      {hour.day}: {hour.time}
                    </li>
                  );
                })}
              </ul>
            )}
          </Fade>
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <a
              onClick={() => setIsBookingOpen(true)}
              className="border border-white  text-white px-3 py-2 rounded-md text-sm hover:from-blue-700 hover:to-cyan-700 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
            >
              Book Online
            </a>
            <a
              href={`tel:${selected.phone}`}
              className="bg-blue-100 text-blue-700 border border-primary px-3 py-2 rounded-md text-sm hover:bg-blue-200 transition"
            >
              {selected.phone}
            </a>
          </div>
        </div>

        {/* Single Map */}
        <div className="flex-1 w-full h-[400px] rounded-xl overflow-hidden shadow">
          <iframe
            src={selected.mapUrl}
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          />
        </div>
      </div>
      <BookingModal open={isBookingOpen} setOpen={setIsBookingOpen} />
    </div>
  );
}
