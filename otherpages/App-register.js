import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { Header } from 'react-native-elements';
import { CheckBox } from 'react-native-elements'
import { Input,Icon } from 'react-native-elements';
import { Button } from 'react-native-elements';
//import Overlay from 'react-native-modal-overlay';

class Inputs extends Component {
   state = {
      email: '',
      password: '',
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }

   handleIntro = (text) => {
      this.setState({ intro: text })
   }

   register = (email, pass) => {
      alert('email: ' + email + '\npassword: ' + pass)
   }

   state = {
      modalVisible: true, 
    }

   onClose = () => this.setState({ modalVisible: false});
    
   render() {

      return (
         <View style = {styles.container}>

            <Header
               leftComponent={{ icon: 'menu', color: '#fff' }}
               centerComponent={{ text: 'Build up your account', style: { color: '#fff' } }}
               rightComponent={{ icon: 'home', color: '#fff' }}/>

            <Input 
               style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder='email@address.com'
               placeholderTextColor = "#ccc"
               autoCapitalize = "none"
               keyboardType = "email-address"
               returnKeyType = "next"
               onChangeText = {this.handleEmail}
               leftIcon={
               <Icon
                   name='email'
                   type='fontisto'
                   color='black'/>
               }
               errorStyle={{ color: 'red' }}
               errorMessage='ENTER A VALID EMAIL HERE'
                />

            <Input 
               style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "PASSWORD"
               placeholderTextColor = "#ccc"
               autoCapitalize = "none"
               returnKeyType = "next"
               secureTextEntry = {true}
               onChangeText = {this.handlePassword}
               leftIcon={
                <Icon
                    name='passport'
                    type='fontisto'
                    color='black'/>
                }
               errorStyle={{ color: 'red' }}
               errorMessage='AT LEAST 6 WORDS OR NUMBERS '
            />
          
           <CheckBox
               title='商務會議'
               checkedIcon='dot-circle-o'
               uncheckedIcon='circle-o'
               checked={this.state.checked}
               onPress={() => this.setState({checked: !this.state.checked})}/>
           <CheckBox
               title='校園會議'
               checkedIcon='dot-circle-o'
               uncheckedIcon='circle-o'
               checked={this.state.checked}
               onPress={() => this.setState({checked: !this.state.checked})}/>

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.register(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}>進入錄音</Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      paddingLeft:8,
      height: 40,
      borderColor: '#eeeeee',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      alignItems:'center',
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})

//To-do list: 
//第一頁email,pw alert(可參照input下面的style explanation)
//註冊模組: +Firebase(不用，存到server的db即可)
//第一頁instruction(可用overlay)
//切換頁面功能
//第二頁面進入錄音介面(含建立錄音檔)
//第二頁下拉式選單
//yarn add react-native-modal-overlay
/*<Overlay visible={this.state.modalVisible} onClose={this.onClose} closeOnTouchOutside>
               <Icon
                   name='book-open'
                   type='feather'
                   color='black'/>
               <Text h4>Instructions</Text>
            </Overlay>*/