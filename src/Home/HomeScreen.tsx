import React, { useRef, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  StatusBar,
  FlatList,
  View,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Today_Calendar_Add from "./Today_Calendar_Add";
import TopBar from "./TopBar";
import QuickButton from "./QuickButton";
import Heading_scheduled from "./Heading_scheduled";
import Events from "./Events";

export default function HomeScreen() {
  const data = [
    {
      id: 1,
      title: "Presentation",
      description: "Shivaji Nagar, Mumbai...",
      time: '{"60 Mins | Wed"}',
      Meeting: "Zoom",
    },
    {
      id: 2,
      title: "Product Mark...",
      description: "Tulsi Nagar, Mumbai...",
      time: '{"60 Mins | Wed"}',
      Meeting: "Meet",
    },
    {
      id: 3,
      title: "Presentation",
      description: "Shivaji Nagar, Mumbai...",
      time: '{"60 Mins | Wed"}',
      Meeting: "Zoom",
    },
    {
      id: 4,
      title: "Presentation",
      description: "Shivaji Nagar, Mumbai...",
      time: '{"60 Mins | Wed"}',
      Meeting: "Zoom",
    },
    {
      id: 5,
      title: "Presentation",
      description: "Shivaji Nagar, Mumbai...",
      time: '{"60 Mins | Wed"}',
      Meeting: "Zoom",
    },
    {
      id: 6,
      title: "Presentation",
      description: "Shivaji Nagar, Mumbai...",
      time: '{"60 Mins | Wed"}',
      Meeting: "Zoom",
    },

    {
      id: 7,
      title: "Presentation",
      description: "Shivaji Nagar, Mumbai...",
      time: '{"60 Mins | Wed"}',
      Meeting: "Zoom",
    },
    {
      id: 8,
      title: "Presentation 8",
      description: "Shivaji Nagar, Mumbai...",
      time: '{"60 Mins | Wed"}',
      Meeting: "Zoom",
    },
    {
      id: 9,
      title: "Presentation 9",
      description: "Shivaji Nagar, Mumbai...",
      time: '{"60 Mins | Wed"}',
      Meeting: "Zoom",
    },
    // Add more events as needed;
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#0000" // optional: sets background color (Android)
        barStyle="dark-content" // "default", "light-content", "dark-content"
        hidden={false}
      />
      <TopBar />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Events data={item} />}
        ListHeaderComponent={
          <>
            <Today_Calendar_Add />
            <QuickButton />
            <Heading_scheduled />
          </>
        }
        showsVerticalScrollIndicator={false} // 👈 hides the scrollbar
        contentContainerStyle={{ paddingBottom: 80 }}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f5f7ff",
    // backgroundColor: "red",
  },
});
