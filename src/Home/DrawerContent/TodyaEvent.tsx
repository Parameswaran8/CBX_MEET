import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { LocationIcon2 } from "../../../Icons/Icons";

type EventProps = {
  data: {
    id: number;
    title: string;
    description: string;
    time: string; // e.g. "2025-08-18T12:30:00+05:30"
    duration: string; // e.g. "60 Mins"
    Meeting: string;
  };
};

const TodyaEvent = ({ data }: EventProps) => {
  const [status, setStatus] = useState<string>("");
  const [remainingMin, setRemainingMin] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      updateStatus();
    }, 1000 * 60); // check every minute

    updateStatus(); // run immediately

    return () => clearInterval(interval);
  }, []);

  const updateStatus = () => {
    const startTime = new Date(data.time);

    // parse "60 Mins" or "40 Mins"
    let durationMs = 0;
    if (data.duration) {
      const num = parseInt(data.duration);
      durationMs = num * 60 * 1000;
    }

    const endTime = new Date(startTime.getTime() + durationMs);
    const now = new Date();

    if (now < startTime) {
      // Before start → show countdown
      const diffMs = startTime.getTime() - now.getTime();
      const diffMin = Math.floor(diffMs / (1000 * 60));
      setRemainingMin(diffMin);

      const hours = Math.floor(diffMin / 60);
      const minutes = diffMin % 60;

      setStatus(
        hours > 0
          ? `Starts in ${hours} Hour ${minutes} Min`
          : `Starts in ${minutes} Min`
      );
    } else if (now >= startTime && now <= endTime) {
      setStatus("Ongoing");
      setRemainingMin(0);
    } else {
      setStatus("Meeting Ended");
      setRemainingMin(0);
    }
  };

  // Format time into hh:mm AM/PM
  const formatTime = (isoString: string) => {
    const d = new Date(isoString);
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  // condition for disabling join
  const isJoinDisabled = remainingMin > 10 && status.includes("Starts in");

  return (
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
            <Text style={styles.eventLocation}>{data.description}</Text>
          </View>

          <View style={styles.joinWrapper}>
            <Image
              source={
                data.Meeting === "Zoom"
                  ? require("../../../Images/ZOOM.png")
                  : require("../../../Images/MEET.png")
              }
              style={[
                styles.eventImage,
                isJoinDisabled && { opacity: 0.4 }, // fade icon
              ]}
            />
            <Text
              style={[
                styles.joinText,
                isJoinDisabled && { color: "gray" }, // gray text if disabled
              ]}
            >
              Join Now!
            </Text>
          </View>
        </View>
      </View>

      {/* Remaining Time / Status */}
      <View>
        <Text
          style={[
            styles.remainingTime,
            status == "Ongoing" && {
              color: "green",
            },
          ]}
        >
          {status}
        </Text>
      </View>
    </View>
  );
};

export default TodyaEvent;

const styles = StyleSheet.create({
  eventCard: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#eff7feff",
    borderRadius: 31,
    paddingVertical: 20,
    marginVertical: 20,
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
});
