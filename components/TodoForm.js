import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

// You can import from local files

export default function TodoForm(props) {
  const [text, onChangeText] = React.useState('Gebe dein Todo ein');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({
      text: text,
      complete: false,
      id: uuidv4(),
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button
        onPress={handleSubmit}
        title="Submit"
        color="#841584"
        accessibilityLabel="Submit"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
