import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

export default function Ex2() {
  const [semanas, setSemanas] = useState(0);

  function calcular() {
    const total = semanas * 7;
    const meses = total / 30;
    const dias = total 

    console.log(meses);

    return {
      meses,
      dias
    };
  }

  return (
    <View style={styles.container}>
      <Text> Claculadora de Gestação</Text>
      <Text> Informe a quantidade de semanas </Text>
      <TextInput style={styles.input} keyboardType="numeric" onChangeText={(e) => setSemanas(e)} />
      <Button title="Calcular" onPress={calcular} />
      <Text>Resultado</Text>
      <Text>Meses: {calcular().meses.toFixed(1)}</Text>
      <Text>Dias: {calcular().dias}</Text>
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
