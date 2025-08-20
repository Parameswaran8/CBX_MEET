import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CBXMEETLOGO, LeftIcon, PointerIcon } from "../../Icons/Icons";

const LogoScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.mainContainer}>
          {/* Header Row */}
          <View style={styles.headerRow}>
            <LeftIcon size={26} color="#040C1A" />
            <Text style={styles.headerText}>CBXMEET</Text>
          </View>

          {/* Center Illustration */}
          <View style={styles.centerImageContainer}>
            <CBXMEETLOGO color={""} height={152} width={169} />
          </View>

          {/* Title & Subtitle */}
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Meeting Scheduler</Text>
            <Text style={styles.subtitleText}>
              Perfect tool for organizing meetings and keeping track of
              important dates.
            </Text>
          </View>

          {/* Features List */}
          <View style={styles.featuresContainer}>
            <View style={styles.featureCard}>
              <View style={styles.featureRow}>
                <View style={styles.featureIcon}>
                  <PointerIcon size={18} color={"#040C1A"} />
                </View>

                <Text style={styles.activeFeatureText}>
                  Quick Event Creation
                </Text>
              </View>

              <View style={[styles.featureRow, styles.Center]}>
                <View style={styles.featureIcon}>
                  <PointerIcon size={18} color={"#21C0F9"} />
                </View>
                <Text style={styles.inactiveFeatureText}>Calendar Syncing</Text>
              </View>

              <View style={styles.featureRow}>
                <View style={styles.featureIcon}>
                  <PointerIcon size={18} color={"#040C1A"} />
                </View>
                <Text style={styles.activeFeatureText}>
                  Smart Notifications & Reminders
                </Text>
              </View>

              <View style={[styles.featureRow, styles.Center]}>
                <View style={styles.featureIcon}>
                  <PointerIcon size={18} color={"#21C0F9"} />
                </View>
                <Text style={styles.inactiveFeatureText}>
                  Participant Management
                </Text>
              </View>

              <View style={styles.featureRow}>
                <View style={styles.featureIcon}>
                  <PointerIcon size={18} color={"#040C1A"} />
                </View>
                <Text style={styles.activeFeatureText}>
                  User Friendly Dashboard
                </Text>
              </View>

              <View style={[styles.featureRow, styles.Center]}>
                <View style={styles.featureIcon}>
                  <PointerIcon size={18} color={"#21C0F9"} />
                </View>
                <Text style={styles.inactiveFeatureText}>
                  Direct Link Share
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  mainContainer: {
    flex: 1,
    backgroundColor: "#F8F8FA",
    borderRadius: 30,
    paddingBottom: 20,
    paddingVertical: 13,
    paddingHorizontal: 10,
  },
  topImage: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 37,
    marginBottom: 17,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 35,
    marginLeft: 14,
  },
  headerIcon: { width: 24, height: 24, marginRight: 14 },
  headerText: { color: "#040C1A", fontSize: 20, fontWeight: "400" },
  centerImageContainer: { alignItems: "center", marginBottom: 26 },
  centerImage: { width: 169, height: 152 },
  titleContainer: {
    alignItems: "center",
    marginBottom: 34,
    paddingHorizontal: 20,
  },
  titleText: {
    color: "#040C1A",
    fontSize: 20,
    marginBottom: 11,
    fontWeight: "400",
  },
  subtitleText: {
    paddingVertical: 5,
    color: "#7A7B93",
    fontSize: 14,
    textAlign: "center",
    width: "60%",
  },
  featuresContainer: {
    backgroundColor: "#FFFFFF",
    marginBottom: 40,
    marginHorizontal: 20,
    justifyContent: "center",
    borderRadius: 20,

    // iOS Shadow
    shadowColor: "#8996AB",
    shadowOffset: { width: 0, height: 6 }, // push shadow downward
    shadowOpacity: 0.15, // lighter shadow
    shadowRadius: 6, // control blur

    // Android Shadow (elevation controls direction too)
    elevation: 8, // keep lower so it's not all sides
    marginTop: 30,
  },
  featureCard: {
    gap: 22,
    borderRadius: 30,
    paddingVertical: 35,
    paddingHorizontal: 60,
  },
  featureRow: { flexDirection: "row" },
  featureIcon: { width: 18, height: 18, marginRight: 12 },
  activeFeatureText: { color: "#040C1A", fontSize: 13, fontWeight: "500" },
  inactiveFeatureText: { color: "#8995AB", fontSize: 13, fontWeight: "500" },
  linearGradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  Center: {
    paddingLeft: 40,
  },
});

export default LogoScreen;
