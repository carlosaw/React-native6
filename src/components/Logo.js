import React from 'react';
import { Image } from 'react-native';

function Logo() {
    return (
        <Image
            style={{width:50, height:50}}
            source={{uri:'http://www.pngmart.com/files/6/Bald-Eagle-Transparent-Background.png'}}
        />
    );
}

export default Logo;