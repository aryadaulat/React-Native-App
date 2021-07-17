import  { Component } from 'react'
import { Text, StyleSheet, View,Dimensions, TextInput,Image, ScrollView,Alert } from 'react-native'
import {Search} from '../../../assets'
import {Picker} from '../../../components'
import {Button} from 'react-native-paper'
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import DocumentPicker from 'react-native-document-picker';
import * as React from 'react'

export default class StoragePerencanaan extends Component {
	constructor(props){
		super(props);
		this.state = {
			Img:null,
			percentage:0,
			nama:'',
			imageurl:'',
			folder:'',
			docurl:'',
			path:''
			
		}
	}

	uploadImg=()=>{

		ImagePicker.openPicker({
			// width: 300,
			// height: 400,
			cropping: false
		}).then( async image => {
			console.log(image);
			

			
			let imgName =image.path.substring(image.path.lastIndexOf('/')+1);
			let ext =imgName.split('.').pop();
			let name=imgName.split('.')[0];
			let newname =name+Date.now()+"."+ext;
			// console.log(imgName);
			const reference = storage().ref('Images/'+newname);
			this.setState({
				Img:image.path,
				nama:newname,
				folder:'Images'
			})
			

			try{
				const task =  reference.putFile(image.path);

				task.on('state_changed', taskSnapshot => {
					console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
					
					this.setState({
						percentage:Math.round((taskSnapshot.bytesTransferred/taskSnapshot.totalBytes)*100)
					})
				
				});
				
				task.then( async () => {
					const url = await storage().ref("Images/"+newname).getDownloadURL();
					this.setState({
						imageurl:url,
					});
					console.log(url);
					this.AddData();
					alert('Image uploaded to the bucket!');
				});
				
			}catch(error){
				console.log(error)
			}
		});
	}
	  chooseFile=async()=>{
		try {
			const res = await DocumentPicker.pickMultiple({
				type: [DocumentPicker.types.allFiles],
			});
			console.log(res.uri)
			 
			console.log(this.state.path);
			this.setState({			
				nama:File.name,			
				folder:'Document',
				path : await normalizePath(res.uri),
			});
			
			// for (const res of document) {
				
			// 	console.log(
			// 		res.uri,
			// 		res.type, // mime type
			// 		res.name,
			// 		res.size
			// 	);
				
			// }
		
			
		} catch (err) {
			if (DocumentPicker.isCancel(err)) {
				// User cancelled the picker, exit any dialogs or menus and move on
			} else {
				throw err;
			}
		}
	}
	normalizePath=async()=>{
		if(Platform.OS==='ios' || Platform.OS==='android'){
			const filePrefix = 'file://';
			if (this.state.path.startsWith(filePrefix)){
				

				this.setState({
					path:this.state.path.substring(filePrefix.length),
				})
				try {
					
					this.setState({
						path:decodeURI(this.state.path)
					})
				}catch(e){}
			}
		}
		return this.state.path;
	}
	UploadDoc=()=>{
		this.chooseFile();
		this.normalizePath();

	

	}

	AddData = () =>{
		firestore()
			.collection(this.state.folder)			
			.add({
				// Judul:"Rapat Mingguan",
				// Tanggal:'08072021',
				// Lokasi:"Bandar Lampung",
				// Deskripsi:"Rapat Rutin",
				nama:this.state.nama,
				imageurl:this.state.imageurl,
			})
			.then(() => {
				Alert.alert('Sukses','Agenda Sudah Terinput');
				console.log('Agenda added!');
			});
	}

	AddDataDoc = () =>{
		firestore()
			.collection(this.state.folder)			
			.add({
				// Judul:"Rapat Mingguan",
				// Tanggal:'08072021',
				// Lokasi:"Bandar Lampung",
				// Deskripsi:"Rapat Rutin",
				nama:this.state.nama,
				docurl:this.state.url,
			})
			.then(() => {
				Alert.alert('Sukses','Agenda Sudah Terinput');
				console.log('Agenda added!');
			});
	}

	render() {
		return (
			// <View style={styles.page}>
			// 	<View style={styles.header}>
			// 	<Text style={styles.textjudul}>
			// 		Penyimpanan
			// 	</Text>
			// 	<View style={styles.kotaksearch}>
			// 	<Image source={Search} style={styles.icon}/>
			// 	<TextInput
			// 	placeholder="Cari File"
			// 	style={styles.input}
			// 	/>
			// 	</View>
			// 	</View>
			// 	<View style={styles.middle}>
			// 	<Text style={styles.katagori}>
			// 		Katagori
			// 	</Text>
			// 	<ScrollView>
			// 	<View style={styles.storage}>
					
			// 	</View>
			// 	</ScrollView>
			// 	</View>

			// </View>

			<View style={styles.container}>
			<Text style={styles.title}>Upload Image To Firebase Storage</Text>
			<Image
			
			source={{uri:this.state.Img}}
			style={styles.img}
			/>
			{this.state.percentage != 0 ?
			<Text>
				{this.state.percentage} % uploaded !!
			</Text>
				:null }
			<Button
			mode="contained"
			onPress={()=>this.uploadImg()}>
				Upload Pic
			</Button>
			<Button
			mode="contained" onPress={()=>this.UploadDoc()}
			>
				Upload Doc
			</Button>
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
	},
	container: {
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'white'
	},img: {
		resizeMode:'contain',
		width: 300,
			height: 400,
			
	}

})
