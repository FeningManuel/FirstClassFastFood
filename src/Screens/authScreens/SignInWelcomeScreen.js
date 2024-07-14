import { StyleSheet, Text, View, Dimensions, TextInput, Image } from 'react-native';
import React, { useState, useRef } from 'react';
import { Icon, Button, SocialIcon } from 'react-native-elements';
import { colors, parameters } from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper'


const SignInWelcomeScreen = ({navigation}) => {
  return (
    <View style={{flex:1}}>
      <View style={{flex:3,justifyContent:"flex-start",alignItems:"center",paddingTop:20}}>
        <Text style={{fontSize:26,color:colors.buttons,fontWeight:"bold"}}>DISCOVER RESTAURANTS</Text>
        <Text style={{fontSize:26,color:colors.buttons,fontWeight:"bold"}}>IN YOUR AREA</Text>
    </View>

   <View style = {{flex:4, jsutifyContent:"center"}}>

    <Swiper autoplay = {true}>
        <View style = {styles.slide1}>
            <Image 
                 source = {{uri:"https://img.freepik.com/free-photo/delicious-food-white-plate_144627-34705.jpg?t=st=1720921133~exp=1720924733~hmac=b1c8042faa44002e39ebc74677554ea022e2a3eea6d5830ecfb285b15a7a6838&w=826"}}
                 style = {{height:"100%", width:"100%"}}
            />
        </View>
        <View style = {styles.slide2}>
            <Image 
                 source = {{uri:"https://img.freepik.com/free-photo/from-shrimps-batter-with-red-rice-greens-white-plate_176474-2654.jpg?t=st=1720920879~exp=1720924479~hmac=b4393191966a4a13e0a3d9cdbfb1098a3cdb8d5c5f4fd958d0ef20a4f63af577&w=826"}}
                 style = {{height:"100%", width:"100%"}}
            />
        </View>
        <View style = {styles.slide3}>
            <Image 
                 source = {{uri:"https://img.freepik.com/premium-photo/fufu-foofoo-foufou-fufuo-one-most-popular-food-native-ghanaian_101709-1146.jpg?w=740"}}
                 style = {{height:"100%", width:"100%"}}
            />
        </View>
        <View style = {styles.slide3}>
            <Image 
                 source = {{uri:"https://img.freepik.com/premium-photo/bowl-nasi-goreng-with-sesame-seeds_1179130-83580.jpg?w=826"}}
                 style = {{height:"100%", width:"100%"}}
            />
        </View>

    </Swiper>
    </View>

    <View style ={{flex:4, justifyContent:"flex-end",marginHorizontal: 20}}>
    <View style={{ marginHorizontal: 20, marginTop: 30 }}>
        <Button
          title="SIGN IN"
          buttonStyle={parameters.styledButton}
          titleStyle={parameters.buttonTitle}
          onPress={()=>{
            navigation.navigate("SignInScreen")
          }}
        />
      </View>
      
      <View style={{marginHorizontal:20, marginTop:30}}>
        <Button
          title="Create an account"
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
        />
      </View>
    </View>

    </View>
  )
}

export default SignInWelcomeScreen

const styles = StyleSheet.create({

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#9DD6EB"
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#97CAE5"
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#92BBD9"
    },
    createButton: {
        backgroundColor: "white",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 12,
        borderWidth:1,
        borderColor: "#ff8c52",
        height: 50,
        paddingHorizontal: 20,
        borderColor:colors.buttons
      },
      createButtonTitle: {
        color: colors.grey1,
        fontSize: 20,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -3,
      },
})