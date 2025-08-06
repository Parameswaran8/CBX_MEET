import React from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from "react-native";

export default function OnboardingScreen() {
  const handleSkip = () => {
    Alert.alert("Skipped!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image
          source={{
            uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/y9MjvDGvUx/lj5uvjlh_expires_30_days.png",
          }}
          resizeMode="stretch"
          style={styles.headerImage}
          accessibilityLabel="Top Banner"
        />

        <View style={styles.skipButtonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSkip}>
            <Text style={styles.buttonText}>Skip</Text>
          </TouchableOpacity>
        </View>

        <Image
          source={{
            uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/y9MjvDGvUx/ex1h554h_expires_30_days.png",
          }}
          resizeMode="stretch"
          style={styles.mainIllustration}
          accessibilityLabel="Main Illustration"
        />

        <Text style={styles.titleText}>Quick Meeting Setup</Text>

        <View style={styles.progressContainer}>
          <View style={styles.progressBarRow}>
            <View style={styles.progressActive} />
            <View style={styles.progressInactive} />
            <View style={styles.progressInactiveAlt} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
    backgroundColor: "#142F5A",
    borderRadius: 30,
    paddingVertical: 24,
    paddingHorizontal: 20,
  },
  headerImage: {
    borderRadius: 30,
    height: 37,
    marginBottom: 24,
  },
  skipButtonContainer: {
    alignItems: "flex-end",
    marginBottom: 88,
  },
  button: {
    backgroundColor: "#040C1A",
    borderRadius: 43,
    paddingVertical: 10,
    paddingHorizontal: 21,
    marginRight: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  mainIllustration: {
    borderRadius: 30,
    width: 222,
    height: 164,
    alignSelf: "center",
    marginBottom: 118,
  },
  titleText: {
    color: "#FFFFFF",
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 48,
    marginHorizontal: 26,
  },
  progressContainer: {
    alignItems: "center",
    marginBottom: 80,
  },
  progressBarRow: {
    flexDirection: "row",
    paddingRight: 1,
  },
  progressActive: {
    width: 72,
    height: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    marginRight: 13,
  },
  progressInactive: {
    width: 72,
    height: 5,
    backgroundColor: "#040C1A3B",
    borderRadius: 25,
    marginRight: 13,
  },
  progressInactiveAlt: {
    width: 71,
    height: 5,
    backgroundColor: "#040C1A3B",
    borderRadius: 25,
  },
});
