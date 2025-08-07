import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from "react-native";
import React from "react";

const BottomDrawer = () => {
  return (
    <View>
      <Text>BottomDrawer</Text>
      <View style={styles.column}>
        <View style={styles.view}>
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/y9MjvDGvUx/sr3h4cgf_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={styles.image}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>{"Today’s Events"}</Text>
          <View style={styles.column2}>
            <View style={styles.column2}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => Alert.alert("Pressed!")}
              >
                <Text style={styles.text2}>{"See Detailed"}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.absoluteColumn}>
              <TouchableOpacity
                style={styles.button2}
                onPress={() => Alert.alert("Pressed!")}
              >
                <Text style={styles.text3}>{"24-04-24"}</Text>
              </TouchableOpacity>
              <Text style={styles.absoluteText}>{"Scheduled Events"}</Text>
            </View>
          </View>
        </View>
        <View style={styles.column3}>
          <TouchableOpacity
            style={styles.buttonRow}
            onPress={() => Alert.alert("Pressed!")}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/y9MjvDGvUx/ptrfmjar_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.image2}
            />
            <Text style={styles.text4}>{"Online Event"}</Text>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/y9MjvDGvUx/y9xqn5yz_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.image3}
            />
            <Text style={styles.text5}>{"Join Now!"}</Text>
          </TouchableOpacity>
          <View style={styles.absoluteRow}>
            <View style={styles.column4}>
              <View style={styles.row2}>
                <Text style={styles.text6}>{"Presentation"}</Text>
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/y9MjvDGvUx/tpm065qq_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image4}
                />
              </View>
              <View style={styles.row3}>
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/y9MjvDGvUx/pdxgfbh6_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image5}
                />
                <Text style={styles.text7}>{"Shivaji Nagar, Mumbai..."}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.button3}
              onPress={() => Alert.alert("Pressed!")}
            >
              <Text style={styles.text8}>{"60 Mins | Wed"}</Text>
            </TouchableOpacity>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/y9MjvDGvUx/crid9zc5_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.image6}
            />
          </View>
          <View style={styles.absoluteRow2}>
            <View style={styles.column4}>
              <View style={styles.row4}>
                <Text style={styles.text6}>{"Product Mark..."}</Text>
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/y9MjvDGvUx/j0ct0z3z_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image4}
                />
              </View>
              <View style={styles.row3}>
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/y9MjvDGvUx/cc5spofv_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image5}
                />
                <Text style={styles.text7}>{"Tulsi Nagar, Mumbai..."}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.button4}
              onPress={() => Alert.alert("Pressed!")}
            >
              <Text style={styles.text8}>{"40 Mins | Tue"}</Text>
            </TouchableOpacity>
            <View style={styles.column2}>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/y9MjvDGvUx/8o1wjual_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={styles.image6}
              />
              <View style={styles.absoluteBox2}></View>
            </View>
          </View>
        </View>
        <View style={styles.column5}>
          <View style={styles.row5}>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/y9MjvDGvUx/46e3lw7l_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.image2}
            />
            <Text style={styles.text4}>{"Online Event"}</Text>
            <ImageBackground
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/y9MjvDGvUx/n15boa23_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.view2}
            >
              <View style={styles.box}></View>
            </ImageBackground>
            <Text style={styles.text9}>{"Join Now!"}</Text>
          </View>
          <View style={styles.absoluteRow3}>
            <View style={styles.column4}>
              <View style={styles.row2}>
                <Text style={styles.text6}>{"Presentation"}</Text>
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/y9MjvDGvUx/imhyjuk4_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image4}
                />
              </View>
              <View style={styles.row3}>
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/y9MjvDGvUx/en4ddi3k_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image5}
                />
                <Text style={styles.text7}>{"Shivaji Nagar, Mumbai..."}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.button3}
              onPress={() => Alert.alert("Pressed!")}
            >
              <Text style={styles.text8}>{"60 Mins | Wed"}</Text>
            </TouchableOpacity>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/y9MjvDGvUx/tqxij26l_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.image6}
            />
          </View>
          <View style={styles.absoluteColumn2}>
            <View style={styles.row6}>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/y9MjvDGvUx/uxfizc8e_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={styles.image7}
              />
              <Text style={styles.text10}>{"Home"}</Text>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/y9MjvDGvUx/rnfgwbrd_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={styles.image8}
              />
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/y9MjvDGvUx/gos40xpe_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={styles.image9}
              />
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/y9MjvDGvUx/m6ou5sfm_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={styles.image10}
              />
            </View>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/y9MjvDGvUx/cx8crdfs_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.image11}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default BottomDrawer;

const styles = StyleSheet.create({
  absoluteBox: {
    position: "absolute",
    bottom: -17,
    right: 4,
    width: 90,
    height: 44,
    borderRadius: 29,
  },
  absoluteBox2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 26,
    height: 26,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
  },
  absoluteColumn: {
    position: "absolute",
    bottom: -8,
    left: -38,
    width: 108,
  },
  absoluteColumn2: {
    position: "absolute",
    bottom: -32,
    right: -21,
    left: -21,
    alignItems: "center",
    backgroundColor: "#040C1A",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 42,
  },
  absoluteRow: {
    position: "absolute",
    top: -8,
    right: -1,
    left: -1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    paddingTop: 10,
    paddingBottom: 12,
    paddingHorizontal: 15,
  },
  absoluteRow2: {
    position: "absolute",
    bottom: -8,
    right: -1,
    left: -1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    paddingTop: 10,
    paddingBottom: 12,
    paddingHorizontal: 15,
  },
  absoluteRow3: {
    position: "absolute",
    top: 1,
    right: -1,
    left: -1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    paddingTop: 10,
    paddingBottom: 12,
    paddingHorizontal: 15,
  },
  absoluteText: {
    position: "absolute",
    top: -15,
    right: 101,
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
  },
  box: {
    width: 26,
    height: 26,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#FFFFFF",
    borderRadius: 168,
    paddingVertical: 16,
    paddingHorizontal: 17,
  },
  button2: {
    alignItems: "center",
    backgroundColor: "#BECCE336",
    borderRadius: 124,
    paddingVertical: 10,
  },
  button3: {
    backgroundColor: "#ECF1FA",
    borderRadius: 23,
    paddingVertical: 7,
    paddingHorizontal: 15,
    marginRight: 6,
  },
  button4: {
    backgroundColor: "#ECF1FA",
    borderRadius: 23,
    paddingVertical: 7,
    paddingHorizontal: 17,
    marginRight: 6,
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4F5F6",
    borderRadius: 31,
    paddingVertical: 47,
    paddingHorizontal: 21,
  },
  column: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingVertical: 29,
    shadowColor: "#646C8A40",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowRadius: 39,
    elevation: 39,
  },
  column2: {
    alignItems: "center",
  },
  column3: {
    marginBottom: 18,
    marginHorizontal: 21,
  },
  column4: {
    flex: 1,
    marginRight: 12,
  },
  column5: {
    marginHorizontal: 21,
  },
  image: {
    width: 8,
    height: 3,
  },
  image2: {
    width: 17,
    height: 22,
    marginRight: 10,
  },
  image3: {
    width: 27,
    height: 27,
    marginRight: 6,
  },
  image4: {
    width: 9,
    height: 3,
  },
  image5: {
    width: 17,
    height: 17,
    marginRight: 2,
  },
  image6: {
    width: 27,
    height: 27,
  },
  image7: {
    width: 24,
    height: 24,
    marginRight: 7,
  },
  image8: {
    width: 23,
    height: 23,
    marginRight: 44,
  },
  image9: {
    width: 24,
    height: 24,
    marginRight: 44,
  },
  image10: {
    width: 23,
    height: 23,
  },
  image11: {
    width: 131,
    height: 1,
    marginBottom: 14,
  },
  row: {
    flexDirection: "row",
    marginBottom: 17,
    marginLeft: 63,
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 1,
    marginLeft: 4,
  },
  row3: {
    flexDirection: "row",
    alignItems: "center",
  },
  row4: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 1,
    marginHorizontal: 5,
  },
  row5: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4F5F6",
    borderRadius: 31,
    paddingVertical: 45,
    paddingHorizontal: 21,
  },
  row6: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 35,
  },
  text: {
    color: "#040C1A",
    fontSize: 16,
    marginTop: 22,
    marginRight: 48,
  },
  text2: {
    color: "#040C1A",
    fontSize: 12,
  },
  text3: {
    color: "#040C1A",
    fontSize: 12,
    fontWeight: "bold",
  },
  text4: {
    color: "#040C1A",
    fontSize: 14,
    flex: 1,
  },
  text5: {
    color: "#0045FF",
    fontSize: 14,
    fontWeight: "bold",
  },
  text6: {
    color: "#040C1A",
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
  },
  text7: {
    color: "#768297",
    fontSize: 10,
    fontWeight: "bold",
    flex: 1,
  },
  text8: {
    color: "#040C1A",
    fontSize: 10,
    fontWeight: "bold",
  },
  text9: {
    color: "#9DA1AB",
    fontSize: 14,
    fontWeight: "bold",
  },
  text10: {
    color: "#FFFFFF",
    fontSize: 14,
    flex: 1,
  },
  view: {
    alignItems: "center",
    marginBottom: 5,
  },
  view2: {
    alignItems: "center",
    paddingBottom: 1,
    marginRight: 6,
  },
});
