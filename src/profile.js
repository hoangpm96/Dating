import React, { Component } from "react";
import { Actions, Router, Scene } from "react-native-mobx";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ImageBackground,
  Switch,
  Button,
  TouchableHighlight,
  Alert
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Modal from "react-native-modalbox";
const { width, height } = Dimensions.get("window");

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.Global = this.props.Global;
    this.state = {
      userName: "HoangPhan",
      Name: "Minh Hoang",
      Age: "21",
      Height: "180",
      Weight: "65",
      Address: "Quang Ngai",
      isPush: false
    };
  }
  _onPress() {
    Alert.alert(
      'Question',
      'Do you want to delete?',
      [,
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    )
  }
  _onPressAdd() {
    Alert.alert(
      'Question',
      'Do you want to Add?',
      [,
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    )
  }
  render() {
    return (
      <ImageBackground
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: 'rgba(226,39,44,0.7)'
        }}
        source={require("./img/pink.jpg")}>
        <View style={styles.summary}>
          <View style={styles.summaryAvatar}>
            <Image
              source={require("./img/hoangphan.jpg")}
              style={styles.avatar}
            />
          </View>
          <View style={styles.summaryButton}>
            <TouchableOpacity style={styles.summaryButton1}>
              <Text style={styles.text}>
                Change Avatar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.summaryButton2}>
              <Text style={styles.text}>
                Change Password
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.summaryButton2}>
              <Text style={styles.text}>
                Update Profile
                  </Text>
            </TouchableOpacity>
          </View>

        </View>
        <View style={styles.information}>
          <View
            style={styles.informationTextContain}
          >
            <Text
              style={styles.informationText}
            >
              Name
        </Text>
            <TextInput
              placeholder="Name..."
              placeholderTextColor="#fff"
              selectionColor="#fff"
              underlineColorAndroid="transparent"
              style={styles.informationText2}
              onChangeText={Name => {
                this.setState({ Name: Name });
              }}
              value={this.state.Name}
            />
          </View>

          <View
            style={styles.informationTextContain}
          >
            <Text
              style={styles.informationText}
            >
              User name
        </Text>
            <TextInput
              placeholder="User name..."
              placeholderTextColor="#fff"
              selectionColor="#fff"
              underlineColorAndroid="transparent"
              style={styles.informationText2}
              onChangeText={username => {
                this.setState({ userName: username });
              }}
              value={this.state.userName}
            />
          </View>
          <View
            style={styles.informationTextContain}
          >
            <Text
              style={styles.informationText}
            >
              Age
        </Text>
            <TextInput
              placeholder="Age..."
              placeholderTextColor="#fff"
              selectionColor="#fff"
              underlineColorAndroid="transparent"
              style={styles.informationText2}
              onChangeText={Age => {
                this.setState({ Age: Age });
              }}
              value={this.state.Age}
            />
          </View>
          <View
            style={styles.informationTextContain}
          >
            <Text
              style={styles.informationText}
            >
              Height
        </Text>
            <TextInput
              placeholder="Height..."
              placeholderTextColor="#fff"
              selectionColor="#fff"
              underlineColorAndroid="transparent"
              style={styles.informationText2}
              onChangeText={Height => {
                this.setState({ Height: Height });
              }}
              value={this.state.Height}
            />
          </View>
          <View
            style={styles.informationTextContain}
          >
            <Text
              style={styles.informationText}
            >
              Weight
        </Text>
            <TextInput
              placeholder="Weight..."
              placeholderTextColor="#fff"
              selectionColor="#fff"
              underlineColorAndroid="transparent"
              style={styles.informationText2}
              onChangeText={Weight => {
                this.setState({ Weight: Weight });
              }}
              value={this.state.Weight}
            />
          </View>
          <View
            style={styles.informationTextContain}
          >
            <Text
              style={styles.informationText}
            >
              Address
        </Text>
            <TextInput
              placeholder="Address..."
              placeholderTextColor="#fff"
              selectionColor="#fff"
              underlineColorAndroid="transparent"
              style={styles.informationText2}
              onChangeText={Address => {
                this.setState({ Address: Address });
              }}
              value={this.state.Address}
            />
          </View>
          <View
            style={styles.informationTextContain}
          >
            <Text
              style={styles.informationText}
            >
              Hobbies
        </Text>
            <TouchableOpacity style={styles.hobbyContainerAdd}
              onPress={() => this._onPressAdd()}
            >
              <Icon name="tag" color="#fff" size={20} />
            </TouchableOpacity>
            <View style={styles.hobbyContainer}>
              <Button title="X" onPress={() => this._onPress()}  ></Button>
              <Text style={styles.hobbyText}>
                Dog
          </Text>
            </View>
            <View style={styles.hobbyContainer}>
              <Button title="X" onPress={() => this._onPress()} ></Button>
              <Text style={styles.hobbyText}>
                Sing
          </Text>
            </View>
          </View>
        </View>
        <View style={styles.logout}>
          <TouchableOpacity style={styles.logoutButton}
            onPress={() => {
              this.Global.isFooter = false;
              Actions.login();
            }}
          >
            <Text style={styles.text}>
              Sign out
                </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  summary: {
    flex: 3,
    marginTop: 5,
    flexDirection: 'row',
  },
  summaryAvatar: {
    flex: 1
  },
  avatar: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    borderRadius: 75,
    borderWidth: 5,
    borderColor: 'rgba(226,39,44,0.7)',
    marginTop: 40,
    marginLeft: 10
  },
  summaryButton: {
    flex: 1,
    flexDirection: 'column',

  },
  summaryButton1: {
    width: 175,
    height: 35,
    marginTop: 55,
    borderRadius: 30,
    borderColor: "#fff",
    justifyContent: "center",
    //alignItems: "center",
    backgroundColor: 'rgba(226,39,44,0.7)'
  },
  summaryButton2: {
    width: 175,
    height: 35,
    marginTop: 7,
    borderRadius: 30,
    borderColor: "#fff",
    justifyContent: "center",
    //alignItems: "center",
    backgroundColor: 'rgba(226,39,44,0.7)',

  },
  information: {
    flex: 5,
    backgroundColor: 'red',
    width: width - 20,
    height: 260,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingBottom: 15
  },

  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: "#fff",
    alignSelf: 'center'
  },
  informationTextContain: {
    width: 280,
    height: 45,
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  informationText: {
    fontSize: 15,
    color: "#fff",
    width: 80,
    fontWeight: 'bold'
  },
  informationText2: {
    fontSize: 15,
    color: "#fff",
    paddingLeft: 15,
    width: 210,
    // fontWeight: 'bold'
  },
  hobbyContainer: {
    flexDirection: 'row',
    height: 32,
    width: 80,
    backgroundColor: 'rgba(226,39,44,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginRight: 10
  },
  hobbyText: {
    color: '#fff',
    fontSize: 15

  },
  hobbyContainerAdd: {
    flexDirection: 'row',
    height: 35,
    width: 35,
    backgroundColor: 'rgba(226,39,44,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginRight: 10
  },
  buttonCustom2: {
    color: '#0000dd',
    fontSize: 30,
    alignSelf: 'center'
  },
  logout: {
    flex: 1,
    alignItems: 'flex-start'
  },
  logoutButton: {
    width: width - 20,
    height: 35,
    borderRadius: 30,
    marginTop: 15,
    borderColor: "#fff",
    justifyContent: "center",
    //alignItems: "center",
    backgroundColor: 'rgba(226,39,44,0.7)',
    
  }


})