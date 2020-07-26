import React from 'react';
import { Image } from 'react-native';

import { CustomImageParams } from '../types';

const CustomImage = ( props : CustomImageParams) => {
    return (
        <Image source={props.imageName} style={props.style} />
    )
}

export default CustomImage;