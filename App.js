import React from "react";
import MainStackNavigation from "./src/Navigation/MainNavigator";
import { YellowBox, LogBox } from "react-native";
import { CurrencyProvider } from "./src/context/Context";
import { OverflowMenuProvider } from "react-navigation-header-buttons";

YellowBox.ignoreWarnings(["Setting a timer"]);
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <OverflowMenuProvider>
      <CurrencyProvider>
        <MainStackNavigation />
      </CurrencyProvider>
    </OverflowMenuProvider>
  );
};

export default App;
