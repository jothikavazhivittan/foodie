import React from 'react';
import {Image} from 'react-native';
import { fS } from '../../../assets/constant/FontSize';

const Img = ({
  width,
  per,
  resize,
  height,
  src,
  color,
  pb,
  pt,
  pl,
  pr,
  mb,
  mt,
  ml,
  mr,
  radius,
  minHeight,
  handledImageLoad,
}) => {
  return (
    <Image
      source={src}
      style={{
        width: per ? width + per : fS(width),
        height: per ? height + per : height ? fS(height) : 'auto',
        resizeMode: resize ? resize : 'contain',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: pb ? fS(pb) : null,
        paddingTop: pt ? fS(pt) : null,
        paddingLeft: pl ? fS(pl) : null,
        paddingRight: pr ? fS(pr) : null,
        marginBottom: mb ? fS(mb) : null,
        marginTop: mt ? fS(mt) : null,
        marginLeft: ml ? fS(ml) : null,
        marginRight: mr ? fS(mr) : null,
        borderRadius: radius ? fS(radius) : null,
        minHeight: minHeight ? fS(minHeight) : null,
        tintColor:
          color
      }}
      onLoad={handledImageLoad}
    />
  );
};

export default Img;
