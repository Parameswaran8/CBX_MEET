import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { DownArrowIcon, LocationIcon } from "../../Icons/Icons";

type EventProps = {
  data: {
    id: number;
    title: string;
    description: string;
    time: string;
    Meeting: string;
  };
};

const Events = ({ data }: EventProps) => {
  //  source={require("../../Images/MEET.png")}
  //  source={require("../../Images/ZOOM.png")}
  return (
    <>
      <View key={data.id} style={styles.eventCard}>
        <View style={styles.eventInfo}>
          <View style={styles.eventTitleRow}>
            <Text style={styles.eventTitle}>{data.title}</Text>
            <DownArrowIcon size={11} color="white" />
          </View>
          <View style={styles.eventLocationRow}>
            <LocationIcon size={13} color="#768297" />
            <Text style={styles.locationText}>{data.description}</Text>
          </View>
        </View>
        <View style={styles.eventMetaRow}>
          <TouchableOpacity
            style={styles.metaButton}
            onPress={() => Alert.alert("Pressed!")}
          >
            <Text style={styles.metaText}>{data.time}</Text>
          </TouchableOpacity>
          <Image
            source={
              data.Meeting === "Zoom"
                ? require("../../Images/ZOOM.png")
                : require("../../Images/MEET.png")
            }
            resizeMode="stretch"
            style={styles.eventImage}
          />
        </View>
      </View>
    </>
  );
};

export default Events;
const styles = StyleSheet.create({
  eventCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginBottom: 11,
    marginHorizontal: 20,

    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    // Shadow for Android
    elevation: 5,
  },
  eventCardNoMargin: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 20,
  },
  eventInfo: {
    flex: 3,
    marginRight: 12,
  },
  eventTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 4,
    marginBottom: 1,
  },
  eventLocationRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  eventMetaRow: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  eventTitle: {
    color: "#040C1A",
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
  },
  locationText: {
    color: "#768297",
    fontSize: 10,
    fontWeight: "bold",
    flex: 1,
  },
  metaText: {
    color: "#040C1A",
    fontSize: 10,
    fontWeight: "bold",
  },
  metaButton: {
    backgroundColor: "#ECF1FA",
    borderRadius: 23,
    paddingVertical: 7,
    paddingHorizontal: 15,
    marginRight: 6,
  },
  metaButtonAlt: {
    backgroundColor: "#ECF1FA",
    borderRadius: 23,
    paddingVertical: 7,
    paddingHorizontal: 17,
    marginRight: 6,
  },
  imageWrapper: {
    alignItems: "center",
  },
  eventImage: {
    width: 27,
    height: 27,
  },
  overlayBox: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 26,
    height: 26,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
  },
});
