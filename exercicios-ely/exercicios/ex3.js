import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

export default function Ex3() {
  const [km, setKm] = useState(0);
  const [preco, setPreco] = useState(0);
  const [preco2 , setPreco2] = useState(0);

  function calcular() {
    const kmPerGaso = 9
    const kmPerAlcool = 12
    const gaso = km / kmPerGaso
    const alcool = km / kmPerAlcool
    const totalGaso = gaso * preco
    const totalAlcool = alcool * preco2

    console.log(totalGaso, totalAlcool)

    return {
      totalGaso,
      totalAlcool
    };
  }
  return (
    <View style={styles.container}>
      <Text>Calculadora de gstos de gasoline</Text>
      <Text>Informe a quantidade de km percorridos</Text>
      <TextInput style={styles.input} keyboardType="numeric" onChangeText={(e) => setKm(e)} />
      <Text>Informe o preço do litro da gasolina</Text>
      <TextInput style={styles.input} keyboardType="numeric" onChangeText={(e) => setPreco(e)} />
      <Text>Informe o preço do litro do alcool</Text>
      <TextInput style={styles.input} keyboardType="numeric" onChangeText={(e) => setPreco2(e)} />
      <Button title="Calcular" onPress={calcular} />
      <Text>Resultado</Text>
      <Text>Gasolina: R${calcular().totalGaso.toFixed(2)}</Text>
      <Text>Alcool: R${calcular().totalAlcool.toFixed(2)}</Text>
    </View>
  );
}
