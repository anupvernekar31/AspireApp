import { StyleSheet, Text, View } from "react-native";
import React from "react";

import CurrencyTag from "./CurrencyTag";
import { Colors } from "@/constants/Colors";

interface Props {
  balance: Number;
}

const BalanceContainer = ({ balance }: Props) => {
  return (
    <>
      <Text style={styles.balanceLabel}>Available balance</Text>
      <View style={styles.balanceContainer}>
        <CurrencyTag />
        <Text style={styles.balanceText}>{balance?.toLocaleString()}</Text>
      </View>
    </>
  );
};

export default BalanceContainer;

const styles = StyleSheet.create({
  balanceLabel: {
    color: Colors["light"].textPrimary,
    marginTop: 30,
  },
  balanceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  balanceText: {
    color: Colors["light"].textPrimary,
    fontSize: 24,
    fontWeight: "bold",
  },
});
