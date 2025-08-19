import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import React from "react";
import TodyaEvent from "./TodyaEvent";

export default function TodaysView() {
  const data = [
    {
      id: 1,
      title: "Presentation",
      description: "Shivaji Nagar, Mumbai...",
      time: "2025-08-18T12:00:00+05:30",
      duration: "60 Mins",
      Meeting: "Zoom",
    },
    {
      id: 2,
      title: "Product Mark...",
      description: "Tulsi Nagar, Mumbai...",
      time: "2025-08-18T13:30:00+05:30",
      duration: "40 Mins",
      Meeting: "Meet",
    },
    {
      id: 3,
      title: "Presentation",
      description: "Online",
      time: "2025-08-18T15:30:00+05:30",
      duration: "40 Mins",
      Meeting: "Zoom",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Today’s Events</Text>
        <TouchableOpacity style={styles.dateButton}>
          <Text style={styles.dateText}>24-04-24</Text>
        </TouchableOpacity>
      </View>

      {/* Event Card */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TodyaEvent data={item} />}
      />
    </View>
  );
}

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
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 22,
  },
  dateButton: {
    backgroundColor: "#BFCCE438",
    padding: 10,
    paddingHorizontal: 25,
    borderRadius: 30,
  },
  dateText: {
    fontWeight: "500",
  },
});
