import { Stack } from "expo-router";

import CustomHeader from "@/components/CustomHeader";

export default function SpendingLimitLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: () => <CustomHeader title="" />,
        }}
      />
    </Stack>
  );
}
