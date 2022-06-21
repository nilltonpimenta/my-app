import * as React from "react";
import { View, Text, Button, Image } from "react-native";
import styles from "./styles/styles";

function Tableview({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Classificação</Text>
      <Image
        style={styles.table}
        source={require("../assets/table.png")}
        resizeMode="contain"
      />
      <Button
        title="Calcular IMC"
        onPress={() => navigation.navigate("IMC")}
      />
      <Button
        title="Tela Inicial"
        onPress={() => navigation.navigate("Home")}
      />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default Tableview;
