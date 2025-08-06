import React, { useState } from "react";
import { StyleSheet, StatusBar, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Today_Calendar_Add from "./Today_Calendar_Add";
import TopBar from "./TopBar";
import QuickButton from "./QuickButton";
import Heading_scheduled from "./Heading_scheduled";
import Events from "./Events";
import Sidebar from "../../Navigations/Sidebar";
import LogOutModal from "./LogOut";
import { useData } from "../Context/context";

export default function HomeScreen() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const { showLogoutModal, setShowLogoutModal } = useData();

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

  function Op_logout() {
    setShowLogoutModal(false);
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Sidebar />
        <StatusBar
          backgroundColor="#0000" // optional: sets background color (Android)
          barStyle="dark-content" // "default", "light-content", "dark-content"
          hidden={false}
        />
        <TopBar active={setDrawerVisible} />
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
      {/* Logout Modal */}
      <LogOutModal
        visible={showLogoutModal}
        onCancel={() => setShowLogoutModal(false)}
        onConfirm={Op_logout}
      />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f5f7ff",
    // backgroundColor: "red",
  },
});
