import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function TabTwoScreen() {
  const [myinput, setMyinput] = useState<string>("");
  const [result, setResult] = useState<string>("");

  function testadd() {
    let addoperator = myinput.includes("+");
    if (addoperator) {
      let strnums = myinput.split("+");
      let num1 = Number(strnums[0]);
      let num2 = Number(strnums[1]);
      let result = num1 + num2;
      setResult(result.toString());
    }
  }
  /*
  testadd() 랑 Button 연결하고, result 값 화면에 표시
   */
  return (
    <ScrollView>
      <View>
        <Text style={{ color: "blue" }}>calc page</Text>
      </View>
      <View>
        <TextInput onChangeText={setMyinput} style={styles.orangeInput} />
        <View>
          <Text>result: {result}</Text>
        </View>
      </View>
      <View>
        <Button title="계산하기" onPress={testadd} />
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
