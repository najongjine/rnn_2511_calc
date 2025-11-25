import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function TabTwoScreen() {
  return (
    <ScrollView>
      <View>
        <Text>calc page</Text>
      </View>
      <View>
        <TextInput />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  blueText: {
    color: "blue",
    fontSize: 24,
    margin: 10,
  },
  orangeInput: {
    borderColor: "orange",
    borderWidth: 2,
    padding: 10,
    width: "100%",
  },
});
