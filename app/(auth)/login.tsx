import { router } from "expo-router";
import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="px-4 py-6">
        <TouchableOpacity className="mb-4" onPress={() => router.back()}>
          <Image
            className="w-8 h-8"
            source={require("C:/dev/React-Native/CollEve/assets/icons8-back-80.png")}
          />
        </TouchableOpacity>

        {/* <Text className="text-white text-2xl font-bold mb-2">Sign in</Text> */}

        <View className="items-center mb-8">
          <Text className="text-white text-lg mb-2">Let's sign you in</Text>
          <Text className="text-white text-sm">
            Welcome back, you have been missed
          </Text>

          <Image
            className="w-60 h-40 bg-gray-500 rounded-lg mt-4 mb-8"
            source={require("C:/dev/React-Native/CollEve/assets/unigo_logo.png")}
          />
          {/* <View className="w-20 h-20 bg-gray-500 rounded-lg mt-4 mb-8" /> */}
        </View>

        <TextInput
          className="bg-gray-800 text-white rounded-lg p-4 mb-4"
          placeholder="Username, Email address, mobile number"
          placeholderTextColor="#6b7280"
        />

        <TextInput
          className="bg-gray-800 text-white rounded-lg p-4 mb-6"
          style={{ marginBottom: 50 }}
          placeholder="Password"
          placeholderTextColor="#6b7280"
          secureTextEntry
        />

        <TouchableOpacity className="bg-purple-600 rounded-lg p-4 items-center">
          <Text className="text-white text-lg font-semibold">login</Text>
        </TouchableOpacity>

        {/* <View
          style={{ marginTop: 100 }}
          className="flex-row justify-center mt-8 space-x-2"
        >
          <View className="w-2 h-2 bg-gray-500 rounded-full" />
          <View className="w-2 h-2 bg-gray-500 rounded-full" />
          <View className="w-2 h-2 bg-gray-500 rounded-full" />
        </View> */}

        {/* Placeholder for Unigo logo */}
      </View>
    </SafeAreaView>
  );
}
