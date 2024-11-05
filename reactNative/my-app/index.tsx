import React, { useState } from "react";  
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "./src/pages/login/styles";
import logo from './assets/images/logoMarquei.jpeg';
import { MaterialIcons } from "@expo/vector-icons";
import { themes } from "@/src/global/themes";
export default function Login() {

        const [email, setEmail] = useState(''); //hook para email
        const [senha, setSenha] = useState(''); //hook para senha


        function getLogin(){
            try{
                if(!email || !senha){
                    return Alert.alert('Atenção', 'Informe os campos obrigatórios')
                }else
                if(email == '' || senha == ''){
                    alert('Preencha todos os campos');
                }else{
                    alert('Login efetuado com sucesso');
                }
            }catch(e){
                    alert('Erro ao efetuar login');
                }
        }
                

        return(
            <View style ={styles.container}>
                <Text>Tela de login</Text>
                <Text>Meu primeiro app</Text>
                <View style ={styles.boxTop}>
                        <Image source={require('../../../assets/images/logoMarquei.jpeg')}
                        style={styles.logo}
                        resizeMode='contain' />
                        <Text style= {styles.text}>Bem vindo de volta!</Text>
                </View>
                <View style = {styles.boxMid}>
                    <TextInput style={styles.titleInput} placeholder = "Email"/>
                    <View style={styles.boxInput}>
                        <TextInput
                            style={styles.input}
                            placeholder = "Senha"
                            value="email"
                            onChangeText={(e) => setEmail(e)}
                        />
                        <MaterialIcons
                            name="email"
                            size={24}
                            color={themes.colors.text}
                        />
                    </View>
                    <TextInput style={styles.titleInput} placeholder = "Senha"/>
                    <View style={styles.boxInput}>
                        <TextInput
                            style={styles.input}
                            placeholder="Senha"
                            value="senha"
                            onChangeText={setSenha}
                        />
                        <MaterialIcons
                            name="remove-red-eye"
                            size={20}
                            color={themes.colors.text}
                        />
                    </View>
                    
                </View>
                <View style = {styles.boxBottom}>
                        <TouchableOpacity style={styles.button} onPress={()=>getLogin()}>
                            <Text style={styles.textButton}>Entrar</Text>
                        </TouchableOpacity>
                </View>
                <Text style={styles.textbottom}>Não tem conta <Text style={styles.textBottomCreate}>Crie agora!</Text></Text>
            </View>
        )
}