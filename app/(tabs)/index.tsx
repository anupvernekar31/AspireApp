import {
  ActivityIndicator,
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "@/components/Card";
import MenuItem from "@/components/MenuItem";
import { Colors } from "@/constants/Colors";
import BalanceContainer from "@/components/BalanceContainer";
import SpendingLimitBar from "@/components/SpendingLimitBar";
import { RootState } from "@/store";
import {
  fetchCards,
  updateSpendingLimit,
  toggleFreezeCard,
} from "@/store/slices/cardSlice";

const { width } = Dimensions.get("window");

const DebitCardDetails = () => {
  // hooks
  const router = useRouter();
  const dispatch = useDispatch();

  // selectors
  const { loading, cards } = useSelector((state: RootState) => state.cards);

  // states
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchCards());
  }, []);

  const getRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  if (cards.length === 0 || loading) {
    return (
      <SafeAreaView style={styles.loaderContainer}>
        <ActivityIndicator size={"large"} />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.headerTitle}>Debit Cards</Text>
          </View>
          <BalanceContainer balance={cards[selectedCardIndex]?.balance} />
        </View>
        <Image
          style={styles.logoImage}
          source={require("../../assets/images/Logo.png")}
        />
      </View>

      <ScrollView
        style={[
          { width: "100%" },
          Platform.OS === "ios"
            ? { position: "absolute", paddingTop: 150 }
            : { flex: 1, paddingTop: -10 },
        ]}
        contentContainerStyle={styles.scrollSection}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.carousel}>
          <Carousel
            pagingEnabled={true}
            loop={false}
            width={width}
            height={250}
            data={cards}
            onSnapToItem={(index) => setSelectedCardIndex(index)}
            scrollAnimationDuration={1000}
            renderItem={({ item, index }) => <Card cardItem={item} />}
          />
        </View>

        {cards[selectedCardIndex]?.spendingLimit > 0 && (
          <SpendingLimitBar
            current={3478}
            max={cards[selectedCardIndex]?.spendingLimit}
          />
        )}

        <View style={styles.menuList}>
          <MenuItem
            icon={require("../../assets/images/insight.png")}
            label="Top-up account"
            desc="Deposit money to your account to use with card"
          />
          <MenuItem
            icon={require("../../assets/images/Transfer.png")}
            label="Weekly spending limit"
            desc="You haven't set any spending limit on card"
            hasSwitch
            switchValue={cards[selectedCardIndex]?.isSpendingLimitSet}
            onSwitchToggle={() => {
              if (cards[selectedCardIndex].isSpendingLimitSet) {
                dispatch(
                  updateSpendingLimit({
                    cardId: cards[selectedCardIndex].id,
                    spendingLimit: 0,
                  })
                );
              } else {
                router.push({
                  pathname: "/spending-limit",
                  params: { cardId: cards[selectedCardIndex]?.id },
                });
              }
            }}
          />
          <MenuItem
            icon={require("../../assets/images/Freeze.png")}
            label={"Freeze card"}
            desc={`Your debit card is currently ${
              cards[selectedCardIndex]?.isFrozen ? "frozen" : "active"
            }`}
            hasSwitch
            switchValue={cards[selectedCardIndex]?.isFrozen}
            onSwitchToggle={() => {
              dispatch(toggleFreezeCard(cards[selectedCardIndex]?.id));
            }}
          />
          <MenuItem
            icon={require("../../assets/images/NewCard.png")}
            label="Get a new card"
            desc="This deactivates your current debit card"
          />
          <MenuItem
            icon={require("../../assets/images/Deactivated.png")}
            label="Deactivated cards"
            desc="Your previously deactivated cards"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  carousel: {
    marginTop: -120,
  },
  loaderContainer: {
    backgroundColor: Colors["light"].greyLevel0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  safeArea: {
    flex: 1,
    backgroundColor: Colors["light"].secondary,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
  logoImage: {
    alignSelf: "flex-end",
    marginHorizontal: 20,
    marginTop: Platform.OS === "ios" ? 0 : 40,
  },
  header: {
    position: "absolute",
    top: Platform.OS === "ios" ? 0 : 50,
    backgroundColor: Colors["light"].secondary,
    margin: 20,
  },
  headerTitle: {
    color: Colors["light"].textPrimary,
    fontSize: 24,
    fontWeight: "bold",
  },
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
  scrollSection: {
    width: "100%",
    zIndex: 999,
    top: Platform.OS === "ios" ? 160 : 350,
    backgroundColor: Colors["light"].textPrimary,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: Platform.OS === "ios" ? 40 : 0,
    minHeight: 900,
  },
  hideButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors["light"].textPrimary,
    borderRadius: 20,
    padding: 5,
  },
  hideIcon: {
    width: 14,
    height: 14,
    marginRight: 5,
  },
  hideText: {
    fontSize: 12,
    fontWeight: "500",
  },
  menuList: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  addCard: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DebitCardDetails;
