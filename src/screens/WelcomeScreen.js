import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.blank}></View>
      <Text style={styles.heading}>Welcome to PopX</Text>
      <Text style={styles.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing.
      </Text>
      <TouchableOpacity
        style={styles.btn1}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.btntxt1}>Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn2}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.btntxt2}>Already Registerd ? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    height: 812,
    width: 375,
    padding: 10,
    opacity: 1,
    backgroundColor: "#F7F8F9",
  },
  heading: {
    top: 549,
    left: 20,
    width: 231,
    height: 33,
    textAlign: "left",
    fontSize: 28,
    fontWeight: "500",
    color: "#1D2226",
    opacity: 1,
  },
  text: {
    top: 572,
    left: 20,
    width: 232,
    height: 48,
    textAlign: "left",
    fontSize: 18,
    letterSpacing: 0,
    color: "#1D2226",
    opacity: 0.6,
  },
  btn1: {
    top: 600,
    left: 20,
    width: 335,
    height: 46,
    backgroundColor: "#6C25FF",
    borderRadius: 6,
    opacity: 1,
  },
  btn2: {
    top: 610,
    left: 20,
    width: 335,
    height: 46,
    backgroundColor: "#CBCBCB",
    borderRadius: 6,
    opacity: 1,
  },
  btntxt1: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 0,
    color: "white",
    opacity: 1,
  },
  btntxt2: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 0,
    color: "#1D2226",
    opacity: 1,
  },
});
