import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { BackIcon, GoogleIcon } from "../../Icons/Icons";

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Section - Back Button */}
      <View style={styles.topBar}>
        <BackIcon size={24} color="black" />
      </View>

      {/* Middle Section */}
      <View style={styles.middleSection}>
        <View style={styles.titleContainer}>
          <Text style={styles.welcomeTitle}>Welcome Back!</Text>
          <Text style={styles.welcomeSubtitle}>Glad to see you here!</Text>
        </View>

        <TouchableOpacity
          style={styles.googleButton}
          onPress={() => Alert.alert("Pressed!")}
        >
          <View style={styles.googleIcon}>
            <GoogleIcon size={48} />
          </View>
          <Text style={styles.googleButtonText}>Sign in with Google</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomStripeContainer}>
        <View style={[styles.bottomStripe, { backgroundColor: "#ECEEF147" }]} />
        <View style={[styles.bottomStripe, { backgroundColor: "#DCE3EC66" }]} />
        <View style={[styles.bottomStripe, { backgroundColor: "#BFCADB85" }]} />
        <View style={[styles.bottomStripe, { backgroundColor: "#829AC175" }]} />
        <View style={[styles.bottomStripe, { backgroundColor: "#375E9D66" }]} />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
  },
  topBar: {
    paddingTop: 20,
    paddingLeft: 20,
  },
  middleSection: {
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    marginBottom: 30,
  },
  welcomeTitle: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#040C1A",
    marginBottom: 7,
  },
  welcomeSubtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#747D8C",
    textAlign: "center",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 20,
    elevation: 3,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  googleIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  googleButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#03328F",
  },
  bottomStripeContainer: {
    width: "100%",
  },
  bottomStripe: {
    height: 50,
  },
});
