import React, { useState } from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomIcon, LeftIcon, SearchIcon } from "../../Icons/Icons";

export default function SearchScreen() {
  const [clientName, setClientName] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <LeftIcon size={26} color="#040C1A" />
          <Text style={styles.headerText}>Search</Text>
        </View>

        {/* Search Box */}
        <View style={styles.searchContainer}>
          <View style={styles.searchIcon}>
            <SearchIcon size={18} color="#040C1A" />
          </View>
          <TextInput
            placeholder="Client Name"
            value={clientName}
            onChangeText={setClientName}
            style={styles.searchInput}
          />
        </View>

        {/* Hint Section */}
        <View style={styles.hintContainer}>
          <View style={styles.hintImage}>
            <CustomIcon size={47} color="#040C1A" />
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
    paddingVertical: 13,
    paddingHorizontal: 10,
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
    fontWeight: "400",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 999,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginHorizontal: 23,
  },

  searchIcon: {
    paddingLeft: 10,
    paddingRight: 5,
  },

  searchInput: {
    color: "#040C1A",
    fontSize: 15,
    flex: 1,
  },
  hintContainer: {
    marginHorizontal: 23,
    marginBottom: 30,
  },
  hintImage: {
    height: 19,
    marginRight: 29,
    alignItems: "flex-end",
    marginBottom: 8,
  },
  hintTextContainer: {
    backgroundColor: "#040C1A",
    borderRadius: 999,
    paddingVertical: 13,
    paddingHorizontal: 30,
  },
  hintText: {
    color: "#FFFFFF",
    fontSize: 14,
    textAlign: "center",
  },
});
