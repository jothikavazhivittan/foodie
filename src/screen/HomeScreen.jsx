import { ActivityIndicator, Modal, SafeAreaView, ScrollView, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputText from '../components/Common/Input/InputText'
import Img from '../components/Common/img/Img'
import { notification, profile } from '../assets/images'
import Word from '../components/Common/Word/Word'
import { C, F } from '../assets/constant/ColorsAndFont'
import { fS, SCREEN_HEIGHT, SCREEN_WIDTH } from '../assets/constant/FontSize'
import MenuComp from '../components/Menu/MenuComp'
import axios from 'axios'
import BottomNavigate from '../components/navigation/BottomNavigate'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/slice/productsSlice'

const HomeScreen = () => {
const [product,setProduct]=useState([])
const dispatch=useDispatch()
const [load,setLoad]=useState(true)

  const fetchDataList = async () => {
    console.log('dd');
    
    try {
      const response = await axios.get('https://dummyjson.com/products'); 
      console.log(response.data, 'data items'); 
      setProduct(response.data.json) 
      dispatch(setProducts(response.data.products));
      setLoad(false)
    } catch (err) {
      ToastAndroid.show('Somethink went wrong',ToastAndroid.SHORT)
      console.log('Error:', err); 
      setLoad(false)
    }
  };

  useEffect(() => {
    fetchDataList();
  }, []); 
  
  return (
    <>
    <SafeAreaView style={styles.container}>
      {load && (
        <Modal transparent={true} >
          <View  style={{alignItems:'center',justifyContent:'center',flex:1}}>
          <ActivityIndicator size={'large'} color={C.Sandle}/>
          </View>
        </Modal>
      )}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:fS(20)}}>
      <View style={styles.align}>
      <Img src={profile} width={55} height={55} resize={'contain'}/>
      <View style={{flex:1}}>
        <Word text={'Welcome,'} size={18} font={F.f2} color={C.Gray}/>
        <Word text={'Besnik Doe'} size={20} font={F.f3} color={C.Gray}/>
      </View>
      <View>
        <Img src={notification} width={30} height={30} resize={'contain'}/>
      </View>
      </View>
      <InputText/>
      <MenuComp/>
     
      </ScrollView>
      
    </SafeAreaView>
    <View style={{justifyContent:'flex-end'}}>
      <BottomNavigate/>
      </View>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    flex:1,
    paddingHorizontal:fS(20),
    width:SCREEN_WIDTH,
    height:SCREEN_HEIGHT
  },
  align:{
    flexDirection:'row',
    alignItems:'center',
    gap:10,
    marginTop:fS(25)
  }
})