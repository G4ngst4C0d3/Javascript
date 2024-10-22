import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import MyButton from './components/MyButton';


const App = () => {
  return (
    <View>
      <Text style = {styles.texto}>Olá, mundo!</Text>
      <MyButton texto ="Enviar"/>
    </View>
  );
}

export default App;


const styles = StyleSheet.create({
  texto:{
    fontSize:27,
    fontWeight:'bold',
    color:'#ffff',
    textAlign:'center',
    alignItems:'center',
  },
});
