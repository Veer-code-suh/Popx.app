import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const savedEmail = await AsyncStorage.getItem("email");
      const savedPassword = await AsyncStorage.getItem("password");

      if (email === savedEmail && password === savedPassword) {
        // Successful login
        Alert.alert("Success", "Logged in successfully");
      } else {
        Alert.alert("Error", "Invalid credentials");
      }
      navigation.navigate("Home");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Signin to your PopX account</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, excepturi.
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email address</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          placeholder="Enter email address"
          value={email}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.btn1} onPress={handleLogin}>
        <Text style={styles.btntxt1}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

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
    top: 50,
    left: 20,
    width: 188,
    height: 69,
    textAlign: "left",
    marginBottom: 80,
    fontSize: 28,
    fontWeight: "500",
    letterSpacing: 0,
    color: "#1D2226",
    opacity: 1,
  },
  text: {
    left: 20,
    width: 232,
    height: 48,
    fontSize: 18,
    marginBottom: 25,
    color: "#1d2226",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 30,
    position: "relative",
  },
  label: {
    left: 20,
    position: "absolute",
    padding: 2,
    color: "#6C25FF",
    backgroundColor: "white",
    top: -12,
    zIndex: 1,
    opacity: 1,
    fontSize: 13,
    borderRadius: 7,
    fontWeight: "500",
  },
  input: {
    width: "100%",
    height: 40,
    padding: 10,
    position: "relative",
    opacity: 0.8,
    borderWidth: 1,
    borderColor: "#CBCBCB",
    borderRadius: 6,
  },
  star: {
    color: "red",
  },
  btn1: {
    // top: 170,
    width: "100%",
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
});
