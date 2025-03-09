import { SafeAreaView, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import Word from '../components/Common/Word/Word';
import { F } from '../assets/constant/ColorsAndFont';
import { fS, SCREEN_HEIGHT, SCREEN_WIDTH } from '../assets/constant/FontSize';
import Img from '../components/Common/img/Img';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { back } from '../assets/images';
import BottomNavigate from '../components/navigation/BottomNavigate';

const CartScreen = () => {
    const cartItems = useSelector(state => state.cart.cartItems); 
    console.log(cartItems,'cartitems');
    const navi=useNavigation()
    const totalAmount = cartItems?.reduce((total, item) => total + item.totalPrice, 0);
    const handledPress=()=>{
      AsyncStorage.setItem('cart',JSON.stringify(cartItems))
      ToastAndroid.show('Order as been update',ToastAndroid.SHORT)
      navi.navigate('home')
    }
  return (
    <>
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:fS(20)}}>
<View style={{flexDirection:'row',alignItems:'center',gap:15}}>
        <TouchableOpacity onPress={()=>navi.goBack()}>
            <Img src={back} width={30} height={30} resize={'contain'} mt={20}/>
        </TouchableOpacity>
        <Word text={'Cart'} size={26} font={F.f3} color={'black'} mt={20}/>
        </View>        
        <View>
          {cartItems?.map((item,id)=>{
            return(
              <View style={styles.allign} key={id}>
                        <Word text={`${id+1}.`} size={16} font={F.f2} color={'black'} mt={20}/>

                <Img src={{uri:item?.thumbnail}} width={120} height={120} resize={'contain'}/>
                <Word text={item?.brand} size={20} font={F.f2} color={'black'}/>
              <Word text={`Qty: ${item?.quantity}`} size={20} font={F.f2} color={'black'}/>
                <Word text={`Amt: ₹${item?.totalPrice.toFixed(2)}`} size={20} font={F.f2} color={'black'}/>
              </View>
            )
          })}
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-end',marginTop:fS(20)}}>
          <Word text={'Total Amount:'} size={22} font={F.f2} color={'black'}/>
          <Word text={`₹${totalAmount.toFixed(2)}`} size={22} font={F.f3} color={'red'}/>
          </View>
        </View>
        <View style={{flex:1,justifyContent:'flex-end',marginBottom:20}}>
 <TouchableOpacity  onPress={handledPress} style={styles.btncontainer}>
  <Word text={'Checkout'} size={22} font={F.f3} color={'white'} tc={'center'}/>
    </TouchableOpacity>
            </View>
            </ScrollView>
            </SafeAreaView>
            <View style={{justifyContent:'flex-end'}}>
      <BottomNavigate/>
      </View>
            </>
  )
}

export default CartScreen

const styles = StyleSheet.create({
    container:{
      backgroundColor:'white',
      flex:1,
      paddingHorizontal:fS(20),
      width:SCREEN_WIDTH,
      height:SCREEN_HEIGHT
    },
    allign:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between'
    },
    btncontainer:{
      width:'100%',
      height:fS(70),
      backgroundColor:'#621708',
      alignItems:'center',
      justifyContent:"center",
      borderRadius:fS(20),
      marginTop:fS(20),
    
  },
})