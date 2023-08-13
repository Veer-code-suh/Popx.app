import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import img1 from "../Images/Ellipse2x.png";
import img2 from "../Images/Group.png";
const HomeScreen = () => {
  const [userData, setUserData] = useState({ name: "", email: "" });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const savedName = await AsyncStorage.getItem("name");
        const savedEmail = await AsyncStorage.getItem("email");

        setUserData({ name: savedName, email: savedEmail });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    // <View>
    //   <Text>Welcome to the Home Page!</Text>
    //   <Text>Username: {userData.username}</Text>
    //   <Text>Email: {userData.email}</Text>
    // </View>
    <View styles={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Account Settings</Text>
      </View>
      <Image source={img1} style={styles.img1} />
      <Image source={img2} style={styles.img2} />
      <Text style={styles.name}> {userData.name}</Text>
      <Text style={styles.email}> {userData.email}</Text>
      <Text style={styles.text}>
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </Text>
      <View style={styles.line}></View>
      <View style={styles.line1}></View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    top: 0,
    left: 0,
    width: 375,
    height: 812,
    backgroundColor: "#F7F8F9",
  },
  header: {
    top: 20,
    left: 0,
    width: 385,
    height: 68,
    backgroundColor: "#FFFFFF",
  },
  heading: {
    top: 27,
    left: 15,
    width: 146,
    height: 22,
    textAlign: " left",
    fontSize: 18,
    fontWeight: "500",
    letterSpacing: 0,
    color: "#1D2226",
  },
  img1: {
    top: 78,
    left: 20,
    width: 76,
    height: 76,
  },
  img2: {
    top: 55,
    left: 77,
    width: 21,
    height: 23,
  },
  name: {
    left: 116,
    width: 73,
    height: 18,
    fontSize: 15,
    fontWeight: "800",
  },
  email: {
    top: 12,
    left: 116,
    width: 218,
    height: 27,
    fontSize: 14,
    fontWeight: "500",
  },
  text: {
    top: 40,
    left: 20,
    width: 337,
    height: 63,
    textAlign: " left",
    fontSize: 14,
    color: "#1D2226",
  },
  line: {
    top: 87,
    left: 0,
    width: 375,
    height: 0,
    borderWidth: 1,
    borderColor: "#CBCBCB",
    borderStyle: "dashed",
  },
  line1: {
    top: 487,
    left: 0,
    width: 375,
    height: 0,
    borderWidth: 1,
    borderColor: "#CBCBCB",
    borderStyle: "dashed",
  },
});
