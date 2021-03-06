import { AsyncStorage } from "react-native";

class StorageService {
  static save = (key = "", value = {}) => {
    const stringifiedValue = JSON.stringify(value);
    AsyncStorage.setItem(key, stringifiedValue);
  };

  static get = async (key = "") => {
    const data = await AsyncStorage.getItem(key);
    const parsedData = JSON.parse(data);
    return parsedData;
  };

  static clear = async () => {
    AsyncStorage.clear()
  }
}

export default StorageService