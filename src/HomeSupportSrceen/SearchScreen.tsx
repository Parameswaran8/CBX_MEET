import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";

export default function SearchScreen() {
  const [clientName, setClientName] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/y9MjvDGvUx/nmw9ce9d_expires_30_days.png",
            }}
            style={styles.headerIcon}
          />
          <Text style={styles.headerText}>Search</Text>
        </View>

        {/* Search Box */}
        <View style={styles.searchContainer}>
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/y9MjvDGvUx/4dj5qqu1_expires_30_days.png",
            }}
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Client Name"
            value={clientName}
            onChangeText={setClientName}
            style={styles.searchInput}
          />
        </View>

        {/* Hint Section */}
        <View style={styles.hintContainer}>
          <View style={styles.hintImageContainer}>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/y9MjvDGvUx/m8ihfhk7_expires_30_days.png",
              }}
              style={styles.hintImage}
            />
          </View>
          <View style={styles.hintTextContainer}>
            <Text style={styles.hintText}>
              You can search Client / Event / Company Name, Start Date, End Date
            </Text>
          </View>
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
  contentContainer: {
    flex: 1,
    backgroundColor: "#F8F8FA",
    borderRadius: 30,
  },
  topImage: {
    borderRadius: 30,
    height: 37,
    marginBottom: 17,
    width: "100%",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 17,
    marginLeft: 14,
  },
  headerIcon: {
    width: 24,
    height: 24,
    marginRight: 14,
  },
  headerText: {
    color: "#040C1A",
    fontSize: 20,
    fontWeight: "600",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 999,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 12,
    marginHorizontal: 23,
  },
  searchIcon: {
    width: 18,
    height: 18,
    marginRight: 7,
  },
  searchInput: {
    color: "#040C1A",
    fontSize: 14,
    flex: 1,
  },
  hintContainer: {
    marginTop: "auto",
    marginHorizontal: 23,
    marginBottom: 30,
  },
  hintImageContainer: {
    alignItems: "flex-end",
    marginBottom: 8,
  },
  hintImage: {
    width: 47,
    height: 9,
    marginRight: 29,
  },
  hintTextContainer: {
    backgroundColor: "#040C1A",
    borderRadius: 999,
    paddingVertical: 13,
    paddingHorizontal: 20,
  },
  hintText: {
    color: "#FFFFFF",
    fontSize: 12,
    textAlign: "center",
  },
});
