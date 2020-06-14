import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F4F4F4",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 6,
    textAlign: "center",
  },
});

export const images = {
  rating: {
    "1": require("../assets/ReviewImages/rating-1.png"),
    "2": require("../assets/ReviewImages/rating-2.png"),
    "3": require("../assets/ReviewImages/rating-3.png"),
    "4": require("../assets/ReviewImages/rating-4.png"),
    "5": require("../assets/ReviewImages/rating-5.png"),
  },
};
