import React from 'react';
import {Text,View,TextInput} from 'react-native';
const UserInput=({name,value,setValue,hidden=false,autoCapitalize="none",keyboardType="default"})=>{
  return(
    <View style={{marginHorizontal:24}}>
    <Text style={{marginVertical:10}}>
    {name}
    </Text>
    <TextInput style={{fontSize:18,borderBottomWidth:1,marginVertical:10}} value={value} autoCorrect={false} secureTextEntry={hidden} keyboardType={keyboardType} onChangeText={(v)=>setValue(v)}/>
    </View>
    );
}
export default UserInput;