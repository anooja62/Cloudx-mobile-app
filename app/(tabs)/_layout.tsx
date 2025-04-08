import { Tabs } from "expo-router";
import {
  TouchableOpacity,
  Alert,
  View,
  Text,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as DocumentPicker from "expo-document-picker";
import { useTheme } from "../../src/context/ThemeContext"; // path as per your project

export default function TabLayout() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleFileUpload = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        copyToCacheDirectory: true,
      });

      if (result?.assets && result.assets.length > 0) {
        Alert.alert("📁 File Selected", result.assets[0].name);
      }
    } catch (error) {
      console.error("File pick error:", error);
      Alert.alert("Error", "Something went wrong while selecting file.");
    }
  };

  const tabBarStyle = {
    position: "absolute",
    backgroundColor: isDark ? "#1c1c1e" : "#f2f2f2",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: 90,
    borderTopWidth: 0,
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle,
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={focused ? "#ffd33d" : isDark ? "#fff" : "#111"}
            />
          ),
        }}
      />

      {/* Upload Button */}
      <Tabs.Screen
        name="upload"
        options={{
          tabBarButton: () => (
            <TouchableOpacity
              onPress={handleFileUpload}
              activeOpacity={0.8}
              style={{
                position: "absolute",
                top: -30,
                left: "50%",
                transform: [{ translateX: -35 }],
                backgroundColor: isDark ? "#fff" : "#2c2c2e",
                width: 70,
                height: 70,
                borderRadius: 35,
                justifyContent: "center",
                alignItems: "center",
                shadowColor: "#000",
                shadowOpacity: 0.3,
                shadowOffset: { width: 0, height: 3 },
                shadowRadius: 5,
                elevation: 5,
              }}
            >
              <Ionicons
                name="cloud-upload-outline"
                size={30}
                color={isDark ? "#000" : "#fff"}
              />
            </TouchableOpacity>
          ),
        }}
      />

      {/* Profile Tab */}
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={24}
            
              color={focused ? "#ffd33d" : isDark ? "#fff" : "#111"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
