import { Stack } from 'expo-router';
import { ThemeProvider } from '@context/ThemeContext';
import { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage'; // for real token usage
import LoginScreen from './screens/LoginScreen';

export default function RootLayout() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // fake auth state

  useEffect(() => {
    const checkAuth = async () => {
      // Replace with real token logic if needed
      const token = null;
      setIsLoggedIn(!!token);
      setLoading(false);
    };

    checkAuth();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#3b82f6" />
      </View>
    );
  }

  return (
    <ThemeProvider>
      {isLoggedIn ? (
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="+not-found" />
        </Stack>
      ) : (
        <LoginScreen />
      )}
    </ThemeProvider>
  );
}
