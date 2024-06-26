import { Text, View } from "react-native";
import React from "react";
import { Redirect, router } from "expo-router";
import CustomButton from "../Components/CustomButton";

const App = () => {
  return (
    <View className="flex-1 items-center  min-h-[85vh] justify-center bg-[#212121]">
      <Text className="text-3xl text-white">U N I G O</Text>
      <CustomButton
        title="Continue with Login"
        handlepress={() => {
          router.push("/(auth)/login");
        }}
        containerStyles="w-full mt-7"
      />
    </View>
  );
};

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#0A0A0A",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     color: "white",
//     fontSize: 20,
//     fontWeight: "bold",
//     textAlign: "center",
//     lineHeight: 30,
//     marginTop: -6,
//     marginBottom: 20,
//     textTransform: "uppercase",
//   },
// });
