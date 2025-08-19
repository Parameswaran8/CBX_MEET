import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { OopsIcon } from "../../../Icons/Icons";
import { FlatList } from "react-native-gesture-handler";
import CalendarEvent from "./CalendarEvent";

const Eventcolors = ["#21C0F9", "#006E95", "#082F6E"];
const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const data = [
  {
    id: 1,
    title: "Presentation",
    description: "online Event",
    time: "2025-08-18T12:00:00+05:30",
    duration: "60 Mins",
    Meeting: "Zoom",
  },
  {
    id: 2,
    title: "Product Mark...",
    description: "online",
    time: "2025-08-19T13:30:00+05:30",
    duration: "40 Mins",
    Meeting: "Meet",
  },
  {
    id: 3,
    title: "Presentation",
    description: "Online",
    time: "2025-08-26T15:30:00+05:30",
    duration: "40 Mins",
    Meeting: "Zoom",
  },
  {
    id: 4,
    title: "Presentation",
    description: "Online",
    time: "2025-08-26T15:30:00+05:30",
    duration: "40 Mins",
    Meeting: "Zoom",
  },
  {
    id: 5,
    title: "Presentation",
    description: "Online",
    time: "2025-08-26T15:30:00+05:30",
    duration: "40 Mins",
    Meeting: "Zoom",
  },
  {
    id: 6,
    title: "Presentation6",
    description: "Online",
    time: "2025-08-26T15:30:00+05:30",
    duration: "40 Mins",
    Meeting: "Zoom",
  },
  {
    id: 7,
    title: "Presentation7",
    description: "Online",
    time: "2025-09-26T15:30:00+05:30",
    duration: "40 Mins",
    Meeting: "Zoom",
  },
  {
    id: 8,
    title: "Presentation8",
    description: "Online",
    time: "2025-09-27T15:30:00+05:30",
    duration: "40 Mins",
    Meeting: "Zoom",
  },
];

const CustomCalendar = ({ currentDate }: { currentDate: Date }) => {
  const generateCalendarDays = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const daysArray: (number | null)[] = [];
    for (let i = 0; i < firstDay; i++) daysArray.push(null);
    for (let d = 1; d <= daysInMonth; d++) daysArray.push(d);

    return daysArray;
  };

  // Helper function to distribute colors evenly across tasks
  const getColorIndexForTask = (
    taskIndex: number,
    totalTasks: number
  ): number => {
    if (totalTasks <= 3) {
      // For 1-3 tasks, use first color primarily, but distribute if more than 1
      if (totalTasks === 1) return 0;
      return taskIndex < 2 ? 0 : 1;
    }

    // Calculate which third of the month this task falls into
    const thirdSize = Math.ceil(totalTasks / 3);

    if (taskIndex < thirdSize) {
      return 0; // First color (1-3 tasks range)
    } else if (taskIndex < thirdSize * 2) {
      return 1; // Second color (4-6 tasks range)
    } else {
      return 2; // Third color (7+ tasks range)
    }
  };

  // Enhanced event mapping logic with color distribution
  const getEventColor = (day: number | null): string | null => {
    if (!day) return null;

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Get all events for the current month
    const monthEvents = data.filter((event) => {
      const eventDate = new Date(event.time);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month;
    });

    // Find events for this specific date
    const eventsForDay = data.filter((event) => {
      const eventDate = new Date(event.time);
      return (
        eventDate.getFullYear() === year &&
        eventDate.getMonth() === month &&
        eventDate.getDate() === day
      );
    });

    // Return color if events exist for this day
    if (eventsForDay.length > 0) {
      const totalTasksInMonth = monthEvents.length;

      if (totalTasksInMonth === 1) {
        // Single task - use first color
        return Eventcolors[0];
      }

      // Sort events by date to maintain consistent color assignment
      const sortedMonthEvents = monthEvents.sort(
        (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()
      );

      // Find the index of current day's first event in the sorted month events
      const currentDayFirstEvent = eventsForDay[0];
      const eventIndexInMonth = sortedMonthEvents.findIndex(
        (event) => event.id === currentDayFirstEvent.id
      );

      // Distribute colors based on position in month
      const colorIndex = getColorIndexForTask(
        eventIndexInMonth,
        totalTasksInMonth
      );
      return Eventcolors[colorIndex];
    }

    return null;
  };

  // Get events for current month with their assigned colors
  const getEventsWithColors = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Filter events for current month
    const monthEvents = data.filter((event) => {
      const eventDate = new Date(event.time);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month;
    });

    // Sort events by date
    const sortedEvents = monthEvents.sort(
      (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()
    );

    // Assign colors using the same logic as calendar
    return sortedEvents.map((event, index) => {
      const colorIndex = getColorIndexForTask(index, sortedEvents.length);
      return {
        ...event,
        eventColor: Eventcolors[colorIndex],
      };
    });
  };

  const days = generateCalendarDays(currentDate);
  const eventsWithColors = getEventsWithColors();

  // Format month + year
  const getMonthYear = (date: Date) => {
    return date.toLocaleString("default", { month: "long" });
  };

  return (
    <View>
      {/* Week Days */}
      <View style={styles.weekRow}>
        {weekDays.map((day, index) => (
          <Text
            key={index}
            style={[styles.weekDay, index === 0 && { color: "#DF0036" }]}
          >
            {day}
          </Text>
        ))}
      </View>

      {/* Dates */}
      <View style={styles.daysContainer}>
        {days.map((day, index) => {
          const dayOfWeek = index % 7;
          const eventColor = getEventColor(day);
          const hasEvent = !!eventColor;

          return (
            <View key={index} style={styles.dayBox}>
              <View
                style={[
                  styles.circle,
                  hasEvent && { backgroundColor: eventColor },
                  hasEvent && styles.eventCircle, // Ensure circle styling is maintained
                ]}
              >
                {day ? (
                  <Text
                    style={[
                      styles.dayText,
                      // Default text color (no event)
                      !hasEvent && { color: "#3341556B" },
                      // Sunday with no event
                      !hasEvent && dayOfWeek === 0 && { color: "#DF003654" },
                      // Event day - white text
                      hasEvent && { color: "#fff", fontWeight: "600" },
                    ]}
                  >
                    {String(day).padStart(2, "0")}
                  </Text>
                ) : null}
              </View>
            </View>
          );
        })}
      </View>

      {/* Events List with Matching Colors */}
      {eventsWithColors.length === 0 ? (
        <View style={styles.noEventRow}>
          <View style={styles.Oops_container}>
            <View style={styles.head}>
              <OopsIcon size={20} color="" />
              <Text style={styles.Oopstxt}>Oops!</Text>
            </View>
            <Text style={styles.noEvent}>
              No Events Lined Up in {getMonthYear(currentDate)} Month
            </Text>
          </View>
        </View>
      ) : (
        <View style={styles.calendarEventsContainer}>
          <FlatList
            data={eventsWithColors}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <CalendarEvent data={item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 80 }}
          />
        </View>
      )}
    </View>
  );
};

export default CustomCalendar;

const styles = StyleSheet.create({
  weekRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  weekDay: {
    flex: 1,
    textAlign: "center",
    fontWeight: "600",
    color: "#334155",
  },
  daysContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  dayBox: {
    width: `${100 / 7}%`, // exactly 7 per row
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
  },
  circle: {
    width: 36,
    height: 36,
    borderRadius: 18, // keeps it perfectly round
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent", // default transparent background
  },
  eventCircle: {
    // Force circle properties for events
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  dayText: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
  noEventRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
    paddingVertical: 25,
    backgroundColor: "#F4F5F6", // light gray background
    borderRadius: 31,
  },
  Oops_container: {
    alignItems: "center",
    justifyContent: "center",
    width: 156,
    gap: 12,
  },
  head: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  Oopstxt: {
    fontFamily: "Poppins", // make sure Poppins is loaded via expo-font or link
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 24, // numeric value required
  },
  noEvent: {
    fontFamily: "Poppins", // make sure Poppins is loaded via expo-font or link
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 22, // numeric value required
    textAlign: "center",
    color: "#919AAA", // dark gray text
  },
  calendarEventsContainer: {
    marginVertical: 10,
    maxHeight: 400,
  },
});
