import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const recentFiles = [
  {
    name: "ANOOJA M-Full stack developer.pdf",
    date: "05/03/2025",
    size: "411.51 KB",
    type: "pdf",
  },
  {
    name: "Screenshot 2025-03-04 at 11.12.31 AM.png",
    date: "04/03/2025",
    size: "57.59 KB",
    type: "image",
  },
  {
    name: "Screenshot 2025-03-01 at 12.45.35 PM.png",
    date: "03/03/2025",
    size: "849.12 KB",
    type: "image",
  },
  {
    name: "Screenshot 2025-03-03 at 1.23.38 PM.png",
    date: "03/03/2025",
    size: "70.24 KB",
    type: "image",
  },
  {
    name: "Terminal Saved Output.txt",
    date: "03/03/2025",
    size: "3.72 KB",
    type: "text",
  },
];

const getFileIcon = (type: string) => {
  switch (type) {
    case "pdf":
      return <Ionicons name="document" size={24} color="#ff6b6b" />;
    case "image":
      return <Ionicons name="image" size={24} color="#ffd93d" />;
    case "text":
      return <Ionicons name="document-text" size={24} color="#ccc" />;
    default:
      return <Ionicons name="document-outline" size={24} color="#ccc" />;
  }
};

export default function HomeScreen() {
  return (
    <View style={styles.container} >
 
      <Text style={styles.subHeading}>Recent Files</Text>

      <FlatList
   
        data={recentFiles}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.fileCard}>
            <View style={styles.fileInfo}>
              {getFileIcon(item.type)}
              <View style={styles.textBlock}>
                <Text style={styles.fileName}>{item.name}</Text>
                <Text style={styles.meta}>
                  {item.date} • {item.size}
                </Text>
              </View>
            </View>
            <TouchableOpacity>
              <Ionicons name="ellipsis-vertical" size={20} color="#aaa" />
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor: "#111827",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  heading: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subHeading: {
    color: "#9ca3af",
    fontSize: 16,
    marginBottom: 20,
  },
  fileCard: {
    backgroundColor: "#1f2937",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  fileInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  textBlock: {
    maxWidth: "80%",
  },
  fileName: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 4,
  },
  meta: {
    color: "#9ca3af",
    fontSize: 12,
  },
});
