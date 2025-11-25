import { useState } from "react";
import { View } from "react-native";
import { Button } from "../src/components/ui/button";
import { Text } from "../src/components/ui/text";

export default function HomeScreen() {
  const [count, setCount] = useState(0);

  return (
    <View className="flex-1 items-center justify-center gap-6 p-5 bg-background">
      <Text variant="h1">Routine Revo</Text>
      <Text variant="muted">Testing React Native Reusables</Text>

      <View className="items-center gap-4 mt-8">
        <Text variant="h2" className="mb-2">
          Counter: {count}
        </Text>

        <View className="flex-row gap-3">
          <Button
            variant="destructive"
            size="lg"
            onPress={() => setCount(count - 1)}
          >
            <Text>Decrease</Text>
          </Button>

          <Button variant="default" size="lg" onPress={() => setCount(0)}>
            <Text>Reset</Text>
          </Button>

          <Button
            variant="secondary"
            size="lg"
            onPress={() => setCount(count + 1)}
          >
            <Text>Increase</Text>
          </Button>
        </View>

        <Button
          variant="outline"
          className="mt-4"
          onPress={() => setCount(count * 2)}
        >
          <Text>Double It!</Text>
        </Button>
      </View>
    </View>
  );
}
