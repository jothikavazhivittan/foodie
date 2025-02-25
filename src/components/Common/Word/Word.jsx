import React from 'react';
import {Text} from 'react-native';
import { F } from '../../../assets/constant/ColorsAndFont';
import { fS } from '../../../assets/constant/FontSize';

const Word = ({
  size,
  font,
  color,
  text,
  line,
  tc,
  pb,
  pt,
  pl,
  pr,
  mb,
  mt,
  ml,
  mr,
  lh,
  tv,
  textDecorationLine,
}) => {
  return (
    <Text
      numberOfLines={line}
      style={{
        textAlign: tc ? tc : 'left',
        fontSize: fS(size),
        paddingBottom: pb ? fS(pb) : null,
        paddingTop: pt ? fS(pt) : null,
        paddingLeft: pl ? fS(pl) : null,
        paddingRight: pr ? fS(pr) : null,
        marginBottom: mb ? fS(mb) : null,
        marginTop: mt ? fS(mt) : null,
        marginLeft: ml ? fS(ml) : null,
        marginRight: mr ? fS(mr) : null,
        lineHeight: lh ? fS(lh) : null,
        textDecorationLine: textDecorationLine,
      
        fontFamily:
          font,
        color:
          color
      }}>
      {text}
    </Text>
  );
};

export default Word;
