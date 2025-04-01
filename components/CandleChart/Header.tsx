import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import ChevronDownIcon from "./icons/chevron-down.svg";
import Logos from "./icons/logos.svg";

type Props = {};

const Header = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.align}>
        <Image source={require("@/assets/images/flags.png")} />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.title}>EURUSD</Text>
          <Text style={styles.text}>1.06921</Text>
        </View>
        <View style={styles.icon}>
          <ChevronDownIcon />
        </View>
      </View>
      <View style={styles.verticleLine}></View>
      <View style={styles.align}>
        <View style={{ flex: 1 }}>
          <View style={styles.inner}>
            <Text style={styles.faded}>Balance:</Text>
            <Text style={styles.value}>$199,027.50</Text>
          </View>
          <View style={styles.inner}>
            <Text style={styles.faded}>Equity:</Text>
            <Text style={styles.value}>$99,287.50</Text>
          </View>
        </View>
        <View style={styles.icons}>
          <Logos />
          <ChevronDownIcon />
        </View>
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  align: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  title: {
    fontSize: 12,
    fontWeight: "600",
    color: "#fff",
  },
  text: {
    fontSize: 12,
    fontWeight: "600",
    color: "#F05252",
  },
  icon: {
    alignItems: "flex-end",
    flex: 1,
  },
  verticleLine: {
    height: 21,
    width: 1,
    backgroundColor: "#2F2C2D",
    marginHorizontal: 10,
  },
  faded: {
    color: "#898587",
    fontSize: 10,
  },
  value: {
    fontSize: 10,
    color: "#fff",
    textAlign: "right",
  },
  inner: {
    flexDirection: "row",
    flexGrow: 1,
    justifyContent: "space-between",
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
    backgroundColor: "#1A1819",
    paddingHorizontal: 4,
    paddingVertical: 6,
    borderRadius: 10,
    marginLeft: 12,
  },
});
