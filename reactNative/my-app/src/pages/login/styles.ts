import { themes } from "@/src/global/themes";
import { Dimensions, StyleSheet } from "react-native";  

export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f5fcff',
        width:'100%'
    },
    boxTop:{
        flex:1,
        height:Dimensions.get('window').height/3,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
    boxMid:{
        flex:1,
        height:Dimensions.get('window').height/4,
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:34
    },
    boxBottom:{
        flex:1,
        height:Dimensions.get('window').height/3,
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        width:80,
        height:80
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:'#fff',
        marginTop:20
    },
    titleInput:{
        marginLeft:5,
        color:themes.colors.text,
        marginTop:20,
    },
    boxInput:{
        width:'100%',
        height:50,
        borderWidth:1,
        borderRadius:40,
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
        backgroundColor:themes.colors.background
    },
    input:{
        height:'100%',
        width:'90%',
        borderRadius:40,
        paddingLeft:5,

    },
    button:{
        width:250,
        height:50,
        backgroundColor:themes.colors.primary,
        borderRadius:40,
        justifyContent:'center',
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 5,
},
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
        textButton:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold'
    },
    textbottom:{
        fontSize:16,
        color:themes.colors.text,
        marginTop:20
    },
    textBottomCreate:{
        color:themes.colors.primary,
        fontSize:16
    }
})