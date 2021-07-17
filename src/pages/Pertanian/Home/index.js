import React, { Component } from 'react'
import { Text, StyleSheet, View,Image,Dimensions,TextInput, ScrollView, TouchableOpacity} from 'react-native'
import {LogoPertanian,Search,HomePertanian1 } from '../../../assets'
import * as OpenAnything from 'react-native-openanything';

export default class HomePertanian extends Component {
	render() {
		return (
			<View style={styles.page}>
				<View style={styles.top}>
					<View style={styles.header}>
					<Image source={LogoPertanian} style={styles.icon}/>
					<Text style={styles.text}> Bidang Pertanian</Text>
					</View>
				</View>
				<View style={styles.middle}>
				<View style={styles.kotaksearch}>
				<Image source={Search} style={styles.iconsearch}/>
				<TextInput
				placeholder="Cari Data"
				style={styles.input}
				/>
				</View>
				<ScrollView >
						<View style={styles.view}>
						<TouchableOpacity style={styles.kotak} onPress={()=>this.props.navigation.navigate('DataSawah')}>
							<Image source={HomePertanian1}/>
							<Text style={styles.textkotak}>Luas Penggunaan Lahan Sawah Kota Bandar Lampung Berdasarkan Domisili Kelompok Tani Tahun 2018</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.kotak}title="Pdf file" onPress={() => OpenAnything.Pdf('https://journal.ipb.ac.id/index.php/JIPI/article/view/30240/21536')}>
							<Image source={HomePertanian1}/>
							<Text style={styles.textkotak}>Luas Penggunaan Lahan Kering Berdasarkan Kecamatan</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.kotak}title="Pdf file" onPress={() => OpenAnything.Pdf('https://journal.ipb.ac.id/index.php/JIPI/article/view/30240/21536')}>
							<Image source={HomePertanian1}/>
							<Text style={styles.textkotak}>Luas Tanam, Luas Panen Dan Produksi Tanaman Pangan Berdasarkan Kecamatan Tahun 2018</Text>
						</TouchableOpacity>

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
	page : {
		flex:1,
		// backgroundColor:'#FEFEFE',
	},
	top: {
		flex:0.2,
		backgroundColor:'#FEFEFE',
		borderBottomColor:'white',
		marginBottom:2,
		
	},
	header : {
		
		flexDirection:'row',
		marginTop:height*0.03,
		// marginLeft:width*0.1,
		alignItems:'center',
		justifyContent: 'center',

	},
	icon:{
		// height:height*0.0
		
	},
	text:{
		fontSize:34,
		color:'#FFC107',
		fontWeight:'bold',
	},
	middle : {
		flex:1,
		backgroundColor:'#FCF9F9'
	},
	kotaksearch:{
		flexDirection: 'row',
		// padding:10,
		marginHorizontal:width*0.07,
		borderRadius:25,
		// paddingHorizontal:width*0.2,
		// backgroundColor:'blue',
		borderWidth: 1,
		marginTop:height*0.02,
		marginBottom:height*0.02
	},
	iconsearch:{
		marginTop:height*0.02,
		marginLeft:width*0.05,
		marginRight:width*0.05
	},
	view:{
		alignItems:'center',
		justifyContent: 'center',
		marginVertical:height*0.03
	},
	kotak:{
		backgroundColor:'white',
		borderRadius:10,
		paddingBottom:15,
		marginBottom:height*0.03
	},
	textkotak:{
		fontSize:14,
		fontWeight:'bold',
		width:width*0.8,
		marginLeft:width*0.02,
		// marginRight:width*0.01
	}
})
