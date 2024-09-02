import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';

export default function App() {
  const [item, setItem] = useState('');
  const [shoppingList, setShoppingList] = useState([]);

 
  const addItem = () => {
    if (item.trim().length > 0) {
      setShoppingList([...shoppingList, item.trim()]);
      setItem('');
    }
  };


  const clearList = () => {
    setShoppingList([]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder=" "
          value={item}
          onChangeText={setItem}
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <Button title="Add" onPress={addItem} />
        <Button title="Clear" onPress={clearList} />
      </View>

      <Text style={styles.shopTitle}>Shopping List</Text>

      <FlatList
        data={shoppingList}
        renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 50, 
    alignItems: 'center',
  },
  inputContainer: {
    marginBottom: 16,
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    paddingHorizontal: 8,
    textAlign: "center",
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',       
    justifyContent: 'center',   
    marginVertical: 16,         
  },
  listItem: {
    fontSize: 18,
    textAlign: 'left',
  
  },
  shopTitle: { 
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
  },
  shopItem: {
    textAlign: 'center',
    padding: 10,
    fontSize: 16,
  },
  list: {
    alignItems: 'center', 
  },
});