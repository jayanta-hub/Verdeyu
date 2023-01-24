import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import TimeLine from '../../presentation/components/TimeLine/TimeLine';
const HomeStack = createStackNavigator();
const HeaderLeft = props => {
  return (
    <View style={{marginLeft: 20}}>
      <Ionicons color="#4D4F5C" name="menu" size={30} />
    </View>
  );
};
const HomeNavigator = props => {
  const navigation = useNavigation();
  return (
    <>
      <HomeStack.Navigator initialRouteName="Dashboard">
        <HomeStack.Screen
          name="Dashboard"
          component={TimeLine}
          options={{
            headerStyle: {
              borderBottomWidth: 1,
              borderColor: '#00000029',
            },
            headerLeft: props => (
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <HeaderLeft {...props} />
              </TouchableOpacity>
            ),
          }}
        />
      </HomeStack.Navigator>
    </>
  );
};

export default HomeNavigator;
