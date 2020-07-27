import React from 'react';
import { Image } from 'react-native';

import { CustomImageParams } from '../types';

const CustomImage = ( props : CustomImageParams) => {
    return (
        <Image source={props.imageSource} style={{
            height: 150,
            width: 150
        }} />
    )
}

export default CustomImage;