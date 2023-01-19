import React, { useEffect, useState, useLayoutEffect } from "react";
import {
  ScrollView,
  ActivityIndicator,
  Text,
  View,
  Button,
  TextComponent,
} from "react-native";
import { ListItem } from "react-native-elements";
import { firebase } from "../../../firebase/config";
import { Ionicons } from "@expo/vector-icons";
import { NavigationActions } from "react-navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";

//import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
  HeaderButtons,
  HeaderButton,
  Item,
} from "react-navigation-header-buttons";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../CurrenciesScreen/styles";

export default function AlertScreen({ navigation }) {
  const [alerts, setAlerts] = useState("");

  useEffect(() => {
    setInterval(() => {
      getItems();
    }, 1000);
  }, []);

  async function getItems() {
    try {
      const items = await AsyncStorage.getItem("key");

      if (items !== null) {
        const parseditems = JSON.parse(items);
        setAlerts(parseditems);
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function onDelete() {
    try {
      await AsyncStorage.clear();
      setAlerts("");
    } catch (exception) {
      return false;
    }
  }
  async function logOut() {
    try {
      await firebase.auth().signOut();
      const resetAction = NavigationActions.reset({
        index: 0,
        routes: [{ name: "LogIn" }],
      });
      navigation.dispatch(resetAction);
    } catch (error) {
      console.log(error);
    }
  }
  const IoniconsHeaderButton = (props) => (
    // the `props` here come from <Item ... />
    // you may access them and pass something else to `HeaderButton` if you like
    <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
  );
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="search"
            iconName="ios-add-circle"
            iconSize={30}
            onPress={() => navigation.navigate("CurrencyPairs")}
          />
          <Item
            title="search"
            iconName="ios-log-out"
            iconSize={30}
            onPress={() => logOut()}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView>
      <ListItem>
        <ListItem.Content>
          <ListItem.Title>{alerts}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </ScrollView>
  );
}
