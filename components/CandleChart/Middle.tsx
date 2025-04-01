import { View, Text, StyleSheet } from "react-native";
import React from "react";

type Props = {};

const Middle = (props: Props) => {
  return (
    <View style={styled.container}>
      <Text style={styled.text}>09:27:02 (UTC)</Text>
      <View style={styled.verticleLine} />
      <Text style={styled.text}>%</Text>
      <Text style={styled.text}>log</Text>
      <Text style={[styled.text, { color: "#2E60FF" }]}>auto</Text>
    </View>
  );
};

export default Middle;
const styled = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 6,
    marginRight: 10,
    paddingVertical: 6.5,
  },
  verticleLine: {
    height: 21,
    width: 1,
    backgroundColor: "#2F2C2D",
  },
  text: {
    fontSize: 12,
    color: "#EEEEEE",
  },
});
