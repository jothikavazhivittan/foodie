import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomNavigate from '../components/navigation/BottomNavigate'
import { F } from '../assets/constant/ColorsAndFont'
import Word from '../components/Common/Word/Word'

const ProfileScreen = () => {
  return (
    <View style={{flex:1,position:'relative',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
      <Word text={'Profile'} size={32} font={F.f2} color={'black'} tc={'center'}/>
      <View style={{position:'absolute',bottom:0}}>
      <BottomNavigate/>
      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})