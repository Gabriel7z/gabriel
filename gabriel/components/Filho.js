import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Filho(props) {

 function gerarNUmetoaleatorio(min, max){
  const delta = max - min
  const numeroAleatorio = Math.floor(Math.random() * delta) + min
  props.funcao(numeroAleatorio)
 }


  return (
    <View>
      

      <Button title='Gerar numr Aleatorio' onPress={() => {gerarNUmetoaleatorio(props.min, props.max)}}/>
      
    </View>
  )
}

const styles = StyleSheet.create({})