import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';

export default (props) => (
  <View style={styles.view}>
    <Text
      onPress={props.toggleComplete}
      style={{
        fontSize: 16,
        textDecorationLine: props.todo.complete ? 'line-through' : '',
      }}>
      {props.todo.text}
    </Text>
    <Button
      onPress={props.deleteTodo}
      title="X"
      color="#841584"
      accessibilityLabel="Delete"
    />
  </View>
);

const styles = StyleSheet.create({
  view: {
	  borderWidth: 4,
    borderColor: "#841584",
    padding: 5,
    margin: 5
  },
});
