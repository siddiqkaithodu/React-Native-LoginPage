import React from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
const SubmitButton=({title,handleSubmit,loading})=>(
  <TouchableOpacity onPress={handleSubmit} style={{justifyContent:'center',borderRadius:24,marginHorizontal:15,backgroundColor:'#ff9900',marginVertical:15,paddingVertical:15,}}>
  <Text style={{fontSize:20,textAlign:'center'}}>
  {loading?'Pease wait ...':title}
  </Text>
  </TouchableOpacity>
)
export default SubmitButton;