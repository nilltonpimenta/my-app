import * as React from "react";
import { SafeAreaView, View, Text, Button, Image } from "react-native";
import styles from "./styles/styles";
import Separator from "./components/Separator";

function Tableview({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>Classificação</Text>
        <Image
          style={styles.table}
          source={require("../assets/table.png")}
          resizeMode="contain"
        />
        <Separator />
        <Button
          style={styles.button}
          title="Calcular IMC"
          onPress={() => navigation.navigate("IMC")}
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

export default Tableview;
