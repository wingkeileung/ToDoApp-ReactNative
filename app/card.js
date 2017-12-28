import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

export default class Card extends Component {
  render() {
    return (
      <View key={this.props.keyVal} style={styles.cardContainer}>
        <View style={styles.text}>
          <Text>{this.props.note.note}</Text>
          <Text>Date: {this.props.note.date}</Text>
        </View>
        <View style={styles.deleteButton}>
          <TouchableOpacity onPress={this.props.onPress}>
            <Text
              style={{ justifyContent: "center", color: "black", fontSize: 15 }}
            >
              Done
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    width: "90%",
    flexDirection: "row",
    height: 70,
    borderWidth: 3,
    borderRadius: 4,
    borderColor: "darkgray",
    marginTop: 5,
    marginLeft: "5%"
  },
  text: {
    flex: 5
  },
  deleteButton: {
    justifyContent: "center",
    flex: 0.8,
    backgroundColor: "yellow"
  }
});
