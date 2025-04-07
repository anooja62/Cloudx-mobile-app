import { Tabs } from 'expo-router';
import { TouchableOpacity, Alert } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as DocumentPicker from 'expo-document-picker';

export default function TabLayout() {
  const handleFileUpload = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({ copyToCacheDirectory: true });
      if (result?.assets && result.assets.length > 0) {
        Alert.alert('File Selected', result.assets[0].name);
        // You can upload the file here
      }
    } catch (error) {
      console.error('File pick error:', error);
    }
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#1c1c1e',
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          height: 100,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={24}
              color={focused ? '#ffd33d' : '#fff'}
            />
          ),
        }}
      />

      {/* Upload as FAB – no navigation */}
      <Tabs.Screen
        name="upload"
        options={{
        
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              onPress={handleFileUpload}
              style={{
                top: -30,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                width: 60,
                height: 60,
                borderRadius: 30,
                shadowColor: '#000',
                shadowOpacity: 0.3,
                shadowOffset: { width: 0, height: 3 },
                shadowRadius: 4,
              }}
            >
              <Ionicons name="cloud-upload-outline" size={28} color="#000" />
            </TouchableOpacity>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              size={24}
              color={focused ? '#ffd33d' : '#fff'}
            />
          ),
        }}
      />
    </Tabs>
  );
}
