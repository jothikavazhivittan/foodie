import React from 'react';

import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
  PixelRatio,
  NativeModules,
} from 'react-native';

//Status Bar
// const {StatusBarManager} = NativeModules;
// export const STATUSBAR_HEIGHT =
//   Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

//Screen-Size
export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

const fontscale = SCREEN_WIDTH;
const imageScale = SCREEN_WIDTH / 320;

export function iS(size) {
  const newSize = size * imageScale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.get(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export function fS(size) {
  const newSize = size;
  const font480Size = 0.9;
  const font393Size = 0.66;
  const font380Size = 0.72;
  const font370Size = 0.99;
  const font360Size = 0.65;
  const font359Size = 0.65;
  const font319Size = 0.56;

  const iFont420Size = 0.82;
  const iFont393Size = 0.735;
  const iFont380Size = 0.7;
  const iFont370Size = 0.68;
  const iFont360Size = 0.66;
  const iFont319Size = 0.6;

  if (Platform.OS === 'ios') {
    // return Math.round(PixelRatio.get(newSize));
    // console.log(fontscale, 'fontscale');
    if (420 < fontscale) {
      // iphone 12 pro max
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) * iFont420Size;
    } else if (393 < fontscale) {
      // samsung
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) * iFont393Size;
    } else if (380 < fontscale) {
      // vivo
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) * iFont380Size;
    } else if (370 < fontscale) {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) * iFont370Size;
    } else if (360 == fontscale) {
      //realmi 5i
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) * iFont360Size;
    } else if (359 < fontscale) {
      //honor
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) * iFont360Size;
    } else if (319 < fontscale) {
      //honor
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) * iFont319Size;
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) * 0.55;
    }
  } else {
    // return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    if (393 < fontscale) {
      // samsung
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) * font393Size;
    } else if (380 < fontscale) {
      // vivo
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) * font380Size;
    } else if (370 < fontscale) {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) * font370Size;
    } else if (360 == fontscale) {
      //realmi 5i
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) * font360Size;
    } else if (359 < fontscale) {
      //honor
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) * font359Size;
    }
    if (310 < fontscale) {
      // oneplus 11R
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) * font319Size;
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) * 0.85;
    }
  }
}

export const NUMBER = /^\+?(0|[6-9]\d*)$/;
export const EMAIL =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const FontSize = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color="#6b18a6F2" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default FontSize;
