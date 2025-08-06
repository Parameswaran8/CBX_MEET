import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useData } from "../src/Context/context";
import { CBXMEETLOGO, FAQIcon, LogOutIcon, UserIcon } from "../Icons/Icons";

const { width, height } = Dimensions.get("window");

export default function Sidebar() {
  const { toggleSidebar, setToggleSidebar, setShowLogoutModal } = useData();
  const translateX = useRef(new Animated.Value(-width)).current;
  const overlayOpacity = useRef(new Animated.Value(0)).current;
  const contentOpacity = useRef(new Animated.Value(0)).current;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (toggleSidebar) {
      setVisible(true);
      Animated.parallel([
        Animated.timing(overlayOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(translateX, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(contentOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(contentOpacity, {
          toValue: 0.1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(translateX, {
          toValue: -width,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(overlayOpacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setTimeout(() => setVisible(false), 50);
      });
    }
  }, [toggleSidebar]);

  if (!visible) return null;

  function handleLogout() {
    setToggleSidebar(false);
    setTimeout(() => {
      setShowLogoutModal(true);
    }, 900);
  }

  return (
    <View style={StyleSheet.absoluteFillObject} pointerEvents="box-none">
      <Animated.View
        style={[styles.overlay, { opacity: overlayOpacity }]}
        pointerEvents={toggleSidebar ? "auto" : "none"}
      >
        <Pressable
          style={StyleSheet.absoluteFill}
          onPress={() => setToggleSidebar(false)}
        />
      </Animated.View>

      <Animated.View style={[styles.drawer, { transform: [{ translateX }] }]}>
        <SafeAreaView>
          <Animated.View
            style={[styles.container, { opacity: contentOpacity }]}
          >
            <View style={styles.heading_container}>
              <CBXMEETLOGO color={""} height={40} width={36} />
              <Text style={styles.heading}>CBXMEET</Text>
            </View>

            <View>
              <TouchableOpacity style={styles.option}>
                <View style={styles.icon}>
                  <UserIcon color="" size={20} />
                </View>
                <Text style={styles.optionText}>Profile</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option}>
                <View style={styles.icon}>
                  <FAQIcon color="" size={20} />
                </View>
                <Text style={styles.optionText}>FAQ</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={handleLogout}>
                <View style={styles.icon}>
                  <LogOutIcon color="" size={20} />
                </View>
                <Text style={styles.optionText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </SafeAreaView>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: 1,
  },
  drawer: {
    position: "absolute",
    top: 0,
    left: 0,
    height: height,
    width: width * 0.67,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    zIndex: 2,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 2, height: 0 },
  },
  heading_container: {
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
  },
  container: {
    gap: 40,
  },
  heading: {
    fontSize: 23,
    fontWeight: "bold",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 20,
    backgroundColor: "#F4F5F6",
    marginBottom: 16,
    gap: 10,

    shadowColor: "#d6d8daff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,

    elevation: 4,
  },
  optionText: {
    fontSize: 15,
    fontWeight: "400",
  },
  icon: {
    marginRight: 10,
  },
});
