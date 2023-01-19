import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { firebase } from '../firebase/config'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LogInScreen from './screens/LoginScreen/LogInScreen'
import CurrenciesScreen from './screens/CurrenciesScreen/CurrenciesScreen'
import RegistrationScreen from '../Navigation/screens/RegistrationScreen/RegistrationScreen'
import AlertScreen from '../Navigation/screens/AlertScreen/AlertScreen'
import { CurrencyContext } from '../context/Context';



const Stack = createStackNavigator();

export default function MainStackNavigation(){

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setLoading(false)
      }
    });
  }, []);

  if (loading) {
    return (
      <></>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        { user ? (
          <>
          <Stack.Screen name="MyAlerts">
            {props => <AlertScreen {...props} extraData={user}/>}
          </Stack.Screen>
         <Stack.Screen name="CurrencyPairs" component={CurrenciesScreen}/>
</>
        ) : (
          <>
            <Stack.Screen name="LogIn" component={LogInScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
