import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";
import HomeScreen from "../screens/homeScreen";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to CloudX</Text>

      <Text style={styles.subText}>Secure Cloud Storage Solutions</Text>
      <HomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    paddingTop: "20%",
    //justifyContent: 'center',
  },
  text: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 16,
  },
  subText: {
    color: "#fff",
    fontSize: 18,
  },
});
