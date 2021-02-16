import React, { Component } from 'react';
import { View, StyleSheet, Text,Image, FlatList,TouchableOpacity, TextInput } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'
import MyHeader from '../components/MyHeader';
import { RFValue } from "react-native-responsive-fontsize";

export default class TimerScreen extends Component{
    constructor(){
      super();
      this.state = {
        day: "",
        hour: "",
        minute: ""
      };
    }
    timeSetting=(day, hour, minute)=>{
      firebase
        .auth()
        .then(() => {
          db.collection("all_timers").add({
           day: this.state.day,
           hour: this.state.hour,
           minute: this.state.day
          }) 
        })
    }
    render(){
      return(
      <View>
         <MyHeader title="Timer Screen" navigation ={this.props.navigation}/>
           <TextInput
              style={[styles.loginBox, { marginTop: RFValue(15) }]}
              placeholder="Hour"
              placeholderTextColor="gray"
              onChangeText={text => {
                this.setState({
                  hour: text
                });
              }}
            />
      </View>
    );
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6fc0b8"
  },
  loginBox: {
    width: "80%",
    height: RFValue(50),
    borderWidth: 1.5,
    borderColor: "#ffffff",
    fontSize: RFValue(20),
    paddingLeft: RFValue(10)
  }
});