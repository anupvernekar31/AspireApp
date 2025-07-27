import {
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";

import { Colors } from "@/constants/Colors";

type Props = {
  image: ImageSourcePropType;
};

const ScreenLogo = ({ image }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageBackground}>
        <Image style={styles.image} source={image} />
      </View>
    </View>
  );
};

export default ScreenLogo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors['light'].greyLevel0,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 50,
    width: 50,
  },
  imageBackground: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
    borderRadius: "100%",
    backgroundColor: Colors['light'].secondary,
  },
});
