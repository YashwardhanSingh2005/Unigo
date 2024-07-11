import { View, Text } from "react-native";
import React from "react";

interface FormFieldProps {
  otherStyles: string;
}

const FormField: React.FC<FormFieldProps> = ({ otherStyles }) => {
  return (
    <View className={`space-y-2 ${otherStyles} `}>
      <Text className="text-base ">FormField</Text>
    </View>
  );
};

export default FormField;
