import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import { Colors } from "@/constants/Colors";

interface AmountChipProps {
  amount: number;
  selectedAmount: number;
  onChipPress: (amount: number) => void;
}

const AmountChip = ({
  amount,
  selectedAmount,
  onChipPress,
}: AmountChipProps) => {
  return (
    <TouchableOpacity
      key={amount}
      style={[
        styles.presetButton,
        selectedAmount === amount && styles.presetButtonSelected,
      ]}
      onPress={() => onChipPress(amount)}
    >
      <Text
        style={[
          styles.presetText,
          selectedAmount === amount && styles.presetTextSelected,
        ]}
      >
        S$ {amount.toLocaleString()}
      </Text>
    </TouchableOpacity>
  );
};

export default AmountChip;

const styles = StyleSheet.create({
  presetButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 3,
    backgroundColor: Colors["light"].green100,
    alignItems: "center",
    marginHorizontal: 5,
  },
  presetButtonSelected: {
    backgroundColor: Colors["light"].green200,
  },
  presetText: {
    color: Colors["light"].primary,
    fontWeight: "500",
  },
  presetTextSelected: {
    fontWeight: "700",
  },
});
