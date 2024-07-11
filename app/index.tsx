import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Animated,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from "react-native";
import CustomButton from "../Components/CustomButton";
import { useRouter } from "expo-router";

const App: React.FC = () => {
  const router = useRouter();
  const [fadeAnim] = useState<Animated.Value>(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Animated.View
          style={[styles.backgroundContainer, { opacity: fadeAnim }]}
        >
          <ImageBackground
            source={require("../assets/Background1.png")}
            style={styles.image}
          />
        </Animated.View>
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
          handlepress={() => router.push("/(auth)/login")}
          containerStyles="w-60 mt-7 absolute bottom-1/4 border-2 border-[#FFFFFF]"
          textStyles="text-[#FFFFFF] font-bold"
        />
      </View>
    </SafeAreaView>
  );
};

interface Styles {
  safeArea: ViewStyle;
  container: ViewStyle;
  backgroundContainer: ViewStyle;
  text: TextStyle;
  glow: TextStyle;
  image: ImageStyle;
}

const styles = StyleSheet.create<Styles>({
  safeArea: {
    position: "relative",
    flex: 1,
    backgroundColor: "#000000",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    minHeight: "85%",
  },
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    color: "white",
    position: "absolute",
    top: 220,
    fontSize: 50,
    fontWeight: "bold",
    textTransform: "uppercase",
    textShadowColor: "rgba(255, 255, 255, 0.75)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  },
  glow: {
    textShadowColor: "white",
    textShadowRadius: 20,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default App;
