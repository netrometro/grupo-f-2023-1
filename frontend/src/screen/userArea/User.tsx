import React from "react";
import estilo from "./Style";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";

export function User() {
  return (
    <View style={estilo.container}>
      <Button mode="contained" onPress={() => {}}>
        Login
      </Button>
    </View>
  );
}
