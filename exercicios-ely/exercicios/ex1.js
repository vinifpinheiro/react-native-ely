import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

export default function Ex1() {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);

  function calcular() {
    const total = homens * 350 + mulheres * 180;
    const carne = total / 1000;
    const somCerveja = (homens * 2000) / 1000 + (mulheres * 1500) / 1000;
    const cerveja = somCerveja / 2;

    console.log(carne, cerveja)

    return {
      carne,
      cerveja,
    };
  }

  return (
    <View style={styles.container}>
      <Text>Calculadora de churrasco</Text>
      <View>
        <Text>Informe a quantidade de homens:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(e) => setHomens(e)}
        />
      </View>
      <Text>Informe a quantidade de mulheres:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(e) => setMulheres(e)}
      />
      <Button title="Calcular" onPress={calcular} />
      <Text>Resultado</Text>
      <Text>Carne: {calcular().carne}kg</Text>
      <Text>Cerveja: {calcular().cerveja}L</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 20,
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
  },
});
