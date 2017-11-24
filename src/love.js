

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
  ImageBackground,
  ListView,
  RefreshControl,
  Animated,
  TouchableHighlight,
  TextInput
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { observable } from "mobx";
import { autobind } from "core-decorators";
import { observer } from "mobx-react/native";
const { width, height } = Dimensions.get("window");
const data = require('./data/api.json');

@autobind
@observer
export default class Love extends Component {
  
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(data),
      refreshing: false
    };
    
    this._renderRow = this._renderRow.bind(this);
  }

  _onReLoad() {
    this.setState({ refreshing: true });
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data),
      refreshing: false
    });
  }

  componentDidMount() {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(data),
      });

  }
  _onPressInfo(){
    
  }
  _onMoviePress(rowData) {
    alert(1);
    //  const { navigate } = this.props.navigation;
    //  navigate('MovieDetail', { data: rowData });
  }
  _onPressAdd(){
    alert(1);
  }

  _renderRow(rowData) {
    return (
      <View>
        <View style={styles.viewContainer} >
            <Image 
              style={styles.avatar_image} 
              source={{uri: rowData.image}}
              // source={require('./img/hoangphan.jpg')}
           />
           <View style={styles.viewInformation}>
           {/* Tên */}
           <View style={styles.informationTextContain}>
              <Text style={styles.titleContain}>Name: </Text>
              <Text numberOfLines={1} style={styles.informationStyle}  >{rowData.name}</Text>
          </View>
           {/* Tuổi */}
           <View style={styles.informationTextContain}>
              <Text style={styles.titleContain}>Age: </Text>
              <Text numberOfLines={1} style={styles.informationStyle}  >{rowData.age}</Text>
          </View>
           {/* Chiều cao */}
           <View style={styles.informationTextContain}>
              <Text style={styles.titleContain}>Height: </Text>
              <Text numberOfLines={1} style={styles.informationStyle}  >{rowData.height}</Text>
          </View>
            {/* Cân nặng */}
            <View style={styles.informationTextContain}>
              <Text style={styles.titleContain}>Weight: </Text>
              <Text numberOfLines={1} style={styles.informationStyle}  >{rowData.weight}</Text>
          </View>
           </View>
           <View style={styles.buttonCustom}>
           {/* Button info */}
            <TouchableOpacity style={styles.loveButton}
              onPress={() => this._onPressInfo()}
            >
              <Icon name="info" color="#ffff" size={20} />
              </TouchableOpacity>
              {/* Button delete */}
            <TouchableOpacity style={styles.loveButton}
              onPress={() => this._onPressAdd()}
            >
              <Icon name="remove" color="#ffff" size={20} />
            </TouchableOpacity>
            {/* Button chat */}
            <TouchableOpacity style={styles.loveButton}
              onPress={() => this._onPressAdd()}
            >
              <Icon name="comments-o" color="#ffff" size={20} />
            </TouchableOpacity>
           </View>
        </View>
      </View>
    )
    // debugger;
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
              WISH LIST
            </Text>
          </View>
        </View>
      </Animated.View>
        <ListView contentContainerStyle={styles.loveContainer}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onReLoad.bind(this)} />
          }
        />
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
  loveContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 2,
    justifyContent: 'center',

  },
  viewContainer: {
    backgroundColor: 'red',
    width: width - 20,
    margin: 4,
    height: width/3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgba(0,0,0,0.5)",
    flex: 1,
    flexDirection: 'row',
    borderRadius: 15

  },
  avatar_image: {
    height: width/3 - 4,
    width: width/3 - 4,
    flex: 2,
    resizeMode: "cover",
    borderRadius: 15,
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 2
  },
  viewInformation: {
    flex: 3,
    // backgroundColor: 'yellow'
  },
  buttonCustom: {
    flex: 1,
    // backgroundColor: '#7588',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  informationTextContain: {
    width: width/2-10,
    height: 26,
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 10
  },
  titleContain: {
    color: '#ffff',
    fontSize: 13,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    width: 55,
    alignSelf: 'center'
  },
  informationStyle: {
    color: '#ffff',
    fontSize: 13,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    // paddingTop: 5,
    // paddingLeft: 10,
    // width: 320,
    alignSelf: 'center'
  },
  loveButton: {
    flexDirection: 'row',
    height: 32,
    width: 32,
    backgroundColor: 'rgba(226,39,44,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: 2,
    marginRight: 7
  }
});
