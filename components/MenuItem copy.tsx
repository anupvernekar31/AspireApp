import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";

import { Colors } from "@/constants/Colors";


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
  hasSwitch = false,
  switchValue = false,
  onSwitchToggle = () => {},
}: Props) => {
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
            false: Colors["light"].greyLevel2,
            true: Colors["light"].primary,
          }}
          thumbColor={Colors["light"].greyLevel0}
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
    marginBottom: 40,
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
    color: Colors["light"].menuLabel,
  },
  menuDesc: {
    fontSize: 13,
    color: Colors["light"].greyLevel2,
    marginTop: 2,
  },
});

export default MenuItem;
