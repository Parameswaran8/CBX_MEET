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

const SignUpScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContent}>
        <Image
          source={{
            uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/y9MjvDGvUx/nngmoitw_expires_30_days.png",
          }}
          resizeMode="stretch"
          style={styles.topImage}
        />

        <View style={styles.headerTextContainer}>
          <Text style={styles.titleText}>{"Oops ! "}</Text>
          <Text style={styles.subtitleText}>
            {"It looks like you don't have account."}
          </Text>
        </View>

        <View style={styles.googleSignUpContainer}>
          <TouchableOpacity
            style={styles.googleButton}
            onPress={() => Alert.alert("Pressed!")}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/y9MjvDGvUx/zi3c430z_expires_30_days.png",
              }}
              resizeMode="stretch"
              style={styles.googleButtonImage}
            />
            <Text style={styles.googleButtonText}>{"Sign up with Google"}</Text>
          </TouchableOpacity>

          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={["#D9D9D900", "#BDBDD48F"]}
            style={styles.linearGradient}
          />
        </View>

        <View style={styles.manualSignUpContainer}>
          <Text style={styles.orText}>{"Or"}</Text>
          <TouchableOpacity
            style={styles.manualSignUpButton}
            onPress={() => Alert.alert("Pressed!")}
          >
            <Text style={styles.manualSignUpText}>
              {"Create Account Manually "}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerLayer1} />
        <View style={styles.footerLayer2} />
        <View style={styles.footerLayer3} />
        <View style={styles.footerLayer4} />
        <View style={styles.footerLayer5} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  mainContent: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    borderRadius: 30,
  },
  topImage: {
    borderRadius: 30,
    width: 24,
    height: 24,
    marginTop: 58,
    marginBottom: 47,
    marginLeft: 20,
  },
  headerTextContainer: {
    paddingBottom: 32,
    marginHorizontal: 20,
  },
  titleText: {
    color: "#040C1A",
    fontSize: 32,
    textAlign: "center",
    marginBottom: 7,
  },
  subtitleText: {
    color: "#747D8C",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  googleSignUpContainer: {
    marginHorizontal: 20,
  },
  googleButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 229,
    paddingVertical: 26,
  },
  googleButtonImage: {
    borderRadius: 229,
    width: 44,
    height: 44,
    marginRight: 6,
  },
  googleButtonText: {
    color: "#03328F",
    fontSize: 18,
    fontWeight: "bold",
  },
  linearGradient: {
    position: "absolute",
    bottom: -32,
    right: 24,
    left: 24,
    height: 75,
    borderRadius: 29,
  },
  manualSignUpContainer: {
    marginBottom: 65,
    marginHorizontal: 22,
  },
  orText: {
    color: "#000000",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 21,
  },
  manualSignUpButton: {
    alignItems: "center",
    borderColor: "#D6ECF4",
    borderRadius: 81,
    borderWidth: 1,
    paddingVertical: 18,
    marginHorizontal: 1,
  },
  manualSignUpText: {
    color: "#040C1A",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerLayer1: {
    height: 53,
    backgroundColor: "#ECEEF147",
  },
  footerLayer2: {
    height: 51,
    backgroundColor: "#DCE3EC66",
  },
  footerLayer3: {
    height: 60,
    backgroundColor: "#BFCADB85",
  },
  footerLayer4: {
    height: 57,
    backgroundColor: "#829AC175",
  },
  footerLayer5: {
    height: 52,
    backgroundColor: "#375E9D66",
  },
});

export default SignUpScreen;
