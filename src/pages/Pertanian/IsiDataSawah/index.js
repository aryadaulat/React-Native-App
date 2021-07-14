import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView, TextInput } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import { kembali } from '../../../assets'


export class IsiSawah extends Component {
    state = {
		satuIrigasi:'',
		duaIrigasi:'',
        tigaIrigasi:'',
        satuTadah:'',
        duaTadah:'',
        tigaTadah:'',
        selectedValue:'',
				setSelectedLanguage:'',
        
	}
    
    Picker=(value)=>{
			this.setState({setSelectedLanguage:value});
        
    }
    render() {
        return (
            <View style={styles.page}>
                {/*<View style={styles.Header}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('DataSawah')}>
                    <Image source={kembali} style={styles.kembaliicon}/>
                    </TouchableOpacity>
                    <Text style={styles.judul}>
                    Form Input Data
                    </Text>
                </View>*/}
                <ScrollView style={styles.Footer}>
                <View style={styles.kotak}>
                <Picker
                    selectedValue={this.state.setSelectedLanguage}
                    style={{ height: 50, width: 350 }}
                    onValueChange={this.Picker.bind()}>
                    <Picker.Item label="Pilih Kecamatan" value="Pilih Kecamatan" />
                    <Picker.Item label="Teluk Betung Barat" value="Teluk Betung Barat" />
                    <Picker.Item label="Teluk Betung Timur" value="Teluk Betung Timur" />
                    <Picker.Item label="Teluk Betung Selatan" value="Teluk Betung Selatan" />
                    <Picker.Item label="Teluk Betung Utara" value="Teluk Betung Utara" />
                    <Picker.Item label="Tanjung Karang Pusat" value="Tanjung Karang Pusat" />
                    <Picker.Item label="Tanjung Karang Timur" value="Tanjung Karang Timur" />
                    <Picker.Item label="Tanjung Karang Barat" value="Tanjung Karang Barat" />
                    <Picker.Item label="Bumi Waras" value="Bumi Waras" />
                    <Picker.Item label="Tanjung Senang" value="Tanjung Senang" />
                    <Picker.Item label="Labuhan Ratu" value="Labuhan Ratu" />
                    <Picker.Item label="Rajabasa" value="Rajabasa" />
                    <Picker.Item label="Kedaton" value="Kedaton" />
                    <Picker.Item label="Kemiling" value="Kemiling" />
                    <Picker.Item label="Enggal" value="Enggal" />
                    <Picker.Item label="Langkapura" value="Langkapura" />
                    <Picker.Item label="Kedamaian" value="Kedamaian" />
                    <Picker.Item label="Sukarame" value="Sukarame" />
                    <Picker.Item label="Sukabumi" value="Sukabumi" />
                    <Picker.Item label="Way Halim" value="Way Halim" />
                    <Picker.Item label="Panjang" value="Panjang" />
                </Picker>
                </View>
                    <Text style={styles.title}>
                        IRIGASI
                    </Text>
                    <Text style={styles.title2}>
                        Satu Kali Tanam Padi
                    </Text>
                    <View style={styles.kotak}>
                    <TextInput 
						color = "black"
						onChangeText={(text)=>this.setState({satuIrigasi:text})}
						value={this.state.satuIrigasi}
					/>
                    </View>
                    <Text style={styles.title2}>
                        Dua Kali Tanam Padi
                    </Text>
                    <View style={styles.kotak}>
                    <TextInput 
						color = "black"
						onChangeText={(text)=>this.setState({duaIrigasi:text})}
						value={this.state.duaIrigasi}
					/>
                    </View>
                    <Text style={styles.title2}>
                        Tiga Kali Tanam Padi
                    </Text>
                    <View style={styles.kotak}>
                    <TextInput 
						color = "black"
						onChangeText={(text)=>this.setState({tigaIrigasi:text})}
						value={this.state.tigaIrigasi}
					/>
                    </View>

                    <Text style={styles.title}>
                        TADAH HUJAN
                    </Text>
                    <Text style={styles.title2}>
                        Satu Kali Tanam Padi
                    </Text>
                    <View style={styles.kotak}>
                    <TextInput 
						color = "black"
						onChangeText={(text)=>this.setState({satuTadah:text})}
						value={this.state.satuTadah}
					/>
                    </View>
                    <Text style={styles.title2}>
                        Dua Kali Tanam Padi
                    </Text>
                    <View style={styles.kotak}>
                    <TextInput 
						color = "black"
						onChangeText={(text)=>this.setState({duaTadah:text})}
						value={this.state.duaTadah}
					/>
                    </View>
                    <Text style={styles.title2}>
                        Tiga Kali Tanam Padi
                    </Text>
                    <View style={styles.kotak}>
                    <TextInput 
						color = "black"
						onChangeText={(text)=>this.setState({tigaTadah:text})}
						value={this.state.tigaTadah}
					/>
                    </View>
                    <View style={{alignItems:'flex-end'}}>
                        <TouchableOpacity style={styles.inputan} onPress={this.Simpan}>
                            <Text>
                                Simpan
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const {height} = Dimensions.get("screen");
const {width} = Dimensions.get("screen");
const styles = StyleSheet.create({
    page :{
        flex:1
    },
    Header :{
        flexDirection : 'row',
        flex :  0.16,
        backgroundColor: '#4CAF50',
        
        alignItems: 'center'
    },
    Footer :{
        flex : 0.84,
        marginHorizontal: 30,
        marginTop: 31    
    },
    judul : {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    kembaliicon : {
		marginRight:width*0.05,
        marginLeft: 10
    },
    title : {
        fontSize:19,
        marginTop: 21,
        marginBottom: 29,
        fontWeight: 'bold'  
    },
    title2: {
        color:'#767676',
    },
    kotak:{
        justifyContent:'center',
        borderWidth:0.1,
        height:37,
        borderRadius:4,
        shadowColor: "lightgrey",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
        marginBottom:28
    },
    inputan : {
        marginTop: 20,
        borderWidth:0.5,
        borderRadius: 4,
        backgroundColor: '#4CAF50',
        width:90,
        height: 30,
        justifyContent:'center',
        alignItems:'center',
    }
})

export default IsiSawah



