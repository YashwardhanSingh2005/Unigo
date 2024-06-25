import { StyleSheet, Text, View } from "react-native";
import React from "react";
const loginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>loginScreen</Text>
    </View>
  );
};

export default loginScreen;

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
