import React, { Component } from 'react'
import { Text, StyleSheet, View,Dimensions, TextInput,Image, ScrollView } from 'react-native'
import {Search} from '../../../assets'


export default class StoragePerencanaan extends Component {
	render() {
		return (
			<View style={styles.page}>
				<View style={styles.header}>
				<Text style={styles.textjudul}>
					Penyimpanan
				</Text>
				<View style={styles.kotaksearch}>
				<Image source={Search} style={styles.icon}/>
				<TextInput
				placeholder="Cari File"
				style={styles.input}
				/>
				</View>
				</View>
				<View style={styles.middle}>
				<Text style={styles.katagori}>
					Katagori
				</Text>
				<ScrollView>
				<View style={styles.storage}>
					<View style={styles.kotakstorage}>

					</View>
					<View style={styles.kotakstorage}>

					</View>
					<View style={styles.kotakstorage}>

					</View>
					<View style={styles.kotakstorage}>

					</View>
					<View style={styles.kotakstorage}>

					</View>
					<View style={styles.kotakstorage}>

					</View>
					<View style={styles.kotakstorage}>

					</View>
					<View style={styles.kotakstorage}>

					</View>
				</View>
				</ScrollView>
				</View>

			</View>
		)
	}
}

const {height} = Dimensions.get("screen");
const {width} = Dimensions.get("screen");

const styles = StyleSheet.create({
	page: {
		flex:1
	},
	header: {
		flex:1,
		backgroundColor:"white"
	},
	textjudul:{
		fontSize:36,
		marginLeft:width*0.05,
		marginTop:height*0.05,
		fontWeight:'bold'
	},
	kotaksearch:{
		flexDirection: 'row',
		// padding:10,
		marginHorizontal:width*0.05,
		borderRadius:25,
		// paddingHorizontal:width*0.2,
		// backgroundColor:'blue',
		borderWidth: 1,
		marginTop:height*0.08
	},
	icon:{
		marginTop:height*0.02,
		marginLeft:width*0.05
	},
	input:{
		// backgroundColor: value,
		// borderBottomColor: '#000000',
		// borderBottomWidth: 1,
		marginLeft:width*0.05
	},
	middle: {
		flex:2,
		backgroundColor:"white"
	},
	katagori:{
		fontSize:16,
		fontWeight:'bold',
		marginLeft:width*0.05
	},
	storage:{
		marginHorizontal:width*0.05,
		// marginTop:height*0.05,
		flexDirection:'row',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
		marginBottom:height*0.2
	},
	kotakstorage:{
		// padding:15,
		height:height*0.12,
		width:width*0.35,
		marginHorizontal:width*0.05,
		backgroundColor:'skyblue',
		marginTop:height*0.05
	}

})
