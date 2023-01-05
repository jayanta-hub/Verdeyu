import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Verdeyu from '../../assets/images/Verdeyu.png';
import LOGOSVG from '../../assets/images/splashScreenLogo.svg';
import {scale} from '../../utils/screenUtility';
const SplashComponent = props => {
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        {/* <LOGOSVG width="60%" height="50%" style={{flex: 1}} /> */}
        <Image
          style={{
            height: scale(100),
            width: scale(200),
            resizeMode: 'stretch',
          }}
          source={require('../../assets/images/Verdeyu.png')}
        />
      </View>
    </View>
  );
};

export default SplashComponent;
