import { evaluate } from "mathjs";
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

  function calc() {
    try {
      let _result = evaluate(myinput);
      setResult(_result);
    } catch (error: any) {
      setResult(`에러. 계산할수 없는 수식입니다`);
    }
  }
  /*
  1. calc를 계산하기 버튼에 연결하고,
  2. evaluate() 함수를 사용해서 계산을 해보세요 (우리가 타이핑한건 myinput에 담겨 있어요)
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
        <Button title="계산하기" onPress={calc} />
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
