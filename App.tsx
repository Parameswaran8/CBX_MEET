import React, { useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./Navigations/BottomNavigations";
import { AppContextProvider, useData } from "./src/Context/context";
import Sidebar from "./Navigations/Sidebar";
import Onboarding from "./src/Feature/FeatureMain";

export default function App() {
  return (
    <AppContextProvider>
      <NavigationContainer>
        {/* <Onboarding /> */}
        <MainNavigation />
        <Sidebar />
      </NavigationContainer>
    </AppContextProvider>
  );
}
