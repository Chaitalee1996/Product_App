import React from 'react';
import {View,ImageBackground}from 'react-native';

const Background=({children}:any)=>{
    return(
        <View>
            <ImageBackground source={require("../../assest/background1.jpg")}
             style={{height:'100%'}}/>
            <View style={{position:'absolute'}}>
                {children}
            </View>
        </View>
    );
}

export default Background;