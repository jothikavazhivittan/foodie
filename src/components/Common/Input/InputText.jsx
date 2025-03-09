import { StyleSheet, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { fS } from '../../../assets/constant/FontSize';
import { C, F } from '../../../assets/constant/ColorsAndFont';
import Img from '../img/Img';
import { search } from '../../../assets/images';

const InputText = () => {
  const [searchs,setSearch]=useState('')
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.inputContainer} 
        placeholder="Search..." 
      value={searchs}
      onChangeText={(e)=>setSearch(e)}
        placeholderTextColor={C.Gray1} 
      />
      <Img src={search} width={30} height={30} resize="contain"  />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: fS(60),
    borderWidth: 1,
    borderColor: C.Sandle,
    borderRadius: fS(30),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: fS(20),
    justifyContent: 'space-between',
    marginTop:fS(20)
  },
  inputContainer: {
    fontFamily: F.f2,
    color: 'black',
    fontSize: fS(20),
    flex:1
  },
 
});
