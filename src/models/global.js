import { observable, autorun } from "mobx";
import { autobind } from "core-decorators";
import React, { Component } from "react";
import { Animated } from "react-native";
import { observer } from "mobx-react/native";

@autobind
class Global {
    constructor(props){}
  @observable isFooter = false;
}
const global = new Global();
export default global;
