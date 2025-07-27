import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Colors } from "@/constants/Colors";

type CardFormModalProps = {
  visible: boolean;
  onSubmit: (cardName: string) => void;
  onCancel: () => void;
};

const CardFormModal = ({ visible, onSubmit, onCancel }: CardFormModalProps) => {
  const [cardName, setCardName] = useState("");

  const handleSubmit = () => {
    onSubmit(cardName);
    setCardName("");
  };

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.modalCard}>
          <Text style={styles.heading}>💳 Add Debit Card</Text>

          <Text style={styles.label}>Cardholder Name</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. John Doe"
            placeholderTextColor={Colors['light']?.greyLevel2}
            value={cardName}
            onChangeText={setCardName}
            maxLength={25}
          />

          <View style={styles.footer}>
            <TouchableOpacity
              disabled={cardName === ""}
              style={[
                styles.button,
                { opacity: cardName !== "" ? 1 : 0.5 },
              ]}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#ccc" }]}
              onPress={() => {
                setCardName("");
                onCancel();
              }}
            >
              <Text style={[styles.buttonText, { color: "#000" }]}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CardFormModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    padding: 20,
  },
  modalCard: {
    backgroundColor: Colors["light"].greyLevel0,
    borderRadius: 14,
    padding: 20,
    elevation: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  footer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    backgroundColor: Colors["light"].purple,
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  buttonText: {
    textAlign: "center",
    color: Colors["light"].greyLevel0,
    fontWeight: "600",
  },
});