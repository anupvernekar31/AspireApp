import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Colors } from "@/constants/Colors";
import { useState } from "react";

interface CardProps {
  cardItem: {
    id: string;
    name: string;
    number: string;
    expiry: string;
    cvv: string;
    isFrozen: boolean;
  };
}

const Card = ({ cardItem }: CardProps) => {
  const [hide, setHide] = useState(false);
  const { id, name, number, expiry, cvv, isFrozen } = cardItem;

  const formatCardNumber = (number: string): string => {
    if (number.length !== 16) return number;

    return (
      number.substring(0, 4) +
      "   " +
      number.substring(4, 8) +
      "   " +
      number.substring(8, 12) +
      "   " +
      number.substring(12, 16)
    );
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => setHide((hide) => !hide)}
        style={[
          styles.hideContainer,
          isFrozen && { borderBottomEndRadius: 5, borderBottomStartRadius: 5 },
        ]}
      >
        <Image source={require("../assets/images/Hide.png")} />
        <Text style={styles.hideText}>
          {hide ? "Unhide card number" : "Hide card number"}
        </Text>
      </TouchableOpacity>

      {!isFrozen && <View style={styles.block} />}

      <View
        style={[
          styles.cardContainer,
          cardItem.isFrozen && {
            opacity: 1,
            backgroundColor: "rgba(94, 97, 99,0.8)",
          },
        ]}
      >
        <>
          <View style={styles.cardHeader}>
            <Image source={require("../assets/images/AspireLogo.png")} />
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.cardName}>{name}</Text>
            <Text style={styles.cardNumber}>
              {!hide ? (
                formatCardNumber(number)
              ) : (
                <>
                  <Text style={{ fontSize: 10 }}>
                    {"●●●●   ●●●●   ●●●●   "}
                  </Text>
                  <Text>{number.substring(12, 16)}</Text>
                </>
              )}
            </Text>
            <View style={styles.cardDetailsRow}>
              <Text style={styles.cardDetails}>Thru: {expiry}</Text>
              <Text style={styles.cardDetails}>CVV: {cvv}</Text>
              {isFrozen ? (
                <Text style={styles.cardDetails}>Status: Frozen</Text>
              ) : null}
            </View>
            <Image
              source={require("../assets/images/VisaLogo.png")}
              style={styles.visaLogo}
            />
          </View>
        </>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hideText: {
    width: 120,
    color: Colors["light"].primary,
    paddingVertical: 7,
    fontSize: 12,
    fontWeight: "600",
  },
  hideContainer: {
    top: 2,
    width: "40%",
    gap: 5,
    flexDirection: "row",
    alignSelf: "flex-end",
    backgroundColor: Colors["light"].greyLevel0,
    borderTopEndRadius: 5,
    borderTopStartRadius: 5,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  block: {
    flexDirection: "row",
    position: "absolute",
    height: 20,
    width: "10%",
    backgroundColor: Colors["light"].greyLevel0,
    top: 30,
    right: 20,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  cardContainer: {
    overflow: "hidden",
    height: 220,
    marginHorizontal: 20,
    borderRadius: 12,
    backgroundColor: Colors["light"].primary,
  },
  cardHeader: {
    alignItems: "flex-end",
    padding: 20,
  },
  cardBody: { padding: 20 },
  cardNumber: {
    color: Colors["light"].greyLevel0,
    fontSize: 14,
    fontWeight: 600,
    marginTop: 22,
    letterSpacing: 4,
  },
  cardDetailsRow: {
    marginTop: 15,
    flexDirection: "row",
    gap: 20,
  },
  cardDetails: {
    letterSpacing: 2,
    color: Colors["light"].greyLevel0,
    fontSize: 13,
    fontWeight: 600,
  },
  visaLogo: {
    marginTop: 10,
    alignSelf: "flex-end",
    marginRight: 10,
  },
  cardName: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  cardWrapper: {
    position: "relative",
    marginHorizontal: 20,
  },
});

export default Card;
