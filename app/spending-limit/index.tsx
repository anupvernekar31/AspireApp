import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useDispatch } from "react-redux";

import AmountChip from "@/components/AmountChip";
import CurrencyTag from "@/components/CurrencyTag";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { updateSpendingLimit } from "@/store/slices/cardSlice";

const presetAmounts = [5000, 10000, 20000];

export default function SpendingLimitScreen() {
  // hooks
  const colorScheme = useColorScheme();
  const { cardId } = useLocalSearchParams();
  const router = useRouter();
  const dispatch = useDispatch();

  // states
  const [selectedAmount, setSelectedAmount] = useState(0);

  const onChipPress = (amount: number) => setSelectedAmount(amount);

  const handleSave = () => {
    if (typeof cardId === "string" && selectedAmount > 0) {
      dispatch(updateSpendingLimit({ cardId, spendingLimit: selectedAmount }));
    }
    router.back();
  };

  return (
    <View style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Spending limit</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.info}>
          <Image source={require("../../assets/images/SpendingLimit.png")} />
          <Text style={styles.subHeading}>
            Set a weekly debit card spending limit
          </Text>
        </View>

        <View style={styles.amountRow}>
          <CurrencyTag />
          <Text style={styles.amountText}>
            {selectedAmount === 0 ? "" : selectedAmount.toLocaleString()}
          </Text>
        </View>

        <View style={styles.divider} />

        <Text style={styles.helperText}>
          Here weekly means the last 7 days - not the calendar week
        </Text>

        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <View style={styles.presetsRow}>
            {presetAmounts.map((amount, index) => (
              <AmountChip
                key={index}
                amount={amount}
                selectedAmount={selectedAmount}
                onChipPress={onChipPress}
              />
            ))}
          </View>

          <TouchableOpacity
            onPress={handleSave}
            disabled={selectedAmount === 0}
            style={[
              styles.saveButton,
              {
                backgroundColor:
                  selectedAmount === 0
                    ? Colors["light"].greyLevel3
                    : Colors[colorScheme ?? "light"].primary,
              },
            ]}
          >
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors["light"].secondary,
  },
  info: {
    flexDirection: "row",
    gap: 15,
  },
  divider: {
    backgroundColor: Colors["light"].greyLevel2,
    opacity: 0.5,
    height: 0.5,
  },
  header: {
    height: 100,
    backgroundColor: Colors["light"].secondary,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    color: Colors["light"].greyLevel0,
    fontSize: 24,
    fontWeight: "bold",
  },
  headerIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors["light"].primary,
  },
  card: {
    flex: 1,
    backgroundColor: Colors["light"].greyLevel0,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  subHeading: {
    fontSize: 14,
    color: Colors["light"].secondary,
    fontWeight: "500",
    marginBottom: 25,
  },
  amountRow: {
    marginBottom: 6,
    flexDirection: "row",
    alignItems: "center",
  },

  amountText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
  },
  helperText: {
    fontSize: 13,
    color: Colors["light"].greyLevel3,
    marginTop: 8,
    marginBottom: 24,
  },
  presetsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  presetButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: Colors["light"].greyLevel3,
    alignItems: "center",
    marginHorizontal: 5,
  },

  saveButton: {
    marginBottom: 40,
    backgroundColor: Colors["light"].primary,
    paddingVertical: 16,
    borderRadius: 30,
    width: 300,
    alignSelf: "center",
    alignItems: "center",
  },
  saveButtonText: {
    color: Colors["light"].greyLevel0,
    fontWeight: "bold",
    fontSize: 16,
  },
});
