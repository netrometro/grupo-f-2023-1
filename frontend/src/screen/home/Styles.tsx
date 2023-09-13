// Styles.js

import { StyleSheet } from "react-native";

export const normalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191924",
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  titulo: {
    marginLeft: 25,
    color: 'white',
    fontSize: 18,
    marginRight: 20,
    textAlignVertical: "center",
  },
  filtroTitulo: {
    height: 50,
    width: 350,
    display: "flex",
    flexDirection: "row",
    gap: 55,
  },
});

export const daltonicStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AABBCC", // Defina as cores para o modo daltonismo
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  titulo: {
    marginLeft: 25,
    color: 'black', // Defina as cores de texto para o modo daltonismo
    fontSize: 18,
    marginRight: 20,
    textAlignVertical: "center",
  },
  filtroTitulo: {
    height: 50,
    width: 350,
    display: "flex",
    flexDirection: "row",
    gap: 55,
  },
});
