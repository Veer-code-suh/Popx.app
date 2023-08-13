import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [cname, setcName] = useState("");

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSignup = async () => {
    try {
      await AsyncStorage.setItem("name", name);
      await AsyncStorage.setItem("email", email);
      await AsyncStorage.setItem("password", password);
      await AsyncStorage.setItem("mobile", mobile);
      await AsyncStorage.setItem("cname", cname);

      navigation.navigate("Login");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const RadioButton = ({ label, selected, onSelect }) => (
    <TouchableOpacity onPress={onSelect} style={styles.radioButton}>
      <View
        style={[
          styles.radioButtonIcon,
          { backgroundColor: selected ? "blue" : "white" },
        ]}
      />
      <Text>{label}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create your PopX account</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>
          Full Name <Text style={styles.star}> *</Text>
        </Text>
        <TextInput style={styles.input} onChangeText={setName} value={name} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>
          Phone Number<Text style={styles.star}> *</Text>
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={setMobile}
          value={mobile}
          keyboardType="phone-pad"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>
          Email address<Text style={styles.star}> *</Text>
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>
          Password <Text style={styles.star}> *</Text>
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>
          Company Name <Text style={styles.star}> *</Text>
        </Text>
        <TextInput style={styles.input} onChangeText={setcName} value={cname} />
      </View>
      <Text style={styles.stext}>
        Are you an Agency? <Text style={styles.star}> *</Text>
      </Text>
      <View style={styles.radioout}>
        <RadioButton
          label="Yes"
          selected={selectedOption === "yes"}
          onSelect={() => setSelectedOption("yes")}
        />
        <RadioButton
          label="No"
          selected={selectedOption === "no"}
          onSelect={() => setSelectedOption("no")}
        />
      </View>

      <TouchableOpacity style={styles.btn1} onPress={handleSignup}>
        <Text style={styles.btntxt1}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

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
    fontWeight: "400",
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
    top: 170,
    width: "100%",
    height: 46,
    backgroundColor: "#6C25FF",
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
  radioout: {
    flexDirection: "row",
  },
  radioButton: {
    flexDirection: "row",
    marginBottom: 10,
    marginLeft: 20,
  },
  radioButtonIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "blue",
    marginRight: 10,
  },
  stext: {
    fontSize: 13,
    marginBottom: 20,
    marginLeft: 20,
  },
});

export default SignupScreen;
