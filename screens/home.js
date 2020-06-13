import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import { FlatList } from "react-native-gesture-handler";

export default function Home({ navigation }) {
  const [reviews, setReview] = useState([
    { title: "Zelda", rating: 5, body: "very good", key: 1 },
    { title: "Pokemon", rating: 4, body: "very good", key: 2 },
    { title: "FFF", rating: 3, body: "very good", key: 3 },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
