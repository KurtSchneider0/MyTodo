import * as React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <TodoList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
  }
});
