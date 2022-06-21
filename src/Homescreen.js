import * as React from "react";
import { View, Text, Button, Image } from "react-native";
import styles from "./styles/styles";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Descubra seu IMC</Text>
      <Image
        style={styles.table}
        source={require("../assets/logo.png")}
        resizeMode="contain"
      />
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

export default HomeScreen;
