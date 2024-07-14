import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHeader from '../components/HomeHeader'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { colors, parameters } from '../global/styles'
import { Icon } from 'react-native-elements'
import { useState } from 'react'

const HomeScreen = () => {

    const [delivery, setDelivery] = useState(true)
  return (
    <View style ={styles.container}>
      <HomeHeader />
    <ScrollView 
        stickyHeaderIndices={[0]}
        showsHorizontalScrollIndicator = {true}
    >
        <View>
      <View style={{marginTop:10,flexDirection:"row",justifyContent:"space-evenly"}}>
        <TouchableOpacity onPress={()=>{
            setDelivery(true)
        }}>
            <View style = {{...styles.deliveryButton, backgroundColor:delivery?colors.buttons :colors.grey4}}>
                       <Text style={styles.deliveryText}>Delivery</Text>
             </View>
          
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDelivery(false)}}>
            <View style = {{...styles.deliveryButton, backgroundColor:delivery?colors.grey4 :colors.buttons}}>
              <Text style={styles.deliveryText}>Pick Up</Text>
             </View>
          
        </TouchableOpacity>
      </View>

      <View st>
        <Icon
            type='material-community'
            name='map-marker'
            color={colors.grey1}
            size={26}
        /> 

        <Text>21st Bullets Street, Accra</Text>   
      </View>
      </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    deliveryButton:{
        paddingHorizontal: 20,
        borderRadius:15,
        paddingVertical:5
    },

    deliveryText:{
        marginLeft:5,
        fontSize:16
    }
})