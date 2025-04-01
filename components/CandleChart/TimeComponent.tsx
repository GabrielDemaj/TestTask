import { View, Text, StyleSheet } from "react-native";
import React from "react";
import GearIcon from "./icons/gear.svg";

type Props = {};

const TimeComponent = (props: Props) => {
  return (
    <View style={styles.scaleContainer}>
      <Text style={styles.scaleValue}>2:00</Text>
      <View style={styles.scaleTime}>
        <Text style={styles.timeText}>18:00</Text>
        <Text style={styles.timeText}>10:00</Text>
        <Text style={styles.timeText}>06:00</Text>
        <Text style={styles.timeText}>12:00</Text>
        <Text style={styles.timeText}>18:00</Text>
        <View style={styles.icon}>
          <GearIcon />
        </View>
      </View>
    </View>
  );
};

export default TimeComponent;

const styles = StyleSheet.create({
  scaleContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  scaleValue: {
    color: "#888",
    fontSize: 12,
    marginRight: 20,
  },
  scaleTime: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  timeText: {
    color: "#888",
    fontSize: 12,
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 20,
  },
});
