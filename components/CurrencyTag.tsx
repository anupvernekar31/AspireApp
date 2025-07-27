import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Colors } from "@/constants/Colors";

const CurrencyTag = () => {
  return (
    <View style={styles.currencyTag}>
      <Text style={styles.currencyText}>S$</Text>
    </View>
  );
};

export default CurrencyTag;

const styles = StyleSheet.create({
  currencyTag: {
    backgroundColor: Colors["light"].primary,
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 5,
    marginRight: 10,
  },
  currencyText: {
    color: Colors["light"].greyLevel0,
    fontWeight: "bold",
  },
});
