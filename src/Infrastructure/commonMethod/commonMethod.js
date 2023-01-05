import {useNavigation} from '@react-navigation/native';

export const RemoveDuplicateArray = data => {
  let concatArray = data.map(eachValue => {
    return Object.values(eachValue).join('');
  });
  let filterValuesData = data.filter((value, index) => {
    return concatArray.indexOf(concatArray[index]) === index;
  });
  return filterValuesData;
};
