import React, {useState} from 'react';
import {SafeAreaView, ScrollView, RefreshControl} from 'react-native';
import {scale} from '../../../Infrastructure/utils/screenUtility';
import {useNavigation} from '@react-navigation/native';
import Loader from '../../../Infrastructure/component/Loader/Loader';
const TimeLineComponent = props => {
  const navigation = useNavigation();
  const [status, setStatus] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
  }, []);
  return (
    <SafeAreaView style={{backgroundColor: '#F3F3F3', flex: 1}}>
      <Loader status={status} />
      <ScrollView
        contentContainerStyle={{flexGrow: 1, marginBottom: scale(20)}}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            title="Refreshing"
            titleColor={'#00A0DA'}
            onRefresh={onRefresh}
            tintColor="#00A0DA"
          />
        }></ScrollView>
    </SafeAreaView>
  );
};

export default TimeLineComponent;
