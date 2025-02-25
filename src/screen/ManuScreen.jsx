import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native"
import Word from "../components/Common/Word/Word"
import { arrows, line, offer, search, time } from "../assets/images"
import Img from "../components/Common/img/Img"
import BottomNavigate from "../components/navigation/BottomNavigate"
import MenuCard from "../components/MenuCard"
import { fS, SCREEN_HEIGHT, SCREEN_WIDTH } from "../assets/constant/FontSize"
import { C, F } from "../assets/constant/ColorsAndFont"
import { useState } from "react"

const ManuScreen = () => {
  const schedule=[
    {id:1,name:'Breakfast'},
    {id:2,name:'Lunch'},
    {id:3,name:'Snacks'},
    {id:4,name:'Diner'},
  ]
  const [click,setClick]=useState('')
  const handledClick=(item)=>{
setClick(item?.id)
  }
  return (
    <SafeAreaView style={styles.container}> 
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:fS(30)}}>
    <View>

    <View style={styles.allign}>
    <Word text={'Menu'} size={22} font={F.f2} color={'black'}/>
    <TouchableOpacity>
     <Img src={search} width={30} height={30} resize={'contain'}/>
     </TouchableOpacity>
     
  </View>
  <View style={styles.offerContainer}>
    <Img src={offer} width={35} height={35} resize={'contain'}/>
    <Word text={'Special Price'} size={22} font={F.f2} color={'white'}/>
    <Word text={'On order within'} size={20} font={F.f1} color={'white'}/>
    <Word text={' 02:05:56'} size={20} font={F.f4} color={'white'}/>
    <Img src={time} width={30} height={30} resize={'contain'}/>

  </View>
  <ScrollView horizontal>

  <View style={[styles.allign,{gap:10,marginTop:fS(30)}]}>
  {schedule?.map((item,id)=>{
    return(
    <TouchableOpacity key={id} style={[styles.circle,{backgroundColor:click == item?.id ? C.Primary:'white'}]} onPress={()=>handledClick(item)}>
        <Word text={item?.name} size={22} font={F.f2} color={'black'}/>
        <Img src={time} width={25} height={25} resize={'contain'} color={'black'}/>
    </TouchableOpacity>
    )
  })}
  </View>
  </ScrollView>

  <View style={styles.allign}>
    <Word text={'12 items in breakfast'} size={20} font={F.f2} color={'black'}mt={15}/>
    <View style={{flexDirection:'row',alignItems:'center',gap:5,marginTop:fS(15)}}>
    <Img src={arrows} width={60} height={60} resize={'contain'}/>
    <Img src={line} width={60} height={60} resize={'contain'}/>
    </View>
  </View>
  <MenuCard/>
  </View>
  </ScrollView>
  <BottomNavigate/>
    </SafeAreaView>
  )
}

export default ManuScreen

const styles = StyleSheet.create({
  container:{
    width:SCREEN_WIDTH,
    height:SCREEN_HEIGHT,
    flex:1,
    backgroundColor:'white',
    paddingHorizontal:fS(20)
  },
  allign:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:fS(25)
  },
  offerContainer:{
    width:'100%',
    height:fS(55),
    backgroundColor:C.Sandle,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    gap:6,
    marginTop:fS(20)
  },
  circle:{
    paddingHorizontal:fS(20),
    paddingVertical:fS(10),
    backgroundColor:C.Primary,
    borderWidth:1,
    borderColor:'#7A2F0D',
    borderRadius:fS(30),
    flexDirection:'row',
    alignItems:'center',
    gap:10
  }
})