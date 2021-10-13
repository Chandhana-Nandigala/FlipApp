import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

const SCREEN_HEIGTH = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
export const styles = StyleSheet.create({
    container:{
        flex:1,
        flexGrow:1,
        justifyContent:'center',
        alignItems:'center',
    },
    FrontView:{
        backgroundColor:'white',
        height:SCREEN_HEIGTH/2,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        marginLeft:27,
        marginTop:'30%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    frontText:{
        fontSize:RFValue(22),
        fontWeight:'bold',
        fontStyle:'italic'
    },
    backText:{
        fontSize:RFValue(18),
        fontWeight:'700',
        marginTop:40
    },
    views:{
        height:SCREEN_HEIGTH/2,
        width:'85%'
    },
    btns:{
        flex:1,
        justifyContent:'space-between',
        marginTop:SCREEN_HEIGTH/1.75,
        height:'20%',
        width:SCREEN_WIDTH,   
        flexDirection:'row',
    },
    paginationView:{
        top:SCREEN_HEIGTH/1.5,
        position:'absolute',
        left:'47%'
    },
    paginationText:{
        fontSize:RFValue(20),
    }
})
