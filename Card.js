import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Animated,
  TouchableOpacity,
} from "react-native";

export default class Card extends React.Component {
  render() {
    const { removeItem, item } = this.props;
    const { uri, title, description, key } = item;
    return (
      <Animated.View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => removeItem(key)}
          style={styles.container}
        >
          <Image style={styles.thumbnail} source={{ uri }} />
          <View style={styles.metaDataContainer}>
            <View style={styles.metaDataContent}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.description}>{description}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    elevation: 3,
    borderColor: "gray",
    borderRadius: 5,
    flexDirection: "row",
    marginHorizontal: 20,
  },
  metaDataContainer: {
    flex: 1,
  },
  thumbnail: {
    width: 100,
  },
  metaDataContent: {
    marginTop: 5,
    marginLeft: 15,
  },
  title: {
    color: "#444",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "serif",
  },
  description: {
    fontSize: 16,
    color: "#888",
    fontWeight: "700",
  },
});
