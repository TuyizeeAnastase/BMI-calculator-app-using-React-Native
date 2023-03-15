import { Formik } from "formik";
import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";
import { Text } from "react-native-elements";
import Toast from "react-native-toast-message";

export default function FormScreen() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [bmi, setBmi] = useState();
  const [info, setInfo] = useState();

  function submitHandler() {
    if (!height || !weight) {
      Toast.show({
        type: "error",
        text1: "Height and Weight is required",
        position: "top",
      });
      return;
    }
    let val = (
      [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(1);
    setHeight(null);
    setWeight(null);
    setBmi(val);
    if (val < 18.5) {
      setInfo("Under Weight");
    } else if (val > 18.5 && val <= 24.9) {
      setInfo("Healthy");
    } else if (val > 24.9 && val < 30) {
      setInfo("Overweight");
    } else {
      setInfo("Obese");
    }
  }

  return (
    <Formik onSubmit={submitHandler}>
      <View style={style.container}>
        <Text style={style.label}>Height in cm</Text>
        <TextInput
          placeholder="Please enter height in cm"
          defaultValue={height}
          keyboardType="numeric"
          onChangeText={(newText) => setHeight(newText)}
          style={style.input}
        />
        <Text style={style.label}>Weight in kg</Text>
        <TextInput
          placeholder="Please enter weight in kg"
          defaultValue={weight}
          keyboardType="numeric"
          onChangeText={(newText) => setWeight(newText)}
          style={style.input}
        />
        {/* <Button color="#f194ff" title="Calculate" onPress={submitHandler} /> */}
        <View style={style.appButtonContainer}>
          <Text style={style.appButtonText} onPress={submitHandler}>Submit</Text>
        </View>
        <View style={style.output}>
          <Text style={style.title}>BMI Results</Text>
          <Text style={style.bmi}>{bmi}</Text>
          <Text style={style.bmi}>{info}</Text>
        </View>
      </View>
    </Formik>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 20,
    fontWeight: "100",
    color: "black",
    marginTop: 40,
    marginBottom: 10,
  },
  input: {
    borderRadius: 10,
    borderWidth: 2,
    width: 300,
    height: 50,
    borderColor: "gray",
    paddingLeft: 5,
    marginBottom: 10,
    fontSize: 20,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    marginTop:2,
    textTransform: "uppercase"
  },
  output: {
    marginTop: 20,
    height: 200,
    width: 300,
    padding: 10,
    alignItems: "center",
    backgroundColor: "#009688",
    color: "black",
    borderRadius: 4,
  },
  bmi: {
    fontSize: 20,
    fontWeight: "300",
    color: "#fff",
    fontWeight: "bold",
    padding:10
  },
  title: {
    fontSize: 30,
    textTransform: "uppercase"
  },
});
