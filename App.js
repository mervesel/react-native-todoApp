import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import Header from './src/components/Header';
import TodoItem from './src/components/TodoItem';
import AddTodo from './src/components/AddTodo';

const App = () => {
  const [todos, setTodos] = useState([
    {text: 'Buy coffe', key: '1'},
    {text: 'Go to shopping', key: '2'},
    {text: 'Do sport', key: '3'},
  ]);

  const pressHandler = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(todotext => todotext.key != key);
    });
  };

  const submitHandler = text => {
    if (text.length > 3) {
      setTodos(prevTodos => {
        return [{text: text, key: Math.random().toString()}, ...prevTodos];
      });
    } else {
      Alert.alert('Oops!', 'Todos must be over 3 characters long', [
        {text: 'Understood', onPress: () => console.log('Alert closed.')},
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
      console.log('dismiss keyboard')
    }}>
      <SafeAreaView style={styles.container}>
        <Header />
        <View>
          <AddTodo submitHandler={submitHandler} />
        </View>
        <View>
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <TodoItem pressHandler={pressHandler} item={item} />
            )}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'fff',
  },
});
