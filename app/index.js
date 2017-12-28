import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Routes from "./screens/Routes";
import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyCFf5qC5d1FB0JRiZ9pIz4yIGm2M3ZHQO8",
  authDomain: "reactnative-todo-e3953.firebaseapp.com",
  databaseURL: "https://reactnative-todo-e3953.firebaseio.com",
  projectId: "reactnative-todo-e3953",
  storageBucket: "reactnative-todo-e3953.appspot.com",
  messagingSenderId: "663174199646"
};
firebase.initializeApp(config);

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Routes />
      </View>
    );
  }
}
