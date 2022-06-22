import * as React from "react";
import { SafeAreaView, View, Text, TextInput, Button, Alert } from "react-native";
import styles from "./styles/styles";
import Separator from "./components/Separator";

function IMC({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>Calculadora de IMC</Text>
        <TextInput style={styles.textinput} placeholder="Altura (m)" />
        <TextInput style={styles.textinput} placeholder="Peso (Kg)" />
        <Separator />
        <Button
          style={styles.button}
          title="Calcular"
          onPress={() => Alert.alert("Calculando")}
        />
        <Separator />
        <Button
          style={styles.button}
          title="Classificação de resultados"
          onPress={() => navigation.navigate("Table")}
        />
        <Separator />
        <Button
          style={styles.button}
          title="Tela Inicial"
          onPress={() => navigation.navigate("Home")}
        />
        <Separator />
        <Button
          style={styles.button}
          title="Voltar"
          onPress={() => navigation.goBack()}
        />
      </View>
    </SafeAreaView>
  );
}

export default IMC;
