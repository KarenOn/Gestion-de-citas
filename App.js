import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View, FlatList, Button, TextInput, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import TextInputMask from 'react-native-text-input-mask';
import CalendarPicker from "react-native-calendar-picker";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import useForm from './hooks/useForm';
//import { TextInputMask } from 'react-native-masked-text';

// import DoctorScreen from './DoctorScreen';
// import HomeScreen from './HomeScreen';
import { render } from 'react-dom';

function HomeScreen({ navigation }) {
  const [citas, setCitas] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://10.0.0.64:3080/cita')
    .then(response => response.json())
    .then(data => {
      setCitas(data)
      setLoading(false)
    })
  }, [])

  if(loading){
    return <View style={styles.container}><Text>Cargando...</Text><Button title="Ir a perfil" onPress={() => navigation.navigate('Doctor')}/></View>
  }

  return(
      <ScrollView>
    <View style={styles.container}>
      <FlatList
        data={citas}
        renderItem={({item}) => <Text style={styles.item} 
          onPress={() => navigation.navigate('Doctor', {doctorr: item.iddoctor.toString(), nombre: item.doctor})}>Doctor:{item.doctor}{"\n"}Fecha:{item.fecha}{"\n"}Hora:{item.hora}
        </Text>}
        keyExtractor={item => item.id.toString()}
        />
      <View>
        <Button title="Ir a perfil" onPress={() => navigation.navigate('Doctor')}
        />
      </View>
    </View></ScrollView>
  )
}

const DoctorScreen = ({ route: { params }, navigation }) => {
  const { doctorr } = params;
  const { nombre } = params;
  const initialState = {
    doctor: '',
  }

  const onSubmit = (values) => {
    fetch('http://10.0.0.64:3080/cita', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify(values),
    })
    .then(x => x.text())
    .then(x => {
      console.log('xaqui: ' + x);
      if(x === 'bien') {
        return Alert.alert(
          'Exito',
          x,
          [
            { text: 'Ir al inicio', onPress: () => navigation.navigate('Home') }
          ]
        )
      }
      Alert.alert(
        'Error',
        x,
      )
    })
  }
  
  const { subscribe, inputs, handleSubmit } = useForm(initialState, onSubmit)
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hola</Text>
      <Text>doctor: {doctorr}</Text>
      <Text>doctor: {nombre}</Text>
      <TextInput 
        value={inputs.doctor}
        onChangeText={subscribe('doctor')}
        placeholder="Doctor"
      />
      {/* <TextInputMask
        value={inputs.fecha}
        type={'cel-phone'}
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '(99)'
        }}
        value={cell}
        onChangeText={ text => setCell(text) }
      /> */}
      {/* <TextInputMask
        value={inputs.doctor}
        onChangeText={subscribe('doctor')}
        placeholder="Doctor"
        mask={"+1 ([000]) [000] [00] [00]"}
      /> */}
      <Button title="Crear cita" onPress={handleSubmit} />
    </View>
  )
}

const Stack = createStackNavigator();

function MyStack(){
  return (
    <Stack.Navigator>
      <Stack.Screen name = "Home" component = {HomeScreen}/>
      <Stack.Screen name = "Doctor" component = {DoctorScreen}/>
    </Stack.Navigator>
  );
}



export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 100,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  calendar: {
    width: 500
  },
});

//export default App;