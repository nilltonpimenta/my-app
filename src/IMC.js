import * as React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

function IMC({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calculando IMC</Text>
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
  textinput: {
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 5,
    backgroundColor: "white",
    textAlign: "center",
  },
});

export default IMC;
