import React, { useEffect, useState, useRef } from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Animated, TouchableOpacity, Alert, Image } from "react-native";

export default function ListScreen({ navigation }) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                Alert.alert("Error", error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#FF6347" />
                <Text>Loading posts...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Posts</Text>

            {/* <Image
        source={{ uri: "https://i.imgur.com/N0g3X2X.png" }}
        style={styles.image}
      /> */}

            <FlatList
                data={posts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate("DetailsScreen", { post: item })}>
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>{item.title}</Text>
                            <Text style={styles.cardBody}>{item.body}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                ListFooterComponent={<Text style={styles.footer}>End of List</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10 },
    header: { fontSize: 22, fontWeight: "bold", marginBottom: 10, textAlign: "center" },
    image: { width: 80, height: 80, alignSelf: "center", marginBottom: 10 },
    item: { padding: 10, borderBottomWidth: 1, borderColor: "#ccc" },
    title: { fontSize: 16, fontWeight: "bold" },
    footer: { textAlign: "center", marginVertical: 10, fontStyle: "italic" },
    loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
    card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardBody: {
    fontSize: 14,
    color: "#555",
  },
});

