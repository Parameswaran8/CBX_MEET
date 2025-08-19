import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { LocationIcon2 } from "../../../Icons/Icons";

type EventProps = {
  data: {
    id: number;
    title: string;
    description: string;
    time: string; // e.g. "2025-08-18T12:30:00+05:30"
    duration: string; // e.g. "60 Mins"
    Meeting: string;
    eventColor?: string; // Added for color matching
  };
};

const CalendarEvent = ({ data }: EventProps) => {
  // Format time into hh:mm AM/PM
  const formatTime = (isoString: string) => {
    const d = new Date(isoString);
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const formatDate = (isoString: string) => {
    const d = new Date(isoString);
    return d.toLocaleDateString([], {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <View style={styles.flexbox}>
      <View
        style={[
          {
            height: "40%", // height of the left border
            borderRadius: 31,
            width: 2.2,
            backgroundColor: data.eventColor || "#eff7feff",
          },
        ]}
      />
      <View style={styles.eventCard}>
        <View style={styles.cardDetails}>
          <View style={styles.eventHeader}>
            <Text style={styles.eventTitle}>{data.title}</Text>
            <Text style={styles.eventDuration}>
              {data.duration} | {formatTime(data.time)}
            </Text>
          </View>

          <View style={styles.eventFooter}>
            <View style={styles.locationWrapper}>
              <LocationIcon2 size={18} color="#768297" />
              {data.description.includes("online") ? (
                <>
                  <Image
                    source={
                      data.Meeting === "Zoom"
                        ? require("../../../Images/ZOOM.png")
                        : require("../../../Images/MEET.png")
                    }
                    style={styles.eventImage}
                  />
                  <Text style={styles.eventLocation}>Online Event </Text>
                </>
              ) : (
                <Text style={styles.eventLocation}>{data.description}</Text>
              )}
            </View>

            <View style={styles.joinWrapper}>
              <Text style={styles.eventdate}>{formatDate(data.time)}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CalendarEvent;

const styles = StyleSheet.create({
  flexbox: {
    flexDirection: "row",
    alignItems: "center",
  },
  eventCard: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#eff7feff",
    borderRadius: 31,
    paddingVertical: 20,
    marginVertical: 10,
    shadowColor: "#F4F5F6",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  cardDetails: {
    paddingHorizontal: 20,
  },
  eventHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 2,
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: "500",
  },
  eventDuration: {
    fontSize: 14,
    color: "#555",
  },
  eventFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 5,
    paddingVertical: 2,
  },
  locationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  eventLocation: {
    fontSize: 14,
    marginLeft: 5,
  },
  joinWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  joinText: {
    marginLeft: 5,
    color: "#007AFF",
    fontWeight: "500",
  },
  eventImage: {
    height: 27,
    width: 27,
  },
  remainingTime: {
    marginTop: 14,
    fontSize: 12,
    color: "#334155",
  },
  eventdate: {
    fontSize: 12.9,
    fontWeight: "600",
    color: "#919AAA",
  },
});
