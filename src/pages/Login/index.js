import React, { Component } from 'react'
import { Text, StyleSheet, View,TextInput,ScrollView,SafeAreaView,Alert,Image,Dimensions,TouchableOpacity,ImageBackground } from 'react-native'
import {back} from '../../assets'
import LinearGradient from 'react-native-linear-gradient'

export default class Login extends Component {

	state = {
		username:'',
		password:'',
	}
	Login=()=>{
		if(this.state.username=='Perencanaan'&& this.state.password=='admin'){
			Alert.alert(
			"Status Login",	
      		"Login Berhasil"
			)
			
			return this.props.navigation.navigate('MainPerencanaan'); 	
		}else if(this.state.username=='Peternakan'&& this.state.password=='admin'){
			Alert.alert(
			"Status Login",	
      		"Login Berhasil"
			)
			
			return this.props.navigation.navigate('HomePertenakan'); 	
		}
		else if(this.state.username=='Pertanian'&& this.state.password=='admin'){
			Alert.alert(
			"Status Login",	
      		"Login Berhasil"
			)
			
			return this.props.navigation.navigate('HomePertanian'); 	
		}
		else if(this.state.username=='Perkebunan'&& this.state.password=='admin'){
			Alert.alert(
			"Status Login",	
      		"Login Berhasil"
			)
			
			return this.props.navigation.navigate('HomePerkebunan'); 	
		}else{
			alert('Username Atau Password Salah');
			return false;
		}
	}

	render() {

		return (
			
				<ImageBackground style={styles.background}
						source={back}	
					>
				{/* <View style={styles.header}>
					
				</View> */}
				<ScrollView>
				<SafeAreaView style={styles.footer}>
					<Text style={styles.title}>Log In</Text>
					<Text style={{marginLeft:width*-0.7}}>Email</Text>
					<TextInput 
						color = "black"
						style={styles.kotak}
						placeholder = "Masukkan Username"
						placeholderTextColor = "lightgrey"
						onChangeText={(text)=>this.setState({username:text})}
						value={this.state.username}
					/>
					<Text style={{marginLeft:width*-0.63}}>Password</Text>
					<TextInput 
						color = "black"
						style={styles.kotak}
						placeholder = "Masukkan Password"
						placeholderTextColor = "lightgrey"
						onChangeText={(text)=>this.setState({password:text})}
						value={this.state.password}
					/>
					<LinearGradient
          			colors={['#4CAF50', '#56EC5F' ]}
          			style={styles.linearGradient}
        >
					<TouchableOpacity style={styles.buttonlogin} onPress={this.Login}>

						<Text style={styles.textbutton}>Masuk</Text>
					</TouchableOpacity>
					</LinearGradient>
				</SafeAreaView>
				</ScrollView>	
				</ImageBackground>
		)
	}
}
const {height} = Dimensions.get("screen");
const {width} = Dimensions.get("screen");
const height_logo = height * 0.4;

const styles = StyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: 'green',
			
	},
	background:{
		flex: 1,
		width: width*1,
		height: height*1,
		justifyContent: 'center',
		alignItems: 'flex-end',
		flexDirection: 'row'
	},
	header: {
		flex : 2,
		justifyContent: 'center',
		alignItems:'center',
		paddingTop: height*0
	},
	footer: {
		flex: 1,
		backgroundColor: '#fff',
		borderTopLeftRadius:30,
		borderTopRightRadius:30,
		// paddingVertical: height*0.1,
		paddingBottom:height*0.1,
		paddingHorizontal: width*0.02,
		alignItems:'center',
		
	},
	logo: {
		width: height_logo,
		height: height_logo,
		
	},
	title:{
		fontSize:35,
		fontWeight:'bold',
		marginTop:height*0.02,
		marginBottom:10,

	},
	kotak:{
		borderBottomWidth:1,
		width:'85%',
		marginBottom:32,
		paddingBottom:1,
	},
	textbutton:{
		color:'white',
		fontSize:20,
	},
	linearGradient: {
    	alignItems: 'center',
    	justifyContent: 'center',
   		borderRadius: 10,
    // height: 200,
    // width: 350,
  	},
  	buttonlogin:{
	// backgroundColor:'green',
	// 		justifyContent: 'center',
	// alignItems:'center',
		padding:10,
		paddingHorizontal:'35%'
},

	
})
