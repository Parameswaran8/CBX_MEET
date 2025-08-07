import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  DashboardIcon,
  EventIcon,
  HomeIcon,
  SettingsIcon,
} from "../Icons/Icons";
import HomeScreen from "../src/Home/HomeScreen";

const Tab = createBottomTabNavigator();

// function HomeScreen() {
//   return (
//     <View style={styles.center}>
//       <Text style={styles.text}>Home Screen</Text>
//     </View>
//   );
// }

function EventsScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Events Screen</Text>
    </View>
  );
}

function DashboardScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Dashboard Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Settings Screen</Text>
    </View>
  );
}

export default function MainNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "#FFFFFF", // white when active
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "Poppins-Medium", // optional, if you're using a custom font
          paddingBottom: 10, // adjust spacing
          paddingTop: 7, // adjust spacing
        },
        tabBarStyle: {
          backgroundColor: "#000", // Black background
          height: 98, // Increased height
          borderTopLeftRadius: 30, // Rounded top left
          borderTopRightRadius: 30, // Rounded top right
          position: "absolute", // Important for rounded effect
          borderTopWidth: 0, // Optional: clean look
          elevation: 5, // Optional: shadow on Android
          shadowColor: "#000", // Optional: shadow on iOS
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
        },
        tabBarIconStyle: {
          marginTop: 12, // Adjust to center icon vertically in increased height
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HOME"
        component={HomeScreen} //HomeScreen
        options={{
          tabBarIcon: ({ color, size }) => (
            <HomeIcon size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="EVENTS"
        component={EventsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <EventIcon size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="DASHBOARD"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <DashboardIcon size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SETTINGS"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SettingsIcon size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, fontWeight: "bold" },
});
