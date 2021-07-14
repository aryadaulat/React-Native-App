import React,{useState,useEffect,Component} from 'react'
import { Dimensions, StyleSheet, Text, View, ScrollView, TouchableOpacity,FlatList, Alert} from 'react-native'
import firestore from '@react-native-firebase/firestore';
import Modal from 'react-native-modal';
import {InputData} from '../../../components'

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

var date = new Date().getDate();
var month = new Date().getMonth();
var year = new Date().getFullYear()

const Calender = () => {
	const [currentDate,setCurrentDate] = useState('')
	useEffect(() =>{
		var day = new Date().getDay()
        if(day==1){
			day="Senin"
		}else if(day==2){
            day="Selasa"
        }else if(day==3){
            day="Rabu"
        }else if(day==4){
            day="Kamis"
        }else if(day==5){
            day="Jumat"
        }else if(day==6){
            day="Sabtu"
        }else{
            day="Minggu"
        }
		var date = new Date().getDate()
		var month = new Date().getMonth()
        if(month==1){
			month="Januari"
		}else if(month==2){
            month="Febuari"
        }else if(month==3){
            month="Maret"
        }else if(month==4){
            month="April"
        }else if(month==5){
            month="Mei"
        }else if(month==6){
            month="Juni"
        }else if(month==7){
            month="Juli"
        }else if(month==8){
            month="Agustus"
        }else if(month==9){
            month="September"
        }else if(month==10){
            month="Oktober"
        }else if(month==11){
            month="November"
        }else if(month==12){
            month="Desember"
        }
		var year = new Date().getFullYear()
		setCurrentDate(
	

			day + ", " + date + " " + month +" " +year +" "
		)

	},[])
	return(
		currentDate
	)
}
class AgendaPerencanaan extends Component {
	constructor(props){
		super(props);
		this.state = {
			data:[],
			dataTampil:[],
			Judul:'',
			Tanggal:'',
			Lokasi:'',
			Deskripsi:'',
			isVisible:false,
			currentDate:date+''+month+''+year,
		};
	}
	AddData = () =>{
		firestore()
			.collection('Agenda')			
			.add({
				// Judul:"Rapat Mingguan",
				// Tanggal:'08072021',
				// Lokasi:"Bandar Lampung",
				// Deskripsi:"Rapat Rutin",
				Judul:this.state.Judul,
				Tanggal :this.state.Tanggal,
				Lokasi:this.state.Lokasi,
				Deskripsi:this.state.Deskripsi,
			})
			.then(() => {
				Alert.alert('Sukses','Agenda Sudah Terinput');
				this.setState({isVisible:false});
				console.log('Agenda added!');
			});
	}
	updateData= async (id)=>{
		const user = await firestore().collection('Agenda').doc(id).update({
				Judul:this.state.Judul,
				Tanggal :this.state.Tanggal,
				Lokasi:this.state.Lokasi,
				Deskripsi:this.state.Deskripsi,
		}).then(()=> 
		console.log('Update Sukses')
		)
	}
	deleteData= async (id)=>{
		const user = await firestore().collection('Agenda').doc(id).delete({
				Judul:this.state.Judul,
				Tanggal :this.state.Tanggal,
				Lokasi:this.state.Lokasi,
				Deskripsi:this.state.Deskripsi,
		}).then(()=> 
		console.log('Delete Sukses')
		)
	}
	search=()=>{
		let data=this.state.data;
		let search=this.state.search
		data=data.filter((item)=>item.Judul.toLowerCase().includes(search.toLowerCase())
		 || item.Lokasi.toLowerCase().includes(search.toLowerCase()));
		this.setState({data:data})
	
	}
	componentDidMount() {
		// this.getData();
		this.getDataCollection();
	}
	
	getData = async ()=>{ 
		const agenda = await firestore().collection('Agenda').get();

		console.log(agenda.data());
	}
	getDataCollection= async () => {
		const agendas = await firestore().collection('Agenda').get();
		const alldata = agendas.docs.map((doc)=> Object.assign({id:doc.id},doc.data()),
		)
		this.setState({data:alldata,dataTampil:alldata})

		console.log(alldata);
	}
	onChangeText=(namaState	, value) =>{
		this.setState({
			[namaState] : value
		})
	}

	InputAgenda =( ) => {
		return(
			<Modal isVisible={this.state.isVisible}
						style={{justifyContent:'center',alignItems:'center'}}
						onBackdropPress={()=> this.setState({isVisible:false})}>
        <View style={{flex: 0.7,backgroundColor:'white'}}>
          <Text>Input Agenda</Text>
					
					<InputData label="Judul" placeholder="Masukkan Judul"
					onChangeText={this.onChangeText} value={this.state.Judul} namaState="Judul"
					/>
					
					<InputData label="Tanggal" placeholder="Masukkan Tanggal"
					onChangeText={this.onChangeText} value={this.state.Tanggal} namaState="Tanggal"
					/>
					
					<InputData label="Lokasi" placeholder="Masukkan Lokasi"
					onChangeText={this.onChangeText} value={this.state.Lokasi} namaState="Lokasi"
					/>
					
					<InputData label="Deskripsi" placeholder="Masukkan Deskripsi"
					onChangeText={this.onChangeText} value={this.state.Deskripsi} namaState="Deskripsi"
					/>
					<TouchableOpacity onPress={()=> this.AddData()} >
						<Text>Submit Agenda</Text>
					</TouchableOpacity>
				
        </View>
      </Modal>
		)
	}

	ViewToday=()=>{
		useEffect(() =>{
			var date = new Date().getDate()
			var month = new Date().getMonth()
		
			var year = new Date().getFullYear()
			
		},[])
		return (
			this.setState({
				[currentDate] : date+month+year
			})

	
		)
	}
	render() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Hari Ini
                </Text>
								{this.InputAgenda()}
								<TouchableOpacity onPress={()=>this.setState({isVisible:true})} >
									<Text>Input Agenda</Text>
								</TouchableOpacity>
				<Text style={styles.tgl}>
					<Calender/>
				</Text>
                <ScrollView horizontal={true} >
                <View style={styles.ScrollView1}>
{/*                     
								{this.ViewToday()} */}
								<FlatList data={this.state.dataTampil} 
								 renderItem={({item,index}) =>{

									console.log('date item = ',  item.Tanggal);
						console.log('date state = ',  this.state.currentDate);
									if(item.Tanggal==this.state.currentDate){
										<TouchableOpacity style={styles.tombo2}>
			<View style={{flexDirection:'row'}}>
								<View style={styles.kotak} />
								<View style={styles.kegiatan}>
									<Text>
									{item.Judul}
								</Text>
								<Text>
									{item.id}
								</Text>
								<Text>
									{item.Deskripsi}
								</Text>
								</View>
								</View>
		</TouchableOpacity>
									}else
								{
									<View>
										<Text>Anjing</Text>
									</View>
								}
								
								 }
								 
								 
								}keyExtractor={item => item.id}/>
                    
                </View>
                </ScrollView>
            </View>
            <View style={styles.footer}>
            <Text style={styles.judul}>
                Agenda Yang Akan Datang
            </Text>
						
            <ScrollView >						
										<FlatList
								data={this.state.dataTampil}
							renderItem={({item,index}) =>  <TouchableOpacity style={styles.tombo2}>
								<View style={{flexDirection:'row'}}>
								<View style={styles.kotak} />
								<View style={styles.kegiatan}>
									<Text>
									{item.Judul}
								</Text>
								<Text>
									{item.id}
								</Text>
								{/* <Text>
									{item.Lokasi}
								</Text> */}
								{/* <Text>
									{item.Tanggal}
								</Text> */}
								<Text>
									{item.Deskripsi}
								</Text>
								</View>
								</View>
							</TouchableOpacity>}
								keyExtractor={item => item.id}
							/>
             
            </ScrollView>
            </View>
        </View>
    )
}
}

export default AgendaPerencanaan

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFF1C6'
    },
    header:{
        flex: 1.5,
        backgroundColor: '#FFF1C6'
    },
    footer:{
        flex: 1.7,
        backgroundColor: '#fff',
        borderTopStartRadius:32,
        borderTopEndRadius:32
    },
    title:{
        fontSize:36,
        fontWeight: 'bold',
        paddingLeft: width*0.07,
        paddingTop: height* 0.025
    },
    judul:{
        fontSize:24,
        fontWeight: 'bold',
        paddingLeft: width*0.07,
        paddingTop: height* 0.025
    },
    tgl:{
        fontSize:20,
        paddingLeft: width*0.07,
    },
    tombol:{        
        backgroundColor:'white',

            width:width*0.3,
            borderColor:'black',
            borderRadius:16,
            height:height*0.23,
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
            marginVertical: 20,
            elevation: 3,
    },
	ScrollView1:{
		flexDirection:'row',
		marginHorizontal:20       
	},
    tombo2:{        
        backgroundColor:'#D4D4D4',

            width:width*0.85,
            borderColor:'grey',
            borderRadius:16,
            height:height*0.1,
            justifyContent: 'center',
            shadowColor: "#000",
            shadowOffset: {
        	width: 0,
        	height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            marginVertical: 15,
            elevation: 3,
    },
    ScrollView2:{
		marginHorizontal:30,
        marginTop: 20      
	},
    kotak:{
        borderColor: 'grey',
        width : width*0.18,
        height : height*0.08,
        marginLeft:20,
        shadowColor: "#000",
            shadowOffset: {
        	width: 0,
        	height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            marginVertical: 15,
            elevation: 3,
    },
    kegiatan:{
        flexDirection:'column',
        marginLeft:15,
        marginVertical:15
    }
    
})
