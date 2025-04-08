import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '../../src/context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import Recents from '../components/recents';

export default function Index() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const styles = getStyles(isDark);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />

      {/* Title */}
      <Text style={styles.text}>Welcome to CloudX</Text>
      <Text style={styles.subText}>Secure Cloud Storage Solutions</Text>

      {/* Theme toggle button */}
      <TouchableOpacity style={styles.iconButton} onPress={toggleTheme}>
        <Ionicons
          name={isDark ? 'sunny' : 'moon'}
          size={28}
          color={isDark ? '#facc15' : '#111'}
        />
      </TouchableOpacity>

      {/* Recent files list */}
      <Recents isDark={isDark} />
    </View>
  );
}

const getStyles = (isDark: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDark ? '#000' : '#fff',
      paddingTop: '20%',
     //alignItems: 'center',
    },
    text: {
      color: isDark ? '#fff' : '#111',
      fontSize: 30,
      marginBottom: 16,
      textAlign: 'center',
    },
    subText: {
      color: isDark ? '#ccc' : '#333',
      fontSize: 14,
      textAlign: 'center',
      marginBottom: 20,
    },
    iconButton: {
      marginBottom: 20,
      padding: 10,
      borderRadius: 30,
      width:60,
      backgroundColor: isDark ? '#1f2937' : '#e5e7eb',
      alignItems:'center',
      alignSelf:'center'
    },
  });
