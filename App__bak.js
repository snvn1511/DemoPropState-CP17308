import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { useState } from 'react'; // import thu vien

export default function App() {
  // khai bao state
  const [hoTen, sethoTen] = useState("ABC") // gia tri mac dinh

  const CapNhat = (dulieu) => {
    sethoTen(dulieu);
  }

  const ChuyenChuHoa = () => {
    sethoTen(hoTen.toUpperCase());
  }


  return (
    <View style={styles.container}>
      <Text>Ho va ten:  {hoTen}  </Text>

      <TextInput placeholder='Nhap ho ten' onChangeText={CapNhat} />

      <Button title='Chuyển chữ hoa' onPress={ChuyenChuHoa} />


    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
