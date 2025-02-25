import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomNavigate from '../components/navigation/BottomNavigate'
import Word from '../components/Common/Word/Word'
import { F } from '../assets/constant/ColorsAndFont'

const OrderScrenn = () => {
  return (
    <View style={{flex:1,position:'relative',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
    <Word text={'Order'} size={32} font={F.f2} color={'black'} tc={'center'}/>
    <View style={{position:'absolute',bottom:0}}>
    <BottomNavigate/>
    </View>
  </View>
  )
}

export default OrderScrenn

const styles = StyleSheet.create({})