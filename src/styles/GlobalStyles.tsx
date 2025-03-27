import { StyleSheet } from "react-native";
import { myColors } from "./Colors";

export const Styles = StyleSheet.create({
    btnBlue:{
        width:72,
        height:72,
        borderRadius:24,
        backgroundColor:myColors.blue,
        justifyContent:'center',
        alignContent:'center',
        margin:8
    },
    btnDark:{
        width:72,
        height:72,
        borderRadius:24,
        backgroundColor:myColors.dark,
        justifyContent:'center',
        alignContent:'center',
        margin:8
    },
    btnLight: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.white,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnGray:{
        width:72,
        height:72,
        borderRadius:24,
        backgroundColor:myColors.btnGray,
        justifyContent:'center',
        alignContent:'center',
        margin:8
    },
    smallTextLight:{
        fontSize:32,
        color:myColors.white,
    },
    smallTextDark:{
        fontSize:32,
        color:myColors.dark,
    },
    //Keyboard
    row:{
        maxWidth:'100%',
        flexDirection:'row',
    },
    viewBottom:{
        position:'absolute',
        bottom:30,
    },
    screenFirstNumber:{
        fontSize:96,
        color:myColors.gray,
        fontWeight:'200',
        alignSelf:'flex-end',
    },
    screenSecondNumber:{
        fontSize:40,
        color:myColors.gray,
        fontWeight:'200',
        alignSelf:'flex-end',
    },


});