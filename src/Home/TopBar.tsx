import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { BurgerIcon, CBXMEETLOGO, SearchIcon } from "../../Icons/Icons";
import { useNavigation } from "@react-navigation/native";

import { Dispatch, SetStateAction } from "react";
import { useData } from "../Context/context";

interface PropsForTopBar {
  active: Dispatch<SetStateAction<boolean>>;
}

const TopBar: React.FC<PropsForTopBar> = ({ active }) => {
  const { setToggleSidebar } = useData();
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <View style={styles.row}>
        <TouchableOpacity>
          <CBXMEETLOGO color={""} height={40} width={36} />
        </TouchableOpacity>
        <View style={styles.column}>
          <Text style={styles.header}>{"Welcome, Aashish!"}</Text>
          <Text style={styles.subheader}>{"Let's plan your next event."}</Text>
        </View>

        <View style={styles.top_operations}>
          <TouchableOpacity onPress={() => navigation.navigate("SearchEvent")}>
            <SearchIcon size={26} color={""} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setToggleSidebar(true)}>
            <BurgerIcon size={28} color={""} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  Container: {
    marginBottom: 9,
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    // Shadow for Android
    elevation: 4,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
    paddingHorizontal: 18,
    gap: 15,

    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    // Shadow for Android
    elevation: 20,
  },
  column: {
    flex: 1,
    marginRight: 12,
  },
  header: {
    color: "#040C1A",
    fontSize: 20,
    fontWeight: "bold",
  },
  subheader: {
    color: "#7C7C87",
    fontSize: 12,
  },
  top_operations: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
});
