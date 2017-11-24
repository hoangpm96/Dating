

import React, { Component } from "react";
import { Actions, Router, Scene } from "react-native-mobx";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Slider,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  ListView,
  RefreshControl,
  Animated,
  TouchableHighlight,
  TextInput,
  Button,
  Alert
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { observable } from "mobx";
import { autobind } from "core-decorators";
import { observer } from "mobx-react/native";
const { width, height } = Dimensions.get("window");
const data = require('./data/api.json');

@autobind
@observer
export default class SearchFriend extends Component {
  
  constructor(props) {
    super(props);
    this.Global = this.props.Global;
    this.state = {
      userName: "",
      Name: "",
      Age: "",
      Height: "",
      Weight: "",
      Address: "",
      isPush: false,
      sliderOneChanging: false,
      sliderOneValue: [5],
      multiSliderValue: [20, 30],
    };
    }
    sliderOneValuesChangeStart = () => {
      this.setState({
        sliderOneChanging: true,
      });
    }
  
    sliderOneValuesChange = (values) => {
      let newValues = [0];
      newValues[0] = values[0];
      this.setState({
        sliderOneValue: newValues,
      });
    }
  
    sliderOneValuesChangeFinish = () => {
      this.setState({
        sliderOneChanging: false,
      });
    }
  
    multiSliderValuesChange = (values) => {
      this.setState({
        multiSliderValue: values,
      });
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
        source={require("./img/pink.jpg")}
        style={styles.background}
      >
        <Animated.View style={{ backgroundColor: "red" }}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => { Actions.pop();}} style={styles.buttonClose} >
              <Icon name="times" color="#0916BA" size={30} />
            </TouchableOpacity>
          <View style={styles.headerTextContain}>
            <Text style={styles.headerText}>
              SEARCH FRIEND
            </Text>
          </View>
        </View>
      </Animated.View>
      <View style={{flex: 1}}>
      <View style={styles.information}>
          <View
            style={styles.informationTextContain}
          >
            <Text
              style={styles.informationText}
            >
              Name: 
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
              Age: 
        </Text>
        <View style={styles.sliders}>
        {/* <View style={styles.sliderOne}>
          <Text style={styles.text}>One Marker with callback example:</Text>
          <Text style={[styles.text, this.state.sliderOneChanging && {color: 'red' }]}>{this.state.sliderOneValue}</Text>
        </View> */}
        {/* <MultiSlider
          values={this.state.sliderOneValue}
          sliderLength={280}
          onValuesChangeStart={this.sliderOneValuesChangeStart}
          onValuesChange={this.sliderOneValuesChange}
          onValuesChangeFinish={this.sliderOneValuesChangeFinish}
        /> */}
        <View style={styles.sliderOne}>
          {/* <Text style={styles.text}>Two Markers:</Text> */}
          <Text style={styles.text}>{this.state.multiSliderValue[0]} </Text>
          <Text style={styles.text}>{this.state.multiSliderValue[1]}</Text>
        </View>
        <MultiSlider
          values={[this.state.multiSliderValue[0], this.state.multiSliderValue[1]]}
          sliderLength={280}
          onValuesChange={this.multiSliderValuesChange}
          min={18}
          max={60}
          step={1}
          allowOverlap
          snapped
        />
      </View>
          </View>
          <View
            style={styles.informationTextContain}
          >
            <Text
              style={styles.informationText}
            >
              Height: 
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
              Weight: 
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
              Address: 
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
            style={styles.informationTextContain2}
          >
            <Text
              style={styles.informationText}
            >
              Hobbies:
        </Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
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
              <Button title="X" onPress={() => this._onPress()}  ></Button>
              <Text style={styles.hobbyText}>
                Travel
          </Text>
            </View>
            <View style={styles.hobbyContainer}>
              <Button title="X" onPress={() => this._onPress()}  ></Button>
              <Text style={styles.hobbyText}>
                Swim
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
        </View>
        <View style={styles.search}>
          <TouchableHighlight style={styles.searchButton}
            onPress={() => {
              this.Global.isFooter = false;
              Actions.login();
            }}
          >
            <Text style={styles.text}>
              SEARCH
                </Text>
          </TouchableHighlight>
        </View>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
      flex: 1,
      alignItems: "center",
      backgroundColor: 'rgba(226,39,44,0.7)'
  },
  headerContainer: {
    width: width,
    height: 64,
    alignItems: "center",
    backgroundColor: 'rgba(226,39,44,0.7)',
    flexDirection: "row"
  },
  buttonClose: {
    width: 55,
    height: 64,
    justifyContent: "center",
    alignItems: "center"
  },
  headerTextContain: {
    alignItems: "center",
    width: width - 55,
    paddingRight: 55 / 2
  },
  headerText: {
    color: "#fff",
    fontSize: 20
  },
  information: {
    flex: 5,
    backgroundColor: 'red',
    width: width - 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginTop: 15, 
    paddingTop: 30,
    paddingBottom: 30,
  },

  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: "#ffdb95",
    alignSelf: 'center'
  },
  informationTextContain: {
    flex: 1,
    width: 280,
    alignItems: "center",
    flexDirection: "column",
    // backgroundColor: '#135',
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  informationTextContain2: {
    flex: 2,
    width: 280,
    alignItems: "center",
    flexDirection: "column",
    // backgroundColor: '#135',
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  informationText: {
    fontSize: 15,
    color: "#fff",
    width: 80,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    // backgroundColor: '#911'
  },
  informationText2: {
    height: 35,
    fontSize: 15,
    color: "#fff",
    paddingLeft: 15,
    width: 210,
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    // marginTop: 3,
    // backgroundColor: '#949'
  },
  hobbyContainer: {
    flexDirection: 'row',
    height: 32,
    width: 80,
    backgroundColor: 'rgba(226,39,44,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginRight: 10,
    marginTop: 5,
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
    marginRight: 10,
    marginTop: 3
  },
  buttonCustom2: {
    color: '#0000dd',
    fontSize: 30,
    alignSelf: 'center'
  },
  search: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
  },
  searchButton: {
    width: width - 20,
    height: 45,
    borderRadius: 30,
    // marginTop: 0,
    borderColor: "#fff",
    justifyContent: "center",
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(226,39,44,0.7)'
  },
  sliderOne: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  text: {
    alignSelf: 'center',
    paddingVertical: 20,
  },
});
