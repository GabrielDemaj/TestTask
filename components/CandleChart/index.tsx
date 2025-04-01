import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { CandlestickChart } from "react-native-wagmi-charts";
import GridBackground from "./GridBackground";
import TimeComponent from "./TimeComponent";
import Header from "./Header";
import Filters from "./Filters";
import Middle from "./Middle";
import Card from "./Card";
import { SafeAreaView } from "react-native-safe-area-context";

const data = [
  {
    timestamp: 1672531200000,
    open: 15280,
    high: 15460,
    low: 15280,
    close: 15420,
  },
  {
    timestamp: 1672617600000,
    open: 15420,
    high: 15450,
    low: 15390,
    close: 15410,
  },
  {
    timestamp: 1672704000000,
    open: 15410,
    high: 15470,
    low: 15385,
    close: 15430,
  },
  {
    timestamp: 1672790400000,
    open: 15430,
    high: 15480,
    low: 15395,
    close: 15415,
  },
  {
    timestamp: 1672876800000,
    open: 15415,
    high: 15500,
    low: 15400,
    close: 15485,
  },
  {
    timestamp: 1672963200000,
    open: 15485,
    high: 15520,
    low: 15450,
    close: 15490,
  },
  {
    timestamp: 1673049600000,
    open: 15490,
    high: 15510,
    low: 15460,
    close: 15470,
  },
  {
    timestamp: 1673136000000,
    open: 15470,
    high: 15500,
    low: 15440,
    close: 15480,
  },
];
const CandleChart = () => {
  const priceLevels = [
    15460.0, 15450.0, 15440.0, 15430.0, 15420.0, 15416.12, 15410.0, 15400.0,
    15390.0, 15380.0, 15370.0, 15360.0, 15350.0, 15340.0, 15330.0, 15320.0,
    15310.0, 15300.0, 15290.0, 15280.0,
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GestureHandlerRootView>
        <ScrollView>
          <View style={styles.container}>
            <Header />
            <View style={styles.lineDivider} />
            <View>
              <Filters />
            </View>
            <View style={styles.chartArea}>
              <View style={styles.chartWrapper}>
                <GridBackground />
                <CandlestickChart.Provider data={data}>
                  <CandlestickChart height={400} width={300}>
                    <CandlestickChart.Candles />
                    <CandlestickChart.Crosshair>
                      <CandlestickChart.Tooltip />
                    </CandlestickChart.Crosshair>
                  </CandlestickChart>
                </CandlestickChart.Provider>
              </View>
              <View style={styles.priceLevelsContainer}>
                <Text style={styles.usdLabel}>USD</Text>
                {priceLevels.map((price, index) => (
                  <Text key={index} style={styles.priceLevelText}>
                    {price.toFixed(2)}
                  </Text>
                ))}
              </View>
            </View>
            <TimeComponent />
            <View style={[styles.lineDivider, { height: 1 }]} />
            <Middle />
            <View style={styles.lineDivider} />
            {/* <View style={{ flex: 1 }} /> */}
            <Card />
          </View>
        </ScrollView>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#100E0F",
  },
  chartArea: {
    flexDirection: "row",
    height: 400,
    paddingRight: 15,
  },
  priceLevelsContainer: {
    width: 80,
    marginRight: 10,
  },
  usdLabel: {
    color: "#888",
    fontSize: 12,
    marginBottom: 5,
    textAlign: "center",
  },
  priceLevelText: {
    color: "white",
    fontSize: 12,
    textAlign: "right",
    marginBottom: 2,
  },
  chartWrapper: {
    flex: 1,
    position: "relative",
  },
  lineDivider: {
    height: 2,
    backgroundColor: "#2F2C2D",
  },
});

export default CandleChart;
