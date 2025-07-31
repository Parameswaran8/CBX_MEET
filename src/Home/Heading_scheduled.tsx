import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const HeadingScheduled = () => {
  return (
    <>
      <View style={styles.headingRow}>
        <Text style={styles.headingText}>{"Scheduled Events"}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.detailButton}
            onPress={() => Alert.alert("Pressed!")}
          >
            <Text style={styles.detailButtonText}>{"See Detailed"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default HeadingScheduled;

const styles = StyleSheet.create({
  headingRow: {
    flexDirection: "row",
    marginHorizontal: 25,
    // backgroundColor: "red",
    alignContent: "center",
    alignItems: "center",
    paddingBottom: 17,
  },
  headingText: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,

    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    // Shadow for Android
    elevation: 15,
  },
  buttonContainer: {
    alignItems: "center",
  },
  detailButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 168,
    paddingVertical: 16,
    paddingHorizontal: 17,

    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    // Shadow for Android
    elevation: 0.2,
  },
  detailButtonText: {
    color: "#040C1A",
    fontSize: 12,
  },
});
