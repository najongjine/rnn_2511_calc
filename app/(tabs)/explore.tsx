import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function TabTwoScreen() {
  const [myinput, setMyinput] = useState<string>("");
  /* 계산하기 버튼 만들기 */

  return (
    <ScrollView>
      <View>
        <Text style={{ color: "blue" }}>calc page</Text>
      </View>
      <View>
        <TextInput onChangeText={setMyinput} style={styles.orangeInput} />
        <View>
          <Text>myinput에 잘 담겼니? {myinput}</Text>
        </View>
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
