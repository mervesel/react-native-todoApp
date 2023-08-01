import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image, View} from 'react-native';

const TodoItem = ({item, pressHandler}) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.imageTextContainer}>
        <Image
          source={require('../assets/delete.png')}
          style={{
            height: 30,
            width: 30,
            tintColor: 'coral'
          }}
        />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  imageTextContainer: {
    padding: 20,
    margin: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderStyle: 'dashed',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    marginLeft: 20
  }
});
