import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React ,{useState} from "react";
import UserInput from "./Components/component";
import SubmitButton from "./Components/SubmitButton";
import Circlelogo from "./Components/circlelogo";
import axios from 'axios';
export default function App() {
const [name,setName]=useState('');
const [password,setPassword]=useState('');
const [email,setEmail]=useState('');
const [loading,setLoading]=useState(false);
const handleSubmit=async()=>
{
 setLoading(true);
 if(!name||!password||!email)
 {
   alert("all fields are mandatory");
   setLoading(false);
   return;
 }
 try{
const {data}=await axios.post('https://www.something.com/api',{name,email,password});
 alert("success");
 setLoading(false);
 }
 catch(err)
 {
   alert(err);
   setLoading(false);
 }
}
  return (
   <View style={{flex:1,justifyContent:'center'}}>
   <Circlelogo/>
   <Text style={{paddingTop:4,textAlign:'center',fontSize:34,marginVertical:25}}>Sign Up</Text>
   <UserInput name="Name" value={name} setValue={setName} />
  <UserInput name="Email" value={email} setValue={setEmail} keyboardType="email-address"/>
   <UserInput name="Password" value={password} setValue={setPassword} hidden={true}/>
   <SubmitButton title="Sign In" handleSubmit={handleSubmit} loading={loading}/>
   <Text>
   </Text>
   </View>
  );
}