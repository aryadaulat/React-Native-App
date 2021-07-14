import React from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native'

const InputData = ({label,placeholder,keyboardType,isTextArea,onChangeText,namaState,value}) => {

	if(isTextArea){
		return (
			<>
			<Text style={styles.label}>{label}</Text>
					<TextInput placeholder={placeholder}
					 style={styles.textinputarea}
					 keyboardType={keyboardType}
					 multiline={true}
					 numberOfLines={4}
					 value={value}
					 onChangeText={(text) => onChangeText (namaState,text)}
					 />
			</>
		)
			
	}
	return (
		<>
		<Text style={styles.label}>{label}</Text>
				<TextInput placeholder={placeholder}
				 style={styles.textinput}
				 keyboardType={keyboardType}
				 value={value}
				 onChangeText={(text) => onChangeText (namaState,text)}
				/>
		</>
	)
	
}


export default InputData

const styles = StyleSheet.create({
	label: {
		fontSize: 16,
		marginBottom:5
	},
	textinput:{
		borderWidth:1,
		borderColor: 'blue',
		borderRadius: 5,
		padding:10,
		marginBottom:10,
	},
	textinputarea:{
		textAlignVertical:'top',
		borderWidth:1,
		borderColor: 'blue',
		borderRadius: 5,
		padding:10,
		marginBottom:10,		
	}
})
