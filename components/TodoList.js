import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';
import TodoForm from './TodoForm';
import Todo from './Todo';

export default function TodoList() {
  const [todos, setTodos] = React.useState([]);
  const [filter, setFilter] = React.useState('all');

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      })
    );
  };

  const changeFilter = (s) => {
    setFilter(s);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const deleteAllCompleteTodos = () => {
    setTodos(todos.filter((todo) => !todo.complete));
  };

  let filteredTodos = [];

  if (filter === 'all') {
    filteredTodos = todos;
  } else if (filter === 'active') {
    filteredTodos = todos.filter((todo) => !todo.complete);
  } else {
    filteredTodos = todos.filter((todo) => todo.complete);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Übrige Todos: {todos.filter((todo) => !todo.complete).length}</Text>
      <TodoForm onSubmit={addTodo} />
      {filteredTodos.map((todo) => (
        <Todo
          key={todo.id}
          toggleComplete={() => toggleComplete(todo.id)}
          todo={todo}
          deleteTodo={() => deleteTodo(todo.id)}
        />
      ))}
      <View style={{ display: 'flex' }}>
        {todos.filter((todo) => todo.complete).length !== 0 ? (
          <Button
            onPress={deleteAllCompleteTodos}
            title="Alle fertigen löschen"
            color="#841584"
            accessibilityLabel="Filter"
            style={styles.button}
          />
        ) : (
          <Text></Text>
        )}
        <Text style={styles.text}>{"\n"}Sortieren</Text>
        <Button
          onPress={() => changeFilter('all')}
          title="Alle"
          color="#841584"
          accessibilityLabel="Filter"
          style={styles.button}
        />
        <Button
          onPress={() => changeFilter('active')}
          title="Aktive"
          color="#841584"
          accessibilityLabel="Filter"
          style={styles.button}
        />
        <Button
          onPress={() => changeFilter('complete')}
          title="Fertige"
          color="#841584"
          accessibilityLabel="Filter"
          style={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 75,
    marginLeft: 50,
    marginBottom: 50,
    marginRight: 50,
  },
  button: {
    margin: 10,
    padding: 100
  },
  text: {
    fontSize: 20,
    fontStyle: "bold",
    alignSelf: "center",
  }
});
