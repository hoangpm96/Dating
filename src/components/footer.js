import React, { Component } from "react";
import {
  View,
  ScrollView,
  TouchableHighlight,
  Dimensions,
  Image,
  PickerIOS,
  Platform,
  Alert,
  TouchableOpacity,
  Text
} from "react-native";
import { observable } from "mobx";
import { autobind } from "core-decorators";
import { observer } from "mobx-react/native";
import { Actions } from "react-native-mobx";
const { width, height } = Dimensions.get("window");
import Icon from "react-native-vector-icons/FontAwesome";

@autobind
@observer
export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.Global = this.props.Global;
  }
  render() {
    return (
      <View>
        {this.Global.isFooter
          ? <View
              style={{
                width: width,
                height: 55,
                backgroundColor: "rgba(0,0,0,1)",
                flexDirection: "row",
                borderColor: "#fff",
                justifyContent: "space-around",
                bottom: 0
              }}
            >
                <TouchableOpacity
                onPress={() => {
                  //this.Global.isFooter = false;
                  Actions.profile();
                }}
                style={{
                  width: width / 4,
                  height: 55,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Icon name="user" color='rgba(226,39,44,0.7)' size={23} />
                <Text
                  style={{
                    fontSize: 16,
                    color: "#fff"
                  }}
                >
                  Profile
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                onPress={() => {
                  Actions.chat();
                }}
                style={{
                  width: width / 4,
                  height: 55,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Icon name="wechat" color='rgba(226,39,44,0.7)' size={23} />
                <Text
                  style={{
                    fontSize: 16,
                    color: "#fff"
                  }}
                >
                  Chat
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Actions.search();
                }}
                style={{
                  width: width / 4,
                  height: 55,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Icon name="search" color='rgba(226,39,44,0.7)' size={23} />
                <Text
                  style={{
                    fontSize: 16,
                    color: "#fff"
                  }}
                >
                  Search
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Actions.love();
                }}
                style={{
                  width: width / 4,
                  height: 55,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Icon name="heartbeat" color='rgba(226,39,44,0.7)' size={23} />
                <Text
                  style={{
                    fontSize: 16,
                    color: "#fff"
                  }}
                >
                  Love
                </Text>
              </TouchableOpacity>
            </View>
          : null}
      </View>
    );
  }
}
