import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import { C, F } from '../../assets/constant/ColorsAndFont';
import { bottomList } from '../StaticData/StaticList';
import { fS } from '../../assets/constant/FontSize';
import Img from '../Common/img/Img';
import Word from '../Common/Word/Word';

const BottomNavigate = ({bg}) => {
  const route = useRoute();
  const navigation = useNavigation();
  const [selectedId, setSelectedId] = useState(null);

  const handleClick = item => {
    setSelectedId(item?.id);
    console.log(item, 'hello');
    navigation.navigate(item?.navi);
  };
  return (
    <View
      style={[styles.headContainer, {backgroundColor: bg ? bg : '#white'}]}>
      {bottomList?.map((item, id) => {
        return (
          <TouchableOpacity
            style={{marginBottom: fS(10)}}
            key={id}
            onPress={() => handleClick(item)}>
            <View style={styles.container}>
              <Img
                src={item?.img}
                width={30}
                height={30}
                resize={'contain'}
                color={route?.name === item?.navi ? C.Sandle : C.Black}
              />
            </View>
            <Word
              text={item?.name}
              size={14}
              color={route?.name === item?.navi ? C.Sandle : C.Black}
              font={F.f2}
              tc={'center'}
              mt={9}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigate;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: fS(30),
  },
  headContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: fS(100),
    paddingHorizontal: fS(10),
    borderTopWidth: 1,
    zIndex: 1000,
  },
});
