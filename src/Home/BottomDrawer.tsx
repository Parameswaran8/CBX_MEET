import React, { useMemo } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { useData } from "../Context/context";
import { DownArrowIcon } from "../../Icons/Icons";
import TodaysView from "./DrawerContent/TodaysView";
import CalendarView from "./DrawerContent/CalendarView";

const BottomDrawer = () => {
  const { bottomSheetModalRef, handleSheetChanges, today_list, calendarMark } =
    useData();

  const snapPoints = useMemo(() => {
    if (today_list) {
      return ["30%", "40%", "50%", "60%"];
    } else if (calendarMark) {
      return ["70%", "80%", "90%"];
    } else {
      return ["60%", "80%"];
    }
  }, [today_list, calendarMark]);

  const options = ["abc", "def", "ghi", "jkl"];

  // Custom backdrop for overlay
  const renderBackdrop = (props: any) => (
    <BottomSheetBackdrop
      {...props}
      disappearsOnIndex={-1}
      appearsOnIndex={0}
      opacity={0.1}
    />
  );

  // Custom top handle with arrow-down icon
  const renderHandle = () => (
    <View style={styles.handleContainer}>
      <DownArrowIcon size={15} color="#999" />
    </View>
  );

  return (
    <View style={StyleSheet.absoluteFill}>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        backgroundStyle={{
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
        backdropComponent={renderBackdrop} // <-- Proper overlay
        handleComponent={renderHandle}
      >
        <BottomSheetView style={styles.contentContainer}>
          {today_list && (
            <View style={styles.drawer_container}>
              <TodaysView />
            </View>
          )}

          {calendarMark && (
            <View style={styles.drawer_container}>
              <CalendarView />
            </View>
          )}
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  );
};

const styles = StyleSheet.create({
  handleContainer: {
    alignItems: "center",
    paddingVertical: 8,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  drawer_container: {
    minHeight: 500,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  optionText: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default BottomDrawer;
