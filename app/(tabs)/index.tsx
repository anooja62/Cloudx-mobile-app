import { Text, View, TouchableOpacity, StyleSheet } from "react-native";


import Recents from "../components/recents";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to CloudX</Text>

      <Text style={styles.subText}>Secure Cloud Storage Solutions</Text>
   <Recents/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    //alignItems: "center",
    paddingTop: "20%",
    //justifyContent: 'center',
  },
  text: {
    color: "#fff",
    fontSize: 30,
    marginBottom: 16,
    textAlign:'center'
  },
  subText: {
    color: "#fff",
    fontSize: 14,
    textAlign:'center'
  },
});
