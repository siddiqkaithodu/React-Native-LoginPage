import React from 'react';
import {View,Image} from 'react-native';
const Circlelogo=()=>(
  <View style={{justifyContent:'center',alignItems:'center'}}>
  <Image style={{width:150,height:150,marginVertical:20}} source={require('../assets/logo.png')}/>
  </View>
  );
  export default Circlelogo;