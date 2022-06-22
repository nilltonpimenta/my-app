import * as React from "react";
import { SafeAreaView, View, Text, Button, Image } from "react-native";
import styles from "./styles/styles";
import Separator from "./components/Separator";

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>Descubra seu IMC</Text>
        <Image
          style={styles.table}
          source={require("../assets/logo.png")}
          resizeMode="contain"
        />

        <Button
          style={styles.button}
          title=" Calcular IMC"
          onPress={() => navigation.navigate("IMC")}
        />
        <Separator />
        <Button
          style={styles.button}
          title="Classificação de resultados"
          onPress={() => navigation.navigate("Table")}
        />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
