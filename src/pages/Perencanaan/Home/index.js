import React, { Component } from 'react'
import { Text, StyleSheet, View,TextInput,ScrollView,SafeAreaView,Alert,Image,Dimensions,TouchableOpacity } from 'react-native'
import { Logo, gambar,IconPertanian,IconPertenakan,IconPerkebunan } from '../../../assets';

export default class HomePerencanaan extends Component {


	render() {

		return (
			<View style={styles.page}>
				<View style={styles.header}>
					<Image
						source={Logo}	
					/>
				</View>
			
				<View style={styles.footer}>
                    
					<View style={styles.logo}>
                        <Image
                            source={gambar} style={styles.gambar}
                        />
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity style={styles.tombol} onPress={()=>this.props.navigation.navigate('HomePertanian')}>
															<Image source={IconPertanian}
														
															/>
														</TouchableOpacity>
                            <TouchableOpacity style={styles.tombol} onPress={()=>this.props.navigation.navigate('HomePertenakan')}>
															<Image source={IconPertenakan}
														
															/>
														</TouchableOpacity>
                            <TouchableOpacity style={styles.tombol} onPress={()=>this.props.navigation.navigate('HomePerkebunan')}>
															<Image source={IconPerkebunan}
														
															/>
														</TouchableOpacity>
                            
                        </View>
                    </View>
				</View>
			</View>
		)
	}
}
const {height} = Dimensions.get("screen");
const {width} = Dimensions.get("screen");
const height_logo = height * 0.4;

const styles = StyleSheet.create({
	page: {
		flex: 1,
		
			
	},
	header: {
		
		justifyContent: 'center',
		alignItems:'center',
        padding:15,
        backgroundColor: 'green',
        paddingHorizontal:30,

	},
	footer: {
	
	},
	logo: {	
        justifyContent: 'center',
		alignItems:'center',
        marginTop:44,
        marginBottom:61,
	},
    gambar:{
        width:width*0.85,
        marginBottom:61,
    },
    tombol:{        
        backgroundColor:'white',
        
            width:100,
            borderColor:'grey',
            borderRadius:16,
            height:100,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal:10,
            shadowColor: "#000",
            shadowOffset: {
        	width: 0,
        	height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,

        
    },

	
})
