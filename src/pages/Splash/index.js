import React, {useEffect} from 'react';
import { StyleSheet, ImageBackground, Image, View} from 'react-native';
import {Background, Logo} from '../../assets';

const Splash = ({navigation}) => {
 useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  }, [navigation]);

  return (
	
    <View style={styles.background}>
		<Image source={Logo} style={styles.logo} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
	color: '#ffffff',
  },
  logo: {
    width: 370,
    height: 54,
  },
});