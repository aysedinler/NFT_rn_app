import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";
import { ETHPrice, NFTTitle } from './SubInfo';

const DetailsDesc = ({data}) => {
  return (
   <>
   <View>
    <NFTTitle 
    title={data.name}
    subTitle={data.creator}
    titleSize={SIZES.extraLarge}
    subTitleSize={SIZES.font}
    />
   </View>
   </>
  )
}

export default DetailsDesc