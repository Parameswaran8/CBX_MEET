import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
  Modal,
} from "react-native";
import { AlertActionIcon } from "../../Icons/Icons";

const { width } = Dimensions.get("window");

interface LogOutModalProps {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const LogOutModal: React.FC<LogOutModalProps> = ({
  visible,
  onConfirm,
  onCancel,
}) => {
  const [showModal, setShowModal] = useState(visible);
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    if (visible) {
      setShowModal(true);
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.spring(scale, {
          toValue: 1,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 0.8,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setShowModal(false); // Actually hide modal after animation
      });
    }
  }, [visible]);

  const handleClose = (action: () => void) => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 0.9,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setShowModal(false);
      action(); // Then call action
    });
  };

  if (!showModal) return null;

  return (
    <Modal
      transparent
      visible={showModal}
      animationType="none"
      statusBarTranslucent
    >
      <Animated.View style={[styles.modalOverlay, { opacity }]}>
        <Animated.View
          style={[styles.modalContainer, { transform: [{ scale }] }]}
        >
          <View style={styles.modalContent}>
            {/* Alert Icon */}
            <View style={styles.alertIconContainer}>
              <View style={styles.alertIcon}>
                <AlertActionIcon color="" size={23} />
              </View>
            </View>

            {/* Message */}
            <Text style={styles.modalTitle}>
              Are you sure you want to Log Out?
            </Text>

            {/* Buttons */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => handleClose(onCancel)}
              >
                <Text style={styles.cancelButtonText}>No</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalButton, styles.confirmButton]}
                onPress={() => handleClose(onConfirm)}
              >
                <Text style={styles.confirmButtonText}>Yes !</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: width * 0.8,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
  modalContent: {
    alignItems: "center",
    padding: 10,
  },
  alertIconContainer: {
    marginBottom: 20,
  },
  alertIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#F4F5F6",
    justifyContent: "center",
    alignItems: "center",
  },
  alertIconText: {
    fontSize: 30,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 30,
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 15,
    width: "100%",
  },
  modalButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "#F4F5F6",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  confirmButton: {
    backgroundColor: "black",
  },
  cancelButtonText: {
    color: "#666",
    fontSize: 16,
    fontWeight: "500",
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default LogOutModal;
