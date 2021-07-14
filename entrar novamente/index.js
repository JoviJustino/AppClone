import "react-native-gesture-handler";
import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import Perfil from "../src/assets/images/perfil.jpg";
import { Entypo } from "@expo/vector-icons";

export default function Cadastro({ navigation }) {
  let [fontsLoaded] = useFonts({
    "Nunito-Light": require("../src/assets/fonts/Nunito-Light.ttf"),
    "Nunito-Bold": require("../src/assets/fonts/Nunito-Bold.ttf"),
    "Nunito-Black": require("../src/assets/fonts/Nunito-Black.ttf"),
    "Nunito-Regular": require("../src/assets/fonts/Nunito-Regular.ttf"),
  });
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://design.duolingo.com/162d3bf565c53c8657c9.svg",
        }}
      />
      <View style={styles.header}>
        <Text style={styles.Text1}> Entrar novamente</Text>
        <Text style={styles.Text2}>
          Escolha uma das contas salvas neste dispositivo.
        </Text>
      </View>

      <View style={styles.ButtonLogin}>
        <View style={styles.conteinerLogin}>
          <Image source={Perfil} style={styles.img} />
          <View>
            <Text style={styles.TextLogin}> João Victor Melo</Text>
            <Text style={styles.TextEmail}> joaovictor@hotmail.com</Text>
          </View>
          <Entypo style={styles.arrow} name="chevron-small-right" />
        </View>
        <Text style={styles.line}> </Text>
        <View style={styles.criarConta}>
          <TouchableHighlight onPress={() => navigation.navigate("Teste")}>
            <View style={styles.button}>
              <Text style={styles.Text5}> + </Text>
            </View>
          </TouchableHighlight>
          <Text style={[styles.Text, styles.TextLogin]}>
            Adicionar outra conta
          </Text>
        </View>
      </View>

      <View>
        <Text style={styles.textfooter}> Gerenciar contas</Text>
      </View>
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

  Text1: {
    color: "white",
    fontSize: 25,
    paddingBottom: 15,
    textAlign: "center",
    fontFamily: "Nunito-Bold",
  },

  Text2: {
    color: "white",
    paddingBottom: 20,
    textAlign: "center",
    fontFamily: "Nunito-Bold",
  },

  TextLogin: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    padding: 8,
    fontFamily: "Nunito-Black",
  },

  TextEmail: {
    color: "white",
    fontSize: 12,
    textAlign: "center",
    fontFamily: "Nunito-Regular",
  },

  ButtonLogin: {
    borderWidth: 1.9,
    borderColor: "#afafaf",
    borderRadius: 10,
    textAlign: "center",
    marginBottom: 90,
    marginHorizontal: 10,
    paddingHorizontal: 15,
  },

  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#afafaf",
    marginBottom: 10,
  },

  textfooter: {
    color: "#afafaf",
    fontSize: 20,
    paddingBottom: 15,
    textAlign: "center",
    fontFamily: "Nunito-Black",
  },
  criarConta: {
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },

  button: {
    borderWidth: 1,
    borderColor: "#afafaf",
    padding: 10,
    borderRadius: 50,
    marginLeft: 10,
  },

  Text5: {
    fontSize: 24,
  },

  img: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  conteinerLogin: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },

  logo: {
    width: 130,
    height: 140,
  },

  arrow: {
    fontSize: 20,
    color: "#afafaf",
    paddingTop: 15,
  },
});
