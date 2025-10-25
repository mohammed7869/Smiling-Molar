"use client";

import { useWorkingHours } from "@/lib/hooks/useWorkingHours";

export default function ContactInfo() {
  const { workingHours, loading, getCurrentStatus } = useWorkingHours();
  return (
    <div className="relative bg-primary/90 rounded-lg p-8 text-white shadow-lg overflow-hidden">
      {/* Background Image */}
      {/* <div className="absolute inset-0 opacity-10">
        <img
          src="/Images/dentist4.webp"
          alt="Dental professional"
          className="w-full h-full object-cover"
        />
      </div> */}

      {/* Green square decoration */}
      <div className="absolute top-4 left-4 w-4 h-4 bg-primary"></div>

      {/* Up arrow decoration */}
      <div className="absolute top-4 right-4 text-emerald-500">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 14l5-5 5 5z" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-6">
        <div>
          <h4 className="font-bold text-lg mb-2">Address:</h4>
          <p className="text-white/90 leading-relaxed">
            1024 Park Ave Suite 6C, Plainfield, NJ 07060
          </p>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-2">Phone:</h4>
          <div className="space-y-1">
            <a
              href="tel:9082642357"
              className="text-white/90 hover:text-white transition-colors"
            >
              +1 (908) 264-2357{" "}
            </a>
            {/* <p className="text-white/90">+12345 987 456</p> */}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-2">Email:</h4>
          <div className="space-y-1">
            <p className="text-white/90">
              {" "}
              <a
                href="mailto:info@smilingmolardental.com"
                className="underline"
              >
                {" "}
                info@smilingmolardental.com
              </a>
            </p>
          </div>
        </div>

        {/* Working Hours Section */}
        <div>
          <h4 className="font-bold text-lg mb-3">Working Hours:</h4>
          {loading ? (
            <div className="space-y-2">
              {[...Array(7)].map((_, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-1 px-2 rounded"
                >
                  <div className="h-4 bg-white/20 rounded animate-pulse w-16"></div>
                  <div className="h-4 bg-white/20 rounded animate-pulse w-20"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {workingHours.map((hour, index) => {
                const isClosed = !hour.isOpen;
                const isToday = new Date().getDay() === hour.dayOfWeek;

                return (
                  <div
                    key={index}
                    className={`flex justify-between items-center py-1 px-2 rounded transition-all duration-300
        ${
          isToday
            ? "bg-cyan-500/20 border-l-4 border-cyan-400 shadow-lg relative z-10 scale-[1.02]"
            : ""
        }`}
                  >
                    <span
                      className={`text-sm font-medium ${
                        isToday ? "text-cyan-200" : "text-white/90"
                      }`}
                    >
                      {hour.day}:
                    </span>
                    <span
                      className={`text-sm ${
                        isClosed
                          ? "text-red-500 font-medium"
                          : isToday
                          ? "text-cyan-200 font-semibold"
                          : "text-white/80"
                      }`}
                    >
                      {hour.time}
                    </span>
                  </div>
                );
              })}
            </div>
          )}

          {/* Current Status */}
          <div className="mt-3 pt-3 border-t border-white/20">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-200 rounded-full animate-pulse"></div>
              <span className="text-sm text-cyan-200 font-medium">
                {loading ? "Loading..." : getCurrentStatus()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
