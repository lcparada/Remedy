import { View, TouchableOpacity } from "react-native";

import styles from "./styles";

import { Feather } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

export default function FabButtonMedicine() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.circle}
        onPress={() => navigation.navigate("AddMedicine")}
      >
        <Feather name="plus" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}
