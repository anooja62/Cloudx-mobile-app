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
          height: 90,
          borderTopWidth: 0,
        },
      }}
    >
      {/* Left: Home */}
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

      {/* Center: Upload (NO Navigation) */}
      <Tabs.Screen
        name="upload"
        options={{
         
          tabBarButton: (props) => (
            <TouchableOpacity
              onPress={handleFileUpload}
              style={{
                position: 'absolute',
                top: -30,
                left: '50%',
                transform: [{ translateX: -35 }],
                backgroundColor: '#fff',
                width: 70,
                height: 70,
                borderRadius: 35,
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: '#000',
                shadowOpacity: 0.3,
                shadowOffset: { width: 0, height: 3 },
                shadowRadius: 5,
                elevation: 5,
              }}
            >
              <Ionicons name="cloud-upload-outline" size={30} color="#000" />
            </TouchableOpacity>
          ),
        }}
      />

      {/* Right: Profile */}
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
