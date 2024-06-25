import { Text, View, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CollEve!</Text>
      <Link href="./(auth)/login" style={{ color: "blue" }}>
        {" "}
        Login Click Here!
      </Link>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0A0A",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 30,
    marginTop: -6,
    marginBottom: 20,
    textTransform: "uppercase",
  },
});
