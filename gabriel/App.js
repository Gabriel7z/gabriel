import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Botao from './components/Botao';
import Filho from './components/Filho';
import Pai from './components/Pai';

export default function App() {
  return (
    <View style={styles.container}>
      <Pai/>
      <Botao/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
