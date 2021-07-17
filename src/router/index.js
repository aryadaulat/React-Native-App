import React from 'react'
import {StyleSheet ,Text,View,Image,TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Login,Splash,Perencanaan,Pertanian} from '../pages'
import { AgendaPertanian, HomePertanian, StoragePertanian, DataSawah, IsiSawah, Dynamicpdf, EditSawah } from '../pages/Pertanian';
import {HomePertenakan,AgendaPertenakan,StoragePertenakan} from '../pages/Pertenakan';
import {IconHomePerencanaanAktif,IconAgendaPerencaanaan,IconStoragePerencanaan} from '../assets';
import {HomePerkebunan,AgendaPerkebunan,StoragePerkebunan} from '../pages/Perkebunan';
import {HomePerencanaan, AgendaPerencanaan, StoragePerencanaan } from '../pages/Perencanaan';
import {Picker} from '../components'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainPerencanaan = () =>{
	return(
		<Tab.Navigator tabBarOptions={{
			showLabel:false,
			style:{
				position:'absolute',
				bottom:25,
				left:20,
				right:20,
				elevation:0,
				backgroundColor:'#FEFEFE',
				borderRadius:64,
				height:90,
				shadowColor: "#000",
				shadowOffset: {
					width: 0,
					height: 1,
				},
				shadowOpacity: 0.22,
				shadowRadius: 2.22,

				elevation: 3,
}
		}}>
			<Tab.Screen name="HomePerencanaan" component={HomePerencanaan} options={{
				tabBarIcon :({focused}) => (
					<View style={{alignItems: 'center',justifyContent:'center',padding:15,backgroundColor: focused? '#FFC107': '#4CAF50',
					borderRadius:50}}>
						<Image source={IconHomePerencanaanAktif}
						resizeMode="contain"
						style={{
							
							width:25,
							height:25,
							tintColor: focused? '#FFFFFF': 'white' 
						}}/>
						{/* <Text style={{color:focused? 'black': '#748c94',fontSize:12 }}>
						Home
						</Text> */}
					</View>	
				),
				}
			} />

			<Tab.Screen name="StoragePerencanaan" component={StoragePerencanaan} options={{
				tabBarIcon :({focused}) => (
					<View style={{alignItems: 'center',justifyContent:'center',padding:15,backgroundColor: focused? '#FFC107': '#4CAF50',
					borderRadius:50}}>
						<Image source={IconStoragePerencanaan}
						resizeMode="contain"
						style={{
							width:25,
							height:25,
							tintColor: focused? '#FFFFFF': '#FFFFFF' 
						}}/>
						{/* <Text style={{color:focused? '#e32f45': '#748c94',fontSize:12 }}>
						Home
						</Text> */}
					</View>	
				),
				}
			}  />
						<Tab.Screen name="AgendaPerencanaan" component={AgendaPerencanaan}options={{
				tabBarIcon :({focused}) => (
					<View style={{alignItems: 'center',justifyContent:'center',padding:15,backgroundColor: focused? '#FFC107': '#4CAF50',
					borderRadius:50}}>
						<Image source={IconAgendaPerencaanaan}
						resizeMode="contain"
						style={{
							width:25,
							height:25,
							tintColor: focused? '#FFFFFF': '#FFFFFF' 
						}}/>
						{/* <Text style={{color:focused? '#e32f45': '#748c94',fontSize:12 }}>
						Home
						</Text> */}
					</View>	
				),
				}
			}  />
		</Tab.Navigator>
		
	);
};

const Router = () => {
	return (
	<Stack.Navigator  initialRouteName="Splash">
		<Stack.Screen name ="MainPerencanaan" component={MainPerencanaan} options={{headerShown: false}}/>
		<Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
    <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
		{/* <Stack.Screen name="First" component={First} options={{title: 'Tambah Kontak'}}  /> */}
		<Stack.Screen name="HomePerencanaan" component={HomePerencanaan} options={{headerShown: false}}/>
		<Stack.Screen name="StoragePerencanaan" component={StoragePerencanaan} options={{headerShown: false}}/>
		<Stack.Screen name="AgendaPerencanaan" component={AgendaPerencanaan} options={{headerShown: false}}/>
		<Stack.Screen name="HomePertanian" component={HomePertanian} options={{headerShown: false}}/>
		<Stack.Screen name="AgendaPertanian" component={AgendaPertanian} options={{headerShown: false}}/>
		<Stack.Screen name="StoragePertanian" component={StoragePertanian} options={{headerShown: false}}/>
		<Stack.Screen name="HomePertenakan" component={HomePertenakan} options={{headerShown: false}}/>
		<Stack.Screen name="AgendaPertenakan" component={AgendaPertenakan} options={{headerShown: false}}/>
		<Stack.Screen name="StoragePertenakan" component={StoragePertenakan} options={{headerShown: false}}/>
		<Stack.Screen name="HomePerkebunan" component={HomePerkebunan} options={{headerShown: false}}/>
		<Stack.Screen name="AgendaPerkebunan" component={AgendaPerkebunan} options={{headerShown: false}}/>
		<Stack.Screen name="StoragePerkebunan" component={StoragePerkebunan} options={{headerShown: false}}/>
		<Stack.Screen name="DataSawah" component={DataSawah} options={{title: 'Data Dinas Pertanian',headerStyle:{backgroundColor:'#4CAF50'},headerTintColor: 'white',}}/>
		<Stack.Screen name="IsiSawah" component={IsiSawah} options={{title: 'Form Input Data',headerStyle:{backgroundColor:'#4CAF50'},headerTintColor: 'white',}}/>
		<Stack.Screen name="Dynamicpdf" component={Dynamicpdf} options={{headerShown: false}}/>
		<Stack.Screen name="Picker" component={Picker} options={{headerShown: false}}/>
		<Stack.Screen name="EditSawah" component={EditSawah} options={{title: 'Form Edit Data',headerStyle:{backgroundColor:'#4CAF50'},headerTintColor: 'white',}}/>
    </Stack.Navigator>

	)
}

const styles = StyleSheet.create({
	icon:{
		alignItems: 'center',
		justifyContent:'center',
		top:10,
		padding:10
	}
});

export default Router
