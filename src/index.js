import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
  Platform
} from "react-native";
import { Actions, Router, Scene } from "react-native-mobx";
import Love from "./love";
import Login from "./login";
import Footer from "./components/footer";
import Chat from "./chat";
import SearchFriend from "./search";
import Profile from "./profile";
import Icon from "react-native-vector-icons/FontAwesome";
import { autobind } from "core-decorators";
import { observer } from "mobx-react/native";
import Global from "./models/global";

@autobind
@observer
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.Global = Global;
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
        <Router
          sceneStyle={{
            paddingTop: 64
          }}
          backButtonIcon="angle-left"
          leftIconStyle={{
            fontSize: 32,
            color: "#fff",
            width: 53.33,
            height: 53.33,
            lineHeight: 53.33,
            paddingLeft: 15
          }}
          Global={this.Global}
        >
          <Scene
            initial
            key="login"
            title=""
            component={Login}
            hideNavBar={true}
            sceneStyle={{
              paddingTop: 0
            }}
          />
          <Scene
            // initial
            key="love"
            title=""
            component={Love}
            hideNavBar={true}
            sceneStyle={{
              paddingTop: 0
            }}
          />
          <Scene
          // initial
            key="chat"
            title={"chat"}
            component={Chat}
            hideNavBar={false}
            navigationBarStyle={{
              backgroundColor: "#000"
            }}
            titleStyle={{
              color: "#fff",
              fontSize: 20
            }}
          />
          <Scene
          // initial
            key="search"
            title={""}
            component={SearchFriend}
            hideNavBar={true}
            navigationBarStyle={{
              backgroundColor: "#000"
            }}
            sceneStyle={{
              paddingTop: 0
            }}
          />
          <Scene
            // initial
            key="profile"
            title={""}
            component={Profile}
            hideNavBar={true}
            navigationBarStyle={{
              backgroundColor: "#000"
            }}
            sceneStyle={{
              paddingTop: 0
            }}
          />
        </Router>
        <Footer Global={this.Global} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
