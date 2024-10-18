import React from "react";
import { TouchableHighlight } from "react-native";
import { Text, View, StyleSheet } from 'react-native';

const MyButton = (props: { texto: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => {
    return (
      <TouchableHighlight style = {styles.button}>
        <Text>{props.texto}</Text>
      </TouchableHighlight>
    )
  }
  

  const styles = StyleSheet.create({
    texto:{
      fontSize:27,
      fontWeight:'bold',
      color:'#ffff',
      textAlign:'center'
    },
    button:{
      alignItems:'center',
      backgroundColor: '#00FFFF',
      padding: 10,
      margin:10,
      color:"#FFFF",
      borderRadius:7
    }
  });
  

  export default MyButton