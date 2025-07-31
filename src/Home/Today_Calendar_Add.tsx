import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { PlusIcon } from "../../Icons/Icons";

const TodayCalendarAdd = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftButtonsRow}>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.textButton}
            onPress={() => Alert.alert("Pressed!")}
          >
            <Text style={styles.buttonText}>{"Today (2)"}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.textButton}
            onPress={() => Alert.alert("Pressed!")}
          >
            <Text style={styles.buttonText}>{"Calendar"}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.addButtonWrapper}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => Alert.alert("Pressed!")}
        >
          <PlusIcon size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodayCalendarAdd;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 26,
    marginHorizontal: 20,
  },
  leftButtonsRow: {
    flex: 1,
    flexDirection: "row",
    marginRight: 12,
    gap: 10,
  },
  buttonWrapper: {
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 168,

    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    // Shadow for Android
    elevation: 0.5,
  },
  textButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    padding: 6,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: "#040C1A",
    fontSize: 14,
  },
  addButtonWrapper: {
    alignItems: "center",
    paddingVertical: 6,
  },
  addButton: {
    backgroundColor: "#20BFF8",
    borderRadius: 102,
    padding: 10,
  },
});
