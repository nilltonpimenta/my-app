import * as React from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "./styles/styles";

function IMC({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calculadora de IMC</Text>
      <TextInput style={styles.textinput} placeholder="Altura (m)" />
      <TextInput style={styles.textinput} placeholder="Peso (Kg)" />

      <Button title="Calcular" onPress={() => {}} />
      <Button
        title="Classificação de resultados"
        onPress={() => navigation.navigate("Table")}
      />
      <Button
        title="Tela Inicial"
        onPress={() => navigation.navigate("Home")}
      />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default IMC;
