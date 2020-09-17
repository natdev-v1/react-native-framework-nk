import {createApi} from '../../util/HttpUtil';
import AsyncStorage from '@react-native-community/async-storage';
import ApiLogin from './ApiRegister/ApiLogin';

const APIService = async () => {
  const token = await AsyncStorage.getItem('token');
  let http = createApi('', {Authorization: token ? token : ''});
  return {
    ...ApiLogin(http),
  };
};

export default APIService;
