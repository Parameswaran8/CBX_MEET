import { Text, StyleSheet, View, Image } from "react-native";
import React, { Component } from "react";
import {
  CreateAnEventIcon,
  ShareIcon,
  ShareLinkToIcon,
  UpRightArrowIcon,
} from "../../Icons/Icons";

export default function QuickButton() {
  return (
    <View style={styles.container}>
      {/* Left Card: Create an Event */}
      <View style={styles.leftCardWrapper}>
        <View style={styles.eventCard}>
          <View style={styles.eventHeaderRow}>
            <CreateAnEventIcon size={40} color="white" />
            <View style={styles.arrowIconWrapper}>
              <UpRightArrowIcon size={17} color="white" />
            </View>
          </View>
          <Text style={styles.eventTitle}>Create An Event</Text>
        </View>
      </View>

      {/* Right Card: Share Link to Clients */}
      <View style={styles.rightCardWrapper}>
        <Text style={styles.sectionHeading}>QUICK ACTION</Text>
        <View style={styles.clientCard}>
          <View style={styles.clientHeaderRow}>
            <View style={styles.shareIconWrapper}>
              <ShareIcon size={19} color="white" />
            </View>
            <ShareLinkToIcon size={54} color="white" />
          </View>
          <Text style={styles.clientTitle}>Share Link To Clients</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    // marginHorizontal: 13,
    marginTop: 10,
    marginBottom: 54,
    marginHorizontal: 24,
  },
  leftCardWrapper: {
    flex: 1,
    marginRight: 12,
  },
  rightCardWrapper: {
    flex: 1,
    marginTop: 16,
  },
  eventCard: {
    backgroundColor: "#20BFF8",
    borderRadius: 23,
    paddingVertical: 13,
    paddingHorizontal: 10,
    height: 140,

    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    // Shadow for Android
    elevation: 15,
  },
  eventHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingBottom: 15,
    paddingHorizontal: 10,
  },
  clientCard: {
    alignItems: "center",
    backgroundColor: "#334155",
    borderRadius: 23,
    paddingVertical: 8,
    paddingHorizontal: 10,
    height: 145,

    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    // Shadow for Android
    elevation: 15,
  },
  eventImage: {
    width: 43,
    height: 42,
  },
  clientImage: {
    width: 37,
    height: 53,
  },
  eventTitle: {
    color: "#040C1A",
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 13,
  },
  sectionHeading: {
    color: "#040C1A1C",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 14,
    textAlign: "center",
    letterSpacing: 0.7,
  },
  clientHeaderRow: {
    paddingVertical: 8,
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 7,
    width: "80%",
  },
  clientTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    width: 118,
  },
  arrowIconWrapper: {
    backgroundColor: "#FFFFFF",
    borderRadius: 37,
    padding: 12,
  },
  shareIconWrapper: {
    backgroundColor: "#FFFFFF",
    borderRadius: 37,
    padding: 10,
  },
});
