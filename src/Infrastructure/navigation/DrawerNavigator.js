import React from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import BottomNavigator from './BottomNavigator';
import {scale} from '../utils/screenUtility';
import {useNavigation} from '@react-navigation/native';
import Sidebar_Term_Icon from '../../Infrastructure/assets/images/Sidebar_Term_Icon.png';
import Support_icon from '../../Infrastructure/assets/images/Support_icon.png';
import {AuthContext} from '../utils/context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Back from '../component/back/Back';
import ComingSoon from '../component/ComingSoon/ComingSoon';
import Profile from '../../presentation/components/Profile/Profile';
const CustomDrawer = props => {
  const navigation = useNavigation();

  const {signOut} = React.useContext(AuthContext);
  const showAlert = () => {
    Alert.alert(
      '',
      'Would you like to Logout',
      [
        {
          text: 'No',
          onPress: () => console.log('close'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            signOut();
            navigation.goBack();
          },
        },
      ],
      {cancelable: false},
    );
  };
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView style={{height: '100%', position: 'relative'}}>
        <DrawerItemList {...props} />
        <View
          style={{
            marginHorizontal: scale(12),
            borderWidth: 0.8,
            borderStyle: 'dashed',
            borderColor: '#C3C3C3',
            marginBottom: scale(20),
            marginTop: scale(20),
          }}
        />
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: 'center',
            marginLeft: scale(9),
            flexDirection: 'row',
            paddingVertical: scale(10),
          }}
          onPress={() => {
            // navigation.navigate('Change Password');
          }}>
          <SimpleLineIcons name="lock" size={scale(22)} color="#00A8DB" />

          <Text
            style={{
              fontFamily: 'SourceSansPro-Regular',
              fontSize: scale(14),
              color: '#4D4F5C',
              marginLeft: scale(5),
            }}>
            Change Password
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: 'center',
            marginLeft: scale(9),
            flexDirection: 'row',
            paddingVertical: scale(10),
          }}
          onPress={showAlert}>
          <MaterialIcons name="power-settings-new" size={22} color="#00A8DB" />
          <Text
            style={{
              fontFamily: 'SourceSansPro-Regular',
              fontSize: scale(14),
              color: '#4D4F5C',
              marginLeft: scale(5),
            }}>
            Logout
          </Text>
        </TouchableOpacity>
      </DrawerContentScrollView>
    </View>
  );
};

const DrawerNavigator = props => {
  const DrawerStack = createDrawerNavigator();
  const navigation = useNavigation();
  const SupportTitle = () => {
    return (
      <>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            marginRight: scale(-40),
            marginLeft: scale(-12),
            flexDirection: 'row',
            paddingVertical: scale(10),
          }}>
          <Image
            source={Support_icon}
            style={{
              width: scale(19.3),
              height: scale(19),
              marginHorizontal: scale(5),
            }}
          />
          <Text
            style={{
              fontFamily: 'SourceSansPro-Regular',
              fontSize: scale(14),
              color: '#4D4F5C',
            }}>
            Help & Support
          </Text>
        </View>
      </>
    );
  };
  const TermsTitle = () => {
    return (
      <>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            marginRight: scale(-40),
            marginLeft: scale(-12),
            flexDirection: 'row',
            paddingVertical: scale(10),
          }}>
          <Image
            source={Sidebar_Term_Icon}
            style={{
              width: scale(16),
              height: scale(20),
              marginHorizontal: scale(5),
            }}
          />

          <Text
            style={{
              fontFamily: 'SourceSansPro-Regular',
              fontSize: scale(14),
              color: '#4D4F5C',
            }}>
            Terms & Conditions
          </Text>
        </View>
      </>
    );
  };
  return (
    <>
      <DrawerStack.Navigator
        initialRouteName="Profile"
        options={{headerShown: false}}
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={navigation => ({
          drawerItemStyle: {
            marginBottom: scale(-20),
          },
        })}>
        <DrawerStack.Screen
          options={{
            headerShown: false,
            title: props => <Profile {...props} />,
            drawerItemStyle: {marginTop: 0},
          }}
          name="Profile"
          component={BottomNavigator}
        />
        <DrawerStack.Screen
          name="Help & Support"
          component={ComingSoon}
          options={{
            title: props => <SupportTitle {...props} />,
            headerStyle: {
              borderBottomWidth: 1,
              borderColor: '#00000029',
            },
            headerLeft: props => <Back />,
            headerTitle: props => (
              <Text
                style={{
                  color: '#4D4F5C',
                  fontSize: scale(16),
                  fontFamily: 'SourceSansPro-Semibold',
                }}>
                Support
              </Text>
            ),
          }}
        />
        <DrawerStack.Screen
          name="Terms & Conditions"
          component={ComingSoon}
          options={{
            title: props => <TermsTitle {...props} />,
            headerStyle: {borderBottomWidth: 1, borderColor: '#00000029'},
            headerLeft: props => <Back />,
            headerTitle: props => (
              <Text
                style={{
                  color: '#4D4F5C',
                  fontSize: scale(16),
                  fontFamily: 'SourceSansPro-Semibold',
                }}>
                Terms & Conditions
              </Text>
            ),
          }}
        />
        {/* <DrawerStack.Screen
          name="Change Password"
          component={ComingSoon}
          options={{
            title: props => <ChangePassword {...props} />,
            headerStyle: {borderBottomWidth: 1, borderColor: '#00000029'},
            headerLeft: props => <Back />,
            headerTitle: props => (
              <Text
                style={{
                  color: '#4D4F5C',
                  fontSize: scale(16),
                  fontFamily: 'SourceSansPro-Semibold',
                }}>
                Change Password
              </Text>
            ),
            drawerItemStyle: {height: 0},
          }}
        /> */}
      </DrawerStack.Navigator>
    </>
  );
};

export default DrawerNavigator;
