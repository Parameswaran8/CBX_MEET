import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import HomeScreen from "../src/Home/HomeScreen";
import SearchScreen from "../src/HomeSupportSrceen/SearchScreen";

// Import your screens

// Define your navigation types (optional but recommended with TypeScript)
export type RootStackParamList = {
  Home: undefined;
  SearchEvent: undefined;
  FAQ: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false, // hide header globally
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SearchEvent" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default RootStackNavigation;

const styles = StyleSheet.create({});
