import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { LeftIcon, RightIcon } from "../../../Icons/Icons";
import CustomCalendar from "./CustomCalendar";

const CalendarView = () => {
  // Initialize with today's date
  const [currentDate, setCurrentDate] = useState(new Date());

  // Format month + year
  const getMonthYear = (date: Date) => {
    return date.toLocaleString("default", { month: "long", year: "numeric" });
  };

  function PreviousMonth() {
    const prev = new Date(currentDate);
    prev.setMonth(prev.getMonth() - 1);
    setCurrentDate(prev);
  }

  function NextMonth() {
    const next = new Date(currentDate);
    next.setMonth(next.getMonth() + 1);
    setCurrentDate(next);
  }

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.dateButton} onPress={PreviousMonth}>
          <LeftIcon size={20} color={"#1F7BFF"} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>{getMonthYear(currentDate)}</Text>

        <TouchableOpacity style={styles.dateButton} onPress={NextMonth}>
          <RightIcon size={20} color={"#1F7BFF"} />
        </TouchableOpacity>
      </View>
      <View style={styles.CalendarView}>
        <CustomCalendar currentDate={currentDate} />
      </View>
    </View>
  );
};

export default CalendarView;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
  headerTitle: {
    color: "#040C1A",
    fontFamily: "Poppins",
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 20,
  },
  dateButton: {
    backgroundColor: "#BFCCE438",
    padding: 10,
    paddingHorizontal: 10,
    borderRadius: 30,
  },
  dateText: {
    fontWeight: "500",
  },
  CalendarView: {
    paddingVertical: 25,
    maxWidth: 400,
  },
});
