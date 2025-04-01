import { View, Text, StyleSheet } from "react-native";
import React from "react";

type Props = {};

const account = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Account</Text>
    </View>
  );
};

export default account;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
