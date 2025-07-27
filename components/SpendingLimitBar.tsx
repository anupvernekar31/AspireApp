import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  current: number;
  max: number;
}

const SpendingLimitBar: React.FC<Props> = ({ current, max }) => {
  const percentage = Math.min(current / max, 1);
  const filledWidth = `${percentage * 100}%`;

  return (
    <View style={styles.container}>
      <View style={styles.labelRow}>
        <Text style={styles.label}>Debit card spending limit</Text>
        <Text style={styles.amounts}>
          <Text
            style={[
              styles.current,
              current > max && { color: Colors["light"].negative },
            ]}
          >
            ${current}
          </Text>
          <Text style={styles.separator}> | </Text>
          <Text style={styles.max}>${max.toLocaleString()}</Text>
        </Text>
      </View>

      <View style={styles.progressBackground}>
        <View
          style={[
            styles.progressFill,
            {
              width: filledWidth as any,
              backgroundColor:
                current > max
                  ? Colors["light"].negative
                  : Colors["light"].primary,
            },
          ]}
        />
      </View>
    </View>
  );
};

export default SpendingLimitBar;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 25,
  },
  labelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  label: {
    fontSize: 13,
    fontWeight: "400",
  },
  amounts: {
    flexDirection: "row",
    fontSize: 14,
  },
  current: {
    color: Colors["light"].primary,
    fontWeight: "500",
  },
  separator: {
    color: Colors["light"].greyLevel3,
  },
  max: {
    color: Colors["light"].greyLevel3,
  },
  progressBackground: {
    height: 13,
    backgroundColor: Colors["light"].green100,
    borderRadius: 20,
    overflow: "hidden",
  },
  progressFill: {
    height: 13,
    borderRadius: 20,
  },
});
