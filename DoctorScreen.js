// import { StatusBar } from "expo-status-bar";
// import React, { useState } from "react";
// import { StyleSheet, Text, View, TextInput } from "react-native";
// import { Button } from "galio-framework";
// import {Picker} from '@react-native-picker/picker';
// import { Input, Block } from "galio-framework";
// import CalendarPicker from "react-native-calendar-picker";
// import RNPickerSelect from "react-native-picker-select";

// class DoctorScreen extends React.Component {

//   //const [picker, setpicker] = useState('java');

//   // state = {
//   //   lenguaje: 'java',
//   // }

//   async componentDidMount(){
//     try {
//       await fetch('http://10.0.0.64:3080/cita', {
//         method: 'post',
//         mode: 'no-cors',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           doctor: 'doctor',
//           fecha: 'fecha',
//           hora: 'hora',
//           tipo: 'tipo',
//         })
//       });
//     } catch(e) {
//       console.log(e);
//     }
//   }
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     selectedStartDate: null,
//   //   };
//   //   this.onDateChange = this.onDateChange.bind(this);
//   // }

//   // onDateChange(date) {
//   //   this.setState({
//   //     selectedStartDate: date,
//   //   });
//   // }

//   render() {
//     // const { selectedStartDate } = this.state;
//     // const startDate = selectedStartDate ? selectedStartDate.toString() : "";
//     //const { selectedValue } = useState("selecciona");
//     return (
//       <View style={styles.container}>
//         {/* <Text>Estoy en el perfil del doctor</Text>
//         <StatusBar style="auto" />
//         <CalendarPicker onDateChange={this.onDateChange} />
//         <Text>Elegiste: {startDate}</Text>
//         <Button
//           title="Ir a home"
//           color="success"
//           onPress={() => this.props.navigation.navigate("Home")}
//         />
//         <Text>Donde estas?</Text> */}
//          {/* <Picker 
//           selectedValue={picker}
//           onValueChange={(itemValue) => setpicker(itemValue)}>
//           <Picker.Item label="Java" value="java"/>
//           <Picker.Item label="Python" value="py"/>
//         </Picker>  */}
//         <RNPickerSelect
//                 onValueChange={(value) => console.log(value)}
//                 items={[
//                   { label: "JavaScript", value: "JavaScript" },
//                   { label: "TypeStript", value: "TypeStript" },
//                   { label: "Python", value: "Python" },
//                   { label: "Java", value: "Java" },
//                   { label: "C++", value: "C++" },
//                   { label: "C", value: "C" },
//                 ]}
//             />
//       </View>
//     );
//   }


// }

// async function time(){
//   try {
//     const { action, hour, minute } = await TimePickerAndroid.open({
//       hour: 14,
//       minute: 0,
//       is24Hour: false // Will display '2 PM'
//     });
//     if (action !== TimePickerAndroid.dismissedAction) {
//       // Selected hour (0-23), minute (0-59)
//     }
//   } catch ({ code, message }) {
//     console.warn('Cannot open time picker', message);
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// export default DoctorScreen;

import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import App from './App';

export default class DoctorScreen extends Componen {

  render(){
    return(
      <View style={styles.container}>
        <Text>Inicio</Text>
        <CalendarPicker onDateChange={this.onDateChange} />
        <Text>Elegiste: {startDate}</Text>
        <Button title="Ir a perfil" onPress={() => this.props.navigation.navigate('Home')}/>
        <Button title="Enviar cita" onPress={}/>
      </View>
    )
  }
  
}