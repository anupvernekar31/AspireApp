import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Image, ImageSourcePropType, StyleSheet, Switch, Text, View } from "react-native";

interface Props {
  icon: ImageSourcePropType;
  label: string;
  desc: string;
  hasSwitch?: boolean;
  switchValue?: boolean;
  onSwitchToggle?: () => void;
}

const MenuItem = ({
  icon,
  label,
  desc,
  hasSwitch,
  switchValue,
  onSwitchToggle,
}: Props) => {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.menuItem}>
      <Image source={icon} style={styles.menuIcon} />
      <View style={styles.menuTextContainer}>
        <Text style={styles.menuLabel}>{label}</Text>
        <Text style={styles.menuDesc}>{desc}</Text>
      </View>
      {hasSwitch && (
        <Switch
          onValueChange={onSwitchToggle}
          value={switchValue}
          trackColor={{
            false: "#767577",
            true: Colors[colorScheme ?? "light"].primary,
          }}
          thumbColor={"#FFFFFF"}
          style={{ transform: [{ scaleX: 0.75 }, { scaleY: 0.75 }] }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  menuIcon: {
    marginRight: 15,
  },
  menuTextContainer: {
    flex: 1,
  },
  menuLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: "#25345F",
  },
  menuDesc: { fontSize: 13, color: "#AAAAAA", marginTop: 2 },
});

export default MenuItem;
