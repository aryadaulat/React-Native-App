import React from 'react'
import { StyleSheet, Text,Image, View, Alert } from 'react-native'
import {Button} from 'react-native-paper'
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';

export default function Picker() {
	const [Img,setImg]=React.useState(null)
	const [percentage, setpercentage] = React.useState(0)

	const uploadImg=()=>{

		ImagePicker.openPicker({
			// width: 300,
			// height: 400,
			cropping: false
		}).then( async image => {
			console.log(image);
			setImg(image.path);
			let imgName =image.path.substring(image.path.lastIndexOf('/')+1);
			// console.log(imgName);
			const reference = storage().ref('imgName');

			

			try{
				const task =  reference.putFile(image.path);

				task.on('state_changed', taskSnapshot => {
					console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
					setpercentage(Math.round((taskSnapshot.bytesTransferred/taskSnapshot.totalBytes)*100))
				});
				
				task.then(() => {
					Alert('Image uploaded to the bucket!');
				});
				
			}catch(error){
				console.log(error)
			}
		});
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Upload Image To Firebase Storage</Text>
			<Image
			
			source={{uri:Img}}
			style={styles.img}
			/>
			{percentage != 0 ?
			<Text>
				{percentage} % uploaded !!
			</Text>
				:null }
			<Button
			mode="contained"
			onPress={uploadImg}>
				Upload Pic
			</Button>
		</View>
	)
}

const styles = StyleSheet.create({
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
