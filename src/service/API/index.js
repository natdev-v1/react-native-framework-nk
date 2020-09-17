import {createApi} from '../../util/HttpUtil';
import AsyncStorage from '@react-native-community/async-storage';
import ApiLogin from './ApiRegister/ApiLogin';

const APIService = async () => {
  // get Tokey from local store
  const token = await AsyncStorage.getItem('token');
  // for create http when Project have other service
  let http = createApi('', {Authorization: token ? token : ''});
  // Mapping All Api to Object
  return {
    ...ApiLogin(http),
  };
};

export default APIService;
