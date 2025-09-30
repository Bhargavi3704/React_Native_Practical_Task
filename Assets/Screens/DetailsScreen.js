import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";

export default function DetailsScreen({ route, navigation }) {
  const { post } = route.params;
  const [loading, setLoading] = useState(false);

  const handleOpenCounter = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("CounterScreen", { postTitle: post.title });
    }, 500);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>

      <TouchableOpacity
        style={styles.counterButton}
        onPress={handleOpenCounter}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.counterButtonText}>Open Counter</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: "center", marginTop: 250 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10, textAlign: "center" },
  body: { fontSize: 16, textAlign: "center" },
  counterButton: {
    backgroundColor: "#FF6347",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginTop: 15,
    alignItems: "center",
  },
  counterButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

