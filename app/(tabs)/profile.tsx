import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useTheme } from '../../src/context/ThemeContext'; // custom theme hook

export default function ProfileScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleLogout = () => {
    Alert.alert('Logout', 'You have been logged out.');
    // Add logout logic here
  };

  const goBack = () => {
    router.back();
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? '#000' : '#fff' },
      ]}
    >
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <Ionicons
            name="arrow-back"
            size={24}
            color={isDark ? '#fff' : '#000'}
          />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: isDark ? '#fff' : '#000' }]}>
          Profile
        </Text>
      </View>

      {/* Profile Content */}
      <View style={styles.content}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={[
            styles.avatar,
            { borderColor: isDark ? '#fff' : '#000' },
          ]}
        />

        <Text style={[styles.name, { color: isDark ? '#fff' : '#111827' }]}>
          John Doe
        </Text>
        <Text style={[styles.email, { color: isDark ? '#9ca3af' : '#4b5563' }]}>
          johndoe@example.com
        </Text>

        <TouchableOpacity
          style={[
            styles.logoutButton,
            {
              backgroundColor: isDark ? '#fff' : '#111827',
            },
          ]}
          onPress={handleLogout}
        >
          <Ionicons
            name="log-out-outline"
            size={16}
            color={isDark ? '#111827' : '#fff'}
          />
          <Text
            style={[
              styles.logoutText,
              { color: isDark ? '#111827' : '#fff' },
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
