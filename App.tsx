import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Product from "./components/Product";

export default function App() {
  const name = "Yuya"; //Weakly Typed Language (TypeScript)

  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <StatusBar style="auto" />

      <Product title="iPad" amount={1000} />
      <Product title="iPad Pro" amount={2000} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
