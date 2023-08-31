import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function Botao() {
  return (
    <View>
      <TextInput style={styles.input}> </TextInput>
      <Button title='enviar' />
    </View>
  )
}

const styles = StyleSheet.create({
    input:{

       height: 40,
        margin: 10,
        borderWidth: 1,
        padding: 10,
       width: 200,
    
    }
})