import React, {useState} from 'react'
import {Text, View, StyleSheet, TextInput, Button} from 'react-native'

export const AddTodo = () => {
  const [value, setValue]= useState('')
  return (
    <View style={styles.component}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
      />
      
      <Button 
        title='Добавить'
        onPress={}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  component:{

  },
  input:{

  },
  button: {

  }
})