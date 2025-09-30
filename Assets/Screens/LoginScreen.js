import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import Toast from "react-native-toast-message";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Please enter email and password",
      });
      return;
    }

    setLoading(true);

    Toast.show({
      type: "success",
      text1: "Login Info",
      text2: `Email: ${email}, Password: ${password}`,
      onHide: () => {
        setLoading(false);
        navigation.navigate("ListScreen");
      },
    });
  };

  return (
    <View style={styles.container}>
      <Image source={require("../Images/login.png")} style={styles.image} />
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Login</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    marginTop: 80,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: "contain",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 12,
    padding: 13,
    borderRadius: 25,
  },
  button: {
    backgroundColor: "#FF6347",
    borderRadius: 25,
    marginTop: 10,
    paddingVertical: 12,
    paddingHorizontal: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

