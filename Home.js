import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
} from "react-native";
// import * as Font from 'expo-font'
// import { AppLoading } from 'expo';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.Text, styles.Text1]}> Já tem uma conta?</Text>
        <Text style={[styles.Text, styles.Text2]}>
          {" "}
          Recomece de onde parou.
        </Text>

        <TouchableHighlight onPress={() => navigation.navigate("Cadastro")}>
          <View style={styles.button}>
            <Text style={styles.Text5}>Entrar</Text>
          </View>
        </TouchableHighlight>
      </View>

      <View style={styles.Body}>
        <Text style={[styles.Text, styles.Text3]}> Novo no Doulingo? </Text>
        <Text style={[styles.Text, styles.Text2]}>
          {" "}
          Comece a aprender um novo idioma agora.{" "}
        </Text>
        <TouchableHighlight>
          <View style={[styles.button, styles.button2]}>
            <Text style={styles.Text4}> Começar agora </Text>
          </View>
        </TouchableHighlight>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101d21",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    borderBottomWidth: 1,
    borderBottomColor: "#777777",
    paddingBottom: 35,
  },

  Text1: {
    color: "white",
    fontSize: 25,
    paddingBottom: 15,
    textAlign: "center",
  },

  Text2: {
    color: "white",
    paddingBottom: 20,
    textAlign: "center",
  },
  Text3: {
    color: "white",
    fontSize: 24,
    paddingBottom: 15,
    paddingTop: 30,
    textAlign: "center",
  },

  Text5: {
    fontSize: 17,
  },
  button: {
    backgroundColor: "#89e219",
    borderRadius: 10,
    textAlign: "center",
    padding: 10,
    paddingHorizontal: 85,
  },
  button2: {
    backgroundColor: "#101d21",
    borderRadius: 10,
    borderWidth: 3,
    textAlign: "center",
    padding: 10,
    paddingHorizontal: 40,
    borderColor: "#777777",
  },

  Text4: {
    color: "#58cc02",
    fontSize: 17,
  },

  Body: {
    backgroundColor: "#101d21",
    alignItems: "center",
    justifyContent: "center",
  },
});
