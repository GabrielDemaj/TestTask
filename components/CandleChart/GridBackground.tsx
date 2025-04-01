import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Svg, { Line } from "react-native-svg";

const { width } = Dimensions.get("window");
const chartHeight = 400;
const chartWidth = 300;

const priceLevels = Array.from({ length: 20 }, (_, i) => 15520 - i * 10);
const horizontalGridLines = priceLevels.map((_, i) => ({
  y: (chartHeight / priceLevels.length) * i,
}));

const verticalGridLines = Array.from({ length: 10 }, (_, i) => ({
  x: (chartWidth / 10) * i,
}));

const GridBackground = () => {
  return (
    <View style={styles.container}>
      <Svg height={chartHeight} width={chartWidth} style={styles.gridOverlay}>
        {horizontalGridLines.map((line, i) => (
          <Line
            key={`h-${i}`}
            x1="0"
            y1={line.y}
            x2={chartWidth}
            y2={line.y}
            stroke="gray"
            strokeWidth="0.5"
            opacity="0.2"
          />
        ))}
        {verticalGridLines.map((line, i) => (
          <Line
            key={`v-${i}`}
            x1={line.x}
            y1="0"
            x2={line.x}
            y2={chartHeight}
            stroke="gray"
            strokeWidth="0.5"
            opacity="0.2"
          />
        ))}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: chartWidth,
    height: chartHeight,
  },
  gridOverlay: {
    ...StyleSheet.absoluteFillObject, // Ensure it overlays the chart
  },
});

export default GridBackground;
