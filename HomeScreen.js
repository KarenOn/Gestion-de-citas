// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { StyleSheet, Text, View, FlatList } from "react-native";
// import { Button } from "galio-framework";
// import { Input, Block } from 'galio-framework';
// //import { Link } from '@react-navigation/native';
// import { NativeRouter, Route, Link } from "react-router-native";
// import Inicio from './components/Inicio';
// //import { response } from "express";

// //const Inicio = () => <Text style={styles.header}>Inicio</Text>;

// class HomeScreen extends React.Component {
  
//   // componentDidMount = () => {
//   //   fetch('http://localhost:3080/cita', {
//   //     method: 'GET'
//   //   })
//   //   .then((response) => response.json())
//   //   .then((responseJson) => {
//   //     console.log(responseJson);
//   //   })
//   //   .catch((error) => {
//   //     console.log(error);
//   //   });
//   // }

//   constructor(props){
//     super(props);
//     this.navigate = this.props.navigation.navigate;
//     this.state = {
//       loading: false,
//       citas: [],
//       url: 'http://10.0.0.64:3080/cita'
//     }
//   }

//   componentDidMount(){
//     this.getCita();
//   }

//   getCita = () => {
//     this.setState({loading: true})

//     fetch(this.state.url)
//     .then(res => res.json())
//     .then(res => {
//       this.setState({
//         citas: res,
//         url: res,
//         loading: false
//       })
//     });
//   };

//   render() {
//     if(this.state.loading){
//       return (
//         <View style={styles.container}>
//           <Text>Cargando...</Text>
//           <StatusBar style="auto" />
//           <Button title="Ir a perfil" color="success" onPress={() => this.props.navigation.navigate('Doctor')}/>
//         </View>
//       );
//     }

//     return (
//       <View style={styles.container}>
//         <NativeRouter>
//         <Link to="/Inicio">
//           <Text>Inicio</Text>
//         </Link>
//         <Route path="/Inicio">
//         <Inicio />
//         </Route>
//         </NativeRouter>
//         <Text>Estoy en el home</Text>
//         <FlatList
//           data={this.state.citas}
//           renderItem={
//             ({item}) =>  
//               <Text>
//                 {item.doctor.toString()}
//                 {item.fecha.toString()}
//                 {item.hora.toString()}
//               </Text>
//           }
//         />
//         <StatusBar style="auto" />
//         <Button title="Ir a perfil" color="success" onPress={() => this.props.navigation.navigate('Doctor')}/>
//       </View>
//     );
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

// export default HomeScreen;

// // import React, { Component } from "react";
// // import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

// // import {
// //   NativeRouter,
// //   Route,
// //   Link,
// //   Redirect,
// //   withRouter
// // } from "react-router-native";

// // function AuthExample() {
// //   return (
// //     <NativeRouter>
// //       <View style={styles.container}>
// //         <AuthButton />
// //         <View style={styles.nav}>
// //           <Link to="/public" style={styles.navItem} underlayColor="#f0f4f7">
// //             <Text>Public Page</Text>
// //           </Link>
// //           <Link to="/protected" style={styles.navItem} underlayColor="#f0f4f7">
// //             <Text>Protected Page</Text>
// //           </Link>
// //         </View>

// //         <Route path="/public" component={Public} />
// //         <Route path="/login" component={Login} />
// //         <PrivateRoute path="/protected" component={Protected} />
// //       </View>
// //     </NativeRouter>
// //   );
// // }

// // const fakeAuth = {
// //   isAuthenticated: false,
// //   authenticate(cb) {
// //     this.isAuthenticated = true;
// //     setTimeout(cb, 100); // fake async
// //   },
// //   signout(cb) {
// //     this.isAuthenticated = false;
// //     setTimeout(cb, 100);
// //   }
// // };

// // const AuthButton = withRouter(({ history }) =>
// //   fakeAuth.isAuthenticated ? (
// //     <View>
// //       <Text>Welcome!</Text>
// //       <TouchableHighlight
// //         style={styles.btn}
// //         underlayColor="#f0f4f7"
// //         onPress={() => {
// //           fakeAuth.signout(() => history.push("/"));
// //         }}
// //       >
// //         <Text>Sign out</Text>
// //       </TouchableHighlight>
// //     </View>
// //   ) : (
// //     <Text>You are not logged in.</Text>
// //   )
// // );

// // function PrivateRoute({ component: Component, ...rest }) {
// //   return (
// //     <Route
// //       {...rest}
// //       render={props =>
// //         fakeAuth.isAuthenticated ? (
// //           <Component {...props} />
// //         ) : (
// //           <Redirect
// //             to={{
// //               pathname: "/login",
// //               state: { from: props.location }
// //             }}
// //           />
// //         )
// //       }
// //     />
// //   );
// // }

// // function Public() {
// //   return <Text style={styles.header}>Public</Text>;
// // }

// // function Protected() {
// //   return <Text style={styles.header}>Protected</Text>;
// // }

// // class Login extends Component {
// //   state = { redirectToReferrer: false };

// //   login = () => {
// //     fakeAuth.authenticate(() => {
// //       this.setState({ redirectToReferrer: true });
// //     });
// //   };

// //   render() {
// //     const { from } = this.props.location.state || { from: { pathname: "/" } };
// //     const { redirectToReferrer } = this.state;

// //     if (redirectToReferrer) {
// //       return <Redirect to={from} />;
// //     }

// //     return (
// //       <View>
// //         <Text>You must log in to view the page at {from.pathname}</Text>

// //         <TouchableHighlight
// //           style={styles.btn}
// //           underlayColor="#f0f4f7"
// //           onPress={this.login}
// //         >
// //           <Text>Log in</Text>
// //         </TouchableHighlight>
// //       </View>
// //     );
// //   }
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     marginTop: 25,
// //     padding: 10
// //   },
// //   header: {
// //     fontSize: 20
// //   },
// //   nav: {
// //     flexDirection: "row",
// //     justifyContent: "space-around"
// //   },
// //   navItem: {
// //     flex: 1,
// //     alignItems: "center",
// //     padding: 10
// //   },
// //   btn: {
// //     width: 200,
// //     backgroundColor: "#E94949",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     padding: 10,
// //     marginTop: 10
// //   }
// // });

// // export default AuthExample;

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { State } from 'react-native-gesture-handler';

export default () => {
 
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
    return <View style={styles.container}><Text>Cargando...</Text></View>
  }

  return(
    <View style={styles.container}>
      <FlatList
        data={citas}
        renderItem={({item}) => <Text style={styles.item}>{item.doctor}</Text>}
        keyExtractor={item => item.id.toString()}
        />
      <View>
        <Button title="Ir a perfil" onPress={() => navigation.push('Doctor')}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  btn: {
    width: 200,
    backgroundColor: "#E94949",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 10
  },
  item: {
    padding: 10,
    fontSize: 22,
    height: 50,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});
