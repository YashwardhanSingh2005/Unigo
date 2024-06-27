import React from "react";
import { Text, View, StyleSheet, SafeAreaView, Image } from "react-native";
import CustomButton from "../Components/CustomButton";
import { useRouter } from "expo-router";

const App = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.catchphrase}>One app, all Events</Text>
        <Text style={styles.catchphrase}> Welcome To </Text>
        <Image
          source={require("../assets/unigo_logo.png")}
          style={{ width: 400, height: 400 }}
        />
        <Text style={[styles.text, styles.glow]}>
          U{" "}
          <Text style={[styles.text, styles.glow]}>
            N{" "}
            <Text style={[styles.text, styles.glow]}>
              I{" "}
              <Text style={[styles.text, styles.glow]}>
                G <Text style={[styles.text, styles.glow]}>O</Text>
              </Text>
            </Text>
          </Text>
        </Text>
        <CustomButton
          title="Continue with Email"
          handlepress={() => {
            router.push("/(auth)/login");
          }}
          containerStyles="w-60 mt-7"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000000",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    minHeight: "85%", // Adjust as needed
  },
  text: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
    textTransform: "uppercase",
    textShadowColor: "rgba(255, 255, 255, 0.75)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  },
  glow: {
    textShadowColor: "white", // Adjust glow color as needed
    textShadowRadius: 20, // Adjust glow radius as needed
  },
  catchphrase: {
    color: "white",
    fontSize: 20,
  },
});

export default App;
