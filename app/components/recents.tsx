import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;
const numColumns = 3;
const cardSize = (screenWidth - 40 - 16 * 2) / numColumns;

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
    uri: "https://via.placeholder.com/100",
  },
  {
    name: "Screenshot 2025-03-01 at 12.45.35 PM.png",
    date: "03/03/2025",
    size: "849.12 KB",
    type: "image",
    uri: "https://via.placeholder.com/100",
  },
  {
    name: "Screenshot 2025-03-03 at 1.23.38 PM.png",
    date: "03/03/2025",
    size: "70.24 KB",
    type: "image",
    uri: "https://via.placeholder.com/100",
  },
  {
    name: "Terminal Saved Output.txt",
    date: "03/03/2025",
    size: "3.72 KB",
    type: "text",
  },
  {
    name: "files.png",
    date: "03/03/2025",
    size: "1.81 KB",
    type: "image",
    uri: "https://via.placeholder.com/100",
  },
];

export default function Recents() {
  const [isGridView, setIsGridView] = useState(true);

  const getFileIcon = (item: any) => {
    if (item.type === "image") {
      return (
        <Image
          source={{ uri: item.uri }}
          style={styles.imagePreview}
          resizeMode="cover"
        />
      );
    } else if (item.type === "pdf") {
      return <Ionicons name="document" size={40} color="#ff6b6b" />;
    } else if (item.type === "text") {
      return <Ionicons name="document-text" size={40} color="#60a5fa" />;
    } else {
      return <Ionicons name="document-outline" size={40} color="#ccc" />;
    }
  };

  const renderFileItem = ({ item }: any) => {
    return (
      <View style={isGridView ? styles.gridItem : styles.listItem}>
        {isGridView ? (
          <View style={styles.previewContainer}>{getFileIcon(item)}</View>
        ) : (
          <View style={styles.listPreview}>{getFileIcon(item)}</View>
        )}
  
        <View style={isGridView ? styles.details : styles.listDetails}>
          <Text
            style={[styles.fileName, !isGridView && styles.truncatedFileName]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {item.name}
          </Text>
          <Text style={styles.meta}>
            {item.date} • {item.size}
          </Text>
        </View>
  
        <TouchableOpacity style={styles.menu}>
          <Ionicons name="ellipsis-vertical" size={18} color="#aaa" />
        </TouchableOpacity>
      </View>
    );
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.toggleWrapper}>
        <Text style={styles.subHeading}>Recent Files</Text>
        <View style={styles.toggleGroup}>
          <TouchableOpacity
            onPress={() => setIsGridView(false)}
            style={[
              styles.toggleOption,
              !isGridView && styles.activeToggleOption,
            ]}
          >
            <Ionicons
              name="list-outline"
              size={20}
              color={!isGridView ? "#111827" : "#fff"}
            />
            {!isGridView && (
              <Ionicons name="checkmark" size={14} color="#111827" />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setIsGridView(true)}
            style={[
              styles.toggleOption,
              isGridView && styles.activeToggleOption,
            ]}
          >
            <Ionicons
              name="grid-outline"
              size={20}
              color={isGridView ? "#111827" : "#fff"}
            />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={recentFiles}
        key={isGridView ? "grid" : "list"}
        keyExtractor={(item) => item.name}
        numColumns={isGridView ? numColumns : 1}
        renderItem={renderFileItem}
        contentContainerStyle={{ paddingBottom: 120 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#111827",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  toggleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
  },
  toggleButton: {
    backgroundColor: "#374151",
    padding: 10,
    borderRadius: 10,
  },
  subHeading: {
    color: "#9ca3af",
    fontSize: 14,
    //marginBottom: 12,
  },
  gridItem: {
    // backgroundColor: "#1f2937",
    width: cardSize,
    margin: 8,
    borderRadius: 12,
    alignItems: "center",
    padding: 12,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
   // backgroundColor: "#1f2937", // optional: helps define rows
  },
  

  previewContainer: {
    marginBottom: 10,
    alignItems: "center",
  },
  imagePreview: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: "#374151",
  },
  details: {
    alignItems: "center",
    justifyContent: "center",
  },
  fileName: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 4,
  },
  meta: {
    color: "#9ca3af",
    fontSize: 10,
    //textAlign: "center",
  },
  menu: {
    position: "absolute",
    //top: 8,
    right: 8,
  },
  toggleGroup: {
    flexDirection: "row",
    backgroundColor: "#374151",
    borderRadius: 50,
    padding: 4,
    gap: 4,
  },

  toggleOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 50,
  },

  activeToggleOption: {
    backgroundColor: "#fff",
  },
  truncatedFileName: {
    maxWidth: 200, // adjust as needed based on screen size and layout
    textAlign: "left",
  },
  listPreview: {
    marginRight: 12,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  
  listDetails: {
   // flex: 1,
    //justifyContent: "center",
  },
  
});
