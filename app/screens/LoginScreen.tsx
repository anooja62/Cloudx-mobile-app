import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

import { useGoogleAuth } from "../../useGoogleAuth";

export default function LoginScreen() {
  const { promptAsync, request } = useGoogleAuth();

  const router = useRouter();

 

  return (
    <View style={styles.root}>
      <View style={styles.card}>
        <Text style={styles.title}>CloudX Login</Text>
        <Text style={styles.subtitle}>Secure Cloud Storage Solutions</Text>

        <TouchableOpacity style={styles.googleButton} onPress={() => promptAsync()}
        disabled={!request}>
          <Image
           source={require("../../assets/images/google.png")}
            style={styles.googleIcon}
          />
          <Text style={styles.googleButtonText}>Sign in with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#0f172a",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  card: {
    backgroundColor: "#1e293b",
    padding: 32,
    borderRadius: 16,
    width: "100%",
    maxWidth: 360,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 10,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#cbd5e1",
    marginBottom: 32,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: "100%",
    justifyContent: "center",
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleButtonText: {
    color: "#111",
    fontWeight: "500",
    fontSize: 16,
  },
});
