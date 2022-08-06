import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import TabNav from "./navigation/TabNav";

export default function App() {
  return (
    <NavigationContainer>
      <TabNav />
    </NavigationContainer>
  );
}
