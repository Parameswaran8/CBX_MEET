import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Alert,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default function RegisterScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={{
            uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/y9MjvDGvUx/wdp3qa45_expires_30_days.png",
          }}
          resizeMode="stretch"
          style={styles.topImage}
        />
        <Text style={styles.titleText}>Hello ! Register to get started.</Text>

        <View style={styles.inputSection}>
          <View style={styles.inputWrapper}>
            <View style={styles.inputContainer}>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/y9MjvDGvUx/ip70yqi8_expires_30_days.png",
                }}
                resizeMode="stretch"
                style={styles.inputIcon}
              />
              <Text style={styles.inputPlaceholder}>Username</Text>
            </View>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={["#D9D9D900", "#BDBDD48F"]}
              style={styles.inputGradient}
            />
          </View>

          <View style={styles.inputWrapper}>
            <View style={styles.inputContainer}>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/y9MjvDGvUx/keqmqshk_expires_30_days.png",
                }}
                resizeMode="stretch"
                style={styles.inputIcon}
              />
              <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                style={styles.inputText}
                secureTextEntry
              />
            </View>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={["#D9D9D900", "#BDBDD48F"]}
              style={styles.inputGradient}
            />
          </View>

          <View style={styles.inputWrapper}>
            <View style={styles.inputContainer}>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/y9MjvDGvUx/btorhr4o_expires_30_days.png",
                }}
                resizeMode="stretch"
                style={styles.inputIcon}
              />
              <TextInput
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                style={styles.inputText}
                secureTextEntry
              />
            </View>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={["#D9D9D900", "#BDBDD48F"]}
              style={styles.inputGradient}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.createAccountButton}
            onPress={() => Alert.alert("Pressed!")}
          >
            <Text style={styles.createAccountText}>Create Account</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.orContainer}>
          <Text style={styles.orText}>Or</Text>
        </View>

        <View style={styles.googleButtonContainer}>
          <TouchableOpacity
            style={styles.googleButton}
            onPress={() => Alert.alert("Pressed!")}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/y9MjvDGvUx/yarcqbln_expires_30_days.png",
              }}
              resizeMode="stretch"
              style={styles.googleIcon}
            />
            <Text style={styles.googleButtonText}>Sign up with Google</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signInContainer}>
          <Text style={styles.signInText}>Have an account ? Sign In</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  innerContainer: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    borderRadius: 30,
  },
  topImage: {
    borderRadius: 30,
    width: 24,
    height: 24,
    marginTop: 58,
    marginBottom: 30,
    marginLeft: 20,
  },
  titleText: {
    color: "#040C1A",
    fontSize: 20,
    marginBottom: 31,
    marginLeft: 29,
    width: 208,
  },
  inputSection: {
    paddingBottom: 30,
    marginBottom: 16,
    marginHorizontal: 13,
  },
  inputWrapper: {
    marginBottom: 22,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingVertical: 18,
    paddingLeft: 53,
    paddingRight: 10,
  },
  inputIcon: {
    width: 16,
    height: 16,
    marginRight: 10,
  },
  inputPlaceholder: {
    color: "#74748C",
    fontSize: 14,
  },
  inputText: {
    color: "#74748C",
    fontSize: 14,
    flex: 1,
    paddingVertical: 1,
  },
  inputGradient: {
    position: "absolute",
    bottom: -37,
    right: 41,
    left: 41,
    height: 56,
    borderRadius: 29,
  },
  buttonContainer: {
    alignItems: "center",
    marginBottom: 21,
  },
  createAccountButton: {
    backgroundColor: "#334155",
    borderRadius: 81,
    paddingVertical: 18,
    paddingHorizontal: 63,
  },
  createAccountText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  orContainer: {
    alignItems: "center",
    marginBottom: 14,
  },
  orText: {
    color: "#000000",
    fontSize: 14,
    fontWeight: "bold",
  },
  googleButtonContainer: {
    alignItems: "center",
    marginBottom: 82,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#D6EBF3",
    borderRadius: 229,
    borderWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 41,
  },
  googleIcon: {
    borderRadius: 229,
    width: 25,
    height: 25,
    marginRight: 6,
  },
  googleButtonText: {
    color: "#040C1A",
    fontSize: 14,
  },
  signInContainer: {
    alignItems: "center",
    marginBottom: 29,
  },
  signInText: {
    color: "#040C1A",
    fontSize: 14,
  },
});
