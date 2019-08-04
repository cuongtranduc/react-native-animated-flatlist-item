import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  UIManager,
  LayoutAnimation,
  TouchableOpacity
} from 'react-native';
import Card from "./Card";

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);
const imageUrl =
  "https://kenh14cdn.com/2019/2/24/3561716420480213454575853861059020806684672n-15510057259571546306615.jpg";
const cards = [
  {
    key: 0,
    uri: imageUrl,
    title: "Pretty girl",
    description: "blah blah..."
  }
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards
    };
  }

  setAnimation = () => {
    LayoutAnimation.configureNext({
      duration: 250,
      update: {
        type: LayoutAnimation.Types.easeIn,
        springDamping: 0.7
      }
    });
    LayoutAnimation.configureNext({
      duration: 500,
      create: {
        type: LayoutAnimation.Types.easeIn,
        property: LayoutAnimation.Properties.scaleXY,
        springDamping: 0.7
      }
    });
  };

  addItem = (() => {
    let key = cards.length;

    return () => {
      const { cards } = this.state;

      cards.unshift({
        key,
        uri: imageUrl,
        title: "Pretty girl",
        description: "blah blah...",
        animated: true
      });

      this.setAnimation();

      this.setState({
        cards: cards.slice(0)
      });
      key++;
    };
  })();

  removeItem = key => {
    const { cards } = this.state;
    this.setAnimation();
    this.setState({
      cards: cards.slice().filter(card => card.key !== key)
    });
  };

  renderItem = ({ item }) => <Card item={item} removeItem={this.removeItem} />;

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.paragraph}
          data={this.state.cards}
          renderItem={this.renderItem}
          ItemSeparatorComponent={() => <View style={{ marginTop: 10 }} />}
          keyExtractor={item => item.key.toString()}
        />
        <TouchableOpacity style={styles.addButton} onPress={this.addItem}>
          <Text style={styles.addIcon}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#FFF"
  },
  paragraph: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e",
    paddingBottom: 10
  },
  addButton: {
    height: 60,
    width: 60,
    elevation: 3,
    borderColor: "#00F",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 25,
    right: 25
  },
  addIcon: {
    fontSize: 35,
    color: "gray",
    textAlign: "center"
  }
});
