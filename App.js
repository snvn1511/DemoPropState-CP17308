import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { useState } from 'react'; // import thu vien

// component info
const CompCon1 = (props)=>{
    // gọi hàm callback ở Comp cha bằng tên thuộc tính 
    props.parentCallback ("Con gui sang cha ");

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
  // Tạo state để lưu dữ liệu truyền ra view
    const [duLieuCon1, setduLieuCon1] = useState("");
  // tạo hàm để comp con gọi ngược lại
    const callback_CompCon1 = (data_con)=>{
        setduLieuCon1(data_con);
    }

  return (
    <View >

        <Text>Dữ liệu từ ComCon1: {duLieuCon1} </Text>
         
         <CompCon1 hoTen = "Nguyen VAN" tuoi = "20"
              parentCallback={callback_CompCon1} />

        <Text style={ DinhDang.tieuDe }>Ví dụ text </Text>

    </View>
  );

}
 

const DinhDang = StyleSheet.create({
  chu:{
      color:"red"
  },
  tieuDe:{
    color: "blue"
  }
});