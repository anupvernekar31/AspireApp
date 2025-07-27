import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
} from "react-native";
import { useRouter, useNavigation } from "expo-router";

import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export default function CustomHeader({ title }: { title: string }) {
  // hooks
  const router = useRouter();
  const navigation = useNavigation();

  const canGoBack = navigation.canGoBack?.() ?? false;

  return (
    <View style={styles.container}>
      {canGoBack ? (
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 24 }} />
      )}

      <Text style={styles.title}>{title}</Text>

      <Image
        source={require("../assets/images/Logo.png")}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 60 : 40,
    paddingHorizontal: 16,
    backgroundColor: "#0C365A",
    height: Platform.OS === "ios" ? 100 : 80,
  },
  title: {
    color: Colors["light"].greyLevel0,
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: 24,
    height: 24,
  },
});
