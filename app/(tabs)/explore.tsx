import { evaluate, format } from "mathjs";
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
  /** TextInput에 있는 값이 myinput에 담겨요 */
  const [myinput, setMyinput] = useState<string>("");

  /**  <Text>result: {result}</Text> 여기에 결과로 표시되요 */
  const [result, setResult] = useState<string>("");

  /** 계산을 하는 함수.
   * @param 매개변수 없음
   * @returns 리턴값 없음
   * @param 얘가 하는일은 myinput에 있는 문자열을 읽어서
   * 계산을 하고, result 변수에 결과를 담는 일을 해요
   */
  function calc() {
    let _result: any;
    try {
      console.log(`# calc 진입`);
      _result = evaluate(myinput);
      _result = format(_result, { precision: 14 });
      console.log(`# _result: `, _result);
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
        <TextInput
          onChangeText={setMyinput}
          onSubmitEditing={calc}
          style={styles.orangeInput}
        />
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
