import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Button from "../Button";
import XIcon from "./icons/x-icon.svg";
import * as Haptics from "expo-haptics";

type Props = {};

const Stepper = ({ value, setValue, isDecimal = false }: any) => {
  const increment = () =>
    setValue((prev: any) => (isDecimal ? (prev + 0.01).toFixed(2) : prev + 1));
  const decrement = () =>
    setValue((prev: any) =>
      isDecimal
        ? Math.max(0, (prev - 0.01).toFixed(2) as any)
        : Math.max(0, prev - 1)
    );

  return (
    <View style={styles.c}>
      <TouchableOpacity onPress={decrement} style={styles.button}>
        <Text style={styles.ct}>-</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        value={isDecimal ? parseFloat(value).toFixed(2) : String(value)}
        keyboardType="numeric"
        onChangeText={(text) =>
          setValue(isDecimal ? parseFloat(text) || 0 : Number(text) || 0)
        }
      />
      <TouchableOpacity onPress={increment} style={styles.button}>
        <Text style={styles.ct}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const Card = (props: Props) => {
  const [value, setValue] = useState("market");
  const [integerValue, setIntegerValue] = useState(999);
  const [decimalValue, setDecimalValue] = useState(0.0);
  const onPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };
  return (
    <View style={styles.container}>
      <View style={[styles.align, { gap: 44, marginBottom: 12 }]}>
        <View style={[styles.align, { gap: 8 }]}>
          <Button
            text="Buy"
            style={[styles.btn, { flex: 1 }]}
            textStyles={{ fontWeight: 600 }}
          />
          <Button
            text="Sell"
            style={styles.sell}
            textStyles={{ fontWeight: 600 }}
          />
        </View>
        <View style={[styles.align, { gap: 12, flex: 0 }]}>
          <Button
            text="TP/SL"
            style={{ height: 23, paddingHorizontal: 6 }}
            textStyles={{ fontSize: 10, fontWeight: 500 }}
          />
          <View style={styles.verticleLine} />
          <Pressable onPress={onPress}>
            <XIcon />
          </Pressable>
        </View>
      </View>
      <View style={[styles.align, { gap: 8, marginBottom: 12 }]}>
        <Button
          text="Market"
          style={value === "market" ? styles.active : styles.passive}
          onPress={() => setValue("market")}
          textStyles={{ fontWeight: 600 }}
        />
        <Button
          text="Limit"
          style={value === "limit" ? styles.active : styles.passive}
          onPress={() => setValue("limit")}
          textStyles={{ fontWeight: 600 }}
        />
        <Button
          text="Stop"
          style={value === "stop" ? styles.active : styles.passive}
          onPress={() => setValue("stop")}
          textStyles={{ fontWeight: 600 }}
        />
      </View>
      <View style={[styles.align, { gap: 12 }]}>
        <View style={{ flex: 1 }}>
          <Text style={[styles.t, { color: "#FFFFFF" }]}>Limit Price</Text>
          <Stepper value={integerValue} setValue={setIntegerValue} />
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.a}>
            <View style={styles.a}>
              <Text style={styles.t}>Contracts:</Text>
              <View style={{ width: 5 }} />
              <Text style={[styles.t, { color: "#FFFFFF" }]}>1</Text>
            </View>

            <View style={{ width: 25 }} />
            <View style={styles.a}>
              <Text style={[styles.t, { color: "#FFFFFF" }]}>Quantity</Text>
              <View style={{ width: 5 }} />
              <Text style={styles.t}>(lots)</Text>
            </View>
          </View>
          <Stepper value={integerValue} setValue={setIntegerValue} />
        </View>
      </View>
      <Button text="Buy Limit @ 0.8893" style={styles.bottom} />
    </View>
  );
};

export default Card;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  align: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  btn: {
    borderWidth: 1,
    backgroundColor: "#0147374D",
    borderColor: "#31C48D",
    borderRadius: 8,
    height: 37,
  },
  sell: {
    borderColor: "#898587",
    borderWidth: 1,
    flex: 1,
    height: 37,
  },
  text: {
    color: "#898587",
    fontSize: 12,
  },
  verticleLine: {
    height: 21,
    width: 1,
    backgroundColor: "#2F2C2D",
  },
  active: {
    borderWidth: 1,
    borderColor: "#898587",
    flex: 1,
    height: 28,
  },
  passive: {
    flex: 1,
    height: 26,
  },
  a: {
    flexDirection: "row",
    alignItems: "center",
  },
  t: {
    fontWeight: 500,
    fontSize: 12,
    color: "#898587",
    paddingBottom: 8,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  c: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#1A1A1A",
    borderRadius: 10,
    height: 37,
  },
  button: {
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  ct: {
    fontSize: 24,
    color: "white",
  },
  input: {
    textAlign: "center",
    color: "white",
    height: 37,
    borderRadius: 5,
    flex: 1,
    justifyContent: "center",
  },
  bottom: {
    height: 37,
    backgroundColor: "#31C48D",
    marginTop: 12,
  },
});
