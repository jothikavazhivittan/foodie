import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Word from '../components/Common/Word/Word'
import { F } from '../assets/constant/ColorsAndFont'
import Img from '../components/Common/img/Img'
import { fS, SCREEN_HEIGHT, SCREEN_WIDTH } from '../assets/constant/FontSize'
import moment from 'moment'
import { back } from '../assets/images'
import { useNavigation } from '@react-navigation/native'
import BottomNavigate from '../components/navigation/BottomNavigate'

const OrderHistoryScreen = () => {
    const navi=useNavigation()
    const [list,setList]=useState([])
    const getOrderHistory=async()=>{
       let orderHistory=await AsyncStorage.getItem('cart')
            console.log(orderHistory,'order history list');
            if(orderHistory){
            setList(JSON.parse(orderHistory))
            }else{
                setList([])
            }
    
    }
    useEffect(()=>{
        getOrderHistory()
    },[])
    console.log(list,'list');
    
  return (
    <>
    <SafeAreaView style={styles.cont}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:fS(20)}}>
       <View style={{flexDirection:'row',alignItems:'center',gap:15}}>
        <TouchableOpacity onPress={()=>navi.goBack()}>
            <Img src={back} width={30} height={30} resize={'contain'} mt={20}/>
        </TouchableOpacity>
        <Word text={'Order History'} size={26} font={F.f3} color={'black'} mt={20}/>
        </View>
        <View>
        {list?.map((item,id)=>{
            return(
                <View style={styles.container} key={id}>
                    <Word text={`${id+1}.`} font={F.f3} color={'black'} size={20}/>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <Img src={{uri:item?.thumbnail}} width={120} height={120} resize={'contain'}/>
                             <View style={styles.textContainer}>
               
                <View style={styles.allign}>
                <Word text={item?.brand} size={20} font={F.f2} color={'black'} />
                <Word text={moment(item?.date).format('DD/MM/YYYY')} font={F.f2} color={'black'} size={16}/>
                </View>
                <View style={styles.allign}>
                <Word text={`Quantity:${item?.quantity}`} size={20} font={F.f2} color={'black'} />
                <Word text={`Price:${item?.totalPrice.toFixed(2)}`} size={20} font={F.f2} color={'black'} />
</View>
                </View>

                </View>
            </View>
            )
        })}
       </View>
       </ScrollView>
       
        </SafeAreaView>
        <View style={{justifyContent:'flex-end'}}>
      <BottomNavigate/>
      </View>
        </>
  )
}

export default OrderHistoryScreen

const styles = StyleSheet.create({
     container: {
        width: '100%',
        paddingVertical: fS(10),
        borderRadius: fS(20),
        backgroundColor: '#F2E5BF',
        shadowColor: 'white',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.24,
        elevation: 5,
        padding: fS(10),
        marginTop: fS(20),
      },
      allign:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
      },
      textContainer: {
        flex: 1,
      },
      cont:{
        flex:1,
        backgroundColor:'white',
        width:SCREEN_WIDTH,
        height:SCREEN_HEIGHT,
        paddingHorizontal:fS(20)
      }
})