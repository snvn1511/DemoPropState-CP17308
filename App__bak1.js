import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { useState } from 'react'; // import thu vien

// component info
const CompInfo = (props)=>{
  return (
    <View>
        <Text style={{fontSize:20}}>
          Ho ten:  {props.hoTen}  --- tuoi: { props.tuoi}
        </Text>
    </View>
  );
}

// component chính
export default function App() {
  return (
    <View >
   
        <CompInfo hoTen="Nguyen Van A" tuoi="30" />
        <CompInfo hoTen="Tran Van B" tuoi="10" />
        <CompInfo hoTen="Le van x" tuoi="60" />
    </View>
  );

}
 