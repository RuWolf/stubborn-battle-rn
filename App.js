import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Button, StyleSheet } from 'react-native';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState('');
  const [count, setCount] = useState(0);

  const test = async() => {
    try {
      const response = await fetch(`https://agile-waters-89367.herokuapp.com/api/init`, {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
      });
      let result = await response.json();
      setData(result.result)
    } catch {
      setData('error')
    }
  }

  click = () => {
    setCount(count => count+1)
  }

  return (
    <View style={styles.container}>
        <Text style={styles.countText}>{count}</Text>
        <Button onPress={click} title='name' style={styles.button}></Button>
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 24, 
    justifyContent: 'space-between' 
  },
  button: {
    width: 50,
    height: 50,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  countText: {
    fontSize: 58,
    textAlign: 'center',
    paddingVertical: 60,
    color: 'blue',
  }

});
