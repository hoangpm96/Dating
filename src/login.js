import React, { Component } from "react";
import { Actions, Router, Scene } from "react-native-mobx";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
  ImageBackground
} from "react-native";
//import Icon from "react-native-vector-icons/FontAwesome";
const { width, height } = Dimensions.get("window");

//import { observable } from "mobx";
//import { autobind } from "core-decorators";
//import { observer } from "mobx-react/native";

//@autobind
//@observer
export default class Login extends Component {
  constructor(props) {
    super(props);
    background=require('./img/pink.jpg');
    logo=require('./img/logo.png');
    facebook=require('./img/facebook.png');
    twitter=require('./img/twitter.png')
    google=require('./img/google.png')
    this.Global = this.props.Global;
    this.state = {
      userName: "",
      pass: "",
      isChecked: false
    };
  }
  render() {
    return (
      <ImageBackground source={background} style={styles.waperContainer} >
      <View style={styles.waperLogo}>
          <Image source={logo} style={styles.logoStyle}/>
      </View>
        <View style={styles.waperTextInput}>
        {/* REGISTER */}
        <TouchableOpacity
            onPress={() => {
            //code
            }}>
          <Text style={styles.styleRegister}>REGISTER</Text>
          </TouchableOpacity>
          {/* USERNAME */}
          <TextInput placeholder={'User Name'} style={styles.TextInputUser}
          onChangeText={username => {
            this.setState({ userName: username.toLowerCase() });
          }}
          placeholderTextColor={'#DDDDDD'}
          value={this.state.userName}          
          />
          {/* PASSWORD */}
          <TextInput placeholder={'Password'} 
          secureTextEntry={true}
          style={styles.TextInputPassword}
          placeholderTextColor={'#DDDDDD'}
          onChangeText={pass => {
            this.setState({ pass: pass.toLowerCase() });
          }}
          value={this.state.pass}
          />
          {/* FORGOT PASSWORD  */}
        <View style={styles.forgotPasswordContain}>
          <TouchableOpacity
            onPress={() => {
            //code
            }}>
            <Text style={styles.forgotPasswordText}>
              Forgot password?
            </Text>
          </TouchableOpacity>
        </View>
          {/* button Login */}
        <TouchableOpacity style={styles.waperButton}
                    onPress={() => {
                      this.Global.isFooter = true;
                      Actions.profile();
                  }}
          >
              <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>LOGIN</Text>
          </TouchableOpacity>
          {/* OR WITH CONNECT */}
          <View style={styles.row}>
              <View style={styles.line}/>
              <Text style={styles.textConnect}>OR WITH CONNECT</Text>
              <View style={styles.line}/>
          </View>
          {/* FACEBOOK  */}
          <View style={styles.row}>
              <View style={styles.rowSocial}>
                  <Image source={facebook} style={styles.logo}/>
                  <Text style={styles.textSocial}>Facebook</Text>
              </View>
              {/* GOOGLE  */}
              <View style={styles.rowSocial}>
                  <Image source={google} style={styles.logo}/>
                  <Text style={styles.textSocial}>Google</Text>
              </View>
              {/* TWITTER  */}
              <View style={styles.rowSocial}>
                  <Image source={twitter} style={styles.logo}/>
                  <Text style={styles.textSocial}>Twitter</Text>
              </View>
          </View>
      </View>
      </ImageBackground>
    );
  }
}
const styles= StyleSheet.create({
  forgotPasswordContain: {
    alignItems: "flex-end",
    width: width - 50,
    marginTop: 5,
    // paddingRight: 4
  },
  forgotPasswordText: {
    fontSize: 16,
    textAlign: "right",
    fontStyle: "italic",
    textDecorationLine: "underline",
    // margin: 4,
    marginBottom: 10,
    alignSelf: 'flex-end',
    backgroundColor: 'transparent'
  },
  waperContainer: {
      flex: 1,
      width: null,
      height: null,
      justifyContent: 'center',
      alignItems: 'center',
      //resizeMode: 'stretch'
  },
  waperLogo: {
      flex: 1,
  },
  logoStyle: {
      width: 220,
      resizeMode: 'contain'
  },
  waperTextInput: {
      flex: 1,
      width: 350

  },
  TextInputUser: {
      borderColor: 'transparent',
      borderWidth: 1,
      height: 40,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 10,
      fontSize: 14,
      color: 'white',
      borderColor: 'rgba(0,0,0,0.1)',
      borderWidth: 1,
  },
  TextInputPassword: {
    borderColor: 'transparent',
    borderWidth: 1,
    height: 40,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 10,
    fontSize: 14,
    color: 'white',
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1
},
  styleRegister: {
      fontSize: 14,
      fontStyle: 'italic',
      alignSelf: 'flex-end',
      margin: 5,
      backgroundColor: 'transparent',
      fontWeight: 'bold'
  },
  waperButton: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      backgroundColor: 'rgba(226,39,44,0.5)',
  },
  row: {
      marginTop: 5,
      flexDirection: 'row',
      alignItems: 'center'
  },
  line: {
      height: 2,
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.3)'
  },
  textConnect: {
      backgroundColor: 'transparent',
      color: 'rgba(0,0,0,0.5)',
      padding: 5
  },
  rowSocial: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.6)',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      margin: 5
  },
  logo: {
      width: 20,
      height: 20,
      resizeMode: 'contain',
      margin: 4,

  },
  textSocial: {
      color: 'white',
      fontSize: 12,
      marginLeft: 10
  }
})