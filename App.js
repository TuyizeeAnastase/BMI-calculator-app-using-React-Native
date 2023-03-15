import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import FormScreen from "./screens/FormScreen";
import { Button, StyleSheet } from "react-native";
import Toast from 'react-native-toast-message';
import { Text } from "react-native-elements";

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  button: {
    marginRight: 40,
    backgroundColor: "#009688",
    color:"white",
    textTransform: "uppercase",
    fontSize: 20,
    borderRadius: 4,
    borderWidth: 2,
    padding:8,
    borderColor: "white",
  },
  title:{
    textTransform: "uppercase"
  }
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#009688",
          },
          headerTintColor: "#fff",
        }}
        initialRouteName="Home"
      >
        <Stack.Screen
          name="BMI calculator APP"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Text
                style={styles.button}
                title="Start"
                onPress={() => navigation.navigate("calucation")}
              >Start</Text>
            ),
          })}
        />
        <Stack.Screen name="calucation" component={FormScreen} />
      </Stack.Navigator>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
}
