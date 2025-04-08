import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  useColorScheme,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();
  const theme = useColorScheme(); // 'light' or 'dark'

  const isDarkMode = theme === 'dark';

  const handleLogout = () => {
    Alert.alert('Logout', 'You have been logged out.');
    // Add logout logic (clear token, navigate, etc.) here
  };

  const goBack = () => {
    router.back();
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? '#000' : '#fff' },
      ]}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <Ionicons
            name="arrow-back"
            size={24}
            color={isDarkMode ? '#fff' : '#000'}
          />
        </TouchableOpacity>
        <Text
          style={[
            styles.headerTitle,
            { color: isDarkMode ? '#fff' : '#000' },
          ]}
        >
          Profile
        </Text>
      </View>

      {/* Profile Content */}
      <View style={styles.content}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={[
            styles.avatar,
            { borderColor: isDarkMode ? '#fff' : '#000' },
          ]}
        />

        <Text
          style={[styles.name, { color: isDarkMode ? '#fff' : '#111827' }]}
        >
          John Doe
        </Text>
        <Text
          style={[styles.email, { color: isDarkMode ? '#9ca3af' : '#4b5563' }]}
        >
          johndoe@example.com
        </Text>

        <TouchableOpacity
          style={[
            styles.logoutButton,
            {
              backgroundColor: isDarkMode ? '#fff' : '#111827',
            },
          ]}
          onPress={handleLogout}
        >
          <Ionicons
            name="log-out-outline"
            size={16}
            color={isDarkMode ? '#111827' : '#fff'}
          />
          <Text
            style={[
              styles.logoutText,
              { color: isDarkMode ? '#111827' : '#fff' },
            ]}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 16,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
    borderWidth: 2,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    marginBottom: 20,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  logoutText: {
    marginLeft: 8,
    fontWeight: '500',
  },
});
