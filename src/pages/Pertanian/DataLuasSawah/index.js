import React, { Component } from 'react'
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
import { kembali, Lihat } from '../../../assets'
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

export default class DataSawah extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tableHead: ['No', 'Kecamatan', 'Status'],
          tableTitle: ['1', '2', '3', '4', '5', '6', '7', '8', '9','10','11','12','13','14','15','16','17','18','19','20'],
          tableData: [
            ['Teluk Betung Barat', ' '],
            ['Teluk Betung Timur', ' '],
            ['Teluk Betung Selatan', ' '],
            ['Teluk Betuk Utara', ' '],
            ['Bumi Waras', ' '],
            ['Panjang', ' '],
            ['Tanjung Karang Timur', ' '],
            ['Tanjung Karang Barat', ' '],
            ['Tanjung Karang Pusat', ' '],
            ['Kedamaian', ' '],
            ['Enggal', ' '],
            ['Kemiling', ' '],
            ['Langkapura', ' '],
            ['Kedaton', ' '],
            ['Rajabasa', ' '],
            ['Tanjung Senang', ' '],
            ['Labuhan Ratu', ' '],
            ['Sukarame', ' '],
            ['Sukabumi', ' '],
            ['Wayhalim', ' '],

          ]
        }
      }
    render() {
        const state = this.state;
        return (
            <View style={styles.page}>
            {/*<View style={styles.Header}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('HomePertanian')}>
                <Image source={kembali} style={styles.kembaliicon}/>
                </TouchableOpacity>
                <Text style={styles.text}>
                   Data Dinas Pertani..
                </Text>
            </View>*/}
            <ScrollView style={styles.Footer}>
                <View style={styles.atas}>
                    <View style={styles.kotakJudul}>
                        <Text style={styles.tulisan}>
                            Luas Penggunaan Lahan Sawah Kota Bandar Lampung Berdasarkan Domisili Kelompok Tani Tahun 2018
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.kotakTombol}>
                        <Image source={Lihat}/>
                        <Text>
                            Lihat Detail
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bawah}>
                    <View style={{marginRight:10}}>
                    <TouchableOpacity style={styles.kotakTombol} onPress={()=>this.props.navigation.navigate('IsiSawah')}>
                        <Text>
                            Input Data
                        </Text>
                    </TouchableOpacity>      
                    </View>
                    <View style={styles.kotakTombol}>
                        <Text>
                            Edit Data
                        </Text>   
                    </View>
                </View>
                <Table style={{marginHorizontal:25, marginTop:30}} borderStyle={{borderWidth: 1}}>
                    <Row data={state.tableHead} flexArr={[1, 3, 1]} style={styles.head} textStyle={styles.text2}/>
                    <TableWrapper style={styles.wrapper}>
                        <Col data={state.tableTitle} style={styles.title} heightArr={[28,28]} textStyle={styles.text2}/>
                        <Rows data={state.tableData} flexArr={[3, 1]} style={styles.row} textStyle={styles.text3}/>
                    </TableWrapper>
                </Table>
                    <View style={{alignItems:'flex-end',marginHorizontal:25}}>
                    </View>
                    <Text style={styles.tulisan2}>
                        Information: Untuk mengiputkan data masing masing kecamatan dapat mengklik tombol Input Data
                    </Text>
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    Footer :{
        flex : 0.84,
           
    },
    text : {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    kembaliicon : {
		marginRight:width*0.05
    },
    kotakJudul : {
        backgroundColor: 'lightgrey',
        borderColor:'grey',
        borderWidth:1,
        borderRadius:8,
        width: 277,
        height: 72,
        marginRight: 10
    },
    kotakTombol :{
        backgroundColor: 'lightgrey',
        borderColor:'grey',
        borderWidth:1,
        borderRadius:8,
        width: 72,
        height: 72,
        justifyContent:'center',
        alignItems:'center'
    },
    atas : {
        flexDirection: 'row',
        marginTop: 25,
        marginHorizontal : width*0.06
    },
    tulisan :{
        fontSize : 16,
        fontWeight: 'bold',
    },
    bawah :{
        flexDirection: 'row',
        marginHorizontal: width*0.06,
        marginTop:29
    },text2: { 
        textAlign: 'center' 
    }, head: {  
        height: 40,  
        backgroundColor: '#f1f8ff' 
    },
    wrapper: { 
        flexDirection: 'row' 
    },
    title: { 
        flex: 1, 
        backgroundColor: '#f6f8fa'
    },
    row: {  
        height: 28  
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
    }, tulisan2 :{
        marginTop: 45,
        fontSize: 14,
        marginHorizontal: 25
    },text3 :{
        textAlign:'left',
        marginLeft: 3
    }
})




