import * as React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";

function Tableview({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Classificação de resultados</Text>
      <Image style={styles.table} source={require("../assets/table.png")} />
      <Button
        title=" Calcular IMC"
        onPress={() => navigation.navigate("IMC")}
      />
      <Button
        title="Tela Inicial"
        onPress={() => navigation.navigate("Home")}
      />
      <Button title="Votlar" onPress={() => navigation.goBack()} />
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
  table: {
    width: 66,
    height: 58,
  },
});

export default Tableview;
