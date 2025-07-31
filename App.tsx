import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./Navigations/BottomNavigations";
import { AppProvider } from "./src/Context/context";

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </AppProvider>
  );
}
