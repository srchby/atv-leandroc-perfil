import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  ImageBackground,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1f1f1f" />
      <ImageBackground
        style={styles.image}
        source={require("./assets/images/athens.jpg")}
        resizeMode="cover"
      >
        <View style={styles.card}>
          <Image
            source={require("./assets/images/aristotle.jpg")}
            style={styles.profileImage}
          />
          <Text style={styles.name}>Aristóteles</Text>
          <Text style={styles.phrase}>
            “Conhecer a si mesmo é o começo de toda a sabedoria.” - Aristóteles
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: 16,
  },
  card: {
    backgroundColor: "#1f1f1f",
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
    width: "100%",
    maxWidth: 320,
  },
  profileImage: {
    width: 120,
    height: 120,

    borderRadius: 60,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: "#00d1ff",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffffff",
    marginBottom: 8,
  },
  phrase: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#cccccc",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
});
