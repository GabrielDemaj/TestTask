import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import FilterIcon from "./icons/filters.svg";
import FIcon from "./icons/f.svg";
import ChevronDownIcon from "./icons/chevron-down.svg";

type Props = {};

const Filters = (props: Props) => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.inner}>
        <Text style={styles.text}>1m</Text>
        <Text style={styles.text}>30m</Text>
        <Text style={[styles.text, { color: "#2F80ED" }]}>1h</Text>
        <ChevronDownIcon />
      </View>
      <View style={styles.verticleLine} />
      <View style={styles.icon}>
        <FilterIcon />
      </View>
      <View style={styles.verticleLine} />
      <View style={styles.align}>
        <FIcon />
        <Text style={styles.text}>Indicators</Text>
      </View>
      <View style={[styles.verticleLine, { marginHorizontal: 10 }]} />
      <Text style={styles.text}>On Chart Trading</Text>
      <View style={[styles.verticleLine, { marginHorizontal: 10 }]} />
      <Text style={styles.text}>On Chart Trading</Text>
    </ScrollView>
  );
};

export default Filters;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  inner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingRight: 10,
  },
  text: {
    fontSize: 12,
    color: "#C4C4C4",
  },
  verticleLine: {
    height: 21,
    width: 1,
    backgroundColor: "#2F2C2D",
  },
  icon: {
    paddingHorizontal: 10,
  },
  align: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingLeft: 10,
  },
});
