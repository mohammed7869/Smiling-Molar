import { useState, useEffect } from "react";
import { apiService, TimeSlot } from "../apiService";

export interface WorkingHours {
  day: string;
  time: string;
  isOpen: boolean;
  dayOfWeek: number;
  startTime: string;
  endTime: string;
}

export interface WorkingHoursHook {
  workingHours: WorkingHours[];
  loading: boolean;
  error: string | null;
  getCurrentStatus: () => string;
}

const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export function useWorkingHours(locationId?: number): WorkingHoursHook {
  const [workingHours, setWorkingHours] = useState<WorkingHours[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWorkingHours = async () => {
      try {
        setLoading(true);
        setError(null);

        const timeSlots = await apiService.getDailyTimeSlots();

        // Filter by location if provided, otherwise use all slots
        const filteredSlots = locationId
          ? timeSlots.filter((slot) => slot.locationId === locationId)
          : timeSlots;

        // Group slots by day and merge them into continuous ranges
        const daySlotsMap = new Map<number, TimeSlot[]>();

        filteredSlots.forEach((slot) => {
          if (!daySlotsMap.has(slot.dayOfWeek)) {
            daySlotsMap.set(slot.dayOfWeek, []);
          }
          daySlotsMap.get(slot.dayOfWeek)!.push(slot);
        });

        // Helper function to merge time slots for the same day
        const mergeTimeSlots = (
          slots: TimeSlot[]
        ): { startTime: string; endTime: string } => {
          if (slots.length === 1) {
            const slot = slots[0];
            return {
              startTime: slot.startTime,
              endTime: slot.endTime,
            };
          }

          // Sort slots by start time
          const sortedSlots = slots.sort((a, b) =>
            a.startTime.localeCompare(b.startTime)
          );

          // Find the earliest start time and latest end time
          const startTime = sortedSlots[0].startTime;
          const endTime = sortedSlots[sortedSlots.length - 1].endTime;

          return { startTime, endTime };
        };

        // Convert to working hours format
        const hours: WorkingHours[] = [];

        // Create entries for all 7 days, starting with Monday (1) and ending with Sunday (0)
        const dayOrder = [1, 2, 3, 4, 5, 6, 0]; // Monday to Sunday

        dayOrder.forEach((dayOfWeek) => {
          const slots = daySlotsMap.get(dayOfWeek);
          const dayName = DAY_NAMES[dayOfWeek];

          if (slots && slots.length > 0) {
            // Merge time slots for this day
            const mergedSlots = mergeTimeSlots(slots);

            // Format time from 24-hour to 12-hour format
            const formatTime = (time24: string) => {
              const [hours, minutes] = time24.split(":");
              const hour = parseInt(hours);
              const ampm = hour >= 12 ? "PM" : "AM";
              const hour12 = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
              return `${hour12}:${minutes} ${ampm}`;
            };

            // Format the merged time range (earliest start to latest end)
            const startTimeFormatted = formatTime(mergedSlots.startTime);
            const endTimeFormatted = formatTime(mergedSlots.endTime);

            hours.push({
              day: dayName,
              time: `${startTimeFormatted} - ${endTimeFormatted}`,
              isOpen: true,
              dayOfWeek: slots[0].dayOfWeek,
              startTime: mergedSlots.startTime,
              endTime: mergedSlots.endTime,
            });
          } else {
            // Day is closed (not in API response)
            hours.push({
              day: dayName,
              time: "Closed",
              isOpen: false,
              dayOfWeek,
              startTime: "00:00:00",
              endTime: "00:00:00",
            });
          }
        });

        setWorkingHours(hours);
      } catch (err) {
        console.error("Error fetching working hours:", err);
        setError(
          err instanceof Error ? err.message : "Failed to fetch working hours"
        );

        // Fallback to default hours if API fails (Monday to Sunday order)
        const defaultHours: WorkingHours[] = [
          {
            day: "Monday",
            time: "9:00 AM - 6:00 PM",
            isOpen: true,
            dayOfWeek: 1,
            startTime: "09:00:00",
            endTime: "18:00:00",
          },
          {
            day: "Tuesday",
            time: "9:00 AM - 6:00 PM",
            isOpen: true,
            dayOfWeek: 2,
            startTime: "09:00:00",
            endTime: "18:00:00",
          },
          {
            day: "Wednesday",
            time: "9:00 AM - 6:00 PM",
            isOpen: true,
            dayOfWeek: 3,
            startTime: "09:00:00",
            endTime: "18:00:00",
          },
          {
            day: "Thursday",
            time: "9:00 AM - 6:00 PM",
            isOpen: true,
            dayOfWeek: 4,
            startTime: "09:00:00",
            endTime: "18:00:00",
          },
          {
            day: "Friday",
            time: "9:00 AM - 6:00 PM",
            isOpen: true,
            dayOfWeek: 5,
            startTime: "09:00:00",
            endTime: "18:00:00",
          },
          {
            day: "Saturday",
            time: "9:00 AM - 3:30 PM",
            isOpen: true,
            dayOfWeek: 6,
            startTime: "09:00:00",
            endTime: "15:30:00",
          },
          {
            day: "Sunday",
            time: "Closed",
            isOpen: false,
            dayOfWeek: 0,
            startTime: "00:00:00",
            endTime: "00:00:00",
          },
        ];
        setWorkingHours(defaultHours);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkingHours();
  }, [locationId]);

  const getCurrentStatus = (): string => {
    const now = new Date();
    const currentDay = now.getDay();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTime = currentHour * 60 + currentMinute;

    const todayHours = workingHours.find(
      (hours) => hours.dayOfWeek === currentDay
    );

    if (!todayHours || !todayHours.isOpen) {
      return "Closed Today";
    }

    // Parse start and end times
    const [startHour, startMinute] = todayHours.startTime
      .split(":")
      .map(Number);
    const [endHour, endMinute] = todayHours.endTime.split(":").map(Number);

    const openTime = startHour * 60 + startMinute;
    const closeTime = endHour * 60 + endMinute;

    if (currentTime >= openTime && currentTime < closeTime) {
      const endTimeFormatted = todayHours.time.split(" - ")[1];
      return `Open Now - Closes at ${endTimeFormatted}`;
    } else if (currentTime < openTime) {
      const startTimeFormatted = todayHours.time.split(" - ")[0];
      return `Opens at ${startTimeFormatted}`;
    } else {
      return "Closed Today";
    }
  };

  return {
    workingHours,
    loading,
    error,
    getCurrentStatus,
  };
}
