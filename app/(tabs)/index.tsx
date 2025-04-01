import { StyleSheet, View } from "react-native";
import CandleChart from "@/components/CandleChart";
import "react-native-gesture-handler";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <CandleChart />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
