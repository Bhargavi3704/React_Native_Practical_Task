import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function CounterScreen({ route }) {
  const { postTitle } = route.params;
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      {postTitle && <Text style={styles.title}>{postTitle}</Text>}

      <Text style={styles.body}>Press buttons below to increase or decrease the counter</Text>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={() => setCount(count - 1)}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <Text style={styles.counter}>{count}</Text>

        <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 5, textAlign: "center" },
  body: { fontSize: 16, marginBottom: 20, textAlign: "center", color: "#555" },
  counter: { fontSize: 40, marginHorizontal: 15 },
  buttons: { flexDirection: "row", alignItems: "center" },
  button: {
    backgroundColor: "#FF6347",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  buttonText: { color: "#fff", fontSize: 24, fontWeight: "bold" },
});

