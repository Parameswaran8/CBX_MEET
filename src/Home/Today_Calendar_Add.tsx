import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { PlusIcon } from "../../Icons/Icons";
import { useData } from "../Context/context";

const TodayCalendarAdd = () => {
  const {
    openBottomSheet,
    today_list,
    setToday_list,
    calendarMark,
    setCalendarMark,
  } = useData();
  // console.log("8", today_list);

  function openTodayList() {
    openBottomSheet();
    setToday_list(true);
  }

  function openCalendarView() {
    openBottomSheet();
    setCalendarMark(true);
  }

  return (
    <View style={styles.container}>
      <View style={styles.leftButtonsRow}>
        <View
          style={[
            styles.buttonWrapper,
            today_list && { backgroundColor: "black" },
          ]}
        >
          <TouchableOpacity style={styles.textButton} onPress={openTodayList}>
            <Text style={[styles.buttonText, today_list && { color: "white" }]}>
              {"Today (2)"}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.buttonWrapper,
            calendarMark && { backgroundColor: "black" },
          ]}
        >
          <TouchableOpacity
            style={styles.textButton}
            onPress={openCalendarView}
          >
            <Text
              style={[styles.buttonText, calendarMark && { color: "white" }]}
            >
              {"Calendar"}
            </Text>
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
