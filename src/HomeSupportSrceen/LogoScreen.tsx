import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";

const LogoScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.mainContainer}>
          {/* Header Row */}
          <View style={styles.headerRow}>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/y9MjvDGvUx/irzrvgy6_expires_30_days.png",
              }}
              resizeMode="contain"
              style={styles.headerIcon}
            />
            <Text style={styles.headerText}>CBXMEET</Text>
          </View>

          {/* Center Illustration */}
          <View style={styles.centerImageContainer}>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/y9MjvDGvUx/chmgc20w_expires_30_days.png",
              }}
              resizeMode="contain"
              style={styles.centerImage}
            />
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
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/y9MjvDGvUx/297pq6an_expires_30_days.png",
                  }}
                  resizeMode="contain"
                  style={styles.featureIcon}
                />
                <Text style={styles.activeFeatureText}>
                  Quick Event Creation
                </Text>
              </View>

              <View style={styles.featureRow}>
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/y9MjvDGvUx/y9vw3bvq_expires_30_days.png",
                  }}
                  resizeMode="contain"
                  style={styles.featureIcon}
                />
                <Text style={styles.inactiveFeatureText}>Calendar Syncing</Text>
              </View>

              <View style={styles.featureRow}>
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/y9MjvDGvUx/rc38vo1e_expires_30_days.png",
                  }}
                  resizeMode="contain"
                  style={styles.featureIcon}
                />
                <Text style={styles.activeFeatureText}>
                  Smart Notifications & Reminders
                </Text>
              </View>

              <View style={styles.featureRow}>
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/y9MjvDGvUx/ytnessce_expires_30_days.png",
                  }}
                  resizeMode="contain"
                  style={styles.featureIcon}
                />
                <Text style={styles.inactiveFeatureText}>
                  Participant Management
                </Text>
              </View>

              <View style={styles.featureRow}>
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/y9MjvDGvUx/n28zv5wq_expires_30_days.png",
                  }}
                  resizeMode="contain"
                  style={styles.featureIcon}
                />
                <Text style={styles.activeFeatureText}>
                  User Friendly Dashboard
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
  headerText: { color: "#040C1A", fontSize: 20, fontWeight: "600" },
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
    fontWeight: "600",
  },
  subtitleText: { color: "#7A7B93", fontSize: 14, textAlign: "center" },
  featuresContainer: { marginBottom: 40, marginHorizontal: 20 },
  featureCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  featureRow: { flexDirection: "row", alignItems: "center", marginBottom: 19 },
  featureIcon: { width: 18, height: 18, marginRight: 12 },
  activeFeatureText: { color: "#040C1A", fontSize: 13, fontWeight: "bold" },
  inactiveFeatureText: { color: "#8995AB", fontSize: 13, fontWeight: "bold" },
  linearGradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
});

export default LogoScreen;
