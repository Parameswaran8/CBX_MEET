import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./Navigations/BottomNavigations";
import { AppContextProvider } from "./src/Context/context";
import Sidebar from "./Navigations/Sidebar";
import Onboarding from "./src/Feature/FeatureMain";
import BottomDrawer from "./src/Home/BottomDrawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppContextProvider>
        <NavigationContainer>
          {/* <Onboarding /> */}
          <MainNavigation />
          <Sidebar />
          <BottomDrawer />
        </NavigationContainer>
      </AppContextProvider>
    </GestureHandlerRootView>
  );
}
