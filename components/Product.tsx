import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface Props {
  title: string;
  amount: number;
  //   "?" means Optional
  isOnSale?: boolean;
}

const Product = ({ title = "Procust Title", amount }: Props) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>Costs JPY{amount}</Text>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    margin: 10,
    padding: 20,
  },
});
