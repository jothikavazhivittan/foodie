import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Img from './Common/img/Img'
import { box, chappathi, wishlist } from '../assets/images'
import Word from './Common/Word/Word'
import { C, F } from '../assets/constant/ColorsAndFont'
import { fS, SCREEN_WIDTH } from '../assets/constant/FontSize'
import { menuList } from './StaticData/StaticList'

const MenuCard = () => {
  return (
    <View>   
{menuList?.map((item,id)=>{
    return(
        
   
       
    <View key={id}>
        <Img src={box} width={25} height={25} resize={'contain'}/>
        <View style={{flexDirection:'row'}}>
        <View style={{flex:1}}>
            <Word text={item?.name} 
            size={22} font={F.f2} color={'black'} mt={10}/>
            <Word text={item?.subtxt} size={20} font={F.f2} color={C.Gray}mt={10}/>
           <View style={styles.allign}>
            <Word text={item?.offerAmt} size={20} font={F.f2} color={'#4A4A4A'}textDecorationLine={'underline line-through'}
            mt={10}/>
            <Word text={item?.price} size={20} font={F.f4} color={'black'}mt={10}/>
            </View>
        </View>
        <View style={{position:'relative'}}>
            <Img src={item?.img_url} width={220} height={220}resize={'contain'} mt={-15}/>
            <TouchableOpacity style={{position:'absolute',right:10}}>
            <Img src={wishlist} width={30} height={30} resize={'contain'}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <Word text={'Add'} size={20} font={F.f2} color={'black'}/>
            </TouchableOpacity>
        </View>
        </View>
    
</View>
)
})}
    </View>
    
  )
}

export default MenuCard

const styles = StyleSheet.create({
    btn:{
        width:fS(180),
        height:fS(55),
        borderWidth:1,
        borderColor:C.Sandle,
        alignItems:"center",
        justifyContent:'center',
        borderRadius:fS(10),
        position:'absolute',
        bottom:-10,
        alignSelf:'center',
        backgroundColor:"white"
    },
    allign:{
        flexDirection:'row',
        alignItems:'center',
        gap:10
    }
})