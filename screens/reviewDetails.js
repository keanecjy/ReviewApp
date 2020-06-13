import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { globalStyles, images } from "../styles/global";
import Card from "../shared/card";

export default function ReviewDetails({ route }) {
  const { title } = route.params;
  const { body } = route.params;
  const { rating } = route.params;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text> {title} </Text>
        <Text> {body} </Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={images.rating[rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 10,
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
