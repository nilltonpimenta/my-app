import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title=" Calcular IMC"
        onPress={() => navigation.navigate("IMC")}
      />
      <Button
        title="Classificação de resultados"
        onPress={() => navigation.navigate("Table")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});

export default HomeScreen;
