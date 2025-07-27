import { Tabs } from "expo-router";
import React from "react";
import { Platform, Image } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].primary,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,

        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
            borderTopWidth: 0,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: -5,
            },
            shadowOpacity: 0.1,
            shadowRadius: 6,
          },
          default: {
            height: 70,
            backgroundColor: "#fff",
            borderTopWidth: 0,
            elevation: 6,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Image
              tintColor={
                focused
                  ? Colors[colorScheme ?? "light"].primary
                  : Colors[colorScheme ?? "light"].greyLevel3
              }
              source={require("../../assets/images/Home.png")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Debit Card",
          tabBarIcon: ({ color, focused }) => (
            <Image
              tintColor={
                focused
                  ? Colors[colorScheme ?? "light"].primary
                  : Colors[colorScheme ?? "light"].greyLevel3
              }
              source={require("../../assets/images/Card.png")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="payments"
        options={{
          title: "Payments",
          tabBarIcon: ({ color, focused }) => (
            <Image
              tintColor={
                focused
                  ? Colors[colorScheme ?? "light"].primary
                  : Colors[colorScheme ?? "light"].greyLevel3
              }
              source={require("../../assets/images/Payments.png")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="credit"
        options={{
          title: "Credit",
          tabBarIcon: ({ color, focused }) => (
            <Image
              tintColor={
                focused
                  ? Colors[colorScheme ?? "light"].primary
                  : Colors[colorScheme ?? "light"].greyLevel3
              }
              source={require("../../assets/images/Credit.png")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <Image
              tintColor={
                focused
                  ? Colors[colorScheme ?? "light"].primary
                  : Colors[colorScheme ?? "light"].greyLevel3
              }
              source={require("../../assets/images/User.png")}
            />
          ),
        }}
      />
    </Tabs>
  );
}
