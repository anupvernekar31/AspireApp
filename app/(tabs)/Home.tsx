import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Modal,
  SafeAreaView,
  Text,
  TextInput,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import uuid from "react-native-uuid";
import { useRouter } from "expo-router";

import { Colors } from "@/constants/Colors";
import { addCard } from "@/store/slices/cardSlice";
import CardFormModal from "@/components/CardFormModal";

const HomeScreen = () => {
  // hooks
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddCard = (cardName: string) => {
    const newCard = {
      id: uuid.v4(),
      name: cardName,
      isFrozen: false,
      isSpendingLimitSet: false,
      spendingLimit: 0,
      number: generateCardNumber(),
      balance: generateBalance(),
      expiry: generateExpiryDate(),
      cvv: generateRandomCVV(),
    };

    dispatch(addCard(newCard));
    setModalVisible(false);
    router.push("/(tabs)");
  };

  const generateCardNumber = () => {
    let number = "";
    for (let i = 0; i < 16; i++) {
      number += Math.floor(Math.random() * 10);
    }
    return number;
  };
  const generateRandomCVV = () =>
    Math.floor(100 + Math.random() * 900).toString();

  const generateExpiryDate = () => {
    const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0");
    const year = new Date().getFullYear();
    const randomYear = String(Math.floor(Math.random() * 5) + (year % 100));
    return `${month}/${randomYear}`;
  };

  const generateBalance = () =>
    Math.floor(Math.random() * (10000 - 5000)) + 5000;

  const [modalVisible, setModalVisible] = useState(false);
  const [cardName, setCardName] = useState("");

  return (
    <SafeAreaView style={styles.safeArea}>
      <CardFormModal
        visible={modalVisible}
        onSubmit={handleAddCard}
        onCancel={() => setModalVisible(false)}
      />
      <View style={styles.addContainer}>
        <Image
          tintColor={Colors["light"].primary}
          source={require("../../assets/images/AspireLogo.png")}
          style={{ height: 70, width: 250 }}
        />
        <TouchableOpacity
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          onPress={() => setModalVisible(true)}
        >
          <Ionicons name={"add-circle"} size={30} color={"#01D167"} />
          <Text style={{ color: Colors["light"].primary }}>Add Card</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors["light"].secondary,
  },
  addContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 90,
  },
  card: {
    height: 10,
    width: 30,
    margin: 30,
    backgroundColor: Colors["light"].primary,
    borderRadius: "100%",
  },
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
